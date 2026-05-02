let audioCtx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  return audioCtx
}

let metronomeTimer: number | null = null
let metronomeRunning = false
let droneOsc: OscillatorNode | null = null
let droneGain: GainNode | null = null

export function isMetronomeRunning() {
  return metronomeRunning
}

export function startMetronome(bpm: number, onTick: (beat: number) => void) {
  stopMetronome()
  const ctx = getCtx()
  if (ctx.state === 'suspended') void ctx.resume()

  const intervalMs = (60_000 / bpm) | 0
  let beat = 0
  metronomeRunning = true

  const click = (time: number, accent: boolean) => {
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = accent ? 1000 : 760
    g.gain.value = accent ? 0.12 : 0.07
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.06)
    osc.connect(g)
    g.connect(ctx.destination)
    osc.start(time)
    osc.stop(time + 0.07)
  }

  const schedule = () => {
    const now = ctx.currentTime
    click(now + 0.02, beat % 4 === 0)
    onTick(beat)
    beat += 1
  }

  schedule()
  metronomeTimer = window.setInterval(schedule, intervalMs)
}

export function stopMetronome() {
  if (metronomeTimer != null) {
    clearInterval(metronomeTimer)
    metronomeTimer = null
  }
  metronomeRunning = false
}

export function startDrone(frequencyHz: number) {
  stopDrone()
  const ctx = getCtx()
  if (ctx.state === 'suspended') void ctx.resume()

  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.value = frequencyHz
  g.gain.value = 0
  osc.connect(g)
  g.connect(ctx.destination)
  osc.start()

  const now = ctx.currentTime
  g.gain.linearRampToValueAtTime(0.08, now + 0.15)

  droneOsc = osc
  droneGain = g
}

export function stopDrone() {
  if (!droneOsc || !droneGain) return
  const ctx = getCtx()
  const now = ctx.currentTime
  try {
    droneGain.gain.cancelScheduledValues(now)
    droneGain.gain.setValueAtTime(droneGain.gain.value, now)
    droneGain.gain.linearRampToValueAtTime(0.0001, now + 0.12)
    droneOsc.stop(now + 0.15)
  } catch {
    /* ignore */
  }
  droneOsc = null
  droneGain = null
}

export function playReferenceBlip(frequencyHz: number, durationMs = 450) {
  const ctx = getCtx()
  if (ctx.state === 'suspended') void ctx.resume()
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.value = frequencyHz
  g.gain.value = 0.0001
  const t0 = ctx.currentTime
  const dur = durationMs / 1000
  g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.02)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g)
  g.connect(ctx.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}
