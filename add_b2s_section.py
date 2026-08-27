import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

new_section = """
      {/* BACK TO SCHOOL SECTION */}
      <section id="back-to-school">
        {/* Banner */}
        <div className="flex flex-col md:flex-row bg-[#4A1D1D]">
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <div className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">{t.b2sEye}</div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">{t.b2sTitle}</h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
              {t.b2sDesc}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[400px]">
            <Image src="/photos/3.jpeg" alt="Back to school backpacks" fill className="object-cover" />
          </div>
        </div>

        {/* Essentials Grid */}
        <div className="bg-[#F9F7F3] px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1e2335] mb-6">{t.b2sEssTitle}</h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
                {t.b2sEssDesc}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-200 border border-gray-200">
              
              {/* Item 1 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s01Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s01Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s01Desc}</p>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s02Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s02Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s02Desc}</p>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s03Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s03Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s03Desc}</p>
              </div>

              {/* Item 4 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s04Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s04Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s04Desc}</p>
              </div>

              {/* Item 5 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s05Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s05Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s05Desc}</p>
              </div>

              {/* Item 6 */}
              <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors">
                <div className="text-brand-burgundy/70 font-serif text-xl mb-12">{t.b2s06Num}</div>
                <h3 className="text-2xl font-serif text-[#4A1D1D] mb-4 leading-tight">{t.b2s06Title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.b2s06Desc}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
"""

# Insert right before { /* WHAT WE OFFER SECTION */ }
content = content.replace("{/* WHAT WE OFFER SECTION */}", new_section + "\n      {/* WHAT WE OFFER SECTION */}")

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
