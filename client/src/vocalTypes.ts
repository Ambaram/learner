/** Problem tags from the diagnostic questionnaire */
export const PROBLEM_AREAS = [
  { id: 'pitch', label: 'Pitch / intonation (singing flat or sharp)' },
  { id: 'breath', label: 'Breath control & phrase length' },
  { id: 'range', label: 'Range or passaggio / register breaks' },
  { id: 'tone', label: 'Tone colour, resonance, or nasality' },
  { id: 'agility', label: 'Agility & fast passages' },
  { id: 'stamina', label: 'Stamina & vocal fatigue' },
  { id: 'projection', label: 'Projection & dynamics' },
  { id: 'confidence', label: 'Nerves / consistency under pressure' },
] as const

export const GOAL_OPTIONS = [
  { id: 'accuracy', label: 'More accurate pitch' },
  { id: 'tone', label: 'Richer or more consistent tone' },
  { id: 'range', label: 'Comfortable high or low notes' },
  { id: 'style', label: 'Sound more “in style” (genre-specific)' },
  { id: 'health', label: 'Sustainable technique (less strain)' },
  { id: 'performance', label: 'Performance & stage confidence' },
] as const

export type ProblemId = (typeof PROBLEM_AREAS)[number]['id']
export type GoalId = (typeof GOAL_OPTIONS)[number]['id']
export type VocalStyle = 'hindustani' | 'rock' | 'opera'

export interface VocalProfile {
  version: 1
  completedDiagnostic: boolean
  problemIds: ProblemId[]
  goalIds: GoalId[]
  primaryStyle?: VocalStyle
  /** ISO timestamp */
  updatedAt: string
  lastSession?: VocalAnalysisSummary
}

export interface VocalAnalysisSummary {
  at: string
  targetHz: number
  /** Mean absolute deviation from target in cents */
  meanAbsCents: number
  /** Mean frame-to-frame absolute pitch delta in cents */
  jitterCents: number
  /** Fraction of analysis frames that had detectable voiced pitch */
  voicedRatio: number
  /** Median detected Hz when voiced */
  medianHz: number
}

export interface TrainingSuggestion {
  id: string
  title: string
  why: string
  minutes: string
  style?: VocalStyle
}
