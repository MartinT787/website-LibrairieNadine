import re

with open('src/app/back-to-school/page.tsx', 'r') as f:
    content = f.read()

# Replace hero image
content = content.replace('/photos/3.jpeg', '/photos/b2s_hero.jpeg')

# Create the photo grid section
grid_section = """
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
"""

# Insert right before </main>
content = content.replace("    </main>", grid_section + "\n    </main>")

with open('src/app/back-to-school/page.tsx', 'w') as f:
    f.write(content)

