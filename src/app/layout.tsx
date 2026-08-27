"use client";

import "./globals.css";
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useLanguage();

  const LanguageButton = ({ code, label }: { code: 'EN'|'FR'|'AR', label: string }) => {
    const isActive = lang === code;
    return (
      <button 
        onClick={() => setLang(code)}
        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all border-2
          ${isActive 
            ? 'border-brand-blue bg-brand-burgundy text-white' 
            : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
          }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
        {/* Top bar for quick contact */}
        <div className="bg-brand-burgundy text-white text-xs py-2 px-6 flex justify-between items-center hidden md:flex">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12}/> {t.shortAddress}</span>
            <span className="flex items-center gap-1"><Phone size={12}/> +961 8 805 641</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t.hoursVal}</span>
          </div>
        </div>

        <header className="border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <Link href={`/?lang=${lang.toLowerCase()}`} className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Librairie Nadine Logo" width={50} height={50} className="rounded-md object-cover" />
            <span className="font-bold text-2xl tracking-tight hidden sm:block text-brand-burgundy">Librairie Nadine</span>
          </Link>
          
          <nav className="hidden lg:flex gap-8 font-medium text-sm text-gray-600">
            <Link href={`/back-to-school?lang=${lang.toLowerCase()}`} className="hover:text-brand-burgundy transition-colors font-bold text-gray-900">{t.navB2S}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#offerings`} className="hover:text-brand-burgundy transition-colors">{t.navOfferings}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#gallery`} className="hover:text-brand-burgundy transition-colors">{t.navGallery}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#story`} className="hover:text-brand-burgundy transition-colors">{t.navStory}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#visit`} className="hover:text-brand-burgundy transition-colors">{t.navVisit}</Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3" dir="ltr">
              <LanguageButton code="EN" label="EN" />
              <LanguageButton code="FR" label="FR" />
              <LanguageButton code="AR" label="ع" />
            </div>
            
            <a 
              href="https://wa.me/96181255348" 
              target="_blank" 
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-90 bg-green-600 text-white px-5 py-2.5 rounded-full shadow-sm"
            >
              <MessageCircle size={18} />
              {t.whatsapp}
            </a>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-brand-light border-t px-6 py-16 text-center md:text-left">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Image src="/logo.jpeg" alt="Librairie Nadine Logo" width={40} height={40} className="rounded-md object-cover grayscale" />
                <div className="font-bold text-2xl tracking-tight text-brand-burgundy">Librairie Nadine</div>
              </div>
              <p className="text-sm text-gray-600 mb-6">{t.footerDesc}</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/NadineBookstore?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm" aria-label="Facebook">
                  <Facebook size={40} />
                </a>
                <a href="https://www.instagram.com/librairienadine" target="_blank" rel="noreferrer" className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4405F] hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                  <Instagram size={40} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-brand-burgundy mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href={`/?lang=${lang.toLowerCase()}#offerings`} className="hover:text-brand-burgundy">{t.navOfferings}</Link></li>
                <li><Link href={`/?lang=${lang.toLowerCase()}#story`} className="hover:text-brand-burgundy">{t.navStory}</Link></li>
                <li><Link href={`/?lang=${lang.toLowerCase()}#visit`} className="hover:text-brand-burgundy">{t.planVisit}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-burgundy mb-4">{t.navVisit}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>{t.addressVal}</li>
                <li className="pt-2 font-medium text-gray-900">{t.hoursVal}</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto border-t border-gray-200 mt-12 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} {t.rights}</p>
            <p className="mt-2 md:mt-0">{t.designed}</p>
          </div>
        </footer>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <title>Librairie Nadine | Zahlé</title>
      <meta name="description" content="A trusted family bookshop in Zahlé since 1978. Books, stationery, and more." />
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}
