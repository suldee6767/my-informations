import React, { useEffect } from 'react';
import { X, ExternalLink, Copy, Check, Code, Globe } from 'lucide-react';
import { ProjectItem } from '../utils/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Хаах"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
          <span>{project.tag}</span>
          <span aria-hidden="true">·</span>
          <span>Төслийн мэдээлэл</span>
        </div>

        <h3 id="modal-title" className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights List */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-neutral-400 mb-2">Онцлох технологи ба агуулга:</div>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800/80 border border-neutral-700/60 rounded-lg"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Live URL Box */}
        <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Globe className="w-4 h-4 text-neutral-500 shrink-0" />
            <span className="text-xs font-mono text-neutral-300 truncate">
              {project.url}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors shrink-0"
            title="Линк хуулах"
            aria-label="Линк хуулах"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl transition-colors"
          >
            Хаах
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
          >
            <span>Шинэ цонхонд нээх</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
