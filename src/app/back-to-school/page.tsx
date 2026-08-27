"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function BackToSchool() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">


      
      {/* BACK TO SCHOOL SECTION */}
      <section id="back-to-school">
        <div className="flex flex-col lg:flex-row bg-[#4A1D1D]">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">{t.b2sEye}</div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">{t.b2sTitle}</h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
              {t.b2sDesc}
            </p>
            
            <div className="pt-8 border-t border-white/20">
              <h3 className="text-2xl font-serif text-white mb-6">{t.b2sEssTitle}</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s01Title}</li>
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s02Title}</li>
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s03Title}</li>
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s04Title}</li>
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s05Title}</li>
                <li className="flex items-center gap-4 text-gray-200 text-lg"><div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>{t.b2s06Title}</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
            <Image src="/photos/b2s_hero.jpeg" alt="Back to school backpacks" fill className="object-cover" />
          </div>
        </div>
      </section>


      {/* CREATIVE PHOTO GALLERY */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {/* Large feature image (spans 8 cols, 2 rows) */}
            <div className="md:col-span-8 md:row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-brand-burgundy/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image src="/photos/b2s_1.jpeg" alt="School supplies" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Top right smaller image (spans 4 cols, 1 row) */}
            <div className="md:col-span-4 md:row-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image src="/photos/b2s_2.jpeg" alt="Backpacks" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Bottom right smaller image (spans 4 cols, 1 row) */}
            <div className="md:col-span-4 md:row-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image src="/photos/b2s_3.jpeg" alt="Stationery" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Full width bottom image */}
            <div className="md:col-span-12 md:row-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image src="/photos/b2s_4.jpeg" alt="Bookstore shelves" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
