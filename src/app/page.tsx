"use client"

import ShaderHero from "@/components/ui/hero";
import { useLanguage } from "@/lib/language-context";
import { Clock, PhoneOff, FileSpreadsheet, Timer, Zap, Calendar, MessageCircle, BarChart3, Phone, Wrench } from "lucide-react";
import type { ReactNode } from "react";

const problemIcons: ReactNode[] = [
  <Clock key="clock" className="w-6 h-6" />,
  <PhoneOff key="phoneoff" className="w-6 h-6" />,
  <FileSpreadsheet key="filesheet" className="w-6 h-6" />,
  <Timer key="timer" className="w-6 h-6" />,
];

const solutionIcons: ReactNode[] = [
  <Zap key="zap" className="w-6 h-6" />,
  <Calendar key="calendar" className="w-6 h-6" />,
  <MessageCircle key="msgcircle" className="w-6 h-6" />,
  <BarChart3 key="barchart" className="w-6 h-6" />,
  <Phone key="phone" className="w-6 h-6" />,
  <Wrench key="wrench" className="w-6 h-6" />,
];

function SectionHead({ tag, title, titleEm, desc }: { tag: string; title: string; titleEm: string; desc: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#5400b1] bg-[#5400b1]/5 px-4 py-1.5 rounded-full mb-4">{tag}</span>
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold mb-4">
        {title} <em className="not-italic bg-gradient-to-r from-[#5400b1] to-[#804dd3] bg-clip-text text-transparent">{titleEm}</em>
      </h2>
      {desc && <p className="text-gray-500 text-lg leading-relaxed">{desc}</p>}
    </div>
  );
}

