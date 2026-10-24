import React from 'react';
import { Code2, ExternalLink, Rocket, Laptop, CheckCircle2 } from 'lucide-react';
import { getProjectUrl, getNetlifyBaseUrl } from '../utils/portfolio';

const CODING_IMG = '/src/assets/images/coding_dream_engineer_1792289088663.jpg';

interface DreamSectionProps {
  subdomain: string;
}

export const DreamSection: React.FC<DreamSectionProps> = ({ subdomain }) => {
  const dreamJobUrl = 'https://nimble-clafoutis-ea587a.netlify.app';
  const mainSiteUrl = getNetlifyBaseUrl(subdomain);

  const skills = [
    'HTML5 & Цэвэр бүтэц зохион байгуулалт',
    'CSS3 & Орчин үеийн загварчлал',
    'JavaScript суурь логик & Интерактив тоглоом',
    'Вэб хөгжүүлэлт & Netlify байршуулалт',
  ];

  return (
    <section id="dream" className="py-16 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                <Rocket className="w-4 h-4" />
                <span>Ирээдүйн Эрхэм Зорилго</span>
                <span aria-hidden="true">·</span>
                <span>Мөрөөдөл</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Миний мөрөөдөл: <br />
                <span className="text-blue-500">Код инженер</span> болох
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                Би том болоод дэлхийн хэмжээний чадварлаг програм хангамжийн инженер болохыг
                хүсдэг. Хүмүүсийн амьдралыг хөнгөвчилсөн шилдэг аппликейшн, сонирхолтой тоглоомууд
                бүтээж, Монгол улсаа дэлхийд таниулах нь миний хамгийн том мөрөөдөл юм.
              </p>

              {/* Skills Roadmap */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={dreamJobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 whitespace-nowrap shrink-0"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Мөрөөдлийн хуудас үзэх</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={mainSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold rounded-xl transition-all whitespace-nowrap shrink-0"
                >
                  <Laptop className="w-4 h-4 text-neutral-400" />
                  <span>Үндсэн сайт нээх</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl">
                <img
                  src={CODING_IMG}
                  alt="Програм хангамжийн инженерийн ажлын орчин"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-xs text-neutral-200">
                    <span className="font-semibold text-white">Зорилго:</span> Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
