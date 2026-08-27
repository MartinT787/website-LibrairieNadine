import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Define the new cohesive block
new_section = """      {/* BACK TO SCHOOL SECTION */}
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
            <Image src="/photos/3.jpeg" alt="Back to school backpacks" fill className="object-cover" />
          </div>
        </div>
      </section>"""

# Find the start of BACK TO SCHOOL SECTION and end of it (right before WHAT WE OFFER SECTION)
# Use regex to replace the entire chunk
pattern = r'      \{\/\* BACK TO SCHOOL SECTION \*\/\}.*?(?=      \{\/\* WHAT WE OFFER SECTION \*\/\})'
content = re.sub(pattern, new_section + '\\n', content, flags=re.DOTALL)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
