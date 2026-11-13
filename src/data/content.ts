import {
  DivisionInfo,
  ProjectItem,
  TeamMember,
  TestimonialItem,
  EstateServiceItem,
  EstateProjectItem,
  StudioServiceItem,
  StudioProjectItem,
  AiServiceItem,
  AiProjectItem,
  ProcessStep
} from '@/types';

export const DIVISIONS: Record<string, DivisionInfo> = {
  estate: {
    key: 'estate',
    code: '01',
    title: 'REAL ESTATE MEDIA & VISUALIZATION',
    sector: 'DIVISION 01 // REAL ESTATE',
    tagline: 'PREMIUM REAL ESTATE MEDIA PRODUCTION & PROPERTY VISUALIZATION',
    accentColor: '#d4af37',
    accentBg: 'rgba(212, 175, 55, 0.1)',
    accentBorder: 'rgba(212, 175, 55, 0.3)',
    description: 'Cinematography and optical campaigns crafted exclusively for prime real estate, penthouses, and private estates.',
    badge: 'ARRI RAW 8K LOG-C',
    subTag: 'V4.9-EST',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO84LPO5WoDq4JSeMbIFp6_OHWxXZId97XpUJkHMAAF0wBmkNYPje5qciUpxJZ7REMBX0lfWpWPOPSnZsEy2N1WPonF2MtbyiGiht7tq6y2sYt8UXPGdjMtzQ6BlvzkItVvZuTrWcncxg7grivRYnkpZ4ecMSjyPugbPbg2WDOJGGFJijKm1JMPh2BYlx0D_ROZoqZIxPD8kudUCeq1WO2gp3WJW82hav1-rIiN8-p9sccuG0afN5G',
    imageAlt: 'Dark luxury penthouse architectural interior at twilight with floor-to-ceiling glass windows overlooking a glowing metropolis skyline',
    tags: ['HDR / Flambient', 'Virtual Staging', '2D & 3D Floor Plans', 'Listing Cinema'],
    services: [
      'HDR / Flambient Photo Editing & Day-to-Dusk Twilight Conversion',
      'Virtual Staging & Virtual Renovation for Vacant Properties',
      '3D Exterior & Interior Renders',
      '2D & 3D Floor Plans, Site Plans & Property Line Marking',
      'Image-to-Video Tours & High-Impact Social Reels'
    ],
    version: 'V4.9-EST',
    route: '/services/real-estate'
  },
  agent: {
    key: 'agent',
    code: '02',
    title: 'AGENT SERVICES',
    sector: 'DIVISION 02 // AGENT SERVICES',
    tagline: 'STRATEGIC GROWTH, LEAD FUNNELS & OPERATIONAL SUPPORT FOR AGENTS',
    accentColor: '#e1e2e6',
    accentBg: 'rgba(225, 226, 230, 0.1)',
    accentBorder: 'rgba(225, 226, 230, 0.3)',
    description: 'A complete operational, marketing, and administrative support system for real estate agents, brokers, and property teams.',
    badge: 'CRM & FUNNEL MATRIX',
    subTag: 'OPS // v4.2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    imageAlt: 'Modern executive dashboard and operational workflow terminal for real estate teams',
    tags: ['Listing Ads', 'Buyer Lead Funnels', 'Transaction Coordination', 'CRM Management'],
    services: [
      'Meta Listing Promotion Ads (Facebook & Instagram)',
      'High-Intent Buyer & Seller Lead Capture Funnels',
      'Contract-to-Close Transaction Coordination (TC)',
      'Real Estate Virtual Assistant (VA) & Calendar Triage',
      'MLS Listing Coordination & Showing Management'
    ],
    version: 'OPS // v4.2',
    route: '/services/agent-services'
  },
  'data-ai': {
    key: 'data-ai',
    code: '03',
    title: 'DATA & AI CORE',
    sector: 'DIVISION 03 // DATA & AI CORE',
    tagline: 'HUMAN-POWERED DATA OPERATIONS, ANNOTATION & AI DATA PREPARATION',
    accentColor: '#8b5cf6',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    accentBorder: 'rgba(139, 92, 246, 0.3)',
    description: 'Human-powered data operations, AI training data services, precision annotation, and back-office quality assurance.',
    badge: 'HUMAN-IN-THE-LOOP',
    subTag: 'VERIFIED // 99.9%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
    imageAlt: 'Abstract 3D scientific visualization of a neural network synaptic lattice with violet light emissions',
    tags: ['Image Annotation', 'Model Evaluation', 'OCR & Digitization', 'Catalog Ops'],
    services: [
      'Image, Video, NLP Text & Audio Annotation',
      'Geospatial & GIS Satellite Feature Mapping',
      'AI Model Evaluation & Human-in-the-Loop Validation',
      'Dataset Collection, Cleaning & Preparation',
      'Data Entry, OCR Conversion, Shopify Catalogs & CRM Research'
    ],
    version: 'DATA-OPS // 99.9%',
    route: '/services/data-ai'
  },
  'digital-marketing': {
    key: 'digital-marketing',
    code: '04',
    title: 'DIGITAL MARKETING & CREATIVE',
    sector: 'DIVISION 04 // DIGITAL MARKETING',
    tagline: 'STRATEGIC DIGITAL GROWTH, CREATIVE PRODUCTION & BRAND SYSTEMS',
    accentColor: '#00f0ff',
    accentBg: 'rgba(0, 240, 255, 0.1)',
    accentBorder: 'rgba(0, 240, 255, 0.3)',
    description: 'An integrated digital growth and creative production division helping businesses scale revenue and build recognizable brands.',
    badge: 'CREATIVE PERFORMANCE',
    subTag: 'GROWTH // 360',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-performance digital growth analytics and creative design workstation',
    tags: ['Social Media', 'Meta Ads & SEO', 'Brand & Web UI/UX', 'Video Editing'],
    services: [
      'Social Media Strategy, Calendars, Community & Story/Carousel Creation',
      'Meta Advertising, Technical SEO, Local GBP & Email Automation',
      'SEO Blog Writing, Conversion Copy & Brand Visual Identity',
      'Website/App Figma UI/UX Design & Next.js Web Engineering',
      'Long-Form YouTube Production & Vertical Reels/Shorts Editing'
    ],
    version: 'GROWTH // 360',
    route: '/services/digital-marketing'
  },
  // Backwards compatibility aliases
  studio: {
    key: 'agent',
    code: '02',
    title: 'AGENT SERVICES',
    sector: 'DIVISION 02 // AGENT SERVICES',
    tagline: 'STRATEGIC GROWTH, LEAD FUNNELS & OPERATIONAL SUPPORT FOR AGENTS',
    accentColor: '#e1e2e6',
    accentBg: 'rgba(225, 226, 230, 0.1)',
    accentBorder: 'rgba(225, 226, 230, 0.3)',
    description: 'A complete operational, marketing, and administrative support system for real estate agents, brokers, and property teams.',
    badge: 'CRM & FUNNEL MATRIX',
    subTag: 'OPS // v4.2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    imageAlt: 'Modern executive dashboard and operational workflow terminal for real estate teams',
    tags: ['Listing Ads', 'Buyer Lead Funnels', 'Transaction Coordination', 'CRM Management'],
    services: [
      'Meta Listing Promotion Ads (Facebook & Instagram)',
      'High-Intent Buyer & Seller Lead Capture Funnels',
      'Contract-to-Close Transaction Coordination (TC)',
      'Real Estate Virtual Assistant (VA) & Calendar Triage',
      'MLS Listing Coordination & Showing Management'
    ],
    version: 'OPS // v4.2',
    route: '/services/agent-services'
  },
  ai: {
    key: 'data-ai',
    code: '03',
    title: 'DATA & AI CORE',
    sector: 'DIVISION 03 // DATA & AI CORE',
    tagline: 'HUMAN-POWERED DATA OPERATIONS, ANNOTATION & AI DATA PREPARATION',
    accentColor: '#8b5cf6',
    accentBg: 'rgba(139, 92, 246, 0.1)',
    accentBorder: 'rgba(139, 92, 246, 0.3)',
    description: 'Human-powered data operations, AI training data services, precision annotation, and back-office quality assurance.',
    badge: 'HUMAN-IN-THE-LOOP',
    subTag: 'VERIFIED // 99.9%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
    imageAlt: 'Abstract 3D scientific visualization of a neural network synaptic lattice with violet light emissions',
    tags: ['Image Annotation', 'Model Evaluation', 'OCR & Digitization', 'Catalog Ops'],
    services: [
      'Image, Video, NLP Text & Audio Annotation',
      'Geospatial & GIS Satellite Feature Mapping',
      'AI Model Evaluation & Human-in-the-Loop Validation',
      'Dataset Collection, Cleaning & Preparation',
      'Data Entry, OCR Conversion, Shopify Catalogs & CRM Research'
    ],
    version: 'DATA-OPS // 99.9%',
    route: '/services/data-ai'
  }
};

/* ============================================================
   1. ESTATE MEDIA DATA
============================================================ */

