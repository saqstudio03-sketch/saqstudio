export interface SeoPageData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  gradientText: string;
  subtitle: string;
  iconName: string;
  description1: string;
  description2: string;
  features: string[];
}

export const SEO_PAGES_DATA: Record<string, SeoPageData> = {
  'website-development-company': {
    title: 'Website Development',
    metaTitle: 'Premium Website Development Company | SAQ Studio',
    metaDescription: 'Partner with a top-tier website development company to build high-performance, scalable, and custom digital experiences for your brand.',
    gradientText: 'Company',
    subtitle: 'Expert Digital Engineering',
    iconName: 'Code',
    description1: "As a leading website development company, we specialize in crafting custom, high-performance digital platforms that drive real business growth. We don't just build websites; we engineer robust digital solutions tailored to your unique objectives.",
    description2: 'From complex web applications to beautifully responsive marketing sites, our development process is rooted in modern technologies, ensuring your platform is scalable, secure, and incredibly fast.',
    features: [
      'Custom Web Application Development',
      'Modern Tech Stack (React, Node.js, Next.js)',
      'High-Performance & SEO-Optimized Architecture',
      'Secure & Scalable Backend Infrastructure',
      'API Integration & Development',
      'Rigorous Testing & Quality Assurance'
    ]
  },
  'website-design-agency': {
    title: 'Website Design',
    metaTitle: 'Creative Website Design Agency | SAQ Studio',
    metaDescription: 'A premium website design agency specializing in bespoke, conversion-focused UI/UX design that elevates your brand and engages your audience.',
    gradientText: 'Agency',
    subtitle: 'Bespoke Digital Aesthetics',
    iconName: 'Palette',
    description1: 'Your digital storefront is often the first interaction a customer has with your brand. As a specialized website design agency, we create immersive, aesthetically stunning digital experiences that captivate and convert.',
    description2: 'Our design philosophy merges architectural minimalism with purposeful user journeys, ensuring your website stands out amidst generic templates while delivering intuitive, frictionless interactions.',
    features: [
      'Bespoke UI/UX Design Tailored to Your Brand',
      'Interactive Prototyping & Wireframing',
      'Design Systems & Brand Style Guides',
      'Mobile-First & Responsive Layouts',
      'Micro-Animations & Smooth Interactions',
      'Accessibility & Usability Audits'
    ]
  },
  'custom-website-development': {
    title: 'Custom Website',
    metaTitle: 'Bespoke Custom Website Development | SAQ Studio',
    metaDescription: 'Tailor-made web solutions engineered specifically for your complex business requirements, workflows, and unique digital presence.',
    gradientText: 'Solutions',
    subtitle: 'Tailor-Made Digital Solutions',
    iconName: 'Wrench',
    description1: 'When off-the-shelf templates and rigid CMS systems fail to meet your operational demands, custom website development is the answer. We architect unique digital products from the ground up, matching your exact specifications.',
    description2: 'Whether you require proprietary workflows, custom database integrations, or distinctive interactive components, our engineering team brings your most ambitious digital visions to life.',
    features: [
      'Zero Template Dependencies — 100% Unique Architecture',
      'Custom Database Design & Schema Modeling',
      'Third-Party API & ERP/CRM Synchronizations',
      'Enterprise-Grade Security Standards',
      'Full Ownership of Source Code & IP',
      'Long-Term Scalability & Support'
    ]
  },
  'ai-website-development': {
    title: 'AI Website',
    metaTitle: 'Intelligent AI Website Development | SAQ Studio',
    metaDescription: 'Integrate artificial intelligence, machine learning, and automated workflows into your web platform to drive operational efficiency.',
    gradientText: 'Engineering',
    subtitle: 'Intelligent Next-Gen Platforms',
    iconName: 'Sparkles',
    description1: 'The next evolution of the web is powered by intelligence. We develop AI-integrated websites and applications that automate customer service, personalize content delivery, and provide data-driven insights in real time.',
    description2: 'From intelligent conversational agents to automated recommendation engines, we implement generative AI seamlessly into your digital ecosystem, keeping you at the forefront of digital innovation.',
    features: [
      'Custom LLM & ChatGPT Model Integration',
      'Automated Customer Engagement & Chat Agents',
      'Personalized Dynamic Content Algorithms',
      'Voice & Image Recognition Integrations',
      'Data Analytics & Automated Reporting Dashboards',
      'Private & Secure AI Architecture'
    ]
  },
  'business-website-design': {
    title: 'Business Website',
    metaTitle: 'Corporate Business Website Design | SAQ Studio',
    metaDescription: 'Establish digital authority and trust with corporate website design built for B2B brands, consulting firms, and service enterprises.',
    gradientText: 'Design',
    subtitle: 'Corporate Credibility & Growth',
    iconName: 'Briefcase',
    description1: 'Enterprise and B2B clients demand confidence. A premium business website communicates competence, validates market leadership, and systematically funnels prospects into qualified inquiries.',
    description2: 'We build high-credibility digital presences that articulate complex service offerings clearly, spotlight case studies, and facilitate frictionless enterprise contact points.',
    features: [
      'Executive Leadership & Corporate Storytelling',
      'Comprehensive Service Matrix Architectures',
      'Interactive Case Study & Credential Showcases',
      'Enterprise Lead Capture & Qualification Workflows',
      'Compliance & GDPR/WCAG Alignment',
      'High-Speed Global CDN Deployment'
    ]
  },
  'restaurant-website-design': {
    title: 'Restaurant Website',
    metaTitle: 'Sensory Restaurant Website Design | SAQ Studio',
    metaDescription: 'Captivate diners with mouthwatering digital aesthetics, integrated reservation systems, and interactive digital menus.',
    gradientText: 'Design',
    subtitle: 'Culinary Digital Experiences',
    iconName: 'Utensils',
    description1: 'In the hospitality industry, the dining experience starts on the screen. We craft sensory, visually rich restaurant websites that capture your ambiance, showcase your culinary craft, and drive reservations.',
    description2: 'Featuring interactive digital menus, seamless table reservation integrations, and mobile-first local SEO, your establishment will turn casual web browsers into loyal patrons.',
    features: [
      'Interactive Digital Menus with Real-Time Updates',
      'Table Reservation & Private Dining Request Engines',
      'High-Resolution Visual Media Galleries',
      'Local SEO & Google Maps Optimization',
      'Event & Catering Inquiry Portals',
      'Fast Mobile Ordering Pathways'
    ]
  },
  'ngo-website-development': {
    title: 'NGO & Non-Profit',
    metaTitle: 'Impactful NGO & Non-Profit Website Development | SAQ Studio',
    metaDescription: 'Empower missions and accelerate fundraising with donor-optimized non-profit website design and transparent impact reporting.',
    gradientText: 'Platforms',
    subtitle: 'Mission-Driven Digital Platforms',
    iconName: 'Heart',
    description1: 'Charities, non-profits, and NGOs require platforms that build immediate empathy, articulate their core mission, and inspire collective action.',
    description2: 'We build transparent, trust-centered digital platforms featuring seamless donation integrations, volunteer onboarding portals, and compelling impact storytelling.',
    features: [
      'Frictionless Multi-Currency Donation Gateways',
      'Real-Time Impact Metrics & Story Portals',
      'Volunteer & Advocate Registration Workflows',
      'Annual Report & Financial Transparency Hubs',
      'Event Calendar & Ticket Management',
      'Social Sharing & Viral Campaign Integrations'
    ]
  },
  'e-commerce-website-development': {
    title: 'E-Commerce Website',
    metaTitle: 'High-Converting E-Commerce Development | SAQ Studio',
    metaDescription: 'Scale your retail operations with lightning-fast, high-converting digital storefronts engineered for revenue and frictionless checkout.',
    gradientText: 'Platforms',
    subtitle: 'High-Converting Retail Architecture',
    iconName: 'ShoppingBag',
    description1: 'Modern e-commerce requires far more than listing products. It demands sub-second load times, intuitive filtering, persuasive merchandising, and effortless checkout experiences.',
    description2: 'We build headless and custom e-commerce engines that reduce cart abandonment, amplify average order value, and scale smoothly through peak traffic surges.',
    features: [
      'Headless & Custom Storefront Architecture',
      'Streamlined 1-Click Checkout Flows',
      'Advanced Faceted Search & Filtering Engines',
      'Inventory, ERP, & Fulfillment Integrations',
      'Abandoned Cart & Conversion Optimization',
      'Omnichannel Payment Gateway Support'
    ]
  },
  'small-business-website-design': {
    title: 'Small Business',
    metaTitle: 'Agile Small Business Website Design | SAQ Studio',
    metaDescription: 'Affordable, high-impact digital presence engineered to outrank local competitors and generate consistent customer leads.',
    gradientText: 'Growth',
    subtitle: 'Agile Local Market Dominance',
    iconName: 'Store',
    description1: 'Growing businesses need a lean, potent digital presence that punches above its weight. We build focused, lead-generating websites tailored for ambitious small businesses.',
    description2: 'With localized search optimization, clear call-to-actions, and zero maintenance headaches, your business will project the stature of a market leader.',
    features: [
      'Local Search & Map Pack Dominance (Local SEO)',
      'Click-to-Call & WhatsApp Direct Routing',
      'Clear Value Propositions & Service Breakdowns',
      'Customer Testimonials & Social Proof Grids',
      'Zero Bloat, High-Speed Hosting Architecture',
      'Effortless Content Management'
    ]
  },
  'web-development-services': {
    title: 'Web Development',
    metaTitle: 'Full-Spectrum Web Development Services | SAQ Studio',
    metaDescription: 'End-to-end full-stack web engineering, API architecture, frontend performance tuning, and digital product consulting.',
    gradientText: 'Services',
    subtitle: 'Full-Spectrum Technical Delivery',
    iconName: 'Laptop',
    description1: 'From frontend micro-interactions to resilient backend architecture, our web development services encompass the entire product lifecycle.',
    description2: 'We leverage modern frameworks such as Next.js, React, Node.js, and TypeScript to engineer digital solutions that are robust, secure, and built for lasting commercial viability.',
    features: [
      'Full-Stack Frontend & Backend Engineering',
      'Modern Serverless & Cloud Deployments',
      'Headless CMS & Static Site Generation (SSG)',
      'Automated CI/CD Deployment Pipelines',
      'Core Web Vitals & Performance Auditing',
      'Ongoing Security Hardening & Maintenance'
    ]
  },
  'real-estate-websites': {
    title: 'Real Estate',
    metaTitle: 'Luxury Real Estate Website Development | SAQ Studio',
    metaDescription: 'Showcase luxury properties, developments, and architectural portfolios with immersive visual media and lead generation portals.',
    gradientText: 'Portals',
    subtitle: 'Architectural Property Showcases',
    iconName: 'Building',
    description1: 'High-value real estate transactions require digital experiences that match the grandeur of the properties they represent. We create breathtaking platforms for brokerages and developers.',
    description2: 'With full-bleed cinematic imagery, interactive floor plans, neighborhood guides, and private VIP inquiry workflows, your property listings command immediate attention.',
    features: [
      'Cinematic Property Galleries & Video Tours',
      'Interactive Floorplan & Specification Viewers',
      'MLS / IDX Feed Synchronizations',
      'Private Showing & VIP Lead Ingestion Systems',
      'Neighborhood & Lifestyle Guides',
      'Agent & Brokerage Portfolio Profiles'
    ]
  },
  'healthcare-websites': {
    title: 'Healthcare & Medical',
    metaTitle: 'Secure Healthcare Website Development | SAQ Studio',
    metaDescription: 'Patient-centric, accessible, and compliant healthcare websites engineered for clinics, wellness centers, and medical practitioners.',
    gradientText: 'Systems',
    subtitle: 'Patient-Centric Digital Health',
    iconName: 'ShieldCheck',
    description1: 'In healthcare, digital interactions must cultivate patient confidence, absolute confidentiality, and seamless accessibility across all demographics.',
    description2: 'We build compliant, welcoming websites for medical practices and wellness providers, facilitating online appointment bookings and patient education.',
    features: [
      'Accessible & WCAG 2.1 AA Compliant Layouts',
      'Online Appointment Scheduling & Triage Forms',
      'Doctor & Specialist Credential Directories',
      'Patient Education & Symptom Guides',
      'Secure Contact & Communication Channels',
      'Emergency Contact & Location Guidance'
    ]
  }
};

// Aliases lookup table
export const SLUG_ALIASES: Record<string, string> = {
  'website-development': 'web-development-services',
  'website-design': 'website-design-agency',
  'ecommerce-development': 'e-commerce-website-development',
  'restaurant-websites': 'restaurant-website-design',
  'charity-website-development': 'ngo-website-development',
  'business-websites': 'business-website-design'
};

export function getSeoPageData(slug: string): SeoPageData | null {
  const canonicalSlug = SLUG_ALIASES[slug] || slug;
  return SEO_PAGES_DATA[canonicalSlug] || null;
}
