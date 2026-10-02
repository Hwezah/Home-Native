"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { ParallaxImg } from "@/components/ui/Img";

/** Show-reel cover with a play/pause toggle (video to be supplied). */
export function ReelCard({ image }: { image: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div data-reveal className="relative mt-[clamp(56px,7vw,100px)] h-[clamp(320px,46vw,620px)] overflow-hidden rounded-3xl bg-[#C9BBA8]">
      <ParallaxImg src={image} alt="Show reel cover — styled living room" speed={0.18} extra={12} sizes="(max-width: 1460px) 100vw, 1300px" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-[18px]">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause show reel" : "Play show reel"}
          aria-pressed={playing}
          className="pointer-events-auto flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-0 bg-paper p-0 text-ink shadow-[0_0_0_22px_rgba(255,255,255,.18)] transition-[transform,box-shadow] duration-[400ms] hover:scale-[1.08] hover:shadow-[0_0_0_34px_rgba(255,255,255,.22)] mp:h-[72px] mp:w-[72px] mp:shadow-[0_0_0_12px_rgba(255,255,255,.18)] [&_svg]:mp:size-[22px]"
        >
          {playing ? <Pause size={30} strokeWidth={1.1} /> : <Play size={30} strokeWidth={1.1} />}
        </button>
        <div className="text-[20px] text-paper [text-shadow:0_1px_10px_rgba(0,0,0,.35)] mp:text-[16px]">Watch our Show Reel 2026</div>
      </div>
    </div>
  );
}