export const ESTATE_SERVICES: EstateServiceItem[] = [
  {
    id: 'photo',
    title: 'REAL ESTATE PHOTOGRAPHY',
    subtitle: 'Medium-Format & Master Optical Elevation',
    description: 'Editorial-grade photography using Phase One 150MP and Hasselblad systems. Masterful bracketed twilight exposures that sculpt architecture with luminous fidelity.',
    iconName: 'Camera',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    features: ['150MP Medium Format', 'Twilight Bracketed Exposures', 'Architectural Perspective Control', 'High-Res Print Master Outputs']
  },
  {
    id: 'video',
    title: 'VIDEO PRODUCTION',
    subtitle: 'Cinematic Narrative Films & Documentaries',
    description: 'ARRI Alexa Mini LF and RED V-Raptor 8K cinema productions. Directed lighting, anamorphic glass, bespoke orchestral audio scores, and emotional narrative arcs.',
    iconName: 'Film',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    features: ['ARRI RAW 8K Pipeline', 'Anamorphic Glass Aesthetics', 'Bespoke Sound Synthesis', 'International Film Festival Grade']
  },
  {
    id: 'image-editing',
    title: 'IMAGE EDITING',
    subtitle: 'High-End Architectural Retouching & Color Mastery',
    description: 'Pixel-level retouching, sky replacements, reflections synthesis, lawn perfection, and fine-art color grading designed for ultra-luxury monograph publication.',
    iconName: 'Sliders',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    features: ['32-Bit High Dynamic Range Retouch', 'Atmospheric Sky Synthesis', 'Distortion Removal', 'Fine-Art Print Pre-Press']
  },
  {
    id: 'video-editing',
    title: 'VIDEO EDITING',
    subtitle: 'Pacing, Sound Design & Color Grading',
    description: 'Dynamic pacing calibrated to buyer psychology, Davinci Resolve Academy color grading, spatial sound design, and custom title kinetic typography.',
    iconName: 'Clapperboard',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    features: ['DaVinci Resolve 33-Point LUTs', 'Binaural Audio Mastering', 'Motion Typography', 'Multi-Aspect Ratio Cuts']
  },
  {
    id: 'advertising',
    title: 'PROPERTY ADVERTISING',
    subtitle: 'High-Conversion Super-Prime Campaigns',
    description: 'Strategic multi-channel advertising targeting ultra-high-net-worth individuals across Bloomberg, Financial Times, WSJ, and elite private investor syndicates.',
    iconName: 'Megaphone',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    features: ['UHNW Syndication Network', 'Financial Media Placements', 'Global Family Office Reach', 'Geo-Targeted Private Jets Hubs']
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    subtitle: 'Performance Funnels & Global Distribution',
    description: 'Precision digital marketing funnels, algorithmic retargeting, VIP private buyer portals, and programmatic placement across luxury capital hubs.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
    features: ['High-Intent Buyer Matching', 'Encrypted Private Portal Access', 'Omnichannel Retargeting', 'Real-Time Telemetry Analytics']
  },
  {
    id: 'social-media',
    title: 'SOCIAL MEDIA CONTENT',
    subtitle: 'High-Impact Vertical Video & Viral Reach',
    description: 'Hyper-polished 9:16 reels, FPV drone flythroughs, architectural micro-documentaries, and curated social media grids generating millions of qualified impressions.',
    iconName: 'Share2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    features: ['4K 60FPS Vertical Formats', 'Drone FPV Flythrough Sequences', 'Curated Grid Storytelling', 'Influencer Syndicate Amplification']
  },
  {
    id: 'virtual-staging',
    title: 'VIRTUAL STAGING',
    subtitle: 'Photorealistic Interior CGI & Curation',
    description: 'Transforming empty spaces and off-plan architecture into breathtaking, fully furnished interiors curated with Minotti, Poliform, and B&B Italia furnishings.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    features: ['Minotti / B&B Italia Digital Props', 'Accurate Raytraced Lighting', 'Material & Fabric Simulation', '360° Panoramic Staging']
  }
];

export const ESTATE_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    tagline: 'Spatial & Brand Analysis',
    description: 'We audit the architectural blueprint, sun trajectory paths, sightlines, buyer demographic, and narrative ethos of the property.',
    deliverable: 'Visual Strategy Blueprint & Shot Schedule'
  },
  {
    step: '02',
    title: 'PLAN',
    tagline: 'Cinematic Storyboarding & Flight Paths',
    description: 'Developing high-precision flight clearances, lighting schedules, interior staging mockups, and script treatments for maximum emotional resonance.',
    deliverable: 'Comprehensive Production Dossier & 3D Previs'
  },
  {
    step: '03',
    title: 'CREATE',
    tagline: 'Principal Photography & Aerial Capture',
    description: 'Deploying ARRI Alexa LF setups, sub-millimeter custom FPV drones, and medium format cameras during golden hour and astronomical dusk.',
    deliverable: 'Uncompressed 8K RAW Master Footage'
  },
  {
    step: '04',
    title: 'REFINE',
    tagline: 'DaVinci Grading & Sound Composition',
    description: 'Meticulous color grading, sky harmonizing, micro-retouching, and orchestral sound design that elevate the estate into pure cinematic art.',
    deliverable: 'Directors Cut & Multi-Platform Master Outputs'
  },
  {
    step: '05',
    title: 'LAUNCH',
    tagline: 'Global Syndicate Campaign Deployment',
    description: 'Coordinated rollout across high-net-worth investor channels, premier architectural publications, and private syndicate portals.',
    deliverable: 'Live Acquisition Funnel & Global Conversion'
  }
];

export const ESTATE_PROJECTS: EstateProjectItem[] = [
  {
    id: 'solis-penthouse',
    title: 'THE SOLIS PENTHOUSE',
    propertyType: 'Triplex Penthouse',
    client: 'Blackrock Capital Estates',
    location: 'Billionaires Row, Manhattan, NY',
    year: '2024',
    services: ['Cinema Film', 'Virtual Staging', 'Editorial Retouching', 'Syndicate Campaign'],
    challenge: 'Market an unfinished raw penthouse shell with unobstructed 360-degree Central Park views before interior fit-outs were completed.',
    solution: 'Produced an 8K ARRI cinematic narrative combined with photorealistic virtual staging and real-time sunset aerial FPV flythroughs.',
    results: 'Acquired by an international family office within 18 days of campaign debut, setting a record engagement benchmark for the district.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdP8i5XMBSqACMldDuH3hmmeSo3yNcr4BOVtJPVXJxAlGVezcIm4yuenE9VdjLqrPu8_-z6sIam9LY4HP1h4Pd4RGudNd_Lab_eI_tdX4dQWcOeXui9VOD82YjaeafUEX8M0wNOb6HvxZmJthglErdzMuhDJYDS5Cr-R3G4kixqLEzUVXvYFcwXzUQna60KEg-Iq8MVVoe7-9MS-eeu8ALnGqHX3PU5ZHz-xJ9vclTMe_aO-BNyS4M',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdP8i5XMBSqACMldDuH3hmmeSo3yNcr4BOVtJPVXJxAlGVezcIm4yuenE9VdjLqrPu8_-z6sIam9LY4HP1h4Pd4RGudNd_Lab_eI_tdX4dQWcOeXui9VOD82YjaeafUEX8M0wNOb6HvxZmJthglErdzMuhDJYDS5Cr-R3G4kixqLEzUVXvYFcwXzUQna60KEg-Iq8MVVoe7-9MS-eeu8ALnGqHX3PU5ZHz-xJ9vclTMe_aO-BNyS4M',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Sale Speed', value: '18 Days' },
      { label: 'Campaign Pace', value: 'Record Velocity' },
      { label: 'Conversion', value: '+380%' }
    ],
    tag: 'SUPER-PRIME RESIDENTIAL'
  },
  {
    id: 'villa-lumina',
    title: 'VILLA LUMINA • CAP FERRAT',
    propertyType: 'Cliffside Waterfront Estate',
    client: 'Sovereign Heritage Properties',
    location: 'Saint-Jean-Cap-Ferrat, France',
    year: '2024',
    services: ['Aerial FPV Cinema', 'Master Photography', 'UHNW Syndicate Marketing'],
    challenge: 'Capture the dramatic Mediterranean coastal cliff geometry and multi-level infinity gardens across 12,000 square meters.',
    solution: 'Designed synchronized twilight drone flight trajectories capturing seamless continuous transitions from sea to rooftop observatory.',
    results: 'Generated 4.2M views across private investor circuits with 12 private viewings scheduled in the first week.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Turnaround Pace', value: '72 Hours' },
      { label: 'Private Viewings', value: '12 Qualified Tours' },
      { label: 'Media Reach', value: '4.2M Impressions' }
    ],
    tag: 'COASTAL LUXURY VILLA'
  },
  {
    id: 'one-mayfair-palace',
    title: 'ONE MAYFAIR RESIDENCES',
    propertyType: 'Heritage Stately Mansion',
    client: 'Grosvenor Square Holdings',
    location: 'Mayfair, London',
    year: '2024',
    services: ['Editorial Photography', 'Anamorphic Film', 'Monograph Design'],
    challenge: 'Convey centuries of protected Grade II heritage craftsmanship while showcasing modern integrated home automation.',
    solution: 'Shot using natural candlelight and warm architectural washes on ARRI Master Anamorphic glass with custom hardcover monographs.',
    results: 'All 6 private residences reserved prior to public marketing launch.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Campaign Speed', value: '3 Weeks' },
      { label: 'Pre-Sale Rate', value: '100% Reserved' },
      { label: 'Buyer Commitment', value: 'Record Fast' }
    ],
    tag: 'HERITAGE URBAN ESTATE'
  },
  {
    id: 'aurora-tower',
    title: 'THE AURORA SPIRE',
    propertyType: 'Commercial & Residential Skyscraper',
    client: 'Apex Tower Holdings',
    location: 'Downtown Dubai, UAE',
    year: '2025',
    services: ['Virtual Production', '3D Staging', 'Global Launch Film', 'Social Media blitz'],
    challenge: 'Pre-launch an 88-storey luxury residential tower off-plan to international buyers in Tokyo, London, and New York.',
    solution: 'Created an epic 8K film integrating real helicopter footage with photorealistic 3D architectural staging and interactive web viewing.',
    results: '72% of tower units reserved during the invite-only global launch weekend.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Inventory Reserved', value: '72% in 48 Hours' },
      { label: 'Lead Velocity', value: 'Top 1% Global' },
      { label: 'Global Attendance', value: '1,800+ VIPs' }
    ],
    tag: 'COMMERCIAL & RESIDENTIAL TOWER'
  },
  {
    id: 'kyoto-sanctuary',
    title: 'KYOTO BAMBOO RETREAT',
    propertyType: 'Private Zen Architectural Estate',
    client: 'Nippon Heritage Capital',
    location: 'Higashiyama, Kyoto, Japan',
    year: '2024',
    services: ['Master Photography', 'Micro-Documentary Film', 'Digital Marketing'],
    challenge: 'Communicate the sublime serenity and spiritual tranquility of a modern timber sanctuary nestled in ancient cedar groves.',
    solution: 'Captured cinematic dawn light through cedar fog with Japanese koto soundscapes and meditative 4K slow-motion tracking shots.',
    results: 'Cover story in Architectural Digest Japan and reserved by an international buyer.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Press Features', value: '14 Editorial Covers' },
      { label: 'Editorial Reach', value: 'Global Feature' },
      { label: 'Transaction Time', value: '26 Days' }
    ],
    tag: 'PRIVATE ARCHITECTURAL RETREAT'
  },
  {
    id: 'aspen-chalet-monolith',
    title: 'CHALET OBSIDIAN',
    propertyType: 'Ultra-Luxury Alpine Chalet',
    client: 'Summit Crest Properties',
    location: 'Aspen, Colorado',
    year: '2024',
    services: ['Drone FPV Cinema', 'Interior Virtual Staging', 'Targeted Advertising'],
    challenge: 'Showcase direct ski-in/ski-out access and heated subterranean wellness cavern during peak winter blizzards.',
    solution: 'High-speed heated lens FPV drone runs following pro skiers directly from mountain ridge into the private heated courtyard.',
    results: 'Acquired with competitive full commitments within 3 weeks of campaign debut.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop'
    ],
    metrics: [
      { label: 'Market Velocity', value: 'Under 21 Days' },
      { label: 'Time on Market', value: '21 Days' },
      { label: 'Syndicate Reach', value: '3.1M Views' }
    ],
    tag: 'ALPINE SKI ESTATE'
  }
];

