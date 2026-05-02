export type StepKind =
  | 'intro'
  | 'context'
  | 'vocal'
  | 'theory'
  | 'instrument'
  | 'rhythm'
  | 'recap'

export interface TheoryCallout {
  term: string
  explanation: string
}

export interface ChordLesson {
  name: string
  role: string
  fingering: string
  /** Short ASCII or description for fretboard / keys */
  diagramHint: string
}

export interface VocalPhrase {
  text: string
  /** Hint for where to breathe */
  breathAfter?: boolean
  technique: string
  /** Scientific pitch for optional drone (e.g. 440) */
  referenceHz?: number
}

export interface LessonStep {
  id: string
  title: string
  kind: StepKind
  summary: string
  detailHtml: string
  tips?: string[]
  theory?: TheoryCallout[]
  vocalPhrases?: VocalPhrase[]
  chords?: ChordLesson[]
  defaultBpm?: number
  interactives?: Array<'metronome' | 'drone'>
  /** Root frequency for key drone when kind supports it */
  keyRootHz?: number
}

export interface SongCourse {
  id: string
  title: string
  tradition: string
  key: string
  timeSignature: string
  /** One-line why this song teaches well */
  pitch: string
  instrumentAngles: string[]
  steps: LessonStep[]
}

export type Track = 'vocals' | 'guitar' | 'piano' | 'all'
