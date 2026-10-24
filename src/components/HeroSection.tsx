import React, { useState } from 'react';
import {
  Code2,
  ExternalLink,
  ChevronDown,
  User,
  Youtube,
  Sparkles,
  Gamepad2,
  Trophy,
} from 'lucide-react';
import { getProfileImageUrl, getProjectUrl } from '../utils/portfolio';

interface HeroSectionProps {
  subdomain: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ subdomain }) => {
  const [imgError, setImgError] = useState(false);
  const photoUrl = getProfileImageUrl(subdomain);
  // Verified working live links from user's deployments
  const dreamJobUrl = 'https://nimble-clafoutis-ea587a.netlify.app';
  const youtubeUrl = 'https://glittering-speculoos-0b31d2.netlify.app';

  return (
    <section id="about" className="pt-10 pb-16 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
              <span>Хувийн Танилцуулга</span>
              <span aria-hidden="true">·</span>
              <span>12 Настай</span>
              <span aria-hidden="true">·</span>
              <span>Код Хөгжүүлэгч</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
              Сайн байна уу, намайг <span className="text-blue-500">Сүлд-Очир</span> гэдэг!
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Би 12 настай. Ирээдүйд шилдэг программ хангамжийн инженер болох том
              мөрөөдөлтэйгээр технологи, код бичиж суралцаж байна. Чөлөөт цагаараа
              сагсан бөмбөг тоглох, найзуудтайгаа хамт Minecraft болон CS2 тоглох дуртай!
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 whitespace-nowrap shrink-0"
              >
                <span>Миний бүтээлүүд</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a
                href={dreamJobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 font-semibold rounded-xl transition-all whitespace-nowrap shrink-0"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Мөрөөдлийн ажил</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 font-semibold rounded-xl transition-all whitespace-nowrap shrink-0"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Миний YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card Container at Matching Height */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-neutral-900 border border-neutral-800 p-6 shadow-xl flex flex-col items-center text-center">
              {/* Profile Image with Resilient Fallback */}
              <div className="relative mb-5">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-neutral-800 shadow-inner flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={photoUrl}
                      alt="Сүлд-Очирын зураг"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 text-neutral-400">
                      <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2 font-bold text-2xl border border-blue-500/30">
                        С
                      </div>
                      <span className="text-xs font-medium text-neutral-300">Сүлд-Очир</span>
                      <span className="text-[10px] text-neutral-500 mt-0.5">my-photo.png</span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg border border-neutral-900">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Identity & Bio */}
              <h2 className="text-xl font-bold text-white mb-1">Сүлд-Очир</h2>
              <p className="text-xs text-neutral-400 mb-4">
                Ирээдүйн программ хангамжийн инженер · 12 настай
              </p>

              {/* Quick Spec Tags */}
              <div className="w-full grid grid-cols-2 gap-2 text-left pt-4 border-t border-neutral-800/80">
                <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Хобби</div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">Сагсан бөмбөг 🏀</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Дуртай тоглоом</div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">Minecraft & CS2 🎮</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Дуртай хоол</div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">Хуушуур 🥟</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400">Мөрөөдөл</div>
                  <div className="text-xs font-semibold text-blue-400 mt-0.5">Код инженер 💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Metric Strip below the split */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums">12</div>
              <div className="text-xs text-neutral-400">Нас (Улаанбаатар)</div>
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums">4</div>
              <div className="text-xs text-neutral-400">Нийт хийсэн вэб бүтээл</div>
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Сагс</div>
              <div className="text-xs text-neutral-400">Дуртай спортын төрөл</div>
            </div>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">MC & CS2</div>
              <div className="text-xs text-neutral-400">Шилдэг тоглоомууд</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