export const ESTATE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'est-1',
    quote: '“Vaika did not merely photograph our Mayfair property; they created a cinematic masterpiece that pre-sold 68% of inventory before ground broke.”',
    author: 'MARCUS PENDRICK',
    role: 'Managing Partner',
    company: 'Sovereign Prime Developments',
    location: 'London',
    division: 'estate'
  },
  {
    id: 'est-2',
    quote: '“Their ARRI 8K films and drone cinematography set an entirely new benchmark for luxury real estate marketing globally. Unrivaled eye for architectural elegance.”',
    author: 'SOPHIE DE ROCHEFORT',
    role: 'Head of Global Acquisitions',
    company: 'Monaco Private Estates',
    location: 'Monte Carlo',
    division: 'estate'
  },
  {
    id: 'est-3',
    quote: '“The speed, prestige, and buyer quality generated by Vaika’s estate campaign for our Manhattan penthouse was beyond anything we have witnessed in 20 years.”',
    author: 'VICTORIA STERLING',
    role: 'Senior Vice President',
    company: 'Sotheby’s International Realty',
    location: 'New York',
    division: 'estate'
  }
];

/* ============================================================
   2. 3D STUDIO DATA
============================================================ */

export const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    id: '3d-modeling',
    title: '3D MODELING',
    category: 'GEOMETRY & TOPOLOGY',
    description: 'Ultra-dense sub-division surfaces and sub-millimeter procedural meshes engineered in Houdini, Blender, and Maya with flawless topology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    software: ['Houdini', 'Blender', 'Maya', 'ZBrush'],
    deliverables: ['Clean Quad Topology', 'BIM/CAD Export', 'Nanite-Optimized Geometry', 'Level of Detail (LOD 0-4)']
  },
  {
    id: 'arch-vis',
    title: 'ARCHITECTURAL VISUALIZATION',
    category: 'PHOTOREALISM & SPATIAL',
    description: 'Hyper-photorealistic still renderings and dynamic lighting studies powered by Octane, V-Ray, and Unreal Engine 5 with physically accurate spectral materials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQP4_hzsfArJRQLcrniaLhHWnAZ5Ep6-eMGY9pyDrnwAOJB4VlpcvNo8XetgB0fZbBCB8puyMF_jigPyokahQzU_qWDSY5HdP_jZ68skGCjfqODuGM4D_RjZJH1XFOmjkh3E0fYw5xP0zHC9TO7o0vObaTcP6DisVq8gKhjPiM4CXlSTVb_dHaXIm-jqII9DlU_TYeRWrYk7Cnp6SrEUZ3esG9NvjrgEDfmdgC4tat3FvxJifXChq',
    software: ['Unreal Engine 5.4', 'Octane Spectral', 'V-Ray 6', 'Corona'],
    deliverables: ['16K Master Stills', 'Spectral Sun Studies', 'Multi-Layer EXR Composites', 'Physical Material Library']
  },
  {
    id: 'interior-design',
    title: 'INTERIOR DESIGN CGI',
    category: 'SPATIAL LUXURY',
    description: 'Curated architectural interiors with photorealistic textile physics, micro-surface imperfections, warm acoustic ambiance, and luxury furniture libraries.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    software: ['Marvelous Designer', 'Substance 3D', '3ds Max', 'Corona'],
    deliverables: ['Fabric & Leather Physics', 'Custom Millwork Renders', 'Lighting Mood Sequences', 'Material Swatch Renders']
  },
  {
    id: 'exterior-design',
    title: 'EXTERIOR DESIGN CGI',
    category: 'MONUMENTAL ARCHITECTURE',
    description: 'Grand scale facade studies, brutalist concrete textures, biophilic facade integration, and cinematic environmental contextualization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRRXJmtUqqKoP5fO2UymUAb00OUFMohmwPX0bymwaTzQ9R2HFuVNT0KQ_Ukl921JPVxI0LR3WO79lFCnqmVbEAyDbxx30VNtrkv5sXbq_4F2XL6cA_Xd8k_tdDY5Y0p-zgYRKgQXcqtwVHRGHtysAXuXqUm4dc4PI-QS1cqZ9MREvptVSKhs8cD737IRojWCVz5L5PEsxBBXrB29OpIcf4tmA6OikoZWWwf7iXfcbu4k9RjkVrp-',
    software: ['Unreal Engine 5', 'SpeedTree', 'Houdini Landscapes', 'Quixel Megascans'],
    deliverables: ['Atmospheric Weather Variations', 'Botanical Ecosystem Scattering', 'Surrounding Cityscape Context', 'Facade Glazing Studies']
  },
  {
    id: '3d-animation',
    title: '3D ANIMATION',
    category: 'CINEMATIC MOTION',
    description: 'Frame-perfect camera motion, dynamic cloth and fluid simulations, exploded engineering views, and theatrical architectural reveals in 4K/8K.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    software: ['Unreal Sequencer', 'Houdini FX', 'Cinema 4D', 'DaVinci Resolve'],
    deliverables: ['60FPS High-Bitrate Masters', 'Exploded Axonometric Renders', 'Cinematic Drone Sim Paths', 'Sound-Synchronized Motion']
  },
  {
    id: 'product-vis',
    title: 'PRODUCT VISUALIZATION',
    category: 'INDUSTRIAL & LUXURY GOODS',
    description: 'Microscopic surface detail, anisotropic metal reflection, subsurface scattering, and exploded assembly sequences for haute horlogerie and automotive brands.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    software: ['KeyShot Pro', 'Cinema 4D', 'Octane Render', 'Substance Painter'],
    deliverables: ['Turnaround 360 Spinners', 'Exploded Structural Dissections', 'High-Gloss Studio Lighting', 'PBR Material Packages']
  },
  {
    id: 'cgi-advertising',
    title: 'CGI ADVERTISING',
    category: 'VFX & BROADCAST',
    description: 'Surreal visual effects, physics-bending brand moments, kinetic installations, and CGI billboard spectacles for international launch campaigns.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    software: ['Unreal Engine 5', 'After Effects', 'Nuke', 'Houdini'],
    deliverables: ['3D Anamorphic Billboard Renders', 'Social CGI Viral Campaigns', '4K Broadcast Masters', 'Interactive AR Assets']
  },
  {
    id: 'game-assets',
    title: 'GAME ASSETS & ENVIRONMENTS',
    category: 'REAL-TIME OPTIMIZATION',
    description: 'AAA-production ready 3D assets, procedural modular environments, Nanite-ready high-poly meshes, and low-draw-call LOD pipelines.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    software: ['Unreal Engine 5', 'ZBrush', 'Substance Designer', 'Blender'],
    deliverables: ['Nanite Meshes', 'LOD 0-4 Sets', 'Custom Collision Meshes', 'Packed PBR Texture Atlases']
  },
  {
    id: 'immersive-exp',
    title: 'IMMERSIVE EXPERIENCES',
    category: 'WEBGL & SPATIAL COMPUTING',
    description: 'Interactive real-time 3D web configurators, Apple Vision Pro spatial environments, and Unreal Engine pixel-streamed cloud showrooms.',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    software: ['Three.js', 'WebGPU', 'Unreal Pixel Streaming', 'visionOS'],
    deliverables: ['Browser WebGL Viewers', 'Cloud-Streamed Showrooms', 'Spatial VisionOS Applications', 'Interactive Customizers']
  }
];

