"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/translations';

type Language = 'EN' | 'FR' | 'AR';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('EN');

  useEffect(() => {
    // Sync with url on load
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang')?.toUpperCase() as Language;
    if (urlLang && ['EN', 'FR', 'AR'].includes(urlLang)) {
      setLangState(urlLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang.toLowerCase());
    window.history.pushState({}, '', url);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang === 'AR' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
