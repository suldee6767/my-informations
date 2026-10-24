import React from 'react';
import { ExternalLink, Settings } from 'lucide-react';
import { getNetlifyBaseUrl } from '../utils/portfolio';

interface NavbarProps {
  subdomain: string;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ subdomain, onOpenConfig }) => {
  const mainSiteUrl = getNetlifyBaseUrl(subdomain);

  return (
    <header className="sticky top-0 z-50 bg-[#03060c]/90 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Left: Soft Galaxy Style Logo & Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Dual overlapping cosmic circles mark */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute left-0 w-3.5 h-3.5 rounded-full bg-blue-500 opacity-90 group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="absolute right-0 w-3.5 h-3.5 rounded-full bg-cyan-400 opacity-90 group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
          <span className="text-sm font-black tracking-widest text-white uppercase group-hover:text-cyan-300 transition-colors">
            Сүлд-Очир
          </span>
        </a>

        {/* Right: Clean Nav Links matching screenshot */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-neutral-400">
          <a href="#" className="hover:text-white transition-colors uppercase">
            Нүүр
          </a>
          <a href="#projects" className="hover:text-white transition-colors uppercase">
            Бүтээлүүд
          </a>
          <a href="#interests" className="hover:text-white transition-colors uppercase">
            Сонирхол
          </a>
          <a href="#about-detail" className="hover:text-white transition-colors uppercase">
            Танилцуулга
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase text-neutral-300">
            Холбогдох
          </a>
        </nav>

        {/* Actions: Settings & Netlify Main Site */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenConfig}
            title="Netlify домэйн тохируулах"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors border border-transparent hover:border-neutral-800"
            aria-label="Netlify домэйн тохируулах"
          >
            <Settings className="w-4 h-4" />
          </button>

          <a
            href={mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
          >
            <span>Үндсэн сайт</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