export const STUDIO_WORKFLOW: ProcessStep[] = [
  {
    step: '01',
    title: 'CONCEPT',
    tagline: 'Art Direction & Mood Boards',
    description: 'Spatial references, architectural moodboards, material palettes, and camera composition design.',
    deliverable: 'Creative Direction Dossier'
  },
  {
    step: '02',
    title: 'BLOCKOUT',
    tagline: 'Volume & Proportions',
    description: 'Fast geometric blockouts to validate spatial hierarchy, scale, camera focal lengths, and eye-level perspectives.',
    deliverable: 'Greybox 3D Spatial Layout'
  },
  {
    step: '03',
    title: 'MODELING',
    tagline: 'Sub-Division & Nanite Meshing',
    description: 'Precision architectural modeling, parametric louvers, high-frequency structural details, and micro-chamfers.',
    deliverable: 'High-Density Production Mesh'
  },
  {
    step: '04',
    title: 'TEXTURING',
    tagline: 'Physically Based Shaders (PBR)',
    description: '8K PBR texture sets with micro-scratches, dust accumulation, anisotropic reflections, and bespoke stone veining.',
    deliverable: 'Procedural Material Library'
  },
  {
    step: '05',
    title: 'LIGHTING',
    tagline: 'Lumen & Spectral Radiance',
    description: 'Atmospheric light setups with dynamic sun positioning, volumetric fog, bounce illumination, and HDRI matching.',
    deliverable: 'Spectral Lighting Setup'
  },
  {
    step: '06',
    title: 'RENDER',
    tagline: 'Multi-Pass GPU Compute',
    description: 'High-sample path-traced rendering across dedicated GPU farms with cryptomatte, depth passes, and reflection isolation.',
    deliverable: '32-Bit Multi-Channel EXR Sequences'
  },
  {
    step: '07',
    title: 'DELIVERY',
    tagline: 'Final Grading & Real-Time Assets',
    description: 'Final color grading, optical lens distortion effects, WebGL packaging, and interactive client deployment.',
    deliverable: 'Complete Master Asset Ecosystem'
  }
];

export const STUDIO_PROJECTS: StudioProjectItem[] = [
  {
    id: 'kronos-monolith',
    title: 'PROJECT KRONOS • MONOLITH',
    category: 'BRUTALIST ARCHITECTURAL CGI',
    client: 'Reykjavik Art & Architecture Biennale',
    year: '2024',
    description: 'Futuristic monolithic basalt pavilion in an Icelandic volcanic crater interacting with live sensor telemetry.',
    wireframeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRRXJmtUqqKoP5fO2UymUAb00OUFMohmwPX0bymwaTzQ9R2HFuVNT0KQ_Ukl921JPVxI0LR3WO79lFCnqmVbEAyDbxx30VNtrkv5sXbq_4F2XL6cA_Xd8k_tdDY5Y0p-zgYRKgQXcqtwVHRGHtysAXuXqUm4dc4PI-QS1cqZ9MREvptVSKhs8cD737IRojWCVz5L5PEsxBBXrB29OpIcf4tmA6OikoZWWwf7iXfcbu4k9RjkVrp-',
    clayImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRRXJmtUqqKoP5fO2UymUAb00OUFMohmwPX0bymwaTzQ9R2HFuVNT0KQ_Ukl921JPVxI0LR3WO79lFCnqmVbEAyDbxx30VNtrkv5sXbq_4F2XL6cA_Xd8k_tdDY5Y0p-zgYRKgQXcqtwVHRGHtysAXuXqUm4dc4PI-QS1cqZ9MREvptVSKhs8cD737IRojWCVz5L5PEsxBBXrB29OpIcf4tmA6OikoZWWwf7iXfcbu4k9RjkVrp-',
    renderImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRRXJmtUqqKoP5fO2UymUAb00OUFMohmwPX0bymwaTzQ9R2HFuVNT0KQ_Ukl921JPVxI0LR3WO79lFCnqmVbEAyDbxx30VNtrkv5sXbq_4F2XL6cA_Xd8k_tdDY5Y0p-zgYRKgQXcqtwVHRGHtysAXuXqUm4dc4PI-QS1cqZ9MREvptVSKhs8cD737IRojWCVz5L5PEsxBBXrB29OpIcf4tmA6OikoZWWwf7iXfcbu4k9RjkVrp-',
    polyCount: '142 Million Polys (Nanite)',
    engine: 'Unreal Engine 5.4 + Houdini',
    metrics: [
      { label: 'Attendees', value: '450,000+' },
      { label: 'Render Latency', value: '4.1 ms' },
      { label: 'Awards', value: 'ArchDaily 2024 Digital' }
    ],
    challenge: 'Simulate procedural basalt fracturing in real time while maintaining 120 FPS on 4K multi-screen interactive LED displays.',
    solution: 'Engineered custom Houdini volume algorithms compiled directly into Nanite meshes streamed via NVMe GPU direct buffers.'
  },
  {
    id: 'aethelgard-alpine',
    title: 'AETHELGARD CANTILEVER PAVILION',
    category: 'ALPINE CANTON RESIDENCE',
    client: 'Swiss Cantonal Heritage Trust',
    year: '2024',
    description: 'Perched 2,400 meters above sea level on an alpine ridge with extreme cantilevered timber and thermal glass geometry.',
    wireframeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQP4_hzsfArJRQLcrniaLhHWnAZ5Ep6-eMGY9pyDrnwAOJB4VlpcvNo8XetgB0fZbBCB8puyMF_jigPyokahQzU_qWDSY5HdP_jZ68skGCjfqODuGM4D_RjZJH1XFOmjkh3E0fYw5xP0zHC9TO7o0vObaTcP6DisVq8gKhjPiM4CXlSTVb_dHaXIm-jqII9DlU_TYeRWrYk7Cnp6SrEUZ3esG9NvjrgEDfmdgC4tat3FvxJifXChq',
    clayImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQP4_hzsfArJRQLcrniaLhHWnAZ5Ep6-eMGY9pyDrnwAOJB4VlpcvNo8XetgB0fZbBCB8puyMF_jigPyokahQzU_qWDSY5HdP_jZ68skGCjfqODuGM4D_RjZJH1XFOmjkh3E0fYw5xP0zHC9TO7o0vObaTcP6DisVq8gKhjPiM4CXlSTVb_dHaXIm-jqII9DlU_TYeRWrYk7Cnp6SrEUZ3esG9NvjrgEDfmdgC4tat3FvxJifXChq',
    renderImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQP4_hzsfArJRQLcrniaLhHWnAZ5Ep6-eMGY9pyDrnwAOJB4VlpcvNo8XetgB0fZbBCB8puyMF_jigPyokahQzU_qWDSY5HdP_jZ68skGCjfqODuGM4D_RjZJH1XFOmjkh3E0fYw5xP0zHC9TO7o0vObaTcP6DisVq8gKhjPiM4CXlSTVb_dHaXIm-jqII9DlU_TYeRWrYk7Cnp6SrEUZ3esG9NvjrgEDfmdgC4tat3FvxJifXChq',
    polyCount: '88 Million Polys',
    engine: 'Octane Spectral + Blender',
    metrics: [
      { label: 'Permits Passed', value: '100% Unanimous' },
      { label: 'Pass Count', value: '64 Spectral Passes' },
      { label: 'Elevation', value: '2,400m Altitude' }
    ],
    challenge: 'Demonstrate zero environmental light pollution and thermodynamic snow shedding to secure environmental zoning approval.',
    solution: 'Simulated micro-climate thermodynamic snow accumulation algorithms directly over CAD solid models.'
  },
  {
    id: 'cyber-hypercar',
    title: 'VALKYRIE-09 HYPERCAR CONFIGURATOR',
    category: 'AUTOMOTIVE CGI & WEBGL',
    client: 'Aston Horizon Dynamics',
    year: '2025',
    description: 'Real-time WebGL configurator allowing ultra-prime buyers to customize bespoke carbon weave patterns and aerodynamic aero foils.',
    wireframeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    clayImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    renderImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq1W1m_J1ag9jmJzFyvgpaJeZ2kM8OuFp_Qkw41-4fDeH7LFKGU_dkz6Gs91ovgtgRqthWE50Ewu8Z66YrImZGYiobjTgB6JGFjc0diq0ce5hHfQgltY7KVTwxqRvTYBQxTaY-ZadvAmO_4RnZ71Pce6ZjT7DwsAdREo9KXbLphh1IvmBTzJ0MysvYc-rQzE_jU6ZHUEaKcctbKBCu0TM9y4KpC8phpGo7bl_NwAc1ToEfFhDmkhcg',
    polyCount: '24 Million Polys',
    engine: 'Three.js + WebGPU + Maya',
    metrics: [
      { label: 'Client Orders', value: '$18.4M Total' },
      { label: 'Frame Rate', value: '120 FPS Native' },
      { label: 'Config Options', value: '2,400+ Variants' }
    ],
    challenge: 'Deliver 120 FPS high-precision raytraced car paint reflections inside mobile and desktop web browsers without plug-ins.',
    solution: 'Crafted proprietary WebGPU compute shader shaders with real-time screen-space reflections and HDR environment maps.'
  },
  {
    id: 'sol-station',
    title: 'ORBITAL RESEARCH STATION SOL-1',
    category: 'SCI-FI HARD SURFACE & VFX',
    client: 'Deep Space Visual Consortium',
    year: '2024',
    description: 'Monumental modular space habitat design featuring rotating centrifuge rings and zero-gravity solar arrays.',
    wireframeImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    clayImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    renderImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    polyCount: '210 Million Polys',
    engine: 'Houdini FX + Unreal Engine 5.4',
    metrics: [
      { label: 'Visual Scale', value: '3.2km Structure' },
      { label: 'Physics Accuracy', value: 'NASA Technical Spec' },
      { label: 'VFX Shots', value: '48 Master Sequences' }
    ],
    challenge: 'Maintain physical engineering accuracy down to bolt heads, solar panel hinges, and thermal radiator tiles across a 3km model.',
    solution: 'Developed a custom procedural geometry graph in Houdini instanced dynamically in Unreal Engine with custom Lumen light cards.'
  },
  {
    id: 'meta-gallery',
    title: 'SOTHEBY’S VIRTUAL SPATIAL GALLERY',
    category: 'VIRTUAL REALITY & SPATIAL',
    client: 'Sotheby’s Digital Art',
    year: '2025',
    description: 'Immersive virtual art pavilion for high-value NFT and sculpture auctions with real-time multi-user spatial audio.',
    wireframeImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    clayImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    renderImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    polyCount: '65 Million Polys',
    engine: 'Unreal Engine 5 Pixel Streaming',
    metrics: [
      { label: 'Auction Gross', value: '$34,200,000' },
      { label: 'Concurrent Users', value: '12,500' },
      { label: 'Latency', value: '< 18ms Globally' }
    ],
    challenge: 'Stream uncompromised cinematic 3D environments to thousands of concurrent buyers across all devices without requiring installs.',
    solution: 'Built a global edge-rendered pixel-streaming cluster in Unreal Engine with WebRTC video synchronization.'
  },
  {
    id: 'lumina-interior',
    title: 'PENTHOUSE OBSIDIAN INTERIORS',
    category: 'INTERIOR ARCHITECTURAL CGI',
    client: 'Zaha Hadid Design Partners',
    year: '2024',
    description: 'Parametric fluid interior living space with curved walnut rib walls and custom illuminated Italian marble counters.',
    wireframeImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    clayImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    renderImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    polyCount: '45 Million Polys',
    engine: 'V-Ray 6 + 3ds Max',
    metrics: [
      { label: 'Resolution', value: '16K Master Renders' },
      { label: 'Color Space', value: 'ACEScg Wide Gamut' },
      { label: 'Design Fidelity', value: 'Sub-Millimeter CNC' }
    ],
    challenge: 'Render complex translucent backlit onyx marble slabs with physically correct subsurface scattering.',
    solution: 'Programmed bespoke multi-layered shader networks calculating volumetric optical absorption and photon scatter.'
  }
];

