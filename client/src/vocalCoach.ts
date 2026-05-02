import type { GoalId, ProblemId, TrainingSuggestion, VocalAnalysisSummary, VocalStyle } from './vocalTypes'

/** Curated drills and ideas per tradition (not medical advice). */
export const STYLE_BLURBS: Record<
  VocalStyle,
  { title: string; summary: string; pillars: string[]; drills: { name: string; detail: string }[] }
> = {
  hindustani: {
    title: 'Hindustani classical',
    summary:
      'Emphasis on sustained vowels (ākār), microtones (shruti), meend (slides), and taān-style agility — always with a guru or recording reference for rāg-specific nuance.',
    pillars: ['Long ākār on Sa–Pa', 'Sargam patterns in vilambit laya', 'Meend between nearby swaras', 'Breath before gamak-heavy phrases'],
    drills: [
      {
        name: 'Ākār on Sa',
        detail: 'Hold a comfortable Sa for 4 slow beats; release without dropping support. Repeat on lower Ni if Sa is high.',
      },
      {
        name: 'Meend awareness',
        detail: 'Slide slowly between two adjacent scale degrees without “stepping”; keep jaw quiet, let larynx height follow the line.',
      },
      {
        name: 'Layakārī with metronome',
        detail: 'Use the app metronome at 60–72 BPM; sing simple sargam in doubles, then triplets, keeping vowel narrow.',
      },
    ],
  },
  rock: {
    title: 'Rock & contemporary belt',
    summary:
      'Mix chest and head resonance safely, use twang for cut without pushing volume, and manage breath for phrases that sit “forward”.',
    pillars: ['Twang / cry on onset', 'Short belt bursts, not marathon screams', 'Consonants for rhythm, vowels for tone', 'Cool-down humming after loud sets'],
    drills: [
      {
        name: 'Nay–nay on a 5-note scale',
        detail: 'Forward placement; keep throat wide, edges soft; stop if you feel pinching.',
      },
      {
        name: 'Glottal-friendly onsets',
        detail: 'Start phrases on “hoo” or “yeah” airflow before lyrics to avoid hard glottal hits on high notes.',
      },
      {
        name: 'Distortion hygiene',
        detail: 'If you use grit, alternate with clean takes; hydrate; never “grind” through pain.',
      },
    ],
  },
  opera: {
    title: 'Opera / classical legato',
    summary:
      'Spin tone on steady breath, manage passaggio with vowel shape, and prioritise line over local “push”.',
    pillars: ['Tall back vowels, narrow front space', 'Legato through consonant clusters', 'Mess di voce only with guidance', 'Text-driven rhythm, breath-driven line'],
    drills: [
      {
        name: 'Five-note lip trill or straw',
        detail: 'Keeps pressure off folds while mapping support; glide slowly up and down a minor third.',
      },
      {
        name: 'Vowel ladder on one pitch',
        detail: 'On a mid vowel, morph [a] → [e] → [i] slowly without losing spin or dropping the soft palate.',
      },
      {
        name: 'Phrase mapping',
        detail: 'Mark one breath per phrase in your sheet music; speak text in rhythm, then sing on “loo” before words.',
      },
    ],
  },
}

function has(p: ProblemId[], id: ProblemId) {
  return p.includes(id)
}

function wants(g: GoalId[], id: GoalId) {
  return g.includes(id)
}

