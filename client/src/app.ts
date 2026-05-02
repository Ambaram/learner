import type { SongCourse, Track } from './types'
import { getSong, songs } from './songs'
import {
  isMetronomeRunning,
  playReferenceBlip,
  startDrone,
  startMetronome,
  stopDrone,
  stopMetronome,
} from './audio'
import { buildSuggestions, STYLE_BLURBS } from './vocalCoach'
import { NOTE_OPTIONS, VocalPitchSession } from './vocalSession'
import type { GoalId, ProblemId, VocalProfile, VocalStyle } from './vocalTypes'
import { GOAL_OPTIONS, PROBLEM_AREAS } from './vocalTypes'

const STORAGE_KEY = 'harmony-mentor-progress-v1'
const STORAGE_VOCAL = 'harmony-mentor-vocal-v1'

type View =
  | { name: 'home' }
  | { name: 'course'; songId: string; stepIndex: number }
  | { name: 'vocal-hub' }
  | { name: 'vocal-diagnostic' }
  | { name: 'vocal-style'; style: VocalStyle }
  | { name: 'vocal-record'; style?: VocalStyle }

interface Persisted {
  track: Track
  completedSteps: Record<string, boolean>
}

function loadPersisted(): Persisted {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { track: 'all', completedSteps: {} }
    const p = JSON.parse(raw) as Persisted
    return {
      track: p.track ?? 'all',
      completedSteps: p.completedSteps ?? {},
    }
  } catch {
    return { track: 'all', completedSteps: {} }
  }
}

function savePersisted(p: Persisted) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
}

function defaultVocalProfile(): VocalProfile {
  return {
    version: 1,
    completedDiagnostic: false,
    problemIds: [],
    goalIds: [],
    updatedAt: new Date().toISOString(),
  }
}

function loadVocalProfile(): VocalProfile {
  try {
    const raw = localStorage.getItem(STORAGE_VOCAL)
    if (!raw) return defaultVocalProfile()
    const p = JSON.parse(raw) as VocalProfile
    if (p.version !== 1) return defaultVocalProfile()
    return {
      ...defaultVocalProfile(),
      ...p,
      problemIds: p.problemIds ?? [],
      goalIds: p.goalIds ?? [],
    }
  } catch {
    return defaultVocalProfile()
  }
}

function saveVocalProfile(p: VocalProfile) {
  p.updatedAt = new Date().toISOString()
  localStorage.setItem(STORAGE_VOCAL, JSON.stringify(p))
}

let view: View = { name: 'home' }
let persisted = loadPersisted()
let vocalProfile = loadVocalProfile()
let metronomeBpm = 80
let beatFlash = 0
let micSession: VocalPitchSession | null = null

const app = document.querySelector<HTMLDivElement>('#app')!

async function disposeMic() {
  if (micSession) {
    await micSession.stop()
    micSession = null
  }
}

function stepKey(songId: string, stepId: string) {
  return `${songId}::${stepId}`
}

function markComplete(songId: string, stepId: string) {
  persisted.completedSteps[stepKey(songId, stepId)] = true
  savePersisted(persisted)
}

function isComplete(songId: string, stepId: string) {
  return !!persisted.completedSteps[stepKey(songId, stepId)]
}

function songProgress(song: SongCourse) {
  const done = song.steps.filter((st) => isComplete(song.id, st.id)).length
  return { done, total: song.steps.length }
}

function trackLabel(t: Track) {
  switch (t) {
    case 'vocals':
      return 'Vocals'
    case 'guitar':
      return 'Guitar'
    case 'piano':
      return 'Piano'
    default:
      return 'Everything'
  }
}

function stepRelevance(stepKind: string, track: Track): boolean {
  if (track === 'all') return true
  if (track === 'vocals') {
    return ['intro', 'context', 'vocal', 'theory', 'rhythm', 'recap'].includes(stepKind)
  }
  if (track === 'guitar' || track === 'piano') {
    return ['intro', 'context', 'instrument', 'theory', 'rhythm', 'recap'].includes(stepKind)
  }
  return true
}