/* ============================================================
   3. AI & ENGINEERING DATA
============================================================ */

export const AI_SERVICES: AiServiceItem[] = [
  {
    id: 'ai-chatbots',
    title: 'AI CHATBOTS & CONVERSATIONAL AGENTS',
    category: 'AGENTIC INTELLIGENCE',
    description: 'Multi-turn autonomous LLM agents equipped with company knowledge graphs, CRM synchronization, and conversational empathy.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    techStack: ['LangChain', 'Llama-3', 'GPT-4o', 'Vector RAG', 'TypeScript'],
    capabilities: ['Autonomous Tool Calling', 'Multi-Language Reasoning', 'Voice & Text Synthesis', 'Sub-200ms Token Streaming']
  },
  {
    id: 'ai-automation',
    title: 'AI AUTOMATION SYSTEMS',
    category: 'WORKFLOW ACCELERATION',
    description: 'End-to-end intelligent automation replacing tedious human workflows with self-healing cognitive pipelines.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Python', 'Temporal.io', 'FastAPI', 'Redis', 'Docker'],
    capabilities: ['Self-Healing Pipelines', 'Automated Triage', 'Error Recovery Nodes', 'Enterprise Audit Logs']
  },
  {
    id: 'ai-workflow-dev',
    title: 'AI WORKFLOW DEVELOPMENT',
    category: 'BESPOKE PIPELINE ENGINEERING',
    description: 'Custom deterministic AI pipelines with continuous validation, human-in-the-loop checkpoints, and high-throughput batching.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
    techStack: ['PyTorch', 'Ray Core', 'Kafka', 'PostgreSQL', 'Airflow'],
    capabilities: ['Human-in-the-Loop Safeguards', 'Model Evaluation Suites', 'Continuous Fine-Tuning', 'Edge Inference']
  },
  {
    id: 'data-annotation',
    title: 'DATA ANNOTATION PLATFORMS',
    category: 'MACHINE LEARNING DATASETS',
    description: 'High-speed AI-assisted annotation suites for computer vision, 3D point clouds, bounding boxes, and semantic segmentation.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    techStack: ['PyTorch', 'OpenCV', 'WebGL Canvas', 'FastAPI', 'AWS S3'],
    capabilities: ['Active Learning Selection', 'Sub-Pixel Segmentation', '3D LiDAR & Splat Labeling', 'Quality Assurance Scores']
  },
  {
    id: 'data-labeling',
    title: 'DATA LABELING & SYNTHETIC GENERATION',
    category: 'TRAINING PIPELINES',
    description: 'Synthetic 3D data generation and high-volume multi-modal dataset labeling engineered for proprietary enterprise model training.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Unreal Engine Synthetic', 'Python', 'NumPy', 'HuggingFace'],
    capabilities: ['Photorealistic Synthetic Data', 'Domain Randomization', 'Class Balance Tuning', 'GDPR Compliant Anonymization']
  },
  {
    id: 'web-development',
    title: 'ENTERPRISE WEB DEVELOPMENT',
    category: 'NEXT-GEN FRONTENDS',
    description: 'Blazing-fast modern web applications built on Next.js, React, and TypeScript with ultra-low latency and sovereign design systems.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Next.js 15/16', 'React 19', 'TypeScript', 'TailwindCSS', 'Node.js'],
    capabilities: ['Sub-Second First Paint', 'Global Edge CDN', 'Full Accessibility (WCAG)', 'Server-Side Rendering']
  },
  {
    id: '3d-web-dev',
    title: '3D WEB DEVELOPMENT & WEBGPU',
    category: 'INTERACTIVE SPATIAL WEB',
    description: 'Custom WebGL, Three.js, and WebGPU graphics running smoothly in web browsers without plugins or downloads.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWDK9rooMi2jpo9zsod9EmbErN-jQedG1RJxyTvLUd1FPiFB2_oV_5CInDvqFQJvuxD-6Kw-Qis45NJMzWw0c5b3ttGpIBNT3RsuzBLG8zaO6dyvcRgKfagv22nIU2uKe3MVjZFf9K7ejDNvpqTDD1iMLIxD3iMebtxyIxUD_sMbZD98qJekhiX3Gf6z6xpMK4-ax2c3W9XrGsYY2_dTSX9RZuMsGn9hEn-U6tUgSV-XKQL6JLFAC',
    techStack: ['Three.js', 'React Three Fiber', 'WebGPU', 'GLSL Shaders', 'WebAssembly'],
    capabilities: ['120 FPS Web Graphics', 'Spatial Audio Integration', 'Touch & Orbit Navigation', 'Shader Post-Processing']
  },
  {
    id: 'backend-engineering',
    title: 'BACKEND ENGINEERING & CLOUD',
    category: 'SCALABLE INFRASTRUCTURE',
    description: 'Distributed microservices, real-time WebSocket infrastructure, and high-concurrency event brokers handling millions of events per second.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Go', 'Rust', 'Kubernetes', 'gRPC', 'PostgreSQL', 'Redis'],
    capabilities: ['99.999% Uptime SLAs', 'Multi-Region Replication', 'Sub-Millisecond Cache Layers', 'Zero-Downtime Deployments']
  },
  {
    id: 'software-dev',
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    category: 'FULL-STACK SYSTEMS',
    description: 'Bespoke enterprise applications, spatial telemetry dashboards, and sovereign cloud infrastructure tailored for mission-critical operations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Rust', 'Python', 'TypeScript', 'Docker', 'Terraform'],
    capabilities: ['Hardware Telemetry Sync', 'Encrypted State Storage', 'Custom API Gateways', 'Bespoke UI Design Systems']
  }
];

