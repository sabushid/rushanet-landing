"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const sectionIds = ["problems", "solutions", "results", "portfolio", "faq"]

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-clip">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c3aaea" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#804dd3" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Shader Backgrounds - Brand Purple Palette */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        {...{ colors: ["#000000", "#5400b1", "#804dd3", "#1a0040", "#c3aaea"], speed: 0.3 } as any}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        {...{ colors: ["#000000", "#ffffff", "#804dd3", "#5400b1"], speed: 0.2 } as any}
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#5400b1] backdrop-blur-xl border-b border-[#804dd3]/30" role="banner">
        <nav className="flex items-center justify-between px-5 md:px-8 py-3 md:py-4" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Rushanet — Home"
          >
            <Image src="/brand_logo.png" alt="Rushanet" width={160} height={60} className="h-10 md:h-14 w-auto brightness-0 invert" priority />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {t.nav.items.map((item, idx) => (
              <a
                key={idx}
                href={`#${sectionIds[idx]}`}
                className="text-white/70 hover:text-white active:text-white/90 text-sm font-medium px-4 py-2.5 min-h-[44px] flex items-center rounded-full hover:bg-white/10 active:bg-white/15 active:scale-95 transition-all duration-200 hover:-translate-y-0.5"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
              aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
            >
              <span className={locale === "en" ? "text-white" : "text-white/50"}>EN</span>
              <span className="text-white/30">|</span>
              <span className={locale === "fr" ? "text-white" : "text-white/50"}>FR</span>
            </button>

            {/* Desktop Book Demo */}
            <div className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
              <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-9 flex items-center justify-center -translate-x-12 group-hover:-translate-x-22 z-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <a href="#book-demo" className="px-7 py-2 rounded-full bg-[#5400b1] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#6a1fd1] hover:shadow-lg hover:shadow-[#5400b1]/30 hover:-translate-y-0.5 active:scale-95 active:bg-[#4a07a0] cursor-pointer h-9 flex items-center z-10 no-underline">
                {t.nav.bookDemo}
              </a>
            </div>
          </div>

          {/* Mobile: Language Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              className="flex items-center gap-1 px-2.5 py-1.5 min-h-[40px] rounded-lg bg-white/10 text-white/80 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
              aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
            >
              <span className={locale === "en" ? "text-white" : "text-white/50"}>EN</span>
              <span className="text-white/30">|</span>
              <span className={locale === "fr" ? "text-white" : "text-white/50"}>FR</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/10 active:bg-white/15 transition-colors"
              aria-label={menuOpen ? (locale === "fr" ? "Fermer le menu" : "Close menu") : (locale === "fr" ? "Ouvrir le menu" : "Open menu")}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full"
                animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full mt-1"
                animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-white rounded-full mt-1"
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          role="navigation"
          aria-label={locale === "fr" ? "Menu mobile" : "Mobile menu"}
        >
          <div className="px-5 pb-5 pt-2 flex flex-col gap-1 border-t border-white/10">
            {t.nav.items.map((item, i) => (
              <motion.a
                key={i}
                href={`#${sectionIds[i]}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white active:text-white hover:bg-white/10 active:bg-white/15 text-base font-medium px-4 py-3.5 min-h-[48px] flex items-center rounded-xl transition-all duration-200"
                initial={false}
                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.25, delay: menuOpen ? i * 0.05 : 0 }}
              >
                {item}
              </motion.a>
            ))}
            <a
              href="#book-demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center py-3.5 min-h-[48px] flex items-center justify-center rounded-xl bg-white/10 text-white font-semibold text-base hover:bg-white/20 active:bg-white/25 active:scale-[0.98] transition-all duration-200 no-underline"
            >
              {t.nav.bookDemo}
            </a>
          </div>
        </motion.div>
      </header>

      {/* Hero Content */}
      <main className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-32 md:pt-40 pointer-events-none">
        <div className="text-center max-w-3xl pointer-events-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#c3aaea] mr-3 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-xl md:text-2xl lg:text-3xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #c3aaea 30%, #804dd3 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {t.hero.line1}
            </motion.span>
            <span className="block font-black text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]">{t.hero.line2}</span>
            <span className="block font-light text-white italic [text-shadow:_0_2px_16px_rgba(0,0,0,0.4)]">{t.hero.line3}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg font-light text-white/90 mb-8 leading-relaxed max-w-lg mx-auto [text-shadow:_0_1px_10px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t.hero.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center justify-center gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#book-demo"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#5400b1] to-[#804dd3] text-white font-semibold text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/40 hover:shadow-2xl hover:from-[#6010c9] hover:to-[#9060e0] active:from-[#4a07a0] active:to-[#7040c0] no-underline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaPrimary}
            </motion.a>
            <motion.a
              href="#watch"
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/20 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-[#c3aaea]/60 hover:text-white active:bg-white/15 active:border-[#c3aaea] cursor-pointer backdrop-blur-sm no-underline flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            className="flex justify-center gap-8 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {t.hero.metrics.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white [text-shadow:_0_1px_8px_rgba(0,0,0,0.4)]">{stat.val}</div>
                <div className="text-xs text-white/70 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Pulsing Border Element */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex" aria-hidden="true">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#5400b1", "#804dd3", "#c3aaea", "#ffffff"] as [string, string, string, string]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            pulse={0.1}
            scale={0.65}
            rotation={0}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 font-medium">
              <textPath href="#circle" startOffset="0%">
                Rushanet • AI Automation • Real Estate • Never Miss a Lead •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