export default function Home() {
  const { locale, t } = useLanguage();

  return (
    <div>
      <a href="#problems" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#5400b1] focus:rounded-lg focus:font-semibold focus:shadow-lg">
        {t.nav.skipToContent}
      </a>
      <ShaderHero />

      {/* Problems */}
      <section id="problems" className="py-24 bg-[#f7f5fc]" aria-labelledby="problems-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead tag={t.problems.tag} title={t.problems.title} titleEm={t.problems.titleEm} desc={t.problems.desc} />
          <div className="grid md:grid-cols-2 gap-5">
            {t.problems.items.map((p, i) => (
              <article key={i} className="bg-white rounded-2xl p-8 border border-[#5400b1]/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5400b1] to-[#804dd3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-12 h-12 rounded-xl bg-[#5400b1]/5 text-[#5400b1] flex items-center justify-center mb-5" aria-hidden="true">{problemIcons[i]}</div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24" aria-labelledby="solutions-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead tag={t.solutions.tag} title={t.solutions.title} titleEm={t.solutions.titleEm} desc={t.solutions.desc} />
          <div className="grid md:grid-cols-3 gap-5">
            {t.solutions.items.map((s, i) => (
              <article key={i} className="bg-white rounded-2xl p-8 border border-[#5400b1]/5 hover:-translate-y-1 hover:shadow-xl hover:border-[#c3aaea] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5400b1]/5 to-[#804dd3]/5 text-[#5400b1] flex items-center justify-center mb-5" aria-hidden="true">{solutionIcons[i]}</div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-base font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-24 bg-gradient-to-br from-[#5400b1] to-[#2d0063] text-white relative overflow-hidden" aria-labelledby="results-heading">
        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-[#804dd3]/15 blur-[100px]" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#c3aaea] bg-white/10 px-4 py-1.5 rounded-full mb-4">{t.results.tag}</span>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold mb-4">{t.results.title} <em className="not-italic text-[#c3aaea]">{t.results.titleEm}</em></h2>
            <p className="text-white/60 text-lg">{t.results.desc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.results.items.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-extrabold text-[#c3aaea] mb-2">{r.val}</div>
                <div className="text-sm text-white/60">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="book-demo" className="py-24 bg-[#f7f5fc]" aria-labelledby="form-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-extrabold mb-5">{t.form.title} <em className="not-italic bg-gradient-to-r from-[#5400b1] to-[#804dd3] bg-clip-text text-transparent">{t.form.titleEm}</em></h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{t.form.desc}</p>
              <ul className="space-y-4">
                {t.form.benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-7 h-7 rounded-full bg-[#5400b1]/5 text-[#5400b1] flex items-center justify-center text-xs font-bold shrink-0" aria-hidden="true">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#5400b1]/8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5400b1] via-[#804dd3] to-[#c3aaea]" aria-hidden="true" />
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-center mb-7">{t.form.formTitle}</h3>
              <form action="https://formsubmit.co/sabushid@gmail.com" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Lead from Rushanet Landing Page" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://realestate.rushanet.com/#book-demo" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">{t.form.firstName} <span className="text-[#5400b1]" aria-hidden="true">*</span></label>
                    <input type="text" name="first_name" required placeholder={t.form.firstNamePlaceholder} className="w-full px-4 py-3.5 min-h-[48px] rounded-xl border border-[#5400b1]/10 bg-[#f7f5fc] text-sm focus:border-[#804dd3] focus:ring-2 focus:ring-[#804dd3]/15 focus:bg-white hover:border-[#804dd3]/30 outline-none transition-all duration-200" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1 block">{t.form.lastName} <span className="text-[#5400b1]" aria-hidden="true">*</span></label>
                    <input type="text" name="last_name" required placeholder={t.form.lastNamePlaceholder} className="w-full px-4 py-3.5 min-h-[48px] rounded-xl border border-[#5400b1]/10 bg-[#f7f5fc] text-sm focus:border-[#804dd3] focus:ring-2 focus:ring-[#804dd3]/15 focus:bg-white hover:border-[#804dd3]/30 outline-none transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">{t.form.email} <span className="text-[#5400b1]" aria-hidden="true">*</span></label>
                  <input type="email" name="email" required placeholder={t.form.emailPlaceholder} className="w-full px-4 py-3.5 min-h-[48px] rounded-xl border border-[#5400b1]/10 bg-[#f7f5fc] text-sm focus:border-[#804dd3] focus:ring-2 focus:ring-[#804dd3]/15 focus:bg-white hover:border-[#804dd3]/30 outline-none transition-all duration-200" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">{t.form.phone} <span className="text-[#5400b1]" aria-hidden="true">*</span></label>
                  <input type="tel" name="phone" required placeholder={t.form.phonePlaceholder} className="w-full px-4 py-3.5 min-h-[48px] rounded-xl border border-[#5400b1]/10 bg-[#f7f5fc] text-sm focus:border-[#804dd3] focus:ring-2 focus:ring-[#804dd3]/15 focus:bg-white hover:border-[#804dd3]/30 outline-none transition-all duration-200" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1 block">{t.form.interestedIn}</label>
                  <select name="interested_in" defaultValue="" className="w-full px-4 py-3.5 min-h-[48px] rounded-xl border border-[#5400b1]/10 bg-[#f7f5fc] text-sm focus:border-[#804dd3] outline-none transition-all">
                    <option value="" disabled>{t.form.selectPlaceholder}</option>
                    {t.form.options.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full py-4 min-h-[52px] rounded-xl bg-gradient-to-r from-[#5400b1] to-[#804dd3] text-white font-bold cursor-pointer hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#5400b1]/25 hover:from-[#6010c9] hover:to-[#9060e0] active:scale-[0.98] active:from-[#4a07a0] active:to-[#7040c0] transition-all duration-300 mt-2">{t.form.submit}</button>
                <p className="text-center text-xs text-gray-400 italic">{t.form.privacy}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24" aria-labelledby="howitworks-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead tag={t.howItWorks.tag} title={t.howItWorks.title} titleEm={t.howItWorks.titleEm} desc={t.howItWorks.desc} />
          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#c3aaea] via-[#5400b1] to-[#c3aaea] opacity-20" aria-hidden="true" />
            {t.howItWorks.steps.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full border-2 border-[#c3aaea] bg-white flex items-center justify-center mx-auto mb-6 font-[family-name:var(--font-montserrat)] text-2xl font-extrabold text-[#5400b1] relative z-10 group-hover:bg-[#5400b1] group-hover:text-white group-hover:border-[#5400b1] group-hover:scale-110 transition-all duration-300">{s.n}</div>
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-2">{s.t}</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="watch" className="py-24 bg-[#f7f5fc]" aria-labelledby="video-heading">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead tag={t.video.tag} title={t.video.title} titleEm={t.video.titleEm} desc="" />
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#5400b1]/10 border border-[#5400b1]/5">
            <video controls className="w-full block" key={locale}>
              <source src={locale === "fr" ? "/RealEstateAd-FR.mp4" : "/RealEstateAd.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHead tag={t.faq.tag} title={t.faq.title} titleEm={t.faq.titleEm} desc="" />
          <div className="space-y-3">
            {t.faq.items.map((f, i) => (
              <details key={i} className="bg-white rounded-2xl border border-[#5400b1]/5 group hover:border-[#c3aaea]/50 hover:shadow-md transition-all duration-300">
                <summary className="px-7 py-5 min-h-[52px] cursor-pointer font-semibold text-sm flex justify-between items-center hover:text-[#5400b1] active:text-[#4a07a0] transition-colors [&::-webkit-details-marker]:hidden" role="button">
                  {f.q}
                  <span className="text-[#804dd3] text-xl font-light ml-4 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="px-7 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-[#f7f5fc]" aria-labelledby="portfolio-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead tag={t.portfolio.tag} title={t.portfolio.title} titleEm={t.portfolio.titleEm} desc={t.portfolio.desc} />
          <div className="grid md:grid-cols-2 gap-5">
            {t.portfolio.items.map((p, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden border border-[#5400b1]/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#5400b1] to-[#804dd3] px-7 py-5 relative overflow-hidden">
                  <div className="absolute top-[-30px] right-[-30px] w-24 h-24 rounded-full bg-white/5" aria-hidden="true" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c3aaea] mb-1">Project {p.num}</div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-white font-bold text-sm leading-snug">{p.title}</h3>
                </div>
                <div className="px-7 py-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {p.metrics.map((m, j) => (
                      <div key={j} className="bg-[#f7f5fc] rounded-lg px-3 py-2 flex items-center gap-2">
                        <span className="text-base font-extrabold bg-gradient-to-r from-[#5400b1] to-[#804dd3] bg-clip-text text-transparent">{m.v}</span>
                        <span className="text-[10px] text-gray-400">{m.l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#5400b1]/5 text-[#5400b1] uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead tag={t.testimonials.tag} title={t.testimonials.title} titleEm={t.testimonials.titleEm} desc={t.testimonials.desc} />
          <div className="grid md:grid-cols-3 gap-5">
            {t.testimonials.items.map((item, i) => (
              <article key={i} className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${item.featured ? "bg-gradient-to-br from-[#5400b1] to-[#2d0063] text-white md:col-span-2 hover:shadow-2xl" : "bg-white border border-[#5400b1]/5 hover:shadow-xl hover:border-[#c3aaea]"}`}>
                <div className="text-amber-400 text-sm mb-3 tracking-wider" aria-label={`5 ${locale === "fr" ? "étoiles" : "stars"}`}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className={`text-sm italic leading-relaxed mb-5 ${item.featured ? "text-white/90 text-base" : "text-gray-700"}`}>&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${item.featured ? "bg-white/15 text-white" : "bg-gradient-to-br from-[#c3aaea] to-[#804dd3] text-white"}`} aria-hidden="true">{item.init}</div>
                  <div>
                    <div className={`text-sm font-bold ${item.featured ? "text-white" : ""}`}>{item.name}</div>
                    <div className={`text-xs ${item.featured ? "text-[#c3aaea]" : "text-gray-400"}`}>{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-[#5400b1] to-[#1a0040] text-white text-center relative overflow-hidden">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#804dd3]/15 blur-[120px]" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-extrabold mb-5">{t.cta.title}<br />{t.cta.titleBreak}</h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">{t.cta.desc}</p>
          <a href="#book-demo" className="inline-block px-12 py-5 min-h-[52px] rounded-2xl bg-white text-[#5400b1] font-bold text-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 active:scale-95 active:shadow-lg transition-all duration-300 no-underline">{t.cta.button}</a>
          <p className="mt-5 text-sm text-white/30">{t.cta.note}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0040] text-white/30 text-center py-8 text-sm" role="contentinfo">
        {t.footer.copy} <a href="#" className="text-[#c3aaea] no-underline hover:text-white transition-colors">{t.footer.brand}</a> — {t.footer.tagline}
      </footer>
    </div>
  );
}
