"use client";

import "./globals.css";
import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const LanguageButton = ({ code, label }: { code: 'EN'|'FR'|'AR', label: string }) => {
    const isActive = lang === code;
    return (
      <button 
        onClick={() => setLang(code)}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all border-2
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

        <header className="border-b px-4 md:px-6 py-3 md:py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <Link href={`/?lang=${lang.toLowerCase()}`} className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Librairie Nadine Logo" width={50} height={50} className="rounded-md object-cover w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
            <span className="font-bold text-2xl tracking-tight hidden sm:block text-brand-burgundy">Librairie Nadine</span>
          </Link>
          
          <nav className="hidden lg:flex gap-8 font-medium text-sm text-gray-600">
            <Link href={`/?lang=${lang.toLowerCase()}#offerings`} className="hover:text-brand-burgundy transition-colors">{t.navOfferings}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#gallery`} className="hover:text-brand-burgundy transition-colors">{t.navGallery}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#story`} className="hover:text-brand-burgundy transition-colors">{t.navStory}</Link>
            <Link href={`/?lang=${lang.toLowerCase()}#visit`} className="hover:text-brand-burgundy transition-colors">{t.navVisit}</Link>
            <Link href={`/back-to-school?lang=${lang.toLowerCase()}`} className="hover:text-brand-burgundy transition-colors font-bold text-gray-900">{t.navB2S}</Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-3" dir="ltr">
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
            
            <Link 
              href={`/back-to-school?lang=${lang.toLowerCase()}`} 
              className="lg:hidden bg-yellow-500 text-[#4A1D1D] px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-sm whitespace-nowrap"
            >
              {t.navB2S}
            </Link>

            <button 
              className="lg:hidden p-2 -mr-2 text-brand-burgundy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
        
        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b shadow-lg absolute w-full z-40">
            <div className="flex items-center justify-center gap-4 pt-6 pb-4 border-b" dir="ltr">
              <LanguageButton code="EN" label="EN" />
              <LanguageButton code="FR" label="FR" />
              <LanguageButton code="AR" label="ع" />
            </div>
            <nav className="flex flex-col px-6 pb-4 gap-4 font-medium text-lg text-gray-800">
              <Link onClick={() => setMobileMenuOpen(false)} href={`/?lang=${lang.toLowerCase()}#offerings`} className="hover:text-brand-burgundy border-b pb-2">{t.navOfferings}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/?lang=${lang.toLowerCase()}#gallery`} className="hover:text-brand-burgundy border-b pb-2">{t.navGallery}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/?lang=${lang.toLowerCase()}#story`} className="hover:text-brand-burgundy border-b pb-2">{t.navStory}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/?lang=${lang.toLowerCase()}#visit`} className="hover:text-brand-burgundy border-b pb-2">{t.navVisit}</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href={`/back-to-school?lang=${lang.toLowerCase()}`} className="hover:text-brand-burgundy font-bold text-gray-900 border-b pb-2">{t.navB2S}</Link>
              <a 
                href="https://wa.me/96181255348" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-white bg-green-600 px-5 py-3 rounded-full mt-2 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={20} />
                {t.whatsapp}
              </a>
              
              <div className="mt-4 pt-4 border-t flex flex-col gap-3 text-sm text-gray-500">
                <a href="tel:+9618805641" className="flex items-center gap-2 hover:text-brand-burgundy">
                  <Phone size={16} /> +961 8 805 641
                </a>
                <a href="https://maps.google.com/?q=Librairie+Nadine+Zahle" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-burgundy">
                  <MapPin size={16} /> {t.shortAddress}
                </a>
              </div>
            </nav>
          </div>
        )}
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
                <a href="https://www.facebook.com/NadineBookstore?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-20 h-20 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm" aria-label="Facebook">
                  <Facebook size={40} />
                </a>
                <a href="https://www.instagram.com/librairienadine" target="_blank" rel="noreferrer" className="w-20 h-20 rounded-full bg-[#E4405F] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm" aria-label="Instagram">
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