export function buildSuggestions(
  problems: ProblemId[],
  goals: GoalId[],
  style: VocalStyle | undefined,
  analysis: VocalAnalysisSummary | undefined,
): TrainingSuggestion[] {
  const out: TrainingSuggestion[] = []
  const add = (s: TrainingSuggestion) => {
    if (!out.some((x) => x.id === s.id)) out.push(s)
  }

  if (has(problems, 'pitch') || wants(goals, 'accuracy')) {
    add({
      id: 't-pitch-drone',
      title: 'Drone–match sustained vowels',
      why: 'Trains steady fundamental against a reference — useful when pitch drifts under fatigue.',
      minutes: '5–8 min',
      style,
    })
  }
  if (has(problems, 'breath') || wants(goals, 'health')) {
    add({
      id: 't-breath-pulse',
      title: 'Pulse breaths + hiss control',
      why: 'Separates ribcage stability from throat tension; extends phrase capacity.',
      minutes: '4–6 min',
    })
  }
  if (has(problems, 'range') || wants(goals, 'range')) {
    add({
      id: 't-range-straw',
      title: 'Straw phonation glides',
      why: 'Encourages efficient fold closure through passaggio-like zones without slamming weight.',
      minutes: '6 min',
    })
  }
  if (has(problems, 'tone')) {
    add({
      id: 't-tone-hum',
      title: 'Hummed scales with nasal–oral balance',
      why: 'Builds resonance awareness without over-pressing.',
      minutes: '5 min',
    })
  }
  if (has(problems, 'agility')) {
    add({
      id: 't-agility-five',
      title: 'Five-note patterns at slow → medium tempo',
      why: 'Accuracy first; speed only after shapes are even.',
      minutes: '8 min',
    })
  }
  if (has(problems, 'stamina')) {
    add({
      id: 't-stamina-50',
      title: '50% volume “micro-sets”',
      why: 'Builds coordination before adding weight or length.',
      minutes: '10 min',
    })
  }
  if (has(problems, 'projection') || wants(goals, 'performance')) {
    add({
      id: 't-proj-text',
      title: 'Spoken text at performance distance',
      why: 'Forwards resonance without yelling; map consonant energy.',
      minutes: '5 min',
    })
  }
  if (has(problems, 'confidence')) {
    add({
      id: 't-conf-short',
      title: 'Short “concert” recordings (30s)',
      why: 'Exposure therapy in small doses; review once for pitch, once for joy.',
      minutes: '3 min × 3',
    })
  }

  if (style === 'hindustani') {
    add({
      id: 'st-hin-meend',
      title: 'Meend between Pa–Sa and back',
      why: 'Core Hindustani gesture; pairs with breath planning.',
      minutes: '7 min',
      style: 'hindustani',
    })
  }
  if (style === 'rock') {
    add({
      id: 'st-rock-belt',
      title: 'Twang onset on mid voice before extending',
      why: 'Carries cut without pushing chest weight too high.',
      minutes: '6 min',
      style: 'rock',
    })
  }
  if (style === 'opera') {
    add({
      id: 'st-op-legato',
      title: 'Legato “loo” through one line of your repertoire',
      why: 'Line-first singing; consonants light, vowels carry.',
      minutes: '8 min',
      style: 'opera',
    })
  }

  if (analysis) {
    if (analysis.meanAbsCents > 35) {
      add({
        id: 'a-pitch-narrow',
        title: 'Narrow-range matching game',
        why: 'Your last take wandered more than ~35 cents on average from the target; shrink the interval until stable, then widen.',
        minutes: '5 min',
      })
    }
    if (analysis.jitterCents > 25) {
      add({
        id: 'a-stability',
        title: 'Slow vibrato or straight-tone drills',
        why: 'Frame-to-frame pitch moved a lot — work a steady source before adding ornament.',
        minutes: '5 min',
      })
    }
    if (analysis.voicedRatio < 0.45) {
      add({
        id: 'a-voice-onset',
        title: 'Onset exercises: voiced “goo” / lip trill',
        why: 'Many frames were unvoiced or too quiet — onset and breath pressure may need tuning.',
        minutes: '6 min',
      })
    }
  }

  if (out.length === 0) {
    add({
      id: 'fallback',
      title: 'General warm-up + song course',
      why: 'Complete the diagnostic for more tailored ideas, or pick a song course from the home screen.',
      minutes: '10 min',
    })
  }

  return out.slice(0, 8)
}
