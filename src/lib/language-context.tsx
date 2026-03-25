"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { translations, type Locale, type TranslationSet } from "./translations"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationSet
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem("locale", newLocale)
    } catch {}
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null
      if (saved === "en" || saved === "fr") {
        setLocaleState(saved)
      }
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = translations[locale].meta.title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute("content", translations[locale].meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", translations[locale].meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", translations[locale].meta.description)
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute("content", locale === "fr" ? "fr_FR" : "en_US")
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