function renderVocalHub() {
  const done = vocalProfile.completedDiagnostic
  return `
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="home">← Home</button>
        <div>
          <p class="eyebrow">Vocal training</p>
          <h1>Vocal lab</h1>
          <p class="meta">Tell us what you are working on, pick a tradition, then use the mic coach for pitch feedback. This is educational software — not a replacement for a qualified teacher.</p>
        </div>
      </header>
      <div class="vocal-nav-grid">
        <article class="vocal-card ${done ? '' : 'accent'}" data-action="vocal-diag">
          <h3>1 · Your profile</h3>
          <p>${done ? 'Update your goals and problem areas.' : 'Answer a few questions so suggestions match you better.'}</p>
          <span class="chev">→</span>
        </article>
        ${(['hindustani', 'rock', 'opera'] as const)
          .map(
            (s) => `
        <article class="vocal-card" data-action="vocal-style" data-style="${s}">
          <h3>${escapeHtml(STYLE_BLURBS[s].title)}</h3>
          <p>${escapeHtml(STYLE_BLURBS[s].summary.slice(0, 120))}…</p>
          <span class="chev">→</span>
        </article>`,
          )
          .join('')}
        <article class="vocal-card accent2" data-action="vocal-record">
          <h3>Mic coach · pitch check</h3>
          <p>Sing toward a target note; we estimate pitch in the browser and suggest drills. Allow microphone access when asked.</p>
          <span class="chev">→</span>
        </article>
      </div>
    </div>`
}

function renderVocalDiagnostic() {
  const probChecks = PROBLEM_AREAS.map(
    (p) => `
    <label class="chk"><input type="checkbox" name="prob" value="${p.id}" ${vocalProfile.problemIds.includes(p.id) ? 'checked' : ''} /> ${escapeHtml(p.label)}</label>`,
  ).join('')
  const goalChecks = GOAL_OPTIONS.map(
    (g) => `
    <label class="chk"><input type="checkbox" name="goal" value="${g.id}" ${vocalProfile.goalIds.includes(g.id) ? 'checked' : ''} /> ${escapeHtml(g.label)}</label>`,
  ).join('')
  const styles = (['', 'hindustani', 'rock', 'opera'] as const)
    .map((s) => {
      if (s === '')
        return `<option value="" ${!vocalProfile.primaryStyle ? 'selected' : ''}>No main focus yet</option>`
      return `<option value="${s}" ${vocalProfile.primaryStyle === s ? 'selected' : ''}>${STYLE_BLURBS[s].title}</option>`
    })
    .join('')
  return `
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Step 1 of 2</p>
          <h1>Where do you want to grow?</h1>
          <p class="meta">Select everything that applies. You can change this any time.</p>
        </div>
      </header>
      <article class="step-panel diag-panel">
        <h2>Problem areas you notice</h2>
        <div class="chk-grid">${probChecks}</div>
        <h2>Improvements you are chasing</h2>
        <div class="chk-grid">${goalChecks}</div>
        <h2>Primary tradition (optional)</h2>
        <label class="select-row">Main focus <select id="diag-style">${styles}</select></label>
        <footer class="step-foot" style="margin-top:1.25rem">
          <button type="button" class="btn ghost" data-action="vocal-hub">Cancel</button>
          <button type="button" class="btn" data-action="diag-submit">Save profile</button>
        </footer>
      </article>
    </div>`
}

