

// ── DATA ──────────────────────────────────────────────
const T = {
    en: {
        features: 'Features', curriculum: 'Curriculum', instructor: 'Instructor',
        pricing: 'Pricing', enrollNow: 'Enroll Now',
        heroBadge: '🎓 Next cohort starts June 1, 2026',
        heroTitle: 'Master Professional Photography',
        heroSubtitle: 'Transform your passion into expertise. Learn from award-winning photographers and master the art of capturing extraordinary moments.',
        primaryCta: 'Start Learning Today', secondaryCta: 'Watch Preview',
        statStudents: 'Students Enrolled', statRating: 'Average Rating',
        statWeeks: '12 Weeks', statDuration: 'Duration',
        certified: 'Certified Course', recognized: 'Industry Recognized',
        featuresTitle: 'Why Choose MasterFrame',
        featuresSubtitle: 'Everything you need to become a professional photographer',
        curriculumTitle: 'Course Curriculum',
        curriculumSubtitle: 'A structured 12-week journey from fundamentals to mastery',
        instructorEyebrow: 'Meet Your Instructor',
        instructorName: 'Alex Rivera',
        instructorRole: 'Award-Winning Professional Photographer',
        instructorBio: 'With over 20 years of experience and work featured in National Geographic, Time Magazine, and countless exhibitions worldwide, Alex has mentored thousands of photographers in mastering their craft.',
        testimonialsTitle: 'What Students Say',
        testimonialsSubtitle: 'Join thousands of satisfied photographers',
        pricingTitle: 'Choose Your Plan',
        pricingSubtitle: 'Flexible pricing to match your learning style',
        mostPopular: 'Most Popular', getStarted: 'Get Started',
        faqTitle: 'Frequently Asked Questions',
        ctaTitle: 'Ready to Start Your Photography Journey?',
        ctaSubtitle: 'Join 5,000+ photographers who have transformed their passion into expertise',
        ctaBtn: 'Enroll Now — Next Cohort June 1',
        ctaGuarantee: '30-day money-back guarantee • Lifetime access',
        footerTagline: 'Empowering photographers to capture the extraordinary',
        footerCourse: 'Course', footerCompany: 'Company', footerLegal: 'Legal',
        footerAbout: 'About', footerBlog: 'Blog', footerContact: 'Contact',
        footerPrivacy: 'Privacy', footerTerms: 'Terms', footerRefund: 'Refund Policy',
        copyright: '© 2026 MasterFrame. All rights reserved.',
        features_items: [
            { title: 'Expert Instructors', desc: 'Learn from award-winning photographers with 20+ years of experience' },
            { title: 'Hands-On Projects', desc: 'Build a professional portfolio with 15+ real-world assignments' },
            { title: 'Comprehensive Curriculum', desc: 'Master technical skills, composition, lighting, and post-processing' },
            { title: 'Flexible Learning', desc: 'Study at your own pace with lifetime access to all materials' },
            { title: 'Certificate', desc: 'Receive an industry-recognized certificate upon completion' },
            { title: 'Community', desc: 'Join a vibrant community of photographers and get feedback' }
        ],
        modules: [
            { tag: 'Module 1-2', title: 'Camera Fundamentals', lessons: ['Understanding your camera', 'Exposure triangle', 'Focus modes', 'Camera settings'] },
            { tag: 'Module 3-4', title: 'Composition & Lighting', lessons: ['Rule of thirds', 'Leading lines', 'Natural lighting', 'Artificial lighting'] },
            { tag: 'Module 5-6', title: 'Portrait Photography', lessons: ['Posing techniques', 'Studio portraits', 'Environmental portraits', 'Headshots'] },
            { tag: 'Module 7-8', title: 'Landscape & Travel', lessons: ['Landscape composition', 'Golden hour', 'Long exposure', 'Travel photography'] },
            { tag: 'Module 9-10', title: 'Post-Processing', lessons: ['Lightroom basics', 'Advanced retouching', 'Color grading', 'Workflow optimization'] },
            { tag: 'Module 11-12', title: 'Business & Portfolio', lessons: ['Building your portfolio', 'Client management', 'Pricing strategies', 'Marketing yourself'] }
        ],
        achievements: [
            { title: 'International Photography Awards Winner', sub: '2019, 2021, 2024' },
            { title: 'Featured in Major Publications', sub: 'National Geographic, Time, Forbes' },
            { title: '5,000+ Students Trained', sub: 'Across 60+ countries' }
        ],
        testimonials: [
            { name: 'Sarah Chen', role: 'Portrait Photographer', text: 'This course transformed my hobby into a full-time career. The hands-on approach and expert feedback were invaluable.', img: 'https://images.unsplash.com/photo-1664700650951-c155990b7ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' },
            { name: 'Michael Torres', role: 'Wedding Photographer', text: "Alex's teaching style is incredible. I learned more in 12 weeks than I did in years of trial and error.", img: 'https://images.unsplash.com/photo-1700183020465-5a5e5dcaa83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' },
            { name: 'Emily Park', role: 'Travel Photographer', text: 'The community and support system here are amazing. I found my photography style and built lasting connections.', img: 'https://images.unsplash.com/photo-1752650736252-dff5244c8a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' }
        ],
        plans: [
            { name: 'Self-Paced', price: '$499', period: 'one-time', features: ['Lifetime access to all materials', 'Video lectures & assignments', 'Community forum access', 'Certificate of completion'], popular: false },
            { name: 'Mentored', price: '$899', period: 'one-time', features: ['Everything in Self-Paced', 'Weekly group mentoring sessions', 'Portfolio reviews', 'Direct instructor feedback', 'Job placement assistance'], popular: true },
            { name: 'Premium', price: '$1,499', period: 'one-time', features: ['Everything in Mentored', '1-on-1 coaching sessions', 'Professional equipment guidance', 'Studio visit opportunities', 'Exclusive networking events'], popular: false }
        ],
        faqs: [
            { q: 'Do I need professional equipment to start?', a: 'No! You can start with any camera, even a smartphone. We teach principles that apply to all equipment levels.' },
            { q: 'Is this course suitable for beginners?', a: 'Absolutely! The course is designed for all skill levels, from complete beginners to intermediate photographers looking to level up.' },
            { q: 'How long do I have access to the course?', a: 'You get lifetime access to all course materials, including future updates and additions.' },
            { q: 'What if I need to pause the course?', a: "No problem! Learn at your own pace. There's no pressure to complete within a specific timeframe." },
            { q: 'Is there a money-back guarantee?', a: "Yes! We offer a 30-day money-back guarantee if you're not satisfied with the course." }
        ]
    },
    ar: {
        features: 'المميزات', curriculum: 'المنهج', instructor: 'المدرب',
        pricing: 'الأسعار', enrollNow: 'سجل الآن',
        heroBadge: '🎓 الدورة القادمة تبدأ في 1 يونيو 2026',
        heroTitle: 'احترف التصوير الفوتوغرافي',
        heroSubtitle: 'حول شغفك إلى خبرة. تعلم من مصورين حائزين على جوائز وأتقن فن التقاط اللحظات الاستثنائية.',
        primaryCta: 'ابدأ التعلم اليوم', secondaryCta: 'شاهد المعاينة',
        statStudents: 'طالب مسجل', statRating: 'متوسط التقييم',
        statWeeks: '12 أسبوع', statDuration: 'المدة',
        certified: 'دورة معتمدة', recognized: 'معترف بها صناعياً',
        featuresTitle: 'لماذا تختار MasterFrame',
        featuresSubtitle: 'كل ما تحتاجه لتصبح مصوراً محترفاً',
        curriculumTitle: 'منهج الدورة',
        curriculumSubtitle: 'رحلة منظمة لمدة 12 أسبوعاً من الأساسيات إلى الإتقان',
        instructorEyebrow: 'تعرف على مدربك',
        instructorName: 'أليكس ريفيرا',
        instructorRole: 'مصور محترف حائز على جوائز',
        instructorBio: 'مع أكثر من 20 عاماً من الخبرة وأعمال معروضة في ناشيونال جيوغرافيك ومجلة تايم ومعارض لا حصر لها حول العالم، قام أليكس بتوجيه آلاف المصورين في إتقان حرفتهم.',
        testimonialsTitle: 'ماذا يقول الطلاب',
        testimonialsSubtitle: 'انضم إلى آلاف المصورين الراضين',
        pricingTitle: 'اختر خطتك',
        pricingSubtitle: 'أسعار مرنة تناسب أسلوب التعلم الخاص بك',
        mostPopular: 'الأكثر شعبية', getStarted: 'ابدأ الآن',
        faqTitle: 'الأسئلة الشائعة',
        ctaTitle: 'هل أنت مستعد لبدء رحلة التصوير الخاصة بك؟',
        ctaSubtitle: 'انضم إلى أكثر من 5000 مصور حولوا شغفهم إلى خبرة',
        ctaBtn: 'سجل الآن - الدورة القادمة 1 يونيو',
        ctaGuarantee: 'ضمان استرداد الأموال لمدة 30 يوماً • وصول مدى الحياة',
        footerTagline: 'تمكين المصورين من التقاط ما هو استثنائي',
        footerCourse: 'الدورة', footerCompany: 'الشركة', footerLegal: 'قانوني',
        footerAbout: 'عن', footerBlog: 'مدونة', footerContact: 'اتصل',
        footerPrivacy: 'الخصوصية', footerTerms: 'الشروط', footerRefund: 'سياسة الاسترداد',
        copyright: '© 2026 MasterFrame. جميع الحقوق محفوظة.',
        features_items: [
            { title: 'مدربون خبراء', desc: 'تعلم من مصورين حائزين على جوائز بخبرة تزيد عن 20 عاماً' },
            { title: 'مشاريع عملية', desc: 'بناء محفظة احترافية مع أكثر من 15 مشروعاً واقعياً' },
            { title: 'منهج شامل', desc: 'أتقن المهارات التقنية والتكوين والإضاءة والمعالجة' },
            { title: 'تعلم مرن', desc: 'ادرس بالسرعة التي تناسبك مع وصول مدى الحياة' },
            { title: 'شهادة', desc: 'احصل على شهادة معترف بها صناعياً عند الإكمال' },
            { title: 'مجتمع', desc: 'انضم إلى مجتمع نابض بالحياة واحصل على الملاحظات' }
        ],
        modules: [
            { tag: 'الوحدة 1-2', title: 'أساسيات الكاميرا', lessons: ['فهم كاميرتك', 'مثلث التعريض', 'أوضاع التركيز', 'إعدادات الكاميرا'] },
            { tag: 'الوحدة 3-4', title: 'التكوين والإضاءة', lessons: ['قاعدة الأثلاث', 'الخطوط التوجيهية', 'الإضاءة الطبيعية', 'الإضاءة الاصطناعية'] },
            { tag: 'الوحدة 5-6', title: 'تصوير البورتريه', lessons: ['تقنيات التموضع', 'بورتريهات الاستوديو', 'البورتريهات البيئية', 'صور الوجه'] },
            { tag: 'الوحدة 7-8', title: 'المناظر والسفر', lessons: ['تكوين المناظر', 'الساعة الذهبية', 'التعريض الطويل', 'تصوير السفر'] },
            { tag: 'الوحدة 9-10', title: 'المعالجة', lessons: ['أساسيات Lightroom', 'التنقيح المتقدم', 'تدريج الألوان', 'تحسين سير العمل'] },
            { tag: 'الوحدة 11-12', title: 'الأعمال والمحفظة', lessons: ['بناء محفظتك', 'إدارة العملاء', 'استراتيجيات التسعير', 'تسويق نفسك'] }
        ],
        achievements: [
            { title: 'الفائز بجوائز التصوير الدولية', sub: '2019، 2021، 2024' },
            { title: 'مميز في منشورات كبرى', sub: 'ناشيونال جيوغرافيك، تايم، فوربس' },
            { title: 'أكثر من 5000 طالب مُدرب', sub: 'في أكثر من 60 دولة' }
        ],
        testimonials: [
            { name: 'سارة تشن', role: 'مصورة بورتريه', text: 'حولت هذه الدورة هوايتي إلى مهنة بدوام كامل. النهج العملي والملاحظات الخبيرة كانت لا تقدر بثمن.', img: 'https://images.unsplash.com/photo-1664700650951-c155990b7ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' },
            { name: 'مايكل توريس', role: 'مصور أعراس', text: 'أسلوب تعليم أليكس رائع. تعلمت في 12 أسبوعاً أكثر مما تعلمته في سنوات من التجربة والخطأ.', img: 'https://images.unsplash.com/photo-1700183020465-5a5e5dcaa83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' },
            { name: 'إيميلي بارك', role: 'مصورة سفر', text: 'المجتمع ونظام الدعم هنا مذهلان. وجدت أسلوبي في التصوير وبنيت علاقات دائمة.', img: 'https://images.unsplash.com/photo-1752650736252-dff5244c8a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100&q=80' }
        ],
        plans: [
            { name: 'ذاتي السرعة', price: '499$', period: 'دفعة واحدة', features: ['وصول مدى الحياة لجميع المواد', 'محاضرات فيديو ومهام', 'الوصول إلى منتدى المجتمع', 'شهادة إتمام'], popular: false },
            { name: 'بإرشاد', price: '899$', period: 'دفعة واحدة', features: ['كل ما في الذاتي السرعة', 'جلسات إرشاد جماعية أسبوعية', 'مراجعات المحفظة', 'ملاحظات مباشرة من المدرب', 'المساعدة في التوظيف'], popular: true },
            { name: 'بريميوم', price: '1,499$', period: 'دفعة واحدة', features: ['كل ما في بإرشاد', 'جلسات تدريب فردية', 'إرشاد المعدات الاحترافية', 'فرص زيارة الاستوديو', 'فعاليات تواصل حصرية'], popular: false }
        ],
        faqs: [
            { q: 'هل أحتاج معدات احترافية للبدء؟', a: 'لا! يمكنك البدء بأي كاميرا، حتى الهاتف الذكي. نحن نعلم مبادئ تنطبق على جميع مستويات المعدات.' },
            { q: 'هل هذه الدورة مناسبة للمبتدئين؟', a: 'بالتأكيد! تم تصميم الدورة لجميع مستويات المهارة، من المبتدئين الكاملين إلى المصورين المتوسطين.' },
            { q: 'كم من الوقت لدي للوصول إلى الدورة؟', a: 'تحصل على وصول مدى الحياة لجميع مواد الدورة، بما في ذلك التحديثات المستقبلية.' },
            { q: 'ماذا لو احتجت إلى إيقاف الدورة مؤقتاً؟', a: 'لا مشكلة! تعلم بالسرعة التي تناسبك. لا يوجد ضغط للإكمال في إطار زمني محدد.' },
            { q: 'هل يوجد ضمان استرداد الأموال؟', a: 'نعم! نقدم ضمان استرداد الأموال لمدة 30 يوماً إذا لم تكن راضياً عن الدورة.' }
        ]
    }
};

