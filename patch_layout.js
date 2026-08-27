const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Update imports
content = content.replace(
  "import { MapPin, Phone, MessageCircle } from 'lucide-react';",
  "import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';"
);

// Update social links
const oldSocials = `<div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/NadineBookstore/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-blue font-medium">
                  Facebook
                </a>
              </div>`;

const newSocials = `<div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/NadineBookstore?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/librairienadine" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4405F] hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>`;

content = content.replace(oldSocials, newSocials);
fs.writeFileSync('src/app/layout.tsx', content);
