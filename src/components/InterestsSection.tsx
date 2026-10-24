import React, { useState } from 'react';
import {
  Trophy,
  Gamepad2,
  UtensilsCrossed,
  VolumeX,
  Volume2,
  Sparkles,
} from 'lucide-react';

const HUUSHUUR_IMG = '/src/assets/images/huushuur_mongolian_1792289087920.jpg';
const GAMING_IMG = '/src/assets/images/gaming_mc_cs_1792289088195.jpg';
const BASKETBALL_IMG = '/src/assets/images/basketball_hobby_1792289088511.jpg';

export const InterestsSection: React.FC = () => {
  const [basketScore, setBasketScore] = useState(12);
  const [lastShot, setLastShot] = useState<string | null>(null);
  const [soundPreference, setSoundPreference] = useState<'quiet' | 'ambient'>('quiet');

  const handleShoot = (points: number) => {
    setBasketScore((prev) => prev + points);
    setLastShot(`+${points} оноо орлоо! 🏀`);
    setTimeout(() => setLastShot(null), 1800);
  };

  return (
    <section id="interests" className="py-16 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <span>Хувийн Сонирхол</span>
            <span aria-hidden="true">·</span>
            <span>Чөлөөт Цаг</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Сонирхол ба Хобби
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
            Код бичихээс гадна миний дурлаж хийдэг зүйлс, дуртай хоол болон чөлөөт цагаа өнгөрөөдөг сонирхлууд.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Basketball (Span 7) */}
          <div className="md:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Сагсан бөмбөг</h3>
                    <div className="text-xs text-neutral-400">Миний №1 спортын хобби</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-neutral-400">Нийт оноо</div>
                  <div className="text-lg font-bold text-amber-400 tabular-nums">
                    {basketScore}
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Миний хамгийн дуртай хобби бол сагсан бөмбөг. Найзуудтайгаа гадаа талбайд
                болон зааланд тоглох, оновчтой шидэлт хийж, багаараа хамтран тоглох нь маш их
                эрч хүч өгдөг.
              </p>

              {/* Interactive Basket Shooter */}
              <div className="bg-neutral-950/70 border border-neutral-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-neutral-300">
                  <span className="font-semibold text-white">Сагсанд бөмбөг шидэх:</span>{' '}
                  {lastShot ? (
                    <span className="text-amber-400 font-bold ml-1">{lastShot}</span>
                  ) : (
                    <span className="text-neutral-500">Шидэж оноогоо нэмээрэй!</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShoot(2)}
                    className="px-3 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                  >
                    2 оноо шидэх
                  </button>
                  <button
                    onClick={() => handleShoot(3)}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors"
                  >
                    3 оноо шидэх 🔥
                  </button>
                </div>
              </div>
            </div>

            <div className="h-56 sm:h-64 relative overflow-hidden">
              <img
                src={BASKETBALL_IMG}
                alt="Сагсан бөмбөгийн талбай"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>
          </div>

          {/* Card 2: Favorite Food - Huushuur (Span 5) */}
          <div className="md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Дуртай хоол: Хуушуур</h3>
                  <div className="text-xs text-neutral-400">Амтат уламжлалт зоог</div>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Миний хамгийн дуртай хоол бол гарцаагүй халуун шаржигнасан хуушуур! Шинэхэн
                шарагдаад гараад ирсэн, шүүслэг сайхан хуушуурыг юутай ч зүйрлэшгүй амттай.
              </p>
            </div>

            <div className="h-56 sm:h-64 relative overflow-hidden">
              <img
                src={HUUSHUUR_IMG}
                alt="Амтат Монгол хуушуур"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>
          </div>

          {/* Card 3: Minecraft & CS2 (Span 7) */}
          <div className="md:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Minecraft & CS2</h3>
                  <div className="text-xs text-neutral-400">Шилдэг видео тоглоомууд</div>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Би компьютер тоглоомоос Minecraft болон Counter-Strike 2 (CS2) тоглох маш их
                дуртай. Minecraft дээр бүтээлчээр төрөл бүрийн байгууламж босгодог бол CS2
                дээр рефлекс, тактик болон багаар ажиллах хурд шаарддаг.
              </p>

              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span>Minecraft бүтээлүүд</span>
                <span aria-hidden="true">·</span>
                <span>CS2 тактик & баг</span>
                <span aria-hidden="true">·</span>
                <span>Esports уур амьсгал</span>
              </div>
            </div>

            <div className="h-56 sm:h-64 relative overflow-hidden">
              <img
                src={GAMING_IMG}
                alt="Minecraft болон CS2 тоглоомын орчин"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>
          </div>

          {/* Card 4: Music Preference - Honest & Authentic (Span 5) */}
          <div className="md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <VolumeX className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Хөгжмийн тухай</h3>
                  <div className="text-xs text-neutral-400">Миний бодит үзэл бодол</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 mb-4">
                <div className="text-sm font-semibold text-neutral-200 mb-1">
                  «Би дуу сонсох нэг их сонирхолгүй»
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Ихэнх хүмүүс өдөр бүр хөгжим сонсдог бол би дуу чимээнээс илүү нам гүм,
                  код бичиж байх үеийн анхаарал төвлөрөл эсвэл тоглоомын өөрийн дуу авиа,
                  сагсны бөмбөг шидэх чимээнд дуртай!
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Анхаарал төвлөрөл & Бүтээлч байдал</span>
              </span>
              <button
                onClick={() =>
                  setSoundPreference(prev => (prev === 'quiet' ? 'ambient' : 'quiet'))
                }
                className="text-neutral-300 hover:text-white flex items-center gap-1 text-[11px] bg-neutral-800 px-2.5 py-1 rounded"
              >
                {soundPreference === 'quiet' ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Нам гүм горим</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Фокус горим</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