function renderVocalStyle(style: VocalStyle) {
  const b = STYLE_BLURBS[style]
  const pillars = b.pillars.map((x) => `<li>${escapeHtml(x)}</li>`).join('')
  const drills = b.drills
    .map(
      (d) => `
      <div class="drill-card">
        <h4>${escapeHtml(d.name)}</h4>
        <p>${escapeHtml(d.detail)}</p>
      </div>`,
    )
    .join('')
  return `
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Tradition toolkit</p>
          <h1>${escapeHtml(b.title)}</h1>
          <p class="meta">${escapeHtml(b.summary)}</p>
        </div>
      </header>
      <div class="course-body" style="grid-template-columns:1fr">
        <article class="step-panel">
          <h2>Practice pillars</h2>
          <ul class="tips">${pillars}</ul>
          <h2>Sample drills</h2>
          <div class="drill-grid">${drills}</div>
          <p class="muted" style="margin-top:1rem">Use the metronome and drones inside song lessons, then open the mic coach to check intonation on a sustained vowel.</p>
          <footer class="step-foot">
            <button type="button" class="btn ghost" data-action="vocal-hub">Back</button>
            <button type="button" class="btn" data-action="vocal-record" data-style="${style}">Open mic coach</button>
          </footer>
        </article>
      </div>
    </div>`
}

function renderVocalRecord(style?: VocalStyle) {
  const opts = NOTE_OPTIONS.map(
    (n) => `<option value="${n.hz}" ${Math.abs(n.hz - 261.63) < 1 ? 'selected' : ''}>${n.label} (${Math.round(n.hz)} Hz)</option>`,
  ).join('')
  const last = vocalProfile.lastSession
  const lastBlock = last
    ? `
    <section class="feedback-block">
      <h3>Last session snapshot</h3>
      <ul class="tips">
        <li>Target ≈ ${Math.round(last.targetHz)} Hz · median heard ≈ ${Math.round(last.medianHz)} Hz</li>
        <li>Average distance from target: <strong>${last.meanAbsCents.toFixed(0)} cents</strong> (about ${(last.meanAbsCents / 100).toFixed(2)} semitones)</li>
        <li>Frame-to-frame pitch motion (rough stability): <strong>${last.jitterCents.toFixed(0)} cents</strong> per step</li>
        <li>Voiced portion of listen: <strong>${(last.voicedRatio * 100).toFixed(0)}%</strong></li>
      </ul>
    </section>`
    : ''
  const sug = buildSuggestions(
    vocalProfile.problemIds,
    vocalProfile.goalIds,
    style ?? vocalProfile.primaryStyle,
    vocalProfile.lastSession,
  )
    .map(
      (s) => `
      <div class="suggest-card">
        <h4>${escapeHtml(s.title)}</h4>
        <p>${escapeHtml(s.why)}</p>
        <span class="badge">${escapeHtml(s.minutes)}</span>
      </div>`,
    )
    .join('')

  const activeStyle = style ?? vocalProfile.primaryStyle
  const styleLabel = activeStyle ? STYLE_BLURBS[activeStyle].title : ''

  return `
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Mic coach</p>
          <h1>Pitch & stability check</h1>
          <p class="meta">Audio stays in your browser. We run a simple pitch tracker — use headphones to reduce bleed from the reference tone.</p>
        </div>
      </header>
      <article class="step-panel">
        <h2>1 · Target pitch</h2>
        <label class="select-row">Note <select id="vrec-target">${opts}</select></label>
        <button type="button" class="btn ghost sm" data-action="vrec-blip">Play target blip</button>

        <h2 style="margin-top:1.25rem">2 · Listen</h2>
        <p class="muted">Hold a steady vowel (e.g. “ah” or “oo”) toward your mic. Start, sing for a few seconds, then stop for analysis.</p>
        <div class="vrec-controls">
          <button type="button" class="btn" data-action="vrec-start" id="vrec-start-btn">Start listening</button>
          <button type="button" class="btn ghost" data-action="vrec-stop" id="vrec-stop-btn" disabled>Stop & analyze</button>
        </div>
        <div class="vrec-live" id="vrec-live" aria-live="polite">Idle — start when ready.</div>

        ${lastBlock}

        <h2 style="margin-top:1.25rem">Suggested trainings</h2>
        <p class="muted small">Based on your profile${styleLabel ? ` and ${escapeHtml(styleLabel)}` : ''}, plus your last analysis when available.</p>
        <div class="suggest-grid">${sug}</div>

        <footer class="step-foot">
          <button type="button" class="btn ghost" data-action="vocal-hub">Done</button>
        </footer>
      </article>
    </div>`
}