// ── STATE ─────────────────────────────────────────────
let lang = localStorage.getItem('lang') || 'en';
let dark = localStorage.getItem('dark') === '1';

// ── ICONS ─────────────────────────────────────────────
const icons = {
    camera: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" /></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    chevron: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`
};

const featureIcons = ['users', 'camera', 'book', 'clock', 'award', 'users'];
const achievementIcons = ['award', 'star', 'users'];

// ── RENDER DYNAMIC SECTIONS ───────────────────────────
function renderFeatures() {
    const t = T[lang];
    document.getElementById('featuresGrid').innerHTML = t.features_items.map((f, i) => `
    <div class="feature-card" data-reveal>
        <div class="feature-icon">${icons[featureIcons[i]]}</div>
        <div class="feature-title">${f.title}</div>
        <p class="feature-desc">${f.desc}</p>
    </div>`).join('');
}

function renderCurriculum() {
    const t = T[lang];
    document.getElementById('curriculumGrid').innerHTML = t.modules.map(m => `
    <div class="module-card" data-reveal>
        <div class="module-tag">${m.tag}</div>
        <div class="module-title">${m.title}</div>
        <ul class="lesson-list">
            ${m.lessons.map(l => `<li class="lesson-item">${icons.check}<span>${l}</span></li>`).join('')}
        </ul>
    </div>`).join('');
}

