"use client";

import { BookOpen, PenTool, Gift, Users, Heart, MapPin, Navigation, Award } from 'lucide-react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative bg-brand-light px-6 pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden flex flex-col items-center text-center border-b">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/photos/hero.jpeg" alt="Librairie Nadine Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-brand-burgundy mb-6">{t.heroSub}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#visit" className="bg-brand-burgundy text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
              <MapPin size={20} />
              {t.planVisit}
            </a>
            <a href="tel:+9618805641" className="bg-white border-2 border-brand-burgundy text-brand-burgundy px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm">
              {t.callShop}
            </a>
          </div>
        </div>
      </section>      {/* WHAT WE OFFER SECTION */}
      <section id="offerings" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-brand-burgundy">{t.offeringsTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.offeringsDesc}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.booksTitle}</h3>
              <p className="text-gray-600">{t.booksDesc}</p>
            </div>
            
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.statTitle}</h3>
              <p className="text-gray-600">{t.statDesc}</p>
            </div>
            
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                <Gift size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t.toysTitle}</h3>
              <p className="text-gray-600">{t.toysDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE */}
      <section id="gallery" className="py-16 md:py-24 bg-brand-burgundy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-light mb-2">{t.gallerySub}</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t.galleryTitle}</h2>
          </div>
          <p className="text-gray-200 max-w-md md:text-right text-lg">{t.galleryDesc}</p>
        </div>
        <div className="relative z-10 px-6">
          <Carousel images={[
            '/photos/1.jpeg',
            '/photos/2.jpeg',
            '/photos/3.jpeg',
            '/photos/4.jpeg',
            '/photos/5.jpeg'
          ]} />
        </div>
      </section>

      {/* STORY & VALUES SECTION */}
      <section id="story" className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-5 bg-gradient-to-r from-[#602525] to-[#4A1D1D] text-white px-8 py-5 rounded-2xl shadow-xl mb-10 border border-[#602525]/20 transform transition-transform hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full shadow-inner flex-shrink-0">
                <Award className="text-[#4A1D1D]" size={36} />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {t.storyTag}
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">{t.storyTitle}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.storyP1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.storyP2}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                <Heart className="text-brand-burgundy mb-3" size={28} />
                <h4 className="font-bold text-lg mb-1 text-gray-900">{t.warmth}</h4>
                <p className="text-sm text-gray-600">{t.warmthDesc}</p>
              </div>
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                <Users className="text-brand-blue mb-3" size={28} />
                <h4 className="font-bold text-lg mb-1 text-gray-900">{t.trust}</h4>
                <p className="text-sm text-gray-600">{t.trustDesc}</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-brand-light shadow-xl bg-gradient-to-b from-brand-light to-gray-200">
              {/* Yousef's Extracted Face */}
              <Image src="/photos/yousef.png" alt="Joseph Tohme" fill className="object-cover object-center scale-110" />
            </div>
          </div>
        </div>
      </section>

      
      {/* VALUES / FOUNDING GRID SECTION */}
      <section className="px-6 py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          
          <div className="md:pr-12 md:border-r border-gray-200">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val01Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val01Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val01Text}
            </p>
          </div>

          <div className="md:px-12 md:border-r border-gray-200">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val02Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val02Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val02Text}
            </p>
          </div>

          <div className="md:pl-12">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val03Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val03Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val03Text}
            </p>
          </div>

        </div>
      </section>

      {/* VISIT US SECTION */}
      <section id="visit" className="px-6 py-16 md:py-24 bg-brand-light border-t">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-brand-burgundy">{t.visitTitle}</h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-12 text-left items-center">
            <div className="flex-1 space-y-8 w-full">
              <div>
                <h3 className="font-bold text-2xl mb-2 text-gray-900">{t.address}</h3>
                <p className="text-gray-600 text-lg">{t.addressVal}</p>
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-2 text-gray-900">{t.hours}</h3>
                <p className="text-gray-600 text-lg">{t.hoursVal}</p>
              </div>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a href="https://maps.google.com/?q=Librairie+Nadine+Zahle" target="_blank" rel="noreferrer" className="bg-brand-burgundy text-white px-8 py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-md">
                  <Navigation size={20} /> {t.getDir}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden shadow-inner border border-gray-100">
               <Image src="/photos/storefront.jpg" alt="Storefront location" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