export const AI_ARCHITECTURE_STEPS = [
  { step: '01', node: 'USER', label: 'Client Input', desc: 'Natural language, telemetry stream, or spatial image prompt entered via browser or API.' },
  { step: '02', node: 'FRONTEND', label: 'Next.js & WebGPU', desc: 'Client-side shader rendering, instant optimistic state, and cryptographic session handshake.' },
  { step: '03', node: 'API GATEWAY', label: 'Edge Router & Auth', desc: 'Rate limiting, token quota validation, and load balancing across worldwide edge nodes.' },
  { step: '04', node: 'AI MODEL CORE', label: 'Fine-Tuned LLM & Vision', desc: 'Multimodal inference engine running on dedicated H100 GPU clusters with RAG knowledge lookup.' },
  { step: '05', node: 'DATABASE', label: 'Vector & State Store', desc: 'pgvector + Redis caching indexing 100M+ high-dimensional embeddings for sub-5ms retrieval.' },
  { step: '06', node: 'AUTOMATION', label: 'Temporal.io Orchestrator', desc: 'Deterministic workflow execution triggering external webhooks, CRM updates, and code pipelines.' },
  { step: '07', node: 'OUTPUT', label: 'Real-Time Stream', desc: 'Synthesized 3D assets, structured JSON insights, and sub-10ms streaming client responses.' }
];

export const AI_PROJECTS: AiProjectItem[] = [
  {
    id: 'synapse-platform',
    title: 'SYNAPSE-7 ENTERPRISE PLATFORM',
    category: 'ENTERPRISE AI PLATFORM',
    client: 'Syndicate Neural Labs Zurich',
    year: '2025',
    problem: 'Autonomous classification, architectural semantic annotation, and automated valuation across 1.4 million spatial assets.',
    solution: 'Trained dedicated vision-language models with high-precision architectural fine-tuning deployed on sovereign cluster nodes.',
    technology: ['PyTorch', 'FastAPI', 'Next.js', 'PostgreSQL pgvector', 'H100 GPUs'],
    architectureFlow: ['User Intake', 'Edge Gateway', 'Vision LLM Model', 'Vector Embeddings', 'Automated Valuation'],
    results: 'Increased real-time portfolio triage efficiency by 740% while preserving strict zero-leak enterprise data privacy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
    metrics: [
      { label: 'Throughput', value: '12,000 req/sec' },
      { label: 'Accuracy', value: '99.92%' },
      { label: 'Efficiency Gain', value: '+740%' }
    ]
  },
  {
    id: 'nexus-fleet',
    title: 'NEXUS AUTONOMOUS FLEET UI',
    category: '3D WEB & TELEMETRY DASHBOARD',
    client: 'Dubai Roads & Transport Authority',
    year: '2025',
    problem: 'Unified command interface for 400 autonomous aerial eVTOL taxis operating across congested hyper-dense urban corridors.',
    solution: 'Constructed low-latency 3D map tile streaming via WebGPU and browser-based spatial coordinate tracking.',
    technology: ['Three.js', 'WebGPU', 'TypeScript', 'WebSockets', 'Go Microservices'],
    architectureFlow: ['eVTOL Sensor Node', 'MQTT Broker', 'WebGPU Canvas', 'Collision Predictive AI', 'Dispatcher HUD'],
    results: 'Selected as the standard operating command center for 2026 Dubai autonomous passenger flight trials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWDK9rooMi2jpo9zsod9EmbErN-jQedG1RJxyTvLUd1FPiFB2_oV_5CInDvqFQJvuxD-6Kw-Qis45NJMzWw0c5b3ttGpIBNT3RsuzBLG8zaO6dyvcRgKfagv22nIU2uKe3MVjZFf9K7ejDNvpqTDD1iMLIxD3iMebtxyIxUD_sMbZD98qJekhiX3Gf6z6xpMK4-ax2c3W9XrGsYY2_dTSX9RZuMsGn9hEn-U6tUgSV-XKQL6JLFAC',
    metrics: [
      { label: 'Fleet Managed', value: '400 eVTOL' },
      { label: 'Telemetry Jitter', value: '< 2ms' },
      { label: 'Uptime SLA', value: '99.999%' }
    ]
  },
  {
    id: 'cortex-chat',
    title: 'CORTEX LUXURY CONCIERGE AI',
    category: 'AGENTIC CONVERSATIONAL SYSTEM',
    client: 'Monaco Private Wealth Syndicate',
    year: '2025',
    problem: 'Deliver instant, context-aware 24/7 private concierge responses to 800 ultra-high-net-worth clients across 14 languages.',
    solution: 'Engineered a sovereign self-hosted multimodal agent connected to private flight manifests, yacht charter APIs, and security protocols.',
    technology: ['Llama-3 70B Fine-Tuned', 'LangChain', 'Python', 'Redis', 'WebRTC Voice'],
    architectureFlow: ['Encrypted Client Audio', 'Whisper STT', 'Llama-3 Reasoning', 'Charter API Execution', 'ElevenLabs Voice'],
    results: 'Handled 94% of private flight and hospitality requests autonomously with 99.4% client satisfaction.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Autonomous Close', value: '94% Requests' },
      { label: 'Response Latency', value: '280 ms' },
      { label: 'Client Net Score', value: '99.4%' }
    ]
  },
  {
    id: 'hyper-label',
    title: 'HYPERLABEL 3D ANNOTATION ENGINE',
    category: 'DATA ANNOTATION PLATFORM',
    client: 'Autonomous Driving Research Lab',
    year: '2024',
    problem: 'Annotating billions of 3D LiDAR point cloud frames was taking thousands of human hours per week.',
    solution: 'Built an AI-assisted active learning 3D bounding box tool running inside WebGPU with automatic tracking across consecutive frames.',
    technology: ['WebGPU', 'PyTorch', 'C++ WASM', 'React', 'FastAPI'],
    architectureFlow: ['Raw LiDAR Stream', 'WASM Pre-Filter', 'Neural Box Predictor', 'Human QA Checkpoint', 'Training Export'],
    results: 'Reduced dataset annotation time by 82% while elevating geometric label accuracy to 99.98%.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Time Reduction', value: '-82% Labor' },
      { label: 'Frames Processed', value: '45M / Month' },
      { label: 'Bounding Precision', value: '99.98%' }
    ]
  },
  {
    id: 'vault-saas',
    title: 'VAULT SOVEREIGN ASSET DASHBOARD',
    category: 'FINANCIAL SAAS PLATFORM',
    client: 'Apex Capital Partners',
    year: '2025',
    problem: 'Fragmented real estate portfolio valuations across 6 currencies with zero real-time market risk forecasting.',
    solution: 'Developed an institutional SaaS platform combining Monte Carlo simulation engines with real-time financial data feeds.',
    technology: ['Next.js 15', 'TypeScript', 'Go', 'ClickHouse', 'TailwindCSS'],
    architectureFlow: ['Bank API Nodes', 'ClickHouse OLAP', 'Monte Carlo Engine', 'Next.js SSR Frontend', 'Risk Alert Webhooks'],
    results: 'Managing $4.8 Billion in assets across 12 countries with instant sub-50ms analytics rendering.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Assets Managed', value: '$4.8 Billion' },
      { label: 'Query Speed', value: '18 ms' },
      { label: 'Countries Active', value: '12 Jurisdictions' }
    ]
  },
  {
    id: 'neural-stream-backend',
    title: 'NEURALSTREAM DISTRIBUTED BACKEND',
    category: 'CLOUD MICROSERVICE INFRASTRUCTURE',
    client: 'Global Media Cloud Network',
    year: '2024',
    problem: 'Broadcast stream metadata synchronization failing under peak traffic spikes of 2 million concurrent viewers.',
    solution: 'Designed a high-throughput Rust and gRPC microservice mesh with partitioned distributed memory caches.',
    technology: ['Rust', 'gRPC', 'Kubernetes', 'Redis Cluster', 'Terraform'],
    architectureFlow: ['Global Edge CDN', 'gRPC Dispatcher', 'Rust Worker Pods', 'Redis State Bus', 'Client WebSockets'],
    results: 'Sustained zero dropouts across 2.4 million concurrent viewers during international live broadcast events.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Peak Concurrency', value: '2.4M Viewers' },
      { label: 'Dropped Packets', value: '0.000%' },
      { label: 'CPU Overhead', value: '-64%' }
    ]
  }
];

export const AI_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ai-1',
    quote: '“The neural pipeline Vaika engineered for our asset valuation reduced intake labor by 84% while drastically boosting predictive precision.”',
    author: 'DR. ELEANOR VANCE',
    role: 'Head of Digital Infrastructure',
    company: 'Synapse Real Estate Trust',
    location: 'Zurich / New York',
    division: 'ai'
  },
  {
    id: 'ai-2',
    quote: '“Their WebGPU engineering and 3D web mastery gave our autonomous fleet platform a responsiveness that looks and feels 5 years ahead of the industry.”',
    author: 'HAMDAN AL-SAYED',
    role: 'Chief Technology Officer',
    company: 'Apex Autonomous Systems',
    location: 'Dubai',
    division: 'ai'
  },
  {
    id: 'ai-3',
    quote: '“Vaika’s ability to bridge advanced deep learning models with gorgeous, silky-smooth frontends is unmatched anywhere in tech.”',
    author: 'LIAM CHEN',
    role: 'VP of Product Engineering',
    company: 'Cortex Dynamics',
    location: 'San Francisco',
    division: 'ai'
  }
];

