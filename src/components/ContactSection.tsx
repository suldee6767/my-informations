import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, User, MapPin } from 'lucide-react';
import { validateContactForm, ContactFormData, ContactFormErrors } from '../utils/portfolio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real state-managed delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#04060c] border-b border-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
            <Mail className="w-4 h-4" />
            <span>Холбоо Барих</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Надтай холбогдох
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            Вэб хөгжүүлэлт, сонирхолтой төслүүд болон шинэ санаа хуваалцахыг хүсвэл доорх маягтаар
            надад мессеж илгээгээрэй!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Сүлд-Очир</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              12 настай код сонирхогч, ирээдүйн программ хангамжийн инженер.
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px] uppercase font-semibold">Имэйл хаяг</div>
                  <div className="text-neutral-200 mt-0.5">suldee.TA@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px] uppercase font-semibold">Байршил</div>
                  <div className="text-neutral-200 mt-0.5">Улаанбаатар хот, Монгол улс</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px] uppercase font-semibold">Төлөв</div>
                  <div className="text-neutral-200 mt-0.5">Шинэ технологи суралцаж байна 🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: State-Managed Contact Form */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            {isSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Мессеж илгээгдлээ!</h3>
                <p className="text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
                  Баярлалаа, <span className="font-semibold text-white">{formData.name}</span>! Таны
                  мессежийг хүлээн авлаа. Сүлд-Очир тантай удахгүй эргэн холбогдох болно.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  Шинэ мессеж бичих
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-300 mb-1">
                      Таны нэр <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Жишээ: Бат"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-neutral-300 mb-1">
                      Имэйл хаяг <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Жишээ: bat@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-neutral-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-neutral-300 mb-1">
                    Сэдэв (заавал биш)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Жишээ: Тоглоомын төслийн талаар"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-blue-500 text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-neutral-300 mb-1">
                    Мессеж <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Сүлд-Очирт илгээх мессежээ энд бичнэ үү..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-neutral-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Илгээж байна...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Мессеж илгээх</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
