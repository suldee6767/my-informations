import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Minus, Plus, Sparkles, Check, Copy } from 'lucide-react';
import { ProjectItem, getProjectsList } from '../utils/portfolio';

interface CosmicHeroProps {
  subdomain: string;
  onSelectProjectModal: (project: ProjectItem) => void;
}

export const CosmicHero: React.FC<CosmicHeroProps> = ({
  subdomain,
  onSelectProjectModal,
}) => {
  const projects = getProjectsList(subdomain);
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeProject = projects[activeIndex] || projects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-[#03060c] overflow-hidden flex flex-col justify-between border-b border-neutral-900 select-none">
      {/* Background Astronomical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-4 divide-x divide-y divide-neutral-700/40">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-neutral-800/20" />
          ))}
        </div>
      </div>

      {/* Ambient Starlight Dust */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.15),transparent_70%)]" />

      {/* Main Cosmic Viewport Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex-1 flex flex-col justify-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Astronomical Project Info */}
          <div className="lg:col-span-4 relative z-20">
            {/* Background Watermark Index */}
            <div className="text-7xl sm:text-8xl font-black text-neutral-800/40 tracking-tighter mb-[-2.2rem] ml-1 select-none">
              {activeProject.index}
            </div>

            {/* Display Headline */}
            <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{activeProject.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
              {activeProject.title.startsWith('Миний ') ? (
                <>
                  <span className="font-light text-neutral-300">Миний </span>
                  <span className="text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {activeProject.title.replace(/^Миний\s+/, '')}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-light text-neutral-300">Төсөл: </span>
                  <span className="text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {activeProject.title}
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-md">
              {activeProject.description}
            </p>

            {/* Dual Stats Spec Box */}
            <div className="bg-neutral-950/80 border border-neutral-800/90 rounded-xl p-3 sm:p-4 mb-6 grid grid-cols-2 gap-4 max-w-md backdrop-blur-md">
              <div>
                <div className="text-[10px] uppercase font-semibold tracking-wider text-neutral-500">
                  {activeProject.stats.label1}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                  {activeProject.stats.value1}
                </div>
              </div>
              <div className="border-l border-neutral-800/80 pl-4">
                <div className="text-[10px] uppercase font-semibold tracking-wider text-neutral-500">
                  {activeProject.stats.label2}
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-400 mt-0.5 truncate">
                  {activeProject.stats.value2}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                <span>Шууд нээх</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onSelectProjectModal(activeProject)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-200 text-xs font-semibold rounded-lg transition-all"
              >
                <span>Дэлгэрэнгүй</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              <button
                onClick={() => handleCopyLink(activeProject.url, activeProject.id)}
                title="Линк хуулах"
                className="p-2.5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
                aria-label="Линк хуулах"
              >
                {copiedId === activeProject.id ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Center Column: The Glorious Cosmic Entity (Eye of God / Wormhole / Space Asset) */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[340px] sm:min-h-[420px]">
            {/* Glowing Aura Rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-orange-600/15 blur-2xl pointer-events-none" />

            {/* Main Interactive Celestial Orb */}
            <div className="relative group cursor-pointer" onClick={handleNext}>
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.35)] transition-transform duration-700 hover:scale-105">
                <img
                  src={activeProject.cosmicImage}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              {/* Ambient Badge Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md border border-neutral-700 px-3 py-1 rounded-full text-[11px] text-neutral-300 tracking-wider flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Эргүүлэх: {activeIndex + 1}/{projects.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sci-Fi Corner-Cut Navigation Cards (RELATED) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-neutral-400 pb-1 mb-1 border-b border-neutral-800">
              <span className="text-neutral-300 font-semibold">Бүтээлүүд</span>
              <span className="flex items-center gap-1 text-neutral-500">
                <span>Цэс</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={project.id}
                  data-testid={`cosmic-card-${project.id}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative p-3.5 cursor-pointer transition-all duration-200 rounded-xl border ${
                    isActive
                      ? 'bg-neutral-900/90 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                  }`}
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Circular Glowing Thumbnail */}
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-700 shrink-0 shadow-inner">
                      <img
                        src={project.cosmicImage}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text & Index */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-blue-400 font-bold">
                          {project.index}
                        </span>
                        {isActive && (
                          <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold">
                            Идэвхтэй
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Center: Interactive Slider / Tick Navigator */}
      <div className="relative z-20 pb-5 pt-2 flex items-center justify-center">
        <div className="inline-flex items-center gap-4 px-4 py-2 bg-neutral-950/90 border border-neutral-800 rounded-full backdrop-blur-md">
          {/* Minus / Prev Button */}
          <button
            onClick={handlePrev}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Өмнөх төсөл"
          >
            <Minus className="w-4 h-4" />
          </button>

          {/* Tick Marks Carousel Indicators */}
          <div className="flex items-center gap-2 px-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all ${
                  idx === activeIndex
                    ? 'w-6 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                    : 'w-2 h-1.5 bg-neutral-700 hover:bg-neutral-500 rounded-full'
                }`}
                aria-label={`Төсөл ${idx + 1}`}
              />
            ))}
          </div>

          {/* Plus / Next Button */}
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Дараагийн төсөл"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