export const STUDIO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'stu-1',
    quote: '“Their real-time Unreal Engine 5 configurators allowed our Middle Eastern buyers to walk through superstructures that were still two years from completion.”',
    author: 'TARIQ AL-MANSOOR',
    role: 'Chief Development Officer',
    company: 'Apex Tower Holdings',
    location: 'Dubai',
    division: 'studio'
  },
  {
    id: 'stu-2',
    quote: '“Vaika 3D Studio produces visuals of such intense realism and artistic elevation that our international architecture jury unanimously awarded the masterplan.”',
    author: 'HELENA BERGQVIST',
    role: 'Senior Partner',
    company: 'Nordic Architectural Biennale',
    location: 'Stockholm',
    division: 'studio'
  },
  {
    id: 'stu-3',
    quote: '“The procedural Houdini workflow and Nanite integration delivered uncompromised 16K stills and 120 FPS spatial walkthroughs effortlessly.”',
    author: 'KAI SCHNEIDER',
    role: 'Head of Design Visualization',
    company: 'Monolith Engineering Group',
    location: 'Berlin',
    division: 'studio'
  }
];

/* ============================================================
   4. GENERAL VAIKA DATA
============================================================ */

export const PARTNERS_TICKER = [
  'FOSTER + PARTNERS',
  "SOTHEBY'S INT. REALTY",
  'GENSLER ARCHITECTURE',
  'ZAHA HADID DESIGN',
  'NVIDIA OMNIVERSE',
  'ASTON MARTIN ESTATES',
  'DEEPMIND RESEARCH',
  'MONOLITH DEVELOPMENTS',
  'BERKELEY HOMES GROUP',
  'CANDY CAPITAL',
  'TATE MODERN SPATIAL',
  'SWIRE PROPERTIES'
];

export const TESTIMONIALS: TestimonialItem[] = [
  ...ESTATE_TESTIMONIALS,
  ...STUDIO_TESTIMONIALS,
  ...AI_TESTIMONIALS
];

export const FOUNDER_DATA = {
  name: 'MURAMALLA VIJAY KUMAR',
  protocol: 'V-CORE-001',
  role: 'FOUNDER • VAIKA GROUP',
  titles: 'REAL ESTATE VISUAL EXPERT • VFX & CINEMATIC ARTIST • FOUNDER',
  quote:
    '“We don’t just deliver media; we forge visual authority. Bringing together a decade of hands-on visual craft, VFX precision, and AI intelligence to build beyond traditional boundaries.”',
  bio: 'Starting my journey in January 2015 as a Real Estate Image Editor, I evolved through professional editing, VFX filmmaking, independent freelancing, and AI data annotation, building over a decade of hands-on experience across creative and digital industries.\n\nIn February 2026, I founded Vaika Group, bringing together my experience in real estate, visual storytelling, VFX, and artificial intelligence to build something beyond traditional creative services.',
  image: '/Vijay.jpg',
  imageAlt: 'Executive portrait of Muramalla Vijay Kumar, Founder of VAIKA GROUP',
  credentials: [
    '10+ YEARS CREATIVE EXPERIENCE',
    'REAL ESTATE VISUAL EXPERT',
    'VFX & CINEMATIC ARTIST',
    'FOUNDER • VAIKA GROUP'
  ]
};

