import re

with open('src/app/layout.tsx', 'r') as f:
    content = f.read()

# Add Link import
if "import Link from 'next/link';" not in content:
    content = content.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport Link from 'next/link';")

# Update Logo link
content = content.replace(
    '<a href="#" className="flex items-center gap-3">',
    '<Link href={`/?lang=${lang.toLowerCase()}`} className="flex items-center gap-3">'
)
content = content.replace(
    '<span className="font-bold text-2xl tracking-tight hidden sm:block text-brand-burgundy">Librairie Nadine</span>\n          </a>',
    '<span className="font-bold text-2xl tracking-tight hidden sm:block text-brand-burgundy">Librairie Nadine</span>\n          </Link>'
)

# Update nav B2S link
content = content.replace(
    '<a href="#back-to-school" className="hover:text-brand-burgundy transition-colors font-bold text-gray-900">{t.navB2S}</a>',
    '<Link href={`/back-to-school?lang=${lang.toLowerCase()}`} className="hover:text-brand-burgundy transition-colors font-bold text-gray-900">{t.navB2S}</Link>'
)

# Update other nav links
content = content.replace('<a href="#offerings"', '<Link href={`/?lang=${lang.toLowerCase()}#offerings`}')
content = content.replace('<a href="#gallery"', '<Link href={`/?lang=${lang.toLowerCase()}#gallery`}')
content = content.replace('<a href="#story"', '<Link href={`/?lang=${lang.toLowerCase()}#story`}')
content = content.replace('<a href="#visit"', '<Link href={`/?lang=${lang.toLowerCase()}#visit`}')

# Close Link tags
content = re.sub(r'(\<Link href=\{`/\?lang=\$\{lang\.toLowerCase\(\)\}\#offerings`\}.*?>\{t\.navOfferings\})\</a\>', r'\1</Link>', content)
content = re.sub(r'(\<Link href=\{`/\?lang=\$\{lang\.toLowerCase\(\)\}\#gallery`\}.*?>\{t\.navGallery\})\</a\>', r'\1</Link>', content)
content = re.sub(r'(\<Link href=\{`/\?lang=\$\{lang\.toLowerCase\(\)\}\#story`\}.*?>\{t\.navStory\})\</a\>', r'\1</Link>', content)
content = re.sub(r'(\<Link href=\{`/\?lang=\$\{lang\.toLowerCase\(\)\}\#visit`\}.*?>\{t\.navVisit\})\</a\>', r'\1</Link>', content)


with open('src/app/layout.tsx', 'w') as f:
    f.write(content)