function renderAchievements() {
    const t = T[lang];
    document.getElementById('achievements').innerHTML = t.achievements.map((a, i) => `
    <div class="achievement-item">
        <div class="achievement-icon">${icons[achievementIcons[i]]}</div>
        <div>
            <div class="achievement-title">${a.title}</div>
            <div class="achievement-sub">${a.sub}</div>
        </div>
    </div>`).join('');
}

function renderTestimonials() {
    const t = T[lang];
    document.getElementById('testimonialsGrid').innerHTML = t.testimonials.map(t2 => `
    <div class="testimonial-card" data-reveal>
        <div class="stars">${Array(5).fill(icons.star).join('')}</div>
        <p class="testimonial-text">${t2.text}</p>
        <div class="testimonial-author">
            <img class="author-avatar" src="${t2.img}" alt="${t2.name}" />
            <div>
                <div class="author-name">${t2.name}</div>
                <div class="author-role">${t2.role}</div>
            </div>
        </div>
    </div>`).join('');
}

function renderPricing() {
    const t = T[lang];
    document.getElementById('pricingGrid').innerHTML = t.plans.map((p, i) => `
    <div class="pricing-card ${p.popular ? 'popular' : ''}" data-reveal>
        ${p.popular ? `<div class="popular-badge">${t.mostPopular}</div>` : ''}
        <div class="plan-name">${p.name}</div>
        <div class="plan-price">
            <span class="plan-price-num">${p.price}</span>
            <span class="plan-period">/ ${p.period}</span>
        </div>
        <ul class="plan-features">
            ${p.features.map(f => `<li class="plan-feature">${icons.check}<span>${f}</span></li>`).join('')}
        </ul>
        <button class="plan-btn ${p.popular ? 'main' : 'alt'}">${t.getStarted}</button>
    </div>`).join('');
}

