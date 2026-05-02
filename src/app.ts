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

const STORAGE_KEY = 'harmony-mentor-progress-v1'

type View = { name: 'home' } | { name: 'course'; songId: string; stepIndex: number }

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

let view: View = { name: 'home' }
let persisted = loadPersisted()
let metronomeBpm = 80
let beatFlash = 0

const app = document.querySelector<HTMLDivElement>('#app')!

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
        <p class="lede">Pick a traditional tune. Each lesson step explains what you hear, what your voice or fingers should do, and why it matters — with a metronome and reference tones built in.</p>
        <div class="track-row">
          <span class="label">Focus</span>
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
        <p>Melodies referenced are traditional / public domain; lesson text is original. For serious ear training, pair this with a teacher and recordings you love.</p>
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
        <button type="button" class="btn text" data-action="home">← All songs</button>
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
    if (action === 'open-song') {
      const id = t.dataset.song!
      view = { name: 'course', songId: id, stepIndex: 0 }
      stopMetronome()
      stopDrone()
      render()
    }
    if (action === 'home') {
      view = { name: 'home' }
      stopMetronome()
      stopDrone()
      render()
    }
    if (action === 'set-track') {
      persisted.track = t.dataset.track as Track
      savePersisted(persisted)
      render()
    }
    if (action === 'goto-step' && view.name === 'course') {
      view.stepIndex = Number(t.dataset.index)
      stopMetronome()
      stopDrone()
      render()
    }
    if (action === 'prev' && view.name === 'course') {
      view.stepIndex = Math.max(0, view.stepIndex - 1)
      stopMetronome()
      stopDrone()
      render()
    }
    if (action === 'next' && view.name === 'course') {
      const song = getSong(view.songId)
      if (song) view.stepIndex = Math.min(song.steps.length - 1, view.stepIndex + 1)
      stopMetronome()
      stopDrone()
      render()
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
    }
    if (action === 'metro-stop') {
      stopMetronome()
      render()
    }
    if (action === 'drone-start') {
      const hz = Number(t.dataset.hz)
      if (hz > 0) startDrone(hz)
    }
    if (action === 'drone-stop') {
      stopDrone()
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
