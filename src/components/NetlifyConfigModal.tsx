import React, { useState } from 'react';
import { X, Check, Globe, RefreshCw } from 'lucide-react';
import {
  DEFAULT_NETLIFY_SUBDOMAIN,
  normalizeSubdomain,
  getProjectUrl,
  getProfileImageUrl,
  getNetlifyBaseUrl,
} from '../utils/portfolio';

interface NetlifyConfigModalProps {
  isOpen: boolean;
  currentSubdomain: string;
  onSave: (newSubdomain: string) => void;
  onClose: () => void;
}

export const NetlifyConfigModal: React.FC<NetlifyConfigModalProps> = ({
  isOpen,
  currentSubdomain,
  onSave,
  onClose,
}) => {
  const [val, setVal] = useState(currentSubdomain);

  if (!isOpen) return null;

  const previewSubdomain = normalizeSubdomain(val);
  const photoUrl = getProfileImageUrl(previewSubdomain);
  const mainUrl = getNetlifyBaseUrl(previewSubdomain);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(previewSubdomain);
    onClose();
  };

  const handleReset = () => {
    setVal(DEFAULT_NETLIFY_SUBDOMAIN);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Хаах"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
          <Globe className="w-4 h-4" />
          <span>Netlify Холболт</span>
        </div>

        <h3 id="config-modal-title" className="text-xl font-bold text-white mb-2">
          Netlify домэйн хаяг тохируулах
        </h3>

        <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
          Та Netlify дээр байршуулсан сайтынхаа дэд домэйн нэрийг оруулснаар таны зураг болон
          бүх бүтээлүүдийн линк автоматаар шинэчлэгдэнэ.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="subdomain-input" className="block text-xs font-medium text-neutral-300 mb-1.5">
              Netlify дэд домэйн (subdomain)
            </label>
            <div className="flex items-center rounded-xl bg-neutral-950 border border-neutral-800 focus-within:border-blue-500 overflow-hidden">
              <span className="pl-3.5 text-xs text-neutral-500 font-mono">https://</span>
              <input
                id="subdomain-input"
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="жишээ: nimble-clafoutis-ea587a"
                className="w-full bg-transparent px-2 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none font-mono"
              />
              <span className="pr-3.5 text-xs text-neutral-500 font-mono">.netlify.app</span>
            </div>
          </div>

          {/* Preview list */}
          <div className="p-3 bg-neutral-950/70 rounded-xl border border-neutral-800 space-y-1.5 text-xs">
            <div className="text-[11px] font-semibold text-neutral-400 mb-1">
              Урьдчилан харах линкүүд:
            </div>
            <div className="truncate text-neutral-300">
              <span className="text-neutral-500">Үндсэн сайт:</span> {mainUrl}
            </div>
            <div className="truncate text-neutral-300">
              <span className="text-neutral-500">Зураг:</span> {photoUrl}
            </div>
            <div className="truncate text-neutral-300">
              <span className="text-neutral-500">Мөрөөдлийн ажил:</span>{' '}
              {getProjectUrl(previewSubdomain, '/dream-job.html')}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 py-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Анхны утгад буцаах</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded-lg transition-colors"
              >
                Болих
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Хадгалах</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
