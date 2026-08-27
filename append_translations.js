const fs = require('fs');

let content = fs.readFileSync('src/translations.ts', 'utf8');

const newEn = `
    val01Num: "01",
    val01Eye: "A FAMILY PARTNERSHIP",
    val01Title: "Built together with Layla",
    val01Text: "Joseph and his wife, Layla, worked side by side to build the bookshop and serve their community. Their perseverance, warmth, and personal attention shaped the character of Librairie Nadine and the relationships it continues to nurture across generations.",
    val02Num: "02",
    val02Eye: "PROFESSIONAL LEADERSHIP",
    val02Title: "Advancing bookselling across Lebanon",
    val02Text: "After serving for many years as treasurer, Joseph was appointed to take on his current responsibility as head of Lebanon's booksellers' syndicate. His leadership reflects decades of practical experience, professional integrity, and commitment to the role of independent bookshops in education and culture.",
    val03Num: "03",
    val03Eye: "BEYOND THE SHELVES",
    val03Title: "Beyond the shelves",
    val03Text: "Librairie Nadine has served students, teachers, and schools throughout Zahlé, the Bekaa, and beyond. The bookshop has supported educational workshops and community initiatives, sponsored regional sport, and built trusted distribution relationships that help bring learning materials to the communities that need them.",`;

const newFr = `
    val01Num: "01",
    val01Eye: "UN PARTENARIAT FAMILIAL",
    val01Title: "Construit avec Layla",
    val01Text: "Joseph et son épouse, Layla, ont travaillé côte à côte pour bâtir la librairie et servir leur communauté. Leur persévérance, leur chaleur et leur attention personnelle ont façonné le caractère de la Librairie Nadine et les relations qu'elle continue d'entretenir à travers les générations.",
    val02Num: "02",
    val02Eye: "LEADERSHIP PROFESSIONNEL",
    val02Title: "Faire progresser la librairie au Liban",
    val02Text: "Après avoir servi pendant de nombreuses années en tant que trésorier, Joseph a été nommé à son poste actuel de président du syndicat des libraires du Liban. Son leadership reflète des décennies d'expérience pratique, d'intégrité professionnelle et d'engagement envers le rôle des librairies indépendantes dans l'éducation et la culture.",
    val03Num: "03",
    val03Eye: "AU-DELÀ DES ÉTAGÈRES",
    val03Title: "Au-delà des étagères",
    val03Text: "La Librairie Nadine a servi des étudiants, des enseignants et des écoles dans tout Zahlé, la Bekaa et au-delà. La librairie a soutenu des ateliers éducatifs et des initiatives communautaires, parrainé le sport régional et établi des relations de distribution de confiance qui contribuent à apporter du matériel d'apprentissage aux communautés qui en ont besoin.",`;

const newAr = `
    val01Num: "01",
    val01Eye: "شراكة عائلية",
    val01Title: "بُنيت معاً مع ليلى",
    val01Text: "عمل جوزيف وزوجته ليلى جنباً إلى جنب لبناء المكتبة وخدمة مجتمعهما. لقد شكلت مثابرتهما ودفئهما واهتمامهما الشخصي طابع مكتبة نادين والعلاقات التي تستمر في رعايتها عبر الأجيال.",
    val02Num: "02",
    val02Eye: "قيادة مهنية",
    val02Title: "تطوير قطاع المكتبات في لبنان",
    val02Text: "بعد أن عمل لسنوات عديدة كأمين صندوق، تم تعيين جوزيف لتولي مسؤوليته الحالية كرئيس لنقابة المكتبيين في لبنان. تعكس قيادته عقوداً من الخبرة العملية والنزاهة المهنية والالتزام بدور المكتبات المستقلة في التعليم والثقافة.",
    val03Num: "03",
    val03Eye: "أبعد من الرفوف",
    val03Title: "أبعد من الرفوف",
    val03Text: "خدمت مكتبة نادين الطلاب والمعلمين والمدارس في جميع أنحاء زحلة والبقاع وما وراءها. دعمت المكتبة ورش العمل التعليمية والمبادرات المجتمعية، ورعت الرياضة الإقليمية، وبنت علاقات توزيع موثوقة تساعد في جلب المواد التعليمية إلى المجتمعات التي تحتاج إليها.",`;

content = content.replace(/designed: "Designed in Lebanon"\n  \},/g, 'designed: "Designed in Lebanon",\n' + newEn + '\n  },');
content = content.replace(/designed: "Conçu au Liban"\n  \},/g, 'designed: "Conçu au Liban",\n' + newFr + '\n  },');
content = content.replace(/designed: "صُمم في لبنان"\n  \}/g, 'designed: "صُمم في لبنان",\n' + newAr + '\n  }');

fs.writeFileSync('src/translations.ts', content);
