'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Lock, Globe, RefreshCw } from 'lucide-react';

interface WebsitePreviewProps {
  url: string;
  title: string;
  previewImage?: string;
  className?: string;
  aspectRatio?: string;
  showOpenButton?: boolean;
}

export function WebsitePreview({
  url,
  title,
  previewImage,
  className = '',
  aspectRatio = 'aspect-16/10',
  showOpenButton = true,
}: WebsitePreviewProps) {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cleanHostname = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const hasStaticImage = Boolean(previewImage) && !imageError;

  return (
    <div className={`border border-black bg-neutral-900 text-white rounded-none overflow-hidden flex flex-col ${className}`}>
      {/* Browser Chrome Bar */}
      <div className="h-8 bg-neutral-950 border-b border-neutral-800 px-3 flex items-center justify-between text-[11px] font-mono select-none shrink-0">
        {/* Traffic Light Window Controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block" />
        </div>

        {/* Address URL Pill */}
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-0.5 rounded-full text-[10px] text-neutral-300 max-w-[65%] truncate">
          <Lock className="w-2.5 h-2.5 text-neutral-400 shrink-0" />
          <span className="truncate">{cleanHostname}</span>
        </div>

        {/* Live Site Link Action */}
        <div className="flex items-center gap-2">
          {showOpenButton && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[10px] text-neutral-400 hover:text-white transition-colors"
              title="Open live website in new tab"
            >
              <span className="hidden sm:inline">Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Viewport Frame */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-neutral-950 group`}>
        {hasStaticImage && previewImage ? (
          /* High-Resolution Captured Screenshot of the Live Site */
          <div className="relative w-full h-full overflow-hidden bg-neutral-900">
            <Image
              src={previewImage}
              alt={`${title} live website preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        ) : !iframeError ? (
          /* Live Iframe View with loading indicator */
          <div className="relative w-full h-full overflow-hidden bg-white">
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-4 z-10 text-white">
                <RefreshCw className="w-5 h-5 text-neutral-400 animate-spin mb-2" />
                <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                  Loading Live Preview...
                </span>
              </div>
            )}
            <iframe
              src={url}
              title={`${title} Live Site Preview`}
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              className={`w-[160%] h-[160%] origin-top-left scale-[0.625] border-0 pointer-events-none transition-opacity duration-300 ${
                iframeLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        ) : (
          /* Fallback Card if both image and iframe cannot render */
          <div className="absolute inset-0 bg-neutral-900 text-white flex flex-col items-center justify-center p-6 text-center">
            <Globe className="w-8 h-8 text-neutral-500 mb-3" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-1">
              {title}
            </h4>
            <p className="text-[11px] font-mono text-neutral-400 mb-4 max-w-xs">
              Live website active at {cleanHostname}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Hover veil with Launch badge */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-end justify-end p-3 pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] font-mono uppercase px-2.5 py-1 flex items-center gap-1.5 shadow-md border border-white/20">
            <span>Visit Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
