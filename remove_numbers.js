const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(/<div className="text-brand-burgundy\/80 font-serif text-xl mb-8">\{t\.val01Num\}<\/div>\n\s*/g, '');
content = content.replace(/<div className="text-brand-burgundy\/80 font-serif text-xl mb-8">\{t\.val02Num\}<\/div>\n\s*/g, '');
content = content.replace(/<div className="text-brand-burgundy\/80 font-serif text-xl mb-8">\{t\.val03Num\}<\/div>\n\s*/g, '');

fs.writeFileSync('src/app/page.tsx', content);
