/**
 * Lightweight autocorrelation pitch estimate for monophonic voice.
 * Returns Hz or -1 if unvoiced / unreliable.
 */
export function detectPitchHz(buffer: Float32Array, sampleRate: number): number {
  const n = buffer.length
  if (n < 512) return -1

  let rms = 0
  for (let i = 0; i < n; i++) rms += buffer[i] * buffer[i]
  rms = Math.sqrt(rms / n)
  if (rms < 0.02) return -1

  const minF = 75
  const maxF = 1100
  const minP = Math.floor(sampleRate / maxF)
  const maxP = Math.ceil(sampleRate / minF)

  const c = new Float32Array(maxP + 2)
  for (let lag = minP; lag <= maxP; lag++) {
    let sum = 0
    for (let i = 0; i < n - lag; i++) sum += buffer[i] * buffer[i + lag]
    c[lag] = sum
  }

  let bestLag = -1
  let bestVal = 0
  for (let lag = minP + 2; lag < maxP - 2; lag++) {
    const v = c[lag]
    if (v > bestVal && c[lag] > c[lag - 1] && c[lag] > c[lag + 1]) {
      bestVal = v
      bestLag = lag
    }
  }
  if (bestLag < minP) return -1

  const y1 = c[bestLag - 1]
  const y2 = c[bestLag]
  const y3 = c[bestLag + 1]
  const denom = y1 - 2 * y2 + y3
  const delta = denom !== 0 ? 0.5 * (y1 - y3) / denom : 0
  const refinedLag = bestLag + delta
  if (refinedLag < minP) return -1
  return sampleRate / refinedLag
}

export function hzToCents(hz: number, refHz: number): number {
  return 1200 * Math.log2(hz / refHz)
}

export function median(values: number[]): number {
  if (values.length === 0) return NaN
  const s = [...values].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2
}

export function mean(values: number[]): number {
  if (values.length === 0) return NaN
  return values.reduce((a, b) => a + b, 0) / values.length
}