export const TEAM_GROUP_DATA = {
  eyebrow: 'VAIKA COLLECTIVE // MULTIDISCIPLINARY STUDIO',
  title: 'ONE INTEGRATED TEAM',
  description:
    'Architects, visual artists, AI data specialists, and digital strategists working as a unified execution team across all four VAIKA GROUP divisions.',
  image: '',
  imageAlt: 'VAIKA GROUP multidisciplinary studio team portrait',
  divisions: [
    'Real Estate Media & Visualization',
    'Agent Services',
    'Data & AI Core',
    'Digital Marketing & Creative'
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'estate-hdr-flambient',
    title: 'HDR & FLAMBIENT ARCHITECTURAL RESIDENCE',
    client: 'PRIME REAL ESTATE PORTFOLIO',
    location: 'RESIDENTIAL SHOWCASE',
    year: '2026',
    category: 'estate',
    divTag: '[ESTATE MEDIA]',
    color: '#d4af37',
    badge1: 'HDR FLAMBIENT',
    badge2: 'WINDOW PULLS',
    image: '/HDR  Flambient.jpg',
    imageAlt: 'Luxury residential interior balanced with HDR Flambient multi-bracket exposure and crisp window pulls',
    challenge: 'Balance complex mixed interior lighting and intense exterior daylight through full-height panoramic windows without flash glare or artificial reflections.',
    solution: 'Executed multi-bracket ambient and manual flash compositing with calibrated window pulls, preserving natural timber warmth, true stone color, and clear outdoor views.',
    outcome: 'Delivered publication-ready MLS and editorial campaign imagery that accelerated listing engagement and doubled scheduled private property viewings.',
    techSpecs: '16-BIT UNCOMPRESSED TIFF • MULTI-BRACKET BLEND • 300 DPI',
    metrics: [
      { label: 'Turnaround SLA', value: '12–24 Hours' },
      { label: 'Inquiry Surge', value: '+340%' },
      { label: 'Color Accuracy', value: '100% Balanced' }
    ],
    route: '/services/real-estate#portfolio'
  },
  {
    id: 'estate-day-to-dusk',
    title: 'DAY-TO-DUSK TWILIGHT ARCHITECTURAL CONVERSION',
    client: 'PRIVATE RESIDENTIAL ESTATES',
    location: 'EXECUTIVE RESIDENCE',
    year: '2026',
    category: 'estate',
    divTag: '[ESTATE MEDIA]',
    color: '#d4af37',
    badge1: 'DAY-TO-DUSK',
    badge2: 'TWILIGHT LIGHTING',
    image: '/Day dusk After_1.1.jpg',
    imageAlt: 'Architectural exterior converted from daylight to warm golden-hour twilight with illuminated interior windows',
    challenge: 'Capture the magnetic appeal of prime golden-hour twilight when photography schedules and overcast weather only permitted midday exterior shoots.',
    solution: 'Re-engineered the sky with a custom dusk gradient, adjusted ambient building shadows, and digitally illuminated interior windows and exterior landscape fixtures for true evening warmth.',
    outcome: 'Transformed standard daylight captures into an evocative hero listing plate that achieved record click-through rates across digital marketing and MLS portals.',
    techSpecs: 'ATMOSPHERIC RELIGHTING • SKY REPLACEMENT • WINDOW GLOW',
    metrics: [
      { label: 'Click-Through Rate', value: '4.2x Lift' },
      { label: 'Turnaround Time', value: '< 24 Hours' },
      { label: 'Listing Engagement', value: '+260%' }
    ],
    route: '/services/real-estate#portfolio'
  },
  {
    id: 'estate-virtual-staging',
    title: 'VIRTUAL STAGING & SPATIAL REVITALIZATION',
    client: 'MODERN LIVING SPACES',
    location: 'LUXURY SALON',
    year: '2026',
    category: 'estate',
    divTag: '[ESTATE MEDIA]',
    color: '#d4af37',
    badge1: 'VIRTUAL STAGING',
    badge2: 'PHOTOMETRIC LIGHTING',
    image: '/Virtual staging after.jpg',
    imageAlt: 'Virtually staged contemporary living salon with designer furniture, natural shadows, and realistic lighting',
    challenge: 'Help prospective buyers visualize room scale and lifestyle potential in a cold vacant residence without the substantial cost and delay of physical staging.',
    solution: 'Modelled and placed 3D designer furniture sets calibrated to the exact camera perspective, casting authentic ground contact shadows and matching existing room light bounce.',
    outcome: 'Eliminated buyer hesitation on spatial scale, resulting in multiple competitive offers within the first two weeks of public open house presentations.',
    techSpecs: 'PERSPECTIVE-MATCHED 3D CAD • PHOTOMETRIC RAY TRACE',
    metrics: [
      { label: 'Days on Market', value: '-55% Faster' },
      { label: 'Staging Efficiency', value: '90% Cost Savings' },
      { label: 'Buyer Interest', value: '+310%' }
    ],
    route: '/services/real-estate#portfolio'
  },
  {
    id: 'estate-aerial-drone',
    title: 'AERIAL DRONE CINEMATOGRAPHY & PERSPECTIVES',
    client: 'ESTATE SITE ARCHITECTURE',
    location: 'COASTAL GROUNDS',
    year: '2026',
    category: 'estate',
    divTag: '[ESTATE MEDIA]',
    color: '#d4af37',
    badge1: 'AERIAL DRONE',
    badge2: 'HORIZON CALIBRATION',
    image: '/aerial drone view.jpg',
    imageAlt: 'Elevated aerial drone photograph showing property boundary and lush landscape',
    challenge: 'Showcase expansive property boundaries, driveway approach, and scenic landscape context that ground-level photography cannot capture.',
    solution: 'Graded high-altitude drone capture with optical lens de-warping, atmospheric haze reduction, and selective exposure enhancement across tree canopy and roof geometry.',
    outcome: 'Provided out-of-market and international buyers with complete topographical context, significantly increasing qualified long-distance inquiries.',
    techSpecs: 'OPTICAL DE-WARP • 4K ULTRA-WIDE • ATMOSPHERIC HAZE FILTER',
    metrics: [
      { label: 'Out-of-Market Leads', value: '+190%' },
      { label: 'Resolution Spec', value: '4K Ultra-Sharp' },
      { label: 'Delivery SLA', value: 'Same-Day' }
    ],
    route: '/services/real-estate#portfolio'
  },
  {
    id: 'estate-matterport-3d',
    title: 'MATTERPORT 3D DOLLHOUSE & SPATIAL VIRTUAL TOUR',
    client: 'ARCHITECTURAL RESIDENTIAL ESTATES',
    location: 'MULTI-LEVEL RESIDENCE',
    year: '2026',
    category: 'estate',
    divTag: '[ESTATE MEDIA]',
    color: '#d4af37',
    badge1: 'MATTERPORT 3D',
    badge2: 'SPATIAL DOLLHOUSE',
    image: '/Matterport.png',
    imageAlt: 'Matterport 3D dollhouse cutaway model of modern multi-level residence',
    challenge: 'Enable remote buyers and relocation clients to navigate and inspect full room flow, floor levels, and spatial scale without visiting in person.',
    solution: 'Aligned 3D spatial mesh scans into an interactive dollhouse model with accurate 360-degree navigational viewpoints and clear floor plan schematics.',
    outcome: 'Allowed remote buyers to explore every square foot with total spatial confidence, leading to direct sight-unseen purchase commitments.',
    techSpecs: 'MATTERPORT PRO SPATIAL SCAN • 360 PANORAMIC HDR',
    metrics: [
      { label: 'Virtual Walkthroughs', value: '2,400+ Views' },
      { label: 'Remote Buyer Triage', value: 'Zero Friction' },
      { label: 'Buyer Confidence', value: '99.4%' }
    ],
    route: '/services/real-estate#portfolio'
  },
  {
    id: 'kronos',
    title: 'PROJECT KRONOS • MONOLITH',
    client: 'REYKJAVIK ART & ARCHITECTURE BIENNALE',
    location: 'REYKJAVIK',
    year: '2024',
    category: 'studio',
    divTag: '[STUDIO 3D]',
    color: '#00f0ff',
    badge1: 'UNREAL ENGINE 5.4',
    badge2: 'VOLUMETRIC FOG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsRRXJmtUqqKoP5fO2UymUAb00OUFMohmwPX0bymwaTzQ9R2HFuVNT0KQ_Ukl921JPVxI0LR3WO79lFCnqmVbEAyDbxx30VNtrkv5sXbq_4F2XL6cA_Xd8k_tdDY5Y0p-zgYRKgQXcqtwVHRGHtysAXuXqUm4dc4PI-QS1cqZ9MREvptVSKhs8cD737IRojWCVz5L5PEsxBBXrB29OpIcf4tmA6OikoZWWwf7iXfcbu4k9RjkVrp-',
    imageAlt: 'Futuristic monolithic brutalist architectural installation in a barren Icelandic volcanic basalt landscape',
    challenge: 'Construct a kinetic pavilion simulation interacting with real-time Icelandic weather sensor telemetry across 4K interactive display totems.',
    solution: 'Generated procedural basalt geometry with nanite displacement coupled to open-source meteorological API nodes.',
    outcome: 'Viewed by over 450,000 spatial attendees; received the 2024 ArchDaily Digital Synthesis Honors.',
    techSpecs: 'UE 5.4 NANITE • 140M POLYGON PROCEDURAL BASALT',
    metrics: [
      { label: 'Attendees', value: '450,000+' },
      { label: 'Render Latency', value: '4.1 ms' },
      { label: 'Precision Grade', value: 'Zero-Fault' }
    ],
    route: '/3d-studio#portfolio'
  },
  {
    id: 'synapse',
    title: 'SYNAPSE-7 ENTERPRISE PLATFORM',
    client: 'SYNDICATE NEURAL LABS ZURICH',
    location: 'ZURICH',
    year: '2025',
    category: 'ai',
    divTag: '[AI & CORE]',
    color: '#8b5cf6',
    badge1: 'MULTI-MODAL LLM',
    badge2: 'SUB-10MS LATENCY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6wfkFsL-cPxIyC26SMdUoECaNQIb5kGZdBm6Ddcpy03f4_F3x0TO-bDWsInOUL1X7-jeJ2wgi-JygO3Fjk9gXrZ30L-CmtoC6TpNg7Ib9fc3RA3A5KiT34GIIPB3bUErsGd_BftlNb5G0n3O-4ZQ7J8SG7KVA0eJWa9r6Y1YVQRzM0pjKzuuawSQXdbhFjKjw8m3QYvqsPrrc6pW86oaiB5H7RegezepXCtcQQCWI6um_CfbGOY9Q',
    imageAlt: 'Abstract 3D scientific visualization of a neural network synaptic lattice with violet light emissions',
    challenge: 'Autonomous classification, architectural semantic annotation, and automated valuation across 1.4 million spatial assets.',
    solution: 'Trained dedicated vision-language models with high-precision architectural fine-tuning deployed on sovereign cluster nodes.',
    outcome: 'Increased real-time portfolio triage efficiency by 740% while preserving strict zero-leak enterprise data privacy.',
    techSpecs: 'PYTORCH H100 CLUSTER • 1.4M SPATIAL ASSETS',
    metrics: [
      { label: 'Throughput', value: '12,000 req/sec' },
      { label: 'Accuracy', value: '99.92%' },
      { label: 'Efficiency Gain', value: '+740%' }
    ],
    route: '/ai-engineering#portfolio'
  },
  {
    id: 'aethelgard',
    title: 'AETHELGARD PAVILION • ZURICH',
    client: 'PRIVATE CANTON FAMILY OFFICE',
    location: 'SWISS ALPS',
    year: '2024',
    category: 'studio',
    divTag: '[STUDIO 3D]',
    color: '#00f0ff',
    badge1: 'OCTANE RENDER',
    badge2: 'DIGITAL TWIN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQP4_hzsfArJRQLcrniaLhHWnAZ5Ep6-eMGY9pyDrnwAOJB4VlpcvNo8XetgB0fZbBCB8puyMF_jigPyokahQzU_qWDSY5HdP_jZ68skGCjfqODuGM4D_RjZJH1XFOmjkh3E0fYw5xP0zHC9TO7o0vObaTcP6DisVq8gKhjPiM4CXlSTVb_dHaXIm-jqII9DlU_TYeRWrYk7Cnp6SrEUZ3esG9NvjrgEDfmdgC4tat3FvxJifXChq',
    imageAlt: 'Cantilevered minimalist timber and glass alpine pavilion perched on a cliff in the Swiss Alps',
    challenge: 'Visualizing extreme cliffside architectural cantilevers in severe snow storm conditions to secure environmental permits.',
    solution: 'Simulated micro-climate thermodynamic snow accumulation algorithms directly over CAD solid models.',
    outcome: 'Permits approved unanimously by Swiss cantonal council with praise for environmental impact clarity.',
    techSpecs: 'OCTANE SPECTRAL • MICRO-CLIMATE THERMODYNAMICS',
    metrics: [
      { label: 'Permit Approval', value: '100% Unanimous' },
      { label: 'Environmental Score', value: 'A++ Class' },
      { label: 'Render Depth', value: 'Spectral 64-Pass' }
    ],
    route: '/3d-studio#portfolio'
  },
  {
    id: 'nexus',
    title: 'NEXUS AUTONOMOUS FLEET UI',
    client: 'DUBAI ROADS & TRANSPORT AUTHORITY',
    location: 'DUBAI',
    year: '2025',
    category: 'ai',
    divTag: '[AI & CORE]',
    color: '#d4af37',
    badge1: 'WEBGL 3D CORE',
    badge2: 'TELEMETRY DASH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASWDK9rooMi2jpo9zsod9EmbErN-jQedG1RJxyTvLUd1FPiFB2_oV_5CInDvqFQJvuxD-6Kw-Qis45NJMzWw0c5b3ttGpIBNT3RsuzBLG8zaO6dyvcRgKfagv22nIU2uKe3MVjZFf9K7ejDNvpqTDD1iMLIxD3iMebtxyIxUD_sMbZD98qJekhiX3Gf6z6xpMK4-ax2c3W9XrGsYY2_dTSX9RZuMsGn9hEn-U6tUgSV-XKQL6JLFAC',
    imageAlt: 'High-tech dark user interface dashboard showing real-time 3D autonomous vehicle telemetry',
    challenge: 'Design a unified command interface for 400 autonomous aerial eVTOL taxis operating across congested hyper-dense urban corridors.',
    solution: 'Constructed low-latency 3D map tile streaming via WebGPU and browser-based spatial coordinate tracking.',
    outcome: 'Selected as standard operating system for 2026 Dubai autonomous passenger flight trials.',
    techSpecs: 'WEBGPU SPATIAL TILE STREAMING • 120 FPS FLUIDITY',
    metrics: [
      { label: 'Fleet Managed', value: '400 eVTOL' },
      { label: 'Telemetry Jitter', value: '< 2ms' },
      { label: 'Uptime SLA', value: '99.999%' }
    ],
    route: '/ai-engineering#portfolio'
  }
];
