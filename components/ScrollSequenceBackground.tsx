'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface ScrollSequenceBackgroundProps {
  totalFrames?: number;
  framePrefix?: string;
  frameExtension?: string;
  children: React.ReactNode;
}

export function ScrollSequenceBackground({
  totalFrames = 147,
  framePrefix = '/sequence/ezgif-frame-',
  frameExtension = '.jpg',
  children,
}: ScrollSequenceBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Store preloaded HTMLImageElement objects
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const currentDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  // Helper to format frame path: 1 -> "001", 10 -> "010", 100 -> "100"
  const getFrameUrl = useCallback(
    (index: number) => {
      const frameNum = String(index + 1).padStart(3, '0');
      return `${framePrefix}${frameNum}${frameExtension}`;
    },
    [framePrefix, frameExtension]
  );

  // High performance cover drawer
  const renderImageToCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const displayWidth = canvas.clientWidth || window.innerWidth;
    const displayHeight = canvas.clientHeight || window.innerHeight;

    if (displayWidth === 0 || displayHeight === 0) return;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    const hRatio = canvas.width / img.naturalWidth;
    const vRatio = canvas.height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawW = img.naturalWidth * ratio;
    const drawH = img.naturalHeight * ratio;
    const centerShiftX = (canvas.width - drawW) / 2;
    const centerShiftY = (canvas.height - drawH) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerShiftX, centerShiftY, drawW, drawH);
  }, []);

  // Draw frame by index with closest loaded fallback
  const drawFrameByIndex = useCallback(
    (index: number) => {
      const images = imagesRef.current;
      if (!images || images.length === 0) return;

      const clamped = Math.max(0, Math.min(totalFrames - 1, index));
      const exact = images[clamped];

      if (exact && exact.complete && exact.naturalWidth > 0) {
        renderImageToCanvas(exact);
        currentDrawnFrameRef.current = clamped;
        return;
      }

      // If exact frame is still downloading, find closest loaded frame to keep motion smooth
      let closest = -1;
      let minDiff = Infinity;
      for (let i = 0; i < images.length; i++) {
        const candidate = images[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const diff = Math.abs(i - clamped);
          if (diff < minDiff) {
            minDiff = diff;
            closest = i;
          }
        }
      }

      if (closest !== -1 && images[closest]) {
        renderImageToCanvas(images[closest]);
        currentDrawnFrameRef.current = closest;
      }
    },
    [renderImageToCanvas, totalFrames]
  );

  // Preload all 147 frames on mount
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        if (isCancelled) return;
        // If this is the initial frame, draw immediately
        if (i === 0 && currentDrawnFrameRef.current === -1) {
          drawFrameByIndex(0);
        }
        // If current frame needed is this one, redraw
        const currentTargetFrame = Math.round(currentProgressRef.current * (totalFrames - 1));
        if (currentTargetFrame === i && currentDrawnFrameRef.current !== i) {
          renderImageToCanvas(img);
          currentDrawnFrameRef.current = i;
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    // In case frame 0 was already cached by the browser and loaded synchronously:
    if (images[0] && images[0].complete && images[0].naturalWidth > 0) {
      drawFrameByIndex(0);
    }

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, getFrameUrl, drawFrameByIndex, renderImageToCanvas]);

  // Smooth animation loop with organic lerp interpolation
  useEffect(() => {
    let isRunning = true;

    const updateScrollTarget = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Pin lifecycle: from rect.top <= 0 to rect.bottom <= windowHeight
      const maxScroll = Math.max(1, rect.height - windowHeight);
      const currentScroll = -rect.top;

      const rawProgress = currentScroll / maxScroll;
      targetProgressRef.current = Math.max(0, Math.min(1, rawProgress));
    };

    const tick = () => {
      if (!isRunning) return;

      // Smooth lerp interpolation for liquid-smooth scrubbing
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0002) {
        currentProgressRef.current += diff * 0.22;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const frameToDraw = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentProgressRef.current * (totalFrames - 1)))
      );

      if (frameToDraw !== currentDrawnFrameRef.current) {
        drawFrameByIndex(frameToDraw);
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      updateScrollTarget();
    };

    const handleResize = () => {
      updateScrollTarget();
      const current = imagesRef.current[currentDrawnFrameRef.current];
      if (current && current.complete && current.naturalWidth > 0) {
        renderImageToCanvas(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial check
    updateScrollTarget();
    currentProgressRef.current = targetProgressRef.current;
    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [drawFrameByIndex, renderImageToCanvas, totalFrames]);

  return (
    <div ref={containerRef} className="relative w-full isolate">
      {/* Sticky Background Canvas Animation (pinned full-screen) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
        />
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 -mt-[100vh] bg-transparent">
        {children}
      </div>
    </div>
  );
}
