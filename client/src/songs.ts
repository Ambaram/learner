import type { SongCourse } from './types'

/** Public-domain / traditional melodies — curriculum is original teaching copy. */
export const songs: SongCourse[] = [
  {
    id: 'twinkle',
    title: 'Twinkle, Twinkle, Little Star',
    tradition: 'Traditional (Ah! vous dirai-je, Maman)',
    key: 'C major',
    timeSignature: '4/4',
    pitch:
      'Simple contour, steady rhythm, and a full major scale in the melody — ideal first map for ear, voice, and fingers.',
    instrumentAngles: [
      'Piano: hands stay in C position; notice tonic on strong beats.',
      'Guitar: open C–G–Am–F style harmony can support the tune later.',
    ],
    steps: [
      {
        id: 'tw-1',
        title: 'Start from the song, not from a textbook',
        kind: 'intro',
        summary: 'We anchor every idea in what you actually sing or play.',
        detailHtml: `
          <p>Most apps drill abstract exercises first. Here, the <strong>song is the syllabus</strong>: each step names something you hear in the melody — contour, pulse, landing notes — then we zoom in.</p>
          <p>Your goal this course: sing the first phrase in tune with a steady pulse, and name the <em>home note</em> (tonic) when you land on it.</p>
        `,
        tips: [
          'Hum first if full voice tires you; shape matters more than volume.',
          'Tap your foot on beats 1 and 3 to feel the bar without rushing.',
        ],
      },
      {
        id: 'tw-2',
        title: 'What you are hearing: meter and tonic',
        kind: 'theory',
        summary: 'Four beats per bar; the melody wants to rest on C.',
        detailHtml: `
          <p>The piece is in <strong>4/4</strong>: four quarter-note pulses per measure. The opening rises from middle C, circles, and keeps returning to C as a resting place — that is the <strong>tonic</strong> of C major.</p>
        `,
        theory: [
          {
            term: 'Tonic',
            explanation:
              'The gravitational center of the key. Melodies often pause or end here because it feels “finished.”',
          },
          {
            term: 'Contour',
            explanation:
              'The shape of ups and downs in pitch. Twinkle’s first phrase is an arch: up, then down to the tonic.',
          },
        ],
      },
      {
        id: 'tw-3',
        title: 'Vocal line: first phrase, breath, and placement',
        kind: 'vocal',
        summary: 'Sing on a forward, relaxed vowel; plan one breath for the opening question.',
        detailHtml: `
          <p>Speak the words in rhythm once, then float the same rhythm on “nyah” or “loo” — soft edges, no push. Keep the jaw loose; let the tongue do consonants lightly.</p>
        `,
        vocalPhrases: [
          {
            text: 'Twin-kle, twin-kle, lit-tle star',
            breathAfter: true,
            technique:
              'Lift softly on “tw-”; let “star” settle without dropping support — imagine a small steady flame in the belly.',
            referenceHz: 261.63,
          },
        ],
        tips: [
          'If pitch drifts, use the drone button below on C (≈262 Hz) and match your hum.',
          'Record yourself on your phone for 10 seconds — listen once for pitch, once for rhythm.',
        ],
        interactives: ['drone'],
        keyRootHz: 261.63,
      },
      {
        id: 'tw-4',
        title: 'On guitar: resting in first position',
        kind: 'instrument',
        summary: 'The melody lives in open position; think string + fret as coordinates.',
        detailHtml: `
          <p>On guitar, the same tune often starts on the <strong>B string, 1st fret</strong> (C) or nearby depending on arrangement. For now, focus on <strong>one note per syllable</strong> when you fingerpick — no rubato until the pulse is honest.</p>
        `,
        chords: [
          {
            name: 'C major',
            role: 'Tonic — “home” under the first phrase',
            fingering: 'Open C: ring on A3, middle on D2, index on B1',
            diagramHint: 'x32010 — low E muted',
          },
          {
            name: 'G major',
            role: 'Dominant pull — sets up return to C',
            fingering: 'Open G: middle A2, index E3, ring D3, pinky high E3',
            diagramHint: '320003',
          },
        ],
      },
      {
        id: 'tw-5',
        title: 'On piano: C major in the right hand',
        kind: 'instrument',
        summary: 'White keys from C to C; thumb on C, one finger per degree.',
        detailHtml: `
          <p>Place the right hand so the thumb sits on middle C. Walk the first five notes C–D–E–F–G saying the numbers 1–5. That is the <strong>major pentachord</strong> — the ladder Twinkle climbs before it turns.</p>
        `,
        theory: [
          {
            term: 'Scale degree',
            explanation:
              'Numbers 1–7 (or solfege) describe steps inside the key. Twinkle highlights 1 and 5 early — a very stable sound.',
          },
        ],
      },
      {
        id: 'tw-6',
        title: 'Rhythm lab: lock the pulse',
        kind: 'rhythm',
        summary: 'Use the metronome on 2 and 4, then on every beat.',
        detailHtml: `
          <p>Set a comfortable tempo (try 72–88 BPM). Clap once per click, then speak the lyrics in rhythm. When that feels easy, sing on a single vowel.</p>
        `,
        defaultBpm: 80,
        interactives: ['metronome'],
      },
      {
        id: 'tw-7',
        title: 'Recap: what you trained without noticing',
        kind: 'recap',
        summary: 'Ear map + breath + pulse + tonic awareness.',
        detailHtml: `
          <p>You used a real melody to practice <strong>pitch memory</strong>, <strong>breath planning</strong>, <strong>steady meter</strong>, and <strong>tonal center</strong>. Those four transfer to almost every song you will learn next.</p>
        `,
        tips: ['Tomorrow: repeat step 3 and 6 only — shorter sessions beat long cramming.'],
      },
    ],
  },
  {
    id: 'saints',
    title: 'When the Saints Go Marching In',
    tradition: 'Traditional spiritual / jazz standard (melody)',
    key: 'F major (common busking key)',
    timeSignature: '4/4',
    pitch:
      'Call-and-response phrasing and a walking pulse — great for swing feel, projection, and simple chord loops.',
    instrumentAngles: [
      'Guitar: shuffle or straight eighths over I–IV–V in F.',
      'Piano: left-hand fifths or roots on strong beats; melody in the right.',
    ],
    steps: [
      {
        id: 'sa-1',
        title: 'Why this tune for groove and voice',
        kind: 'intro',
        summary: 'Short motives repeat; you learn projection and bounce.',
        detailHtml: `
          <p>The melody is built from <strong>short cells</strong> that repeat with small changes — perfect for memorizing quickly, then spending your attention on <em>time feel</em> and <em>tone color</em>.</p>
        `,
      },
      {
        id: 'sa-2',
        title: 'Vocal: consonants that carry',
        kind: 'vocal',
        summary: 'Front-load rhythm on consonants; open vowels on stressed beats.',
        detailHtml: `
          <p>On “Oh when the saints”, let the “Wh” be crisp but not punched. Vowels on beats 1 carry the lyric line; keep them tall in the mouth without tightening the throat.</p>
        `,
        vocalPhrases: [
          {
            text: 'Oh, when the saints go marching in',
            technique:
              'Imagine the sound arriving a foot in front of your face — forward placement, not loudness.',
            referenceHz: 349.23,
          },
          {
            text: 'Oh, when the saints go marching in',
            breathAfter: true,
            technique:
              'Second time: add a hair more weight on beat 1; still no jaw tension.',
            referenceHz: 349.23,
          },
        ],
        tips: ['Practice the phrase on “doo-bah” to isolate swing without lyrics.'],
        interactives: ['drone'],
        keyRootHz: 174.61,
      },
      {
        id: 'sa-3',
        title: 'Harmony skeleton: I → IV → V',
        kind: 'theory',
        summary: 'Thousands of tunes move between these three functions.',
        detailHtml: `
          <p>In F major, common chords are <strong>F</strong> (I), <strong>B♭</strong> (IV), and <strong>C</strong> (V). Hearing when the harmony moves — even if you only play roots — makes your solos and fills land in the right places later.</p>
        `,
        theory: [
          {
            term: 'I / IV / V',
            explanation:
              'Roman numerals name chords by their scale step. I is home, IV adds color, V creates tension that wants to resolve home.',
          },
        ],
      },
      {
        id: 'sa-4',
        title: 'Guitar loop: friendly barre-free shapes',
        kind: 'instrument',
        summary: 'Capo or open shapes — consistency beats cleverness.',
        detailHtml: `
          <p>Try F–B♭–C–F with shapes you can sustain for two minutes without hand pain. If barre F is new, use an Fmaj7 or a capo shape that lets you practice <strong>time</strong> first.</p>
        `,
        chords: [
          {
            name: 'F major',
            role: 'Tonic',
            fingering: 'Index barre or small F; keep wrist straight',
            diagramHint: '133211 (barre) or xx3211',
          },
          {
            name: 'B♭ major',
            role: 'Subdominant color',
            fingering: 'A-shape or 6-string partial as appropriate',
            diagramHint: 'x13331',
          },
          {
            name: 'C major',
            role: 'Dominant → pulls back to F',
            fingering: 'Open C or movable shape higher',
            diagramHint: 'x32010',
          },
        ],
      },
      {
        id: 'sa-5',
        title: 'Rhythm: straight vs swung eighths',
        kind: 'rhythm',
        summary: 'Subdivide each beat honestly; swing is a ratio, not a random delay.',
        detailHtml: `
          <p>At slow tempos, clap triplets “1-la-li” then mute the middle — you approximate a long–short pair inside each beat. Use the metronome; nudge only after the straight version is clean.</p>
        `,
        defaultBpm: 96,
        interactives: ['metronome'],
      },
      {
        id: 'sa-6',
        title: 'Recap',
        kind: 'recap',
        summary: 'Projection, harmonic home, and repeatable groove.',
        detailHtml: `
          <p>You connected <strong>phrasing</strong> to a repeating tune, mapped <strong>I–IV–V</strong> in F, and used the metronome as a mirror — not a crutch.</p>
        `,
      },
    ],
  },
  {
    id: 'amazing',
    title: 'Amazing Grace (melody)',
    tradition: 'Hymn tune New Britain (melody line for study)',
    key: 'G major (common)',
    timeSignature: '3/4',
    pitch:
      'Triple meter and long lines — perfect for breath planning and legato on any instrument.',
    instrumentAngles: [
      'Strings: slur across beats where possible; decide bow or pick direction early.',
      'Voice: consonant clusters light; vowels carry the lyric on stressed syllables.',
    ],
    steps: [
      {
        id: 'ag-1',
        title: 'Three beats per bar: waltz gravity',
        kind: 'context',
        summary: 'Beat 1 is a downbeat; 2 and 3 lift toward the next bar.',
        detailHtml: `
          <p>In <strong>3/4</strong>, group everything in threes. Conduct a triangle in the air: down–out–up. The melody often peaks near the end of a three-beat unit — plan breaths <em>after</em> cadences, not in the middle of a pick-up.</p>
        `,
        theory: [
          {
            term: 'Pickup (anacrusis)',
            explanation:
              'Notes before the first full bar. They lean forward into bar 1’s downbeat.',
          },
        ],
      },
      {
        id: 'ag-2',
        title: 'Vocal: long lines, soft onset',
        kind: 'vocal',
        summary: 'Start each phrase without a glottal hit unless the text needs it.',
        detailHtml: `
          <p>Begin “A-mazing” on a gentle “h” airflow into the vowel — then sustain. If you run out of air mid-phrase, shorten the phrase in practice: sing two bars, breathe, repeat.</p>
        `,
        vocalPhrases: [
          {
            text: 'A-ma-zing grace, how sweet the sound',
            breathAfter: true,
            technique:
              'Think “narrow vowels, tall space” — ee shape inside ah keeps tone focused without strain.',
            referenceHz: 196.0,
          },
        ],
        interactives: ['drone'],
        keyRootHz: 196.0,
      },
      {
        id: 'ag-3',
        title: 'Piano: chord shells under the tune',
        kind: 'instrument',
        summary: 'Left hand: root and fifth; add the third when stable.',
        detailHtml: `
          <p>Play G–D in the left on beat 1 of each bar while the right hums the melody. Adding B makes a full triad — notice how the third defines major vs minor color.</p>
        `,
        chords: [
          {
            name: 'G major',
            role: 'Tonic in G',
            fingering: 'Left: G2–D3; right melody near middle C',
            diagramHint: 'GBD — spread for clarity',
          },
          {
            name: 'D major',
            role: 'Dominant in G',
            fingering: 'Often appears before returns to G',
            diagramHint: 'DF#A',
          },
        ],
      },
      {
        id: 'ag-4',
        title: 'Metronome: one click per bar, then subdivide',
        kind: 'rhythm',
        summary: 'Outer pulse first; inner beats second.',
        detailHtml: `
          <p>Start with the metronome representing <strong>beat 1 only</strong> (set BPM to about one third of your phrase tempo, or use every-fourth click mentally). When phrases align, subdivide to full three beats per bar.</p>
        `,
        defaultBpm: 60,
        interactives: ['metronome'],
      },
      {
        id: 'ag-5',
        title: 'Recap',
        kind: 'recap',
        summary: 'Breath architecture + triple meter + harmonic support.',
        detailHtml: `
          <p>This tune rewards <strong>legato thinking</strong> across bars. Carry that into your next 3/4 piece — waltzes, minuets, many ballads.</p>
        `,
      },
    ],
  },
]

export function getSong(id: string) {
  return songs.find((s) => s.id === id)
}
