import React, { useState } from 'react';
import {
  Code,
  Video,
  Gamepad2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Eye,
  FolderGit2,
} from 'lucide-react';
import { ProjectItem, getProjectsList } from '../utils/portfolio';

interface ProjectsSectionProps {
  subdomain: string;
  onSelectProject: (project: ProjectItem) => void;
  onOpenConfig: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  subdomain,
  onSelectProject,
  onOpenConfig,
}) => {
  const projects = getProjectsList(subdomain);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, url: string, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-red-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <span>Хөгжүүлсэн төслүүд</span>
              <span aria-hidden="true">·</span>
              <span>Нийт {projects.length} бүтээл</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Миний бүтээлүүд
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Миний хийсэн вэб хуудсууд болон тоглоомын төслүүд. Карт бүр дээр дарж
              шинэ цонхонд шууд нээж үзэх боломжтой.
            </p>
          </div>

          <button
            onClick={onOpenConfig}
            className="self-start md:self-auto px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>Netlify домэйн: <span className="text-blue-400 font-mono">{subdomain}</span></span>
          </button>
        </div>

        {/* Projects Grid: Responsive 2-column or 4-item list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Icon, Tag & Path */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center shrink-0">
                    {getIcon(project.iconName)}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <span className="text-neutral-500">#{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-400">{project.path}</span>
                  </div>
                </div>

                {/* Unboxed Metadata (Zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>{project.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span>HTML / CSS / JS</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <React.Fragment key={highlight}>
                      <span>{highlight}</span>
                      {hIdx < project.highlights.length - 1 && (
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons: 2 functional buttons per card */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  aria-label={`${project.title} дэлгэрэнгүй`}
                  className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Дэлгэрэнгүй</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleCopy(e, project.url, project.id)}
                    title="Линк хуулах"
                    className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    aria-label={`${project.title} линк хуулах`}
                  >
                    {copiedId === project.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
                  >
                    <span>Шинэ цонхонд нээх</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