function renderHome() {
  const track = persisted.track
  const cards = songs
    .map((s) => {
      const { done, total } = songProgress(s)
      return `
        <article class="song-card" data-action="open-song" data-song="${s.id}">
          <header>
            <h3>${escapeHtml(s.title)}</h3>
            <span class="badge">${escapeHtml(s.key)} · ${escapeHtml(s.timeSignature)}</span>
          </header>
          <p class="pitch">${escapeHtml(s.pitch)}</p>
          <footer>
            <span class="progress">${done}/${total} steps checked off</span>
            <span class="chev" aria-hidden="true">→</span>
          </footer>
        </article>`
    })
    .join('')

  return `
    <div class="layout home">
      <header class="hero">
        <p class="eyebrow">Song-first music mentor</p>
        <h1>Harmony Mentor</h1>
        <p class="lede">Train vocals with a quick profile, tradition-specific ideas, and a browser mic coach — or learn instruments through song-based lessons, metronome, and drones.</p>
        <div class="hero-actions">
          <button type="button" class="btn hero-cta" data-action="open-vocal-hub">Open vocal lab</button>
        </div>
        <div class="track-row">
          <span class="label">Song course focus</span>
          <div class="seg" role="group" aria-label="Learning focus">
            ${(['all', 'vocals', 'guitar', 'piano'] as const)
              .map(
                (t) => `
              <button type="button" class="seg-btn ${t === track ? 'on' : ''}" data-action="set-track" data-track="${t}">
                ${trackLabel(t)}
              </button>`,
              )
              .join('')}
          </div>
        </div>
      </header>
      <section class="song-grid" aria-label="Courses">
        ${cards}
      </section>
      <footer class="site-foot">
        <p>Melodies referenced are traditional / public domain; lesson text is original. Mic analysis is heuristic only — pair with a teacher for diagnosis of strain or injury.</p>
      </footer>
    </div>`
}

