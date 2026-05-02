import { detectPitchHz, hzToCents, mean, median } from './pitchDetect'
import type { VocalAnalysisSummary } from './vocalTypes'

const NOTE_OPTIONS: { label: string; hz: number }[] = [
  { label: 'C3', hz: 130.81 },
  { label: 'D3', hz: 146.83 },
  { label: 'E3', hz: 164.81 },
  { label: 'F3', hz: 174.61 },
  { label: 'G3', hz: 196.0 },
  { label: 'A3', hz: 220.0 },
  { label: 'B3', hz: 246.94 },
  { label: 'C4', hz: 261.63 },
  { label: 'D4', hz: 293.66 },
  { label: 'E4', hz: 329.63 },
  { label: 'F4', hz: 349.23 },
  { label: 'G4', hz: 392.0 },
  { label: 'A4', hz: 440.0 },
]

export { NOTE_OPTIONS }

export class VocalPitchSession {
  private ctx: AudioContext | null = null
  private stream: MediaStream | null = null
  private source: MediaStreamAudioSourceNode | null = null
  private analyser: AnalyserNode | null = null
  private buf: Float32Array | null = null
  private raf = 0
  private samples: number[] = []
  private centsSeries: number[] = []
  private frameCount = 0
  private voicedFrames = 0
  private targetHz = 261.63
  private active = false

  setTargetHz(hz: number) {
    this.targetHz = hz
  }

  async start(onFrame?: (hz: number, centsFromTarget: number) => void) {
    await this.stop()
    this.samples = []
    this.centsSeries = []
    this.frameCount = 0
    this.voicedFrames = 0
    this.ctx = new AudioContext()
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
    })
    this.source = this.ctx.createMediaStreamSource(this.stream)
    this.analyser = this.ctx.createAnalyser()
    this.analyser.fftSize = 4096
    this.analyser.smoothingTimeConstant = 0.35
    this.source.connect(this.analyser)
    const n = this.analyser.fftSize
    this.buf = new Float32Array(n)
    this.active = true

    const loop = () => {
      if (!this.active || !this.analyser || !this.buf || !this.ctx) return
      this.frameCount += 1
      this.analyser.getFloatTimeDomainData(this.buf)
      const hz = detectPitchHz(this.buf, this.ctx.sampleRate)
      if (hz > 0) {
        this.voicedFrames += 1
        this.samples.push(hz)
        const cents = hzToCents(hz, this.targetHz)
        this.centsSeries.push(cents)
        onFrame?.(hz, cents)
      }
      this.raf = requestAnimationFrame(loop)
    }
    this.raf = requestAnimationFrame(loop)
  }

  async stop(): Promise<VocalAnalysisSummary | null> {
    this.active = false
    cancelAnimationFrame(this.raf)
    this.raf = 0
    try {
      this.source?.disconnect()
    } catch {
      /* */
    }
    this.source = null
    this.analyser = null
    this.buf = null
    if (this.stream) {
      for (const t of this.stream.getTracks()) t.stop()
    }
    this.stream = null
    if (this.ctx) {
      await this.ctx.close()
    }
    this.ctx = null

    if (this.samples.length < 8) return null

    const med = median(this.samples)
    const absCents = this.centsSeries.map((c) => Math.abs(c))
    const meanAbsCents = mean(absCents)
    const deltas: number[] = []
    for (let i = 1; i < this.centsSeries.length; i++) {
      deltas.push(Math.abs(this.centsSeries[i]! - this.centsSeries[i - 1]!))
    }
    const jitterCents = deltas.length ? mean(deltas) : 0
    const voicedRatio = this.frameCount > 0 ? this.voicedFrames / this.frameCount : 0

    return {
      at: new Date().toISOString(),
      targetHz: this.targetHz,
      meanAbsCents,
      jitterCents,
      voicedRatio,
      medianHz: med,
    }
  }
}
