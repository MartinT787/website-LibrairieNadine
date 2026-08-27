const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const newSection = `
      {/* VALUES / FOUNDING GRID SECTION */}
      <section className="px-6 py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          
          <div className="md:pr-12 md:border-r border-gray-200">
            <div className="text-brand-burgundy/80 font-serif text-xl mb-8">{t.val01Num}</div>
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val01Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val01Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val01Text}
            </p>
          </div>

          <div className="md:px-12 md:border-r border-gray-200">
            <div className="text-brand-burgundy/80 font-serif text-xl mb-8">{t.val02Num}</div>
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val02Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val02Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val02Text}
            </p>
          </div>

          <div className="md:pl-12">
            <div className="text-brand-burgundy/80 font-serif text-xl mb-8">{t.val03Num}</div>
            <div className="text-xs font-bold tracking-[0.2em] text-brand-burgundy mb-4 uppercase">{t.val03Eye}</div>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.val03Title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
              {t.val03Text}
            </p>
          </div>

        </div>
      </section>
`;

// Insert the new section right before the VISIT US SECTION
content = content.replace('{/* VISIT US SECTION */}', newSection + '\n      {/* VISIT US SECTION */}');

fs.writeFileSync('src/app/page.tsx', content);