function renderCourse(song: SongCourse, stepIndex: number) {
  const step = song.steps[stepIndex]
  const track = persisted.track
  const relevant = stepRelevance(step.kind, track)
  const tips =
    step.tips?.map((t) => `<li>${escapeHtml(t)}</li>`).join('') ?? ''
  const theory =
    step.theory
      ?.map(
        (th) => `
      <details class="callout">
        <summary>${escapeHtml(th.term)}</summary>
        <p>${escapeHtml(th.explanation)}</p>
      </details>`,
      )
      .join('') ?? ''
  const vocal =
    step.vocalPhrases
      ?.map((vp) => {
        const hz = vp.referenceHz
        return `
        <div class="vphrase" data-hz="${hz ?? ''}">
          <p class="lyric">${escapeHtml(vp.text)}${vp.breathAfter ? ' <span class="breath">(breathe)</span>' : ''}</p>
          <p class="tech">${escapeHtml(vp.technique)}</p>
          ${
            hz
              ? `<button type="button" class="btn ghost sm" data-action="blip" data-hz="${hz}">Play reference pitch (~${Math.round(hz)} Hz)</button>`
              : ''
          }
        </div>`
      })
      .join('') ?? ''
  const chords =
    step.chords
      ?.map(
        (c) => `
      <div class="chord-card">
        <h4>${escapeHtml(c.name)}</h4>
        <p class="role">${escapeHtml(c.role)}</p>
        <p>${escapeHtml(c.fingering)}</p>
        <pre class="diag">${escapeHtml(c.diagramHint)}</pre>
      </div>`,
      )
      .join('') ?? ''

  const hasMetro = step.interactives?.includes('metronome')
  const hasDrone = step.interactives?.includes('drone')
  const rootHz = step.keyRootHz

  const nav = song.steps
    .map((st, i) => {
      const done = isComplete(song.id, st.id)
      const classes = [
        'step-dot',
        i === stepIndex ? 'current' : '',
        done ? 'done' : '',
      ]
        .filter(Boolean)
        .join(' ')
      return `<button type="button" class="${classes}" data-action="goto-step" data-index="${i}" title="${escapeHtml(st.title)}">${i + 1}</button>`
    })
    .join('')

  return `
    <div class="layout course">
      <header class="course-head">
        <button type="button" class="btn text" data-action="home">← Home</button>
        <div>
          <p class="eyebrow">${escapeHtml(song.tradition)}</p>
          <h1>${escapeHtml(song.title)}</h1>
          <p class="meta">${escapeHtml(song.key)} · ${escapeHtml(song.timeSignature)} · Focus: ${trackLabel(track)}</p>
        </div>
      </header>

      ${!relevant ? `<div class="banner">This step is general — switch focus to <strong>Everything</strong> in the home screen for the full path, or skip ahead.</div>` : ''}

      <div class="course-body">
        <nav class="step-rail" aria-label="Lesson steps">
          ${nav}
        </nav>
        <article class="step-panel">
          <header class="step-head">
            <span class="pill kind-${step.kind}">${escapeHtml(step.kind)}</span>
            <h2>${escapeHtml(step.title)}</h2>
            <p class="summary">${escapeHtml(step.summary)}</p>
          </header>
          <div class="step-content prose">${step.detailHtml}</div>
          ${tips ? `<ul class="tips">${tips}</ul>` : ''}
          ${theory ? `<section class="theory-block"><h3>Deep dives</h3>${theory}</section>` : ''}
          ${vocal ? `<section class="vocal-block"><h3>Vocal line</h3>${vocal}</section>` : ''}
          ${chords ? `<section class="chord-block"><h3>Fingerboard / voicing</h3><div class="chord-grid">${chords}</div></section>` : ''}

          <section class="tools" aria-label="Practice tools">
            <h3>Interactive tools</h3>
            <div class="tool-row">
              ${
                hasMetro
                  ? `
                <div class="tool metronome ${isMetronomeRunning() ? 'active' : ''}" id="metro-panel">
                  <div class="metro-top">
                    <span>Metronome</span>
                    <span class="beat" id="beat-indicator" aria-live="polite">${isMetronomeRunning() ? '●' : '○'}</span>
                  </div>
                  <label class="bpm">BPM <input type="range" min="40" max="160" value="${metronomeBpm}" data-action="bpm" /></label>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="metro-start">Start</button>
                    <button type="button" class="btn ghost" data-action="metro-stop">Stop</button>
                  </div>
                </div>`
                  : '<p class="muted">No metronome on this step — open a rhythm step.</p>'
              }
              ${
                hasDrone && rootHz
                  ? `
                <div class="tool drone">
                  <span>Key drone (root)</span>
                  <p class="small">Sustained pitch for intonation — keep volume low; rest your ears.</p>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="drone-start" data-hz="${rootHz}">Hold drone</button>
                    <button type="button" class="btn ghost" data-action="drone-stop">Stop drone</button>
                  </div>
                </div>`
                  : ''
              }
            </div>
          </section>

          <footer class="step-foot">
            <button type="button" class="btn ghost" data-action="prev" ${stepIndex === 0 ? 'disabled' : ''}>Previous</button>
            <label class="check-done"><input type="checkbox" data-action="toggle-done" aria-label="Mark step practiced" ${isComplete(song.id, step.id) ? 'checked' : ''} /> I practiced this step</label>
            <button type="button" class="btn" data-action="next" ${stepIndex >= song.steps.length - 1 ? 'disabled' : ''}>Next</button>
          </footer>
        </article>
        <aside class="side">
          <h3>Angles for your instruments</h3>
          <ul>${song.instrumentAngles.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}</ul>
        </aside>
      </div>
    </div>`
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function render() {
  if (view.name === 'home') {
    app.innerHTML = renderHome()
  } else if (view.name === 'vocal-hub') {
    app.innerHTML = renderVocalHub()
  } else if (view.name === 'vocal-diagnostic') {
    app.innerHTML = renderVocalDiagnostic()
  } else if (view.name === 'vocal-style') {
    app.innerHTML = renderVocalStyle(view.style)
  } else if (view.name === 'vocal-record') {
    app.innerHTML = renderVocalRecord(view.style)
  } else {
    const song = getSong(view.songId)
    if (!song) {
      view = { name: 'home' }
      app.innerHTML = renderHome()
    } else {
      app.innerHTML = renderCourse(song, view.stepIndex)
    }
  }
  bind()
}

function bind() {
  app.onclick = (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-action]')
    if (!t) return
    const action = t.dataset.action

    if (action === 'open-vocal-hub') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      view = { name: 'vocal-hub' }
      render()
      return
    }
    if (action === 'vocal-hub') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      view = { name: 'vocal-hub' }
      render()
      return
    }
    if (action === 'vocal-diag') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      view = { name: 'vocal-diagnostic' }
      render()
      return
    }
    if (action === 'vocal-style') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      const st = t.dataset.style as VocalStyle | undefined
      if (st) view = { name: 'vocal-style', style: st }
      render()
      return
    }
    if (action === 'vocal-record') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      const st = t.dataset.style as VocalStyle | undefined
      view = { name: 'vocal-record', style: st }
      render()
      return
    }
    if (action === 'diag-submit') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      const probs = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="prob"]:checked')).map(
        (x) => x.value as ProblemId,
      )
      const goals = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="goal"]:checked')).map(
        (x) => x.value as GoalId,
      )
      const sel = document.getElementById('diag-style') as HTMLSelectElement | null
      const primary = (sel?.value || '') as VocalStyle | ''
      vocalProfile.problemIds = probs
      vocalProfile.goalIds = goals
      vocalProfile.primaryStyle = primary || undefined
      vocalProfile.completedDiagnostic = true
      saveVocalProfile(vocalProfile)
      view = { name: 'vocal-hub' }
      render()
      return
    }

    if (action === 'vrec-blip') {
      const sel = document.getElementById('vrec-target') as HTMLSelectElement | null
      const hz = Number(sel?.value)
      if (hz > 0) playReferenceBlip(hz)
      return
    }

    if (action === 'vrec-start') {
      void (async () => {
        const sel = document.getElementById('vrec-target') as HTMLSelectElement | null
        const hz = Number(sel?.value) || 261.63
        const live = document.getElementById('vrec-live')
        const startBtn = document.getElementById('vrec-start-btn') as HTMLButtonElement | null
        const stopBtn = document.getElementById('vrec-stop-btn') as HTMLButtonElement | null
        await disposeMic()
        micSession = new VocalPitchSession()
        micSession.setTargetHz(hz)
        startBtn && (startBtn.disabled = true)
        stopBtn && (stopBtn.disabled = false)
        if (live) live.textContent = 'Listening… sing a steady tone.'
        try {
          await micSession.start((detected, cents) => {
            if (live) {
              live.textContent = `≈ ${Math.round(detected)} Hz · ${cents >= 0 ? '+' : ''}${cents.toFixed(0)} cents from target`
            }
          })
        } catch (err) {
          if (live) live.textContent = 'Microphone permission denied or unavailable.'
          startBtn && (startBtn.disabled = false)
          stopBtn && (stopBtn.disabled = true)
        }
      })()
      return
    }

    if (action === 'vrec-stop') {
      const recordStyle = view.name === 'vocal-record' ? view.style : undefined
      void (async () => {
        const live = document.getElementById('vrec-live')
        const startBtn = document.getElementById('vrec-start-btn') as HTMLButtonElement | null
        const stopBtn = document.getElementById('vrec-stop-btn') as HTMLButtonElement | null
        const summary = micSession ? await micSession.stop() : null
        micSession = null
        startBtn && (startBtn.disabled = false)
        stopBtn && (stopBtn.disabled = true)
        if (summary) {
          vocalProfile.lastSession = summary
          saveVocalProfile(vocalProfile)
          if (live) {
            live.textContent = `Analyzed. Average |Δ| ≈ ${summary.meanAbsCents.toFixed(0)} cents · stability ≈ ${summary.jitterCents.toFixed(0)} cents/step · voiced ${(summary.voicedRatio * 100).toFixed(0)}% of frames.`
          }
          view = { name: 'vocal-record', style: recordStyle }
          render()
        } else {
          if (live) live.textContent = 'Not enough pitched signal — try closer to the mic, louder vowel, or longer hold.'
        }
      })()
      return
    }

    if (action === 'open-song') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      const id = t.dataset.song!
      view = { name: 'course', songId: id, stepIndex: 0 }
      render()
      return
    }
    if (action === 'home') {
      void disposeMic()
      stopMetronome()
      stopDrone()
      view = { name: 'home' }
      render()
      return
    }
    if (action === 'set-track') {
      persisted.track = t.dataset.track as Track
      savePersisted(persisted)
      render()
      return
    }
    if (action === 'goto-step' && view.name === 'course') {
      stopMetronome()
      stopDrone()
      view.stepIndex = Number(t.dataset.index)
      render()
      return
    }
    if (action === 'prev' && view.name === 'course') {
      stopMetronome()
      stopDrone()
      view.stepIndex = Math.max(0, view.stepIndex - 1)
      render()
      return
    }
    if (action === 'next' && view.name === 'course') {
      stopMetronome()
      stopDrone()
      const song = getSong(view.songId)
      if (song) view.stepIndex = Math.min(song.steps.length - 1, view.stepIndex + 1)
      render()
      return
    }
    if (action === 'metro-start') {
      const bpm = metronomeBpm
      startMetronome(bpm, () => {
        beatFlash += 1
        const el = document.getElementById('beat-indicator')
        const panel = document.getElementById('metro-panel')
        if (el) el.textContent = beatFlash % 2 === 0 ? '●' : '○'
        panel?.classList.add('active')
      })
      render()
      return
    }
    if (action === 'metro-stop') {
      stopMetronome()
      render()
      return
    }
    if (action === 'drone-start') {
      const hz = Number(t.dataset.hz)
      if (hz > 0) startDrone(hz)
      return
    }
    if (action === 'drone-stop') {
      stopDrone()
      return
    }
    if (action === 'blip') {
      const hz = Number(t.dataset.hz)
      if (hz > 0) playReferenceBlip(hz)
    }
  }

  app.onchange = (e) => {
    const el = e.target as HTMLInputElement
    if (el?.dataset?.action === 'bpm') {
      metronomeBpm = Number(el.value)
      const was = isMetronomeRunning()
      stopMetronome()
      if (was) {
        startMetronome(metronomeBpm, () => {
          const ind = document.getElementById('beat-indicator')
          if (ind) ind.textContent = beatFlash % 2 === 0 ? '●' : '○'
          beatFlash += 1
        })
      }
    }
    if (el?.dataset?.action === 'toggle-done' && view.name === 'course') {
      const song = getSong(view.songId)
      if (!song) return
      const step = song.steps[view.stepIndex]
      if (el.checked) markComplete(song.id, step.id)
      else {
        delete persisted.completedSteps[stepKey(song.id, step.id)]
        savePersisted(persisted)
      }
      render()
    }
  }
}

export function mount() {
  render()
}
