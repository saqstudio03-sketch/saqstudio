'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PullingCharacter() {
  const [hasFallen, setHasFallen] = useState(false);
  const [effortPhase, setEffortPhase] = useState<'pull' | 'rest'>('pull');
  const [isHovered, setIsHovered] = useState(false);

  // Monitor scroll: if user scrolls down, the character suddenly falls
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If user scrolls down past 35px, trigger the fall
      if (currentScrollY > 35) {
        setHasFallen(true);
      } else if (currentScrollY <= 10) {
        // If user returns to top, character climbs back up
        setHasFallen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Idle pulling rhythm with 3D heave
  useEffect(() => {
    if (hasFallen) return;
    const interval = setInterval(() => {
      setEffortPhase((prev) => (prev === 'pull' ? 'rest' : 'pull'));
    }, 750);
    return () => clearInterval(interval);
  }, [hasFallen]);

  const handleManualTrip = () => {
    setHasFallen((prev) => !prev);
  };

  return (
    <div className="relative inline-flex flex-col items-center select-none pointer-events-auto leading-none">
      {/* Interactive Helper Hint */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider text-black/40 hidden sm:block whitespace-nowrap z-30">
        {hasFallen ? '(Scroll to top or click to reset)' : '(Scroll down to see him slip!)'}
      </div>

      <div
        onClick={handleManualTrip}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
        style={{ perspective: 1000 }}
        title={hasFallen ? 'Click to help him back up' : 'Click to poke the worker!'}
      >
        <AnimatePresence mode="wait">
          {!hasFallen ? (
            /* ================= STATE 1: 3D VOLUMETRIC PULLING CHARACTER ================= */
            <motion.div
              key="pulling-state-3d"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="relative flex flex-col items-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Exertion speech bubble */}
              <motion.div
                animate={{
                  y: effortPhase === 'pull' ? -5 : 0,
                  scale: effortPhase === 'pull' ? 1.06 : 0.96,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mb-1 px-2.5 py-0.5 border-2 border-black bg-white text-[10px] font-mono font-black tracking-tight text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] whitespace-nowrap z-30"
              >
                {isHovered ? "DON'T SCROLL!!" : effortPhase === 'pull' ? 'HEAVE!!' : 'HOLD...'}
              </motion.div>

              {/* 3D Volumetric Character SVG */}
              <motion.svg
                width="96"
                height="116"
                viewBox="0 0 96 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
                animate={{
                  rotateY: effortPhase === 'pull' ? -10 : 2,
                  rotateX: effortPhase === 'pull' ? 6 : 1,
                  y: effortPhase === 'pull' ? [0, -3, 0] : [0, 2, 0],
                }}
                transition={{
                  duration: 0.75,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <defs>
                  {/* 3D Ground Shadow */}
                  <radialGradient id="groundShadow3d" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
                    <stop offset="60%" stopColor="#000000" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>

                  {/* 3D Spherical Head Gradient (Specular top-left to dark bottom-right) */}
                  <radialGradient id="head3d" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#f4f4f5" />
                    <stop offset="70%" stopColor="#d4d4d8" />
                    <stop offset="100%" stopColor="#71717a" />
                  </radialGradient>

                  {/* 3D Helmet/Beret Dome */}
                  <linearGradient id="helmet3d" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#404040" />
                    <stop offset="40%" stopColor="#18181b" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>

                  {/* 3D Torso Cylindrical Volume */}
                  <linearGradient id="torso3d" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="25%" stopColor="#f4f4f5" />
                    <stop offset="70%" stopColor="#e4e4e7" />
                    <stop offset="95%" stopColor="#a1a1aa" />
                    <stop offset="100%" stopColor="#71717a" />
                  </linearGradient>

                  {/* 3D Limbs Cylinders */}
                  <linearGradient id="limb3d" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#e4e4e7" />
                    <stop offset="100%" stopColor="#52525b" />
                  </linearGradient>

                  {/* 3D Chunky Boots */}
                  <linearGradient id="boot3d" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3f3f46" />
                    <stop offset="50%" stopColor="#18181b" />
                    <stop offset="100%" stopColor="#09090b" />
                  </linearGradient>

                  {/* 3D Twisted Rope */}
                  <linearGradient id="rope3d" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#e4e4e7" />
                    <stop offset="70%" stopColor="#18181b" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>

                  {/* 3D Sweat Drop Specular */}
                  <radialGradient id="sweat3d" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#e4e4e7" />
                    <stop offset="100%" stopColor="#27272a" />
                  </radialGradient>
                </defs>

                {/* 1. Realistic 3D Ground Shadow beneath feet */}
                <ellipse
                  cx="48"
                  cy="112"
                  rx={effortPhase === 'pull' ? '32' : '36'}
                  ry="5.5"
                  fill="url(#groundShadow3d)"
                />

                {/* 2. Pulled Rope (3D Twisted Cable anchored down to bottom border) */}
                <motion.g
                  animate={{
                    x: effortPhase === 'pull' ? -2 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Rope Main 3D Cylinder */}
                  <path
                    d="M48 54 Q47 78 48 114"
                    stroke="url(#rope3d)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M48 54 Q47 78 48 114"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  {/* Tension sparkle at ground contact */}
                  <circle cx="48" cy="114" r="2.5" fill="#000000" />
                </motion.g>

                {/* 3. Back Leg (Left Leg in 3D Perspective) */}
                <motion.g
                  animate={{
                    transform:
                      effortPhase === 'pull'
                        ? 'translate(-4px, -1px) rotate(-4deg)'
                        : 'translate(0px, 0px) rotate(0deg)',
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Thigh & Calf */}
                  <path
                    d="M40 70 L28 85 L24 104"
                    stroke="url(#limb3d)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 70 L28 85 L24 104"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Left 3D Boot */}
                  <g transform="translate(14, 100)">
                    {/* Sole */}
                    <path d="M4 11 L24 11 L24 14 L2 14 Z" fill="#000000" />
                    {/* Upper */}
                    <path
                      d="M6 4 L14 4 L16 11 L4 11 Z"
                      fill="url(#boot3d)"
                      stroke="#000000"
                      strokeWidth="1"
                    />
                    {/* Toe cap highlight */}
                    <ellipse cx="6" cy="9" rx="2" ry="1.5" fill="#ffffff" opacity="0.6" />
                  </g>
                </motion.g>

                {/* 4. Front Leg (Right Leg planted firmly in foreground) */}
                <motion.g
                  animate={{
                    transform:
                      effortPhase === 'pull'
                        ? 'translate(2px, 0px) rotate(3deg)'
                        : 'translate(0px, 0px) rotate(0deg)',
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Thigh & Shin */}
                  <path
                    d="M52 70 L64 86 L68 104"
                    stroke="url(#limb3d)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52 70 L64 86 L68 104"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Knee highlight */}
                  <circle cx="64" cy="86" r="3.5" fill="#ffffff" opacity="0.4" />
                  
                  {/* Right 3D Boot (Chunky foreground boot) */}
                  <g transform="translate(56, 100)">
                    {/* Sole tread */}
                    <path d="M2 11 L25 11 L23 14 L0 14 Z" fill="#000000" />
                    {/* Upper boot body */}
                    <path
                      d="M7 3 L15 3 L17 11 L3 11 Z"
                      fill="url(#boot3d)"
                      stroke="#000000"
                      strokeWidth="1.2"
                    />
                    {/* Toe gloss reflection */}
                    <ellipse cx="14" cy="8" rx="2.5" ry="1.5" fill="#ffffff" opacity="0.5" />
                  </g>
                </motion.g>

                {/* 5. Volumetric 3D Torso (Beveled Capsule with Vest / Straps) */}
                <motion.g
                  animate={{
                    x: effortPhase === 'pull' ? -3 : 0,
                    rotate: effortPhase === 'pull' ? -5 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* 3D Body Egg/Cylinder */}
                  <rect
                    x="34"
                    y="42"
                    width="26"
                    height="32"
                    rx="13"
                    fill="url(#torso3d)"
                    stroke="#18181b"
                    strokeWidth="2"
                  />
                  {/* Torso 3D Specular Ridge */}
                  <path
                    d="M40 45 Q40 58 40 70"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                  {/* Industrial Harness / Belt */}
                  <path d="M35 62 L59 62" stroke="#18181b" strokeWidth="3" />
                  <rect x="44" y="60" width="6" height="4" fill="#ffffff" stroke="#000000" strokeWidth="1" />
                </motion.g>

                {/* 6. 3D Head, Face & Beanie Hat */}
                <motion.g
                  animate={{
                    x: effortPhase === 'pull' ? -4 : 0,
                    y: effortPhase === 'pull' ? -2 : 0,
                    rotate: effortPhase === 'pull' ? -8 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* 3D Sphere Head */}
                  <circle
                    cx="48"
                    cy="27"
                    r="15"
                    fill="url(#head3d)"
                    stroke="#18181b"
                    strokeWidth="2.2"
                  />

                  {/* 3D Specular Highlight on forehead */}
                  <ellipse cx="43" cy="21" rx="4" ry="2.5" fill="#ffffff" opacity="0.8" />

                  {/* 3D Worker Hat / Cap */}
                  <path
                    d="M32 23 C34 11, 62 11, 64 23 Z"
                    fill="url(#helmet3d)"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  {/* Hat Brim Visor with 3D Depth */}
                  <ellipse cx="48" cy="23" rx="17" ry="3.5" fill="#18181b" stroke="#000000" strokeWidth="1.5" />
                  <path d="M34 23 Q48 20 62 23" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" fill="none" />
                  {/* Hat Top Stud */}
                  <circle cx="48" cy="12" r="2.5" fill="#ffffff" stroke="#000000" strokeWidth="1" />

                  {/* Expressive Face (Eyes + Mouth) */}
                  {effortPhase === 'pull' ? (
                    <>
                      {/* Hard Straining Eyes (> <) */}
                      <path d="M40 27 L44 29 L40 31" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M56 27 L52 29 L56 31" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Clenched Teeth */}
                      <rect x="44" y="34" width="8" height="3" rx="1.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
                      <line x1="48" y1="34" x2="48" y2="37" stroke="#000000" strokeWidth="1" />
                    </>
                  ) : (
                    <>
                      {/* 3D Glossy Eyeballs */}
                      <ellipse cx="42" cy="28" rx="2.5" ry="3" fill="#000000" />
                      <circle cx="41.5" cy="27" r="1" fill="#ffffff" />
                      <ellipse cx="54" cy="28" rx="2.5" ry="3" fill="#000000" />
                      <circle cx="53.5" cy="27" r="1" fill="#ffffff" />
                      {/* Determined Mouth */}
                      <ellipse cx="48" cy="35" rx="2.5" ry="2" fill="#000000" />
                    </>
                  )}

                  {/* 3D Flying Sweat Drop with Specular Bead */}
                  {effortPhase === 'pull' && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: [0, 1, 0], x: [0, 8], y: [0, -10] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <circle cx="66" cy="20" r="3.5" fill="url(#sweat3d)" stroke="#000000" strokeWidth="1" />
                      <circle cx="65" cy="19" r="1" fill="#ffffff" />
                    </motion.g>
                  )}
                </motion.g>

                {/* 7. 3D Arms & Hands Gripping the Rope */}
                <motion.g
                  animate={{
                    x: effortPhase === 'pull' ? -2 : 1,
                    y: effortPhase === 'pull' ? -2 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Left Arm Upper & Forearm */}
                  <path
                    d="M36 46 L27 52 L45 56"
                    stroke="url(#limb3d)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36 46 L27 52 L45 56"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Right Arm Upper & Forearm */}
                  <path
                    d="M58 46 L66 52 L49 61"
                    stroke="url(#limb3d)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M58 46 L66 52 L49 61"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* 3D Padded Gloves (Spherical Hands wrapping around rope) */}
                  <circle cx="47" cy="56" r="4.5" fill="#18181b" stroke="#000000" strokeWidth="1.5" />
                  <ellipse cx="46" cy="55" rx="1.8" ry="1.2" fill="#ffffff" opacity="0.6" />
                  
                  <circle cx="48" cy="62" r="4.5" fill="#18181b" stroke="#000000" strokeWidth="1.5" />
                  <ellipse cx="47" cy="61" rx="1.8" ry="1.2" fill="#ffffff" opacity="0.6" />
                </motion.g>
              </motion.svg>
            </motion.div>
          ) : (
            /* ================= STATE 2: 3D TUMBLING RAGDOLL FALL ================= */
            <motion.div
              key="falling-state-3d"
              className="relative flex flex-col items-center pointer-events-none"
              initial={{ y: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }}
              animate={{
                y: [0, -35, 420],
                x: [0, 45, 120],
                scale: [1, 1.15, 0.45],
                rotateX: [0, 180, 720],
                rotateY: [0, 120, 540],
                rotateZ: [0, -45, 360],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.15,
                times: [0, 0.15, 1],
                ease: [0.32, 0, 0.67, 0],
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Panic Scream Speech Bubble */}
              <div className="mb-2 px-2.5 py-1 border-2 border-black bg-white text-xs font-mono font-black text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] rotate-12 whitespace-nowrap">
                WHOAAAAA!! 💥
              </div>

              {/* 3D Falling Ragdoll SVG */}
              <svg
                width="96"
                height="116"
                viewBox="0 0 96 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                {/* Snapped 3D rope whipping back */}
                <path d="M48 64 Q56 72 64 85" stroke="#000000" strokeWidth="3" strokeDasharray="4 2" />

                {/* Flying Hat dislodged in 3D */}
                <g transform="translate(24, -20) rotate(45 48 16)">
                  <path d="M36 20 C38 10, 60 10, 62 20 Z" fill="#18181b" stroke="#000000" strokeWidth="2" />
                  <ellipse cx="49" cy="20" rx="14" ry="3" fill="#27272a" />
                </g>

                {/* Wide Shocked 3D Head */}
                <circle cx="48" cy="30" r="15" fill="#f4f4f5" stroke="#000000" strokeWidth="2.5" />
                {/* Wide O_O Eyes */}
                <circle cx="42" cy="28" r="4" fill="#000000" />
                <circle cx="41" cy="26" r="1.5" fill="#ffffff" />
                <circle cx="54" cy="28" r="4" fill="#000000" />
                <circle cx="53" cy="26" r="1.5" fill="#ffffff" />
                {/* Screaming Open Mouth */}
                <ellipse cx="48" cy="37" rx="4.5" ry="6" fill="#000000" />

                {/* 3D Torso in Spin */}
                <rect x="36" y="46" width="24" height="28" rx="12" fill="#e4e4e7" stroke="#000000" strokeWidth="2" />

                {/* Flailing 3D Arms */}
                <path d="M38 50 L18 34 L8 22" stroke="#d4d4d8" strokeWidth="7" strokeLinecap="round" />
                <path d="M38 50 L18 34 L8 22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="8" cy="22" r="5" fill="#18181b" stroke="#000000" strokeWidth="1.5" />

                <path d="M58 50 L78 34 L88 20" stroke="#d4d4d8" strokeWidth="7" strokeLinecap="round" />
                <path d="M58 50 L78 34 L88 20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="88" cy="20" r="5" fill="#18181b" stroke="#000000" strokeWidth="1.5" />

                {/* Flailing 3D Legs & Boots */}
                <path d="M42 74 L28 88 L16 82" stroke="#a1a1aa" strokeWidth="8" strokeLinecap="round" />
                <path d="M42 74 L28 88 L16 82" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                <path d="M54 74 L68 90 L80 106" stroke="#a1a1aa" strokeWidth="8" strokeLinecap="round" />
                <path d="M54 74 L68 90 L80 106" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                {/* 3D Speed Lines */}
                <line x1="28" y1="40" x2="28" y2="70" stroke="#000000" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="68" y1="36" x2="68" y2="66" stroke="#000000" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* When character has fallen: prompt to restore */}
      {hasFallen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-center"
        >
          <button
            onClick={() => setHasFallen(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1 border border-black text-[10px] font-mono uppercase bg-white hover:bg-black hover:text-white transition-colors shadow-xs"
          >
            <span>Climb back up 🧗</span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
