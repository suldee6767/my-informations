export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  path: string;
  url: string;
  directLiveUrl: string;
  description: string;
  tag: string;
  iconName: string;
  highlights: string[];
  cosmicImage: string;
  stats: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
}

export interface HobbyItem {
  id: string;
  title: string;
  category: 'sport' | 'game' | 'food' | 'music';
  description: string;
  image?: string;
  note?: string;
  badge?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const DEFAULT_NETLIFY_SUBDOMAIN = 'nimble-clafoutis-ea587a';
export const YOUTUBE_NETLIFY_SUBDOMAIN = 'glittering-speculoos-0b31d2';

const NEBULA_EYE_IMG = '/src/assets/images/celestial_nebula_eye_1792809071292.jpg';
const WORMHOLE_IMG = '/src/assets/images/celestial_wormhole_1792809072155.jpg';
const BLACKHOLE_IMG = '/src/assets/images/celestial_blackhole_1792809071475.jpg';
const GAMING_IMG = '/src/assets/images/gaming_mc_cs_1792289088195.jpg';

/**
 * Normalizes user-inputted Netlify subdomain or full URL.
 */
export function normalizeSubdomain(raw: string): string {
  if (!raw || typeof raw !== 'string') {
    return DEFAULT_NETLIFY_SUBDOMAIN;
  }
  let cleaned = raw.trim();
  cleaned = cleaned.replace(/^\[|\]$/g, '').trim();
  if (!cleaned || cleaned.toLowerCase() === 'нетлифай' || cleaned.toLowerCase() === 'netlify') {
    return DEFAULT_NETLIFY_SUBDOMAIN;
  }
  cleaned = cleaned.replace(/^https?:\/\//i, '');
  cleaned = cleaned.split('/')[0];
  cleaned = cleaned.replace(/\.netlify\.app$/i, '');
  return cleaned.trim() || DEFAULT_NETLIFY_SUBDOMAIN;
}

/**
 * Builds standard Netlify base URL.
 */
export function getNetlifyBaseUrl(subdomain: string): string {
  const norm = normalizeSubdomain(subdomain);
  return `https://${norm}.netlify.app`;
}

/**
 * Returns full project page URL based on subdomain and path.
 */
export function getProjectUrl(subdomain: string, path: string): string {
  const base = getNetlifyBaseUrl(subdomain);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

/**
 * Returns profile image URL.
 */
export function getProfileImageUrl(subdomain: string): string {
  return getProjectUrl(subdomain, '/my-photo.png');
}

/**
 * Validates Contact Me form data.
 */
export function validateContactForm(data: Partial<ContactFormData>): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Та өөрийн нэрээ доод тал нь 2 үсэгтэй оруулна уу.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Зөв имэйл хаяг оруулна уу (жишээ: bat@example.com).';
  }

  if (!data.message || data.message.trim().length < 8) {
    errors.message = 'Мессежээ доод тал нь 8 тэмдэгттэй оруулна уу.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates the mandated list of projects with verified working live URLs.
 * Handles the direct active Netlify deployments (nimble-clafoutis-ea587a & glittering-speculoos-0b31d2)
 * so that both direct links and relative path files work without 404 errors.
 */
export function getProjectsList(subdomain: string): ProjectItem[] {
  const norm = normalizeSubdomain(subdomain);
  const dreamDirect = 'https://nimble-clafoutis-ea587a.netlify.app';
  const youtubeDirect = 'https://glittering-speculoos-0b31d2.netlify.app';

  return [
    {
      id: 'dream-job',
      index: '01',
      title: 'Мөрөөдлийн ажил',
      path: '/dream-job.html',
      // Primary URL uses direct live link for 100% guarantee, fallback path available
      url: dreamDirect,
      directLiveUrl: dreamDirect,
      description:
        'Ирээдүйд программ хангамжийн шилдэг инженер болох зорилго, төлөвлөгөө, технологийн мэдлэг болон суралцах замнал.',
      tag: 'Мөрөөдөл ба Зорилго',
      iconName: 'Code',
      highlights: ['Программчлалын үндэс', 'Вэб хөгжүүлэлт', 'Ирээдүйн зорилго'],
      cosmicImage: NEBULA_EYE_IMG,
      stats: {
        label1: 'Хөгжүүлэгч',
        value1: 'СҮЛД-ОЧИР',
        label2: 'Төлөв',
        value2: 'ОНЛАЙН ВЭБ',
      },
    },
    {
      id: 'my-youtube',
      index: '02',
      title: 'Миний YouTube',
      path: '/my-youtube.html',
      // Direct live working Netlify site for YouTube
      url: youtubeDirect,
      directLiveUrl: youtubeDirect,
      description:
        'Миний дуртай видео контентууд, YouTube сувгийн төсөл, тоглоомын шилдэг бичлэгүүд болон сонирхолтой бичлэгүүд.',
      tag: 'Видео Контент',
      iconName: 'Video',
      highlights: ['CS2 highlights', 'Minecraft бүтээлүүд', 'Технологийн бичлэг'],
      cosmicImage: WORMHOLE_IMG,
      stats: {
        label1: 'Төрөл',
        value1: 'YOUTUBE ТӨСӨЛ',
        label2: 'Суваг',
        value2: 'ИДЭВХТЭЙ',
      },
    },
    {
      id: 'game-site',
      index: '03',
      title: 'Тоглоомын сайт',
      path: '/tusul.html',
      url: getProjectUrl(norm, '/tusul.html'),
      directLiveUrl: getProjectUrl(norm, '/tusul.html'),
      description:
        'Интерактив мини тоглоом, сонирхолтой сорилууд болон тоглоомын вэб төслийн интерактив танилцуулга хуудас.',
      tag: 'Интерактив Төсөл',
      iconName: 'Gamepad2',
      highlights: ['Мини тоглоом', 'HTML5 & CSS', 'Интерактив туршлага'],
      cosmicImage: GAMING_IMG,
      stats: {
        label1: 'Төрөл',
        value1: 'ТОГЛООМЫН ВЭБ',
        label2: 'Технологи',
        value2: 'HTML5 & CSS',
      },
    },
    {
      id: 'pasture-game',
      index: '04',
      title: 'Малаа хашаандаа',
      path: '/togloom.html',
      url: getProjectUrl(norm, '/togloom.html'),
      directLiveUrl: getProjectUrl(norm, '/togloom.html'),
      description:
        'Монгол ахуй соёл, мал хашаалах хөгжилтэй логик тоглоом. Хүүхэд залууст зориулсан үндэсний сэдэвт төсөл.',
      tag: 'Монгол Тоглоом',
      iconName: 'Sparkles',
      highlights: ['Монгол ахуй', 'Логик тоглоом', 'Үндэсний өв соёл'],
      cosmicImage: BLACKHOLE_IMG,
      stats: {
        label1: 'Сэдэв',
        value1: 'МОНГОЛ АХУЙ',
        label2: 'Хэлбэр',
        value2: 'ЛОГИК ТОГЛООМ',
      },
    },
  ];
}
