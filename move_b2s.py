import re
import os

with open('src/app/page.tsx', 'r') as f:
    page_content = f.read()

# Extract the Back to School section
pattern = r'(\s*\{\/\* BACK TO SCHOOL SECTION \*\/\}\s*<section id="back-to-school">.*?</section>\n)'
match = re.search(pattern, page_content, flags=re.DOTALL)

if match:
    b2s_section = match.group(1)
    
    # Remove from page.tsx
    page_content = page_content.replace(b2s_section, "")
    
    with open('src/app/page.tsx', 'w') as f:
        f.write(page_content)
        
    # Create new page.tsx
    os.makedirs('src/app/back-to-school', exist_ok=True)
    
    new_page_content = """"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function BackToSchool() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
""" + b2s_section + """
    </main>
  );
}
"""
    with open('src/app/back-to-school/page.tsx', 'w') as f:
        f.write(new_page_content)
else:
    print("Could not find the section")

