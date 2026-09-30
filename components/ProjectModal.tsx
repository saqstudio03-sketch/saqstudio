'use client';

import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { WebsitePreview } from './WebsitePreview';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  scope: string[];
  description: string;
  extendedDescription: string;
  specifications: { label: string; value: string }[];
  liveUrl?: string;
  previewImage?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-black p-6 sm:p-10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar inside modal */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase text-black/60">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-full text-xs font-mono uppercase hover:bg-neutral-800 transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 border border-black/20 rounded-full hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase mb-4">
          {project.title}
        </h2>

        {/* Summary */}
        <p className="text-lg text-black/80 font-normal leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Live Website Preview Card */}
        {project.liveUrl ? (
          <div className="mb-8">
            <WebsitePreview
              url={project.liveUrl}
              title={project.title}
              previewImage={project.previewImage}
              aspectRatio="aspect-16/10"
              showOpenButton={true}
            />
          </div>
        ) : (
          <div className="border border-black p-8 sm:p-12 mb-8 bg-neutral-50/50 flex flex-col justify-between aspect-16/9">
            <div className="flex justify-between items-start text-xs font-mono uppercase text-black/40">
              <span>SAQ STUDIO ARCHIVE // {project.id.toUpperCase()}</span>
              <span>SCALE 1:1</span>
            </div>
            
            <div className="my-auto text-center py-6">
              <div className="inline-block border border-black px-6 py-3 font-mono text-xs uppercase tracking-widest bg-white">
                {project.title}
              </div>
              <p className="text-xs text-black/60 font-mono mt-3">
                {project.category} — {project.client}
              </p>
            </div>

            <div className="flex justify-between text-xs font-mono text-black/40 border-t border-black/10 pt-3">
              <span>MONOCHROME SPECIFICATION</span>
              <span>STATUS: COMPLETED</span>
            </div>
          </div>
        )}

        {/* Extended Details */}
        <div className="border-t border-black/10 pt-8 mb-8 space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-2">Project Brief</h3>
            <p className="text-sm sm:text-base leading-relaxed text-black">
              {project.extendedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-black/50 mb-3">Disciplines & Scope</h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.scope.map((s, idx) => (
                <span key={idx} className="border border-black/20 px-3 py-1 bg-white text-black">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {project.specifications.map((spec, i) => (
              <div key={i}>
                <span className="block text-xs font-mono uppercase text-black/50">{spec.label}</span>
                <span className="text-sm font-semibold text-black">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="border-t border-black/10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xs"
              >
                <span>Open Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xs"
            >
              <span>Commission Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 border border-black/20 rounded-full text-xs font-mono uppercase tracking-wider hover:border-black transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
