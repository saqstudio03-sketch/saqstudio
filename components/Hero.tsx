'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onScrollDownClick?: () => void;
}

export function Hero({ onExploreClick, onContactClick, onScrollDownClick }: HeroProps) {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);
  const [isLooping, setIsLooping] = useState(false);

  // Initial playback of the uploaded video from start
  useEffect(() => {
    if (introVideoRef.current) {
      introVideoRef.current.play().catch(() => {});
    }
  }, []);

  // When transition to infinite loop of last 1s happens
  useEffect(() => {
    if (isLooping && loopVideoRef.current) {
      loopVideoRef.current.currentTime = 0;
      loopVideoRef.current.play().catch(() => {});
    }
  }, [isLooping]);

  const handleIntroTimeUpdate = () => {
    if (isLooping || !introVideoRef.current) return;
    // When the uploaded video enters its final second (at ~7.0s of the 8.0s video)
    if (introVideoRef.current.currentTime >= 7.0) {
      setIsLooping(true);
    }
  };

  const handleIntroEnded = () => {
    setIsLooping(true);
  };

  return (
    <section
      id="overview"
      className="relative border-b border-black/10 w-full h-[calc(100dvh-4rem)] min-h-[640px] flex flex-col justify-between overflow-hidden bg-white"
    >
      {/* Background Video Layer: Full Uploaded Video -> Seamless Infinite 1-Second Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Phase 1: Uploaded Video (Plays from start from 0:00 to 7:00+) */}
        <video
          ref={introVideoRef}
          src="/Mascot_opens_floor_hatch_1080p_20260930192543.mp4"
          poster="/hero_video_poster.jpg"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleIntroTimeUpdate}
          onEnded={handleIntroEnded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLooping ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Phase 2: Last 1 Second Loop (Plays continuously and infinitely without stopping) */}
        <video
          ref={loopVideoRef}
          src="/Mascot_last_1sec_seamless.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLooping ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      </div>

      {/* Screen-Filling Foreground Container */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8 lg:py-10">
        {/* Center: Grand Headline & Studio Manifesto */}
        <div className="max-w-6xl">
          {/* Studio Primary Title */}
          <div>
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] xl:text-[11vw] font-black tracking-tighter uppercase leading-[0.88] mb-6 sm:mb-8">
              <span className="text-black">SAQ </span>
              <span
                className="text-white [-webkit-text-stroke:2px_black] sm:[-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] [paint-order:stroke_fill]"
                style={{
                  WebkitTextStroke: 'clamp(2.5px, 0.4vw + 2px, 5px) #000000',
                  paintOrder: 'stroke fill',
                }}
              >
                STUDIO
              </span>
            </h1>
          </div>

          {/* Studio Subheading / Manifesto */}
          <div className="max-w-3xl">
            <p className="text-lg sm:text-2xl md:text-3xl font-normal text-black leading-snug tracking-tight text-balance">
              A minimalist design practice committed to clarity, spatial proportion, and functional restraint. We strip away the unnecessary so what remains is essential.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-black bg-white/90 text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black hover:text-white transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Studio</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator on the Right Side */}
      <motion.button
        type="button"
        onClick={onScrollDownClick || onExploreClick}
        aria-label="Scroll down to explore about section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ width: '21px', height: '171.781px' }}
        className="absolute right-6 sm:right-10 lg:right-16 bottom-8 sm:bottom-12 z-20 flex flex-col items-center gap-3 cursor-pointer group select-none w-[21px] h-[171.781px]"
      >
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-black/60 group-hover:text-black transition-colors [writing-mode:vertical-rl] rotate-180">
          Scroll Down
        </span>

        {/* Minimalist Pill Mouse Capsule */}
        <div className="w-5 h-9 rounded-full border border-black/30 group-hover:border-black flex items-start justify-center p-1 bg-white/70 backdrop-blur-[2px] transition-colors">
          <motion.div
            className="w-1 h-2 bg-black rounded-full"
            animate={{ y: [0, 14, 0], opacity: [1, 0.4, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Pulsing Down Arrow */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-black/60 group-hover:text-black transition-colors"
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
