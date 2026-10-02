/**
 * Quiet "dial-knob" tick: two band-passed noise bursts with a sharp
 * exponential decay. One AudioContext is created lazily and reused.
 */
let ctx: AudioContext | null = null;

export function playTick() {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx ??= new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const ac = ctx;
    const t = ac.currentTime;
    const sr = ac.sampleRate;

    const burst = (at: number, dur: number, freq: number, q: number, vol: number) => {
      const n = Math.floor(sr * dur);
      const buf = ac.createBuffer(1, n, sr);
      const d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 6);
      const src = ac.createBufferSource();
      const bp = ac.createBiquadFilter();
      const g = ac.createGain();
      src.buffer = buf;
      bp.type = "bandpass";
      bp.frequency.value = freq;
      bp.Q.value = q;
      g.gain.value = vol;
      src.connect(bp).connect(g).connect(ac.destination);
      src.start(t + at);
    };

    burst(0, 0.012, 3200, 4, 0.12);
    burst(0.004, 0.018, 900, 6, 0.06);
  } catch {
    /* audio is decorative — ignore failures */
  }
}
