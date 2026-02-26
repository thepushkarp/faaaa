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
      className="size-48 cursor-pointer select-none rounded-full bg-red-600 text-3xl font-black tracking-widest text-white shadow-[0_10px_0_theme(colors.red.900)] transition-all duration-75 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 active:translate-y-2.5 active:shadow-[0_0px_0_theme(colors.red.900)] motion-safe:active:translate-y-2.5 sm:size-72 sm:text-6xl"
      style={{ touchAction: "manipulation" }}
    >
      FAAAA
    </button>
  );
}
