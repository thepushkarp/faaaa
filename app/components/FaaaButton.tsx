"use client";

import { useRef, useCallback } from "react";

export function FaaaButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/faaaa.mp3");
      audio.preload = "auto";
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const handleClick = useCallback(() => {
    const audio = getAudio();
    audio.pause();
    if (audio.readyState >= 1) {
      audio.currentTime = 0;
    }
    audio.play().catch(() => {});
  }, [getAudio]);

  const handlePointerEnter = useCallback(() => {
    getAudio();
  }, [getAudio]);

  return (
    <button
      type="button"
      aria-label="Play faaaa sound"
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      className="cursor-pointer select-none rounded-3xl bg-yellow-400 px-8 py-6 text-5xl font-black tracking-widest text-zinc-950 shadow-[0_8px_0_theme(colors.amber.600)] transition-all duration-75 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 active:translate-y-2 active:shadow-[0_0px_0_theme(colors.amber.600)] motion-safe:active:translate-y-2 sm:px-16 sm:py-10 sm:text-8xl"
      style={{ touchAction: "manipulation" }}
    >
      FAAAA
    </button>
  );
}