function renderFaq() {
    const t = T[lang];
    document.getElementById('faqList').innerHTML = t.faqs.map((f, i) => `
    <div class="faq-item" id="faq${i}">
        <button class="faq-q" onclick="toggleFaq(${i})">
            <span>${f.q}</span>${icons.chevron}
        </button>
        <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');
}

function toggleFaq(i) {
    const item = document.getElementById('faq' + i);
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// ── TRANSLATIONS (static elements) ───────────────────
function applyTranslations() {
    const t = T[lang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.dataset.key;
        if (t[k] !== undefined) el.textContent = t[k];
    });
}

function renderAll() {
    renderFeatures();
    renderCurriculum();
    renderAchievements();
    renderTestimonials();
    renderPricing();
    renderFaq();
    applyTranslations();
    setupReveal();
}

// ── THEME ─────────────────────────────────────────────
function applyTheme() {
    document.documentElement.classList.toggle('dark', dark);
    document.getElementById('sunIcon').style.display = dark ? 'block' : 'none';
    document.getElementById('moonIcon').style.display = dark ? 'none' : 'block';
}

document.getElementById('themeToggle').addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem('dark', dark ? '1' : '0');
    applyTheme();
});

// ── LANGUAGE ─────────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', lang);
    document.getElementById('langLabel').textContent = lang === 'en' ? 'AR' : 'EN';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    renderAll();
});

// ── HAMBURGER ────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}

// ── SCROLL REVEAL ────────────────────────────────────
function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ── INIT ──────────────────────────────────────────────
document.getElementById('langLabel').textContent = lang === 'en' ? 'AR' : 'EN';
document.documentElement.lang = lang;
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
applyTheme();
renderAll();

