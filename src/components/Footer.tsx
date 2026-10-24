import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { getNetlifyBaseUrl } from '../utils/portfolio';

interface FooterProps {
  subdomain: string;
}

export const Footer: React.FC<FooterProps> = ({ subdomain }) => {
  const mainUrl = getNetlifyBaseUrl(subdomain);

  return (
    <footer className="py-12 bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-lg font-bold text-white mb-1">Сүлд-Очир</div>
            <p className="text-neutral-500">
              12 настай код хөгжүүлэгчийн хувийн портфолио вэб хуудас.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Миний тухай
            </a>
            <a href="#interests" className="hover:text-white transition-colors">
              Сонирхол
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Бүтээлүүд
            </a>
            <a href="#dream" className="hover:text-white transition-colors">
              Мөрөөдөл
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Холбогдох
            </a>
            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Netlify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © 2026 Сүлд-Очир. Бүх эрх хуулиар хамгаалагдсан.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Монгол улс, Улаанбаатар хот</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Код болон бүтээлч байдалд дуртай <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
