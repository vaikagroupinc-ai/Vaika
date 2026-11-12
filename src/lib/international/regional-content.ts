import { DivisionSlug, LocaleCode } from './locale-config';

export interface RegionalDivisionCopy {
  slug: DivisionSlug;
  badge: string;
  title: string;
  headline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  deliverables: string[];
  standardsNote: string;
}

export interface RegionalMarketContent {
  locale: LocaleCode;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  hqTransparencyBadge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; detail: string }>;
  complianceHeading: string;
  complianceCopy: string;
  sectionLabels: {
    overview: string;
    divisions: string;
    workflow: string;
    contact: string;
    exploreDivision: string;
    backToRegionalHome: string;
    globalEditionLink: string;
    currencyNote: string;
  };
  divisions: Record<DivisionSlug, RegionalDivisionCopy>;
}

export const REGIONAL_CONTENT: Record<LocaleCode, RegionalMarketContent> = {
  'en-US': {
    locale: 'en-US',
    eyebrow: 'UNITED STATES EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR US REAL ESTATE, AI & GROWTH TEAMS',
    heroSubtitle:
      'Headquartered in India and engineered for United States brokerages, property developers, and technology enterprises across EST, CST, and PST timezones.',
    hqTransparencyBadge: 'Headquartered in India · Dedicated US Market Delivery (USD)',
    metaTitle: 'VAIKA GROUP United States | Real Estate Media, AI Data & Digital Growth',
    metaDescription:
      'India-headquartered creative technology studio serving US real estate brokerages and enterprises with flambient editing, virtual staging, 3D renders, AI data operations, and SEO growth.',
    keywords: [
      'US real estate photo editing outsourcing',
      'virtual staging services United States',
      '3D architectural rendering USA',
      'real estate transaction coordinator USA',
      'AI data annotation services US',
      'B2B technical SEO agency USA',
    ],
    ctaPrimary: 'DISCUSS US PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'OVERNIGHT INDIA-TO-US PRODUCTION CADENCE',
    workflowSteps: [
      {
        step: '01',
        title: 'US Close-of-Day Handoff',
        detail: 'Upload RAW brackets, floor plans, or datasets at 5 PM EST/PST into encrypted pipelines.',
      },
      {
        step: '02',
        title: 'India HQ Senior Execution',
        detail: 'Dedicated specialists in our India studio execute editing, 3D CGI, or QA overnight.',
      },
      {
        step: '03',
        title: 'Morning US Delivery',
        detail: 'MLS-compliant assets and campaign deliverables land before 8 AM local US business hours.',
      },
    ],
    complianceHeading: 'US MARKET STANDARDS & TRANSPARENCY',
    complianceCopy:
      'All production is executed by VAIKA GROUP teams in India under NDA, RESO/MLS-ready media formatting, and USD invoicing with direct leadership communication.',
    sectionLabels: {
      overview: 'MARKET OVERVIEW',
      divisions: 'CORE US SERVICE DIVISIONS',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE US BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'US EDITION HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in USD.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // REAL ESTATE MEDIA (US)',
        title: 'Real Estate Media & 3D Visualization',
        headline: 'MLS-READY FLAMBIENT, VIRTUAL STAGING & 3D ARCHITECTURAL RENDERS',
        summary:
          'High-volume flambient photo editing, day-to-dusk twilight conversion, photorealistic virtual staging, and exterior CGI built for US luxury brokerages and listing photographers.',
        metaTitle: 'US Real Estate Photo Editing, Virtual Staging & 3D Renders | VAIKA GROUP',
        metaDescription:
          'Overnight flambient editing, MLS-ready virtual staging, twilight conversions, and 3D CGI renders delivered from India HQ for US real estate photographers and brokerages.',
        deliverables: [
          '7-bracket flambient HDR & crisp window pulls',
          'Photorealistic virtual staging for vacant US listings',
          'Day-to-dusk twilight & sky replacement',
          '3D architectural exteriors & floor plan visualization',
        ],
        standardsNote: 'Formatted for US MLS portals, Zillow, Realtor.com, and brokerage luxury decks.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENT SERVICES (US)',
        title: 'Agent Services & Transaction Operations',
        headline: 'DEDICATED BACK-OFFICE, CRM & LISTING COORDINATION FOR US TEAMS',
        summary:
          'Structured listing coordination, CRM hygiene, lead qualification workflows, and executive back-office operations supporting high-producing US real estate teams.',
        metaTitle: 'US Real Estate Agent Services & Back-Office Ops | VAIKA GROUP',
        metaDescription:
          'Dedicated listing coordination, CRM pipeline management, and back-office support delivered from India HQ for United States real estate teams and brokerages.',
        deliverables: [
          'MLS listing input & compliance checklist preparation',
          'CRM database cleanup & automated follow-up workflows',
          'Vendor, media & showing schedule coordination',
          'Weekly pipeline & KPI reporting in EST/PST windows',
        ],
        standardsNote: 'Aligned with US brokerage SOPs, Follow Up Boss, HubSpot, and Salesforce.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (US)',
        title: 'AI Data Operations & Engineering',
        headline: 'HUMAN-IN-THE-LOOP ANNOTATION, RLHF & ENTERPRISE DATA PIPELINES',
        summary:
          'Precision multimodal data annotation, LiDAR/computer vision labeling, and LLM evaluation workflows engineered for US AI labs and PropTech teams.',
        metaTitle: 'AI Data Annotation & Multimodal Operations for US Teams | VAIKA GROUP',
        metaDescription:
          'Multimodal data labeling, computer vision QA, RLHF evaluation, and structured dataset pipelines delivered from India HQ for US AI engineering teams.',
        deliverables: [
          '2D/3D bounding box, polygon & semantic segmentation',
          'RLHF preference ranking & LLM safety evaluation',
          'Multi-tier QA consensus & audit trails',
          'Custom JSON/COCO/Parquet schema delivery',
        ],
        standardsNote: 'NDA-backed India delivery pods with strict PII sanitization protocols.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (US)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'SEARCH ARCHITECTURE, PAID ACQUISITION & CONVERSION SYSTEMS',
        summary:
          'Technical SEO, local/national search architecture, performance creative, and analytics engineering tailored for competitive US B2B and real estate markets.',
        metaTitle: 'US Technical SEO & B2B Digital Growth Systems | VAIKA GROUP',
        metaDescription:
          'Technical SEO, search architecture, and performance growth engineering delivered from India HQ for US brokerages, PropTechs, and B2B brands.',
        deliverables: [
          'Next.js technical SEO & Core Web Vitals engineering',
          'High-intent US search & content cluster strategy',
          'GA4 conversion tracking & attribution architecture',
          'Paid search & social creative testing',
        ],
        standardsNote: 'Built for Google US organic search, structured schema, and measurable pipeline ROI.',
      },
    },
  },
  'en-GB': {
    locale: 'en-GB',
    eyebrow: 'UNITED KINGDOM EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR UK PROPERTY, AI & DIGITAL TEAMS',
    heroSubtitle:
      'Headquartered in India and calibrated for United Kingdom estate agents, architectural studios, and digital enterprises operating across GMT and BST.',
    hqTransparencyBadge: 'Headquartered in India · Dedicated UK Market Delivery (GBP)',
    metaTitle: 'VAIKA GROUP United Kingdom | Property Media, AI Data & Digital Growth',
    metaDescription:
      'India-headquartered creative technology partner for UK estate agents and enterprises: architectural photo editing, virtual staging, 3D CGI, AI data operations, and technical SEO.',
    keywords: [
      'UK property photo editing services',
      'virtual staging United Kingdom',
      'architectural 3D CGI rendering UK',
      'estate agent back office support UK',
      'AI data annotation services UK',
      'technical SEO agency United Kingdom',
    ],
    ctaPrimary: 'DISCUSS UK PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'SEAMLESS INDIA-TO-UK PRODUCTION WORKFLOW',
    workflowSteps: [
      {
        step: '01',
        title: 'UK Afternoon Upload',
        detail: 'Submit property brackets, CAD drawings, or briefs before close of play in London.',
      },
      {
        step: '02',
        title: 'India HQ Specialist Turnaround',
        detail: 'Dedicated editors, 3D artists, and QA leads complete production overnight GMT/BST.',
      },
      {
        step: '03',
        title: '08:00 GMT Morning Delivery',
        detail: 'Rightmove and Zoopla ready imagery and campaign deliverables arrive before morning stand-up.',
      },
    ],
    complianceHeading: 'UK STANDARDS, GDPR ALIGNMENT & TRANSPARENCY',
    complianceCopy:
      'Operated from VAIKA GROUP India HQ with strict NDA governance, UK-GDPR conscious data handling, and transparent GBP commercial billing.',
    sectionLabels: {
      overview: 'UK MARKET OVERVIEW',
      divisions: 'CORE UK SERVICE DIVISIONS',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE UK BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'UK EDITION HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in GBP.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // PROPERTY MEDIA (UK)',
        title: 'Property Media & 3D Visualization',
        headline: 'RIGHTMOVE-READY RETOUCHING, VIRTUAL STAGING & ARCHITECTURAL CGI',
        summary:
          'Precision architectural retouching, overcast-to-blue-sky balancing, virtual furnishing, and photorealistic 3D CGIs tailored for UK estate agencies and prime developers.',
        metaTitle: 'UK Property Photo Editing, Virtual Staging & 3D CGI | VAIKA GROUP',
        metaDescription:
          'Architectural photo retouching, virtual staging, dusk conversions, and 3D CGI renders delivered from India HQ for United Kingdom estate agents and developers.',
        deliverables: [
          'Natural British daylight colour grading & window pulls',
          'Virtual staging for prime UK residential developments',
          'Overcast sky correction & dusk conversions',
          'Architectural 3D exterior & interior CGI',
        ],
        standardsNote: 'Optimised for Rightmove, Zoopla, OnTheMarket, and prime print brochures.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENCY OPERATIONS (UK)',
        title: 'Agency Operations & Back-Office Support',
        headline: 'STRUCTURED LISTING ADMINISTRATION & CRM SUPPORT FOR UK AGENCIES',
        summary:
          'Dedicated property administration, portal listing preparation, CRM management, and enquiry coordination aligned with UK estate agency workflows.',
        metaTitle: 'UK Estate Agency Back-Office & CRM Support | VAIKA GROUP',
        metaDescription:
          'Dedicated property listing administration, CRM hygiene, and operations support delivered from India HQ for United Kingdom estate agencies.',
        deliverables: [
          'Property portal copy & media asset formatting',
          'CRM pipeline hygiene & applicant follow-up workflows',
          'Viewing & media vendor diary coordination',
          'Weekly agency performance reporting in GMT/BST',
        ],
        standardsNote: 'Compatible with Reapit, Alto, Street.co.uk, and HubSpot workflows.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (UK)',
        title: 'AI Data Operations & Engineering',
        headline: 'MULTIMODAL ANNOTATION, COMPUTER VISION & LLM EVALUATION',
        summary:
          'High-accuracy annotation, geospatial/computer vision datasets, and human evaluation pipelines supporting UK AI startups and enterprise data teams.',
        metaTitle: 'UK AI Data Annotation & Evaluation Services | VAIKA GROUP',
        metaDescription:
          'Computer vision labeling, multimodal annotation, and LLM evaluation delivered from India HQ for United Kingdom AI and enterprise teams.',
        deliverables: [
          'High-precision image, video & spatial annotation',
          'Domain-specific LLM evaluation & red-teaming support',
          'Multi-stage QA verification with auditable metrics',
          'GDPR-conscious data minimization & secure transfer',
        ],
        standardsNote: 'Executed in access-controlled India pods under NDA.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (UK)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'UK ORGANIC SEARCH ARCHITECTURE & PERFORMANCE ACQUISITION',
        summary:
          'International and UK-localised technical SEO, schema engineering, and conversion analytics built for British property brands and B2B technology firms.',
        metaTitle: 'UK Technical SEO & Digital Growth Engineering | VAIKA GROUP',
        metaDescription:
          'Technical SEO, structured data architecture, and performance marketing delivered from India HQ for United Kingdom B2B and property brands.',
        deliverables: [
          'Technical SEO audits & Core Web Vitals optimization',
          'UK regional search & content architecture',
          'GA4 attribution & conversion funnel engineering',
          'Targeted B2B & property lead generation',
        ],
        standardsNote: 'Engineered for Google UK search visibility and measurable lead conversion.',
      },
    },
  },
  'en-CA': {
    locale: 'en-CA',
    eyebrow: 'CANADA EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR CANADIAN REAL ESTATE, AI & GROWTH TEAMS',
    heroSubtitle:
      'Headquartered in India and built for Canadian real estate brokerages, architectural visualizers, and AI teams from Toronto to Vancouver.',
    hqTransparencyBadge: 'Headquartered in India · Dedicated Canadian Delivery (CAD)',
    metaTitle: 'VAIKA GROUP Canada | Real Estate Media, AI Data & Technical SEO',
    metaDescription:
      'India-headquartered studio serving Canadian brokerages and technology companies with architectural photo editing, virtual staging, 3D CGI, AI data operations, and SEO.',
    keywords: [
      'Canada real estate photo editing',
      'virtual staging Toronto Vancouver',
      '3D architectural visualization Canada',
      'AI data annotation Canada',
      'technical SEO agency Canada',
    ],
    ctaPrimary: 'DISCUSS CANADIAN PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'COAST-TO-COAST CANADIAN DELIVERY CADENCE',
    workflowSteps: [
      {
        step: '01',
        title: 'End-of-Day Canadian Upload',
        detail: 'Submit RAW shoots or project specs across EST, MST, or PST business hours.',
      },
      {
        step: '02',
        title: 'India HQ Overnight Production',
        detail: 'Our dedicated India specialists process imagery, 3D scenes, and QA while Canada sleeps.',
      },
      {
        step: '03',
        title: 'Pre-Market Morning Handoff',
        detail: 'CREA/MLS-ready deliverables land in your inbox before morning client appointments.',
      },
    ],
    complianceHeading: 'CANADIAN DELIVERY & COMMERCIAL CLARITY',
    complianceCopy:
      'Delivered exclusively from VAIKA GROUP India HQ under NDA, PIPEDA-conscious handling, and straightforward CAD invoicing.',
    sectionLabels: {
      overview: 'CANADIAN MARKET OVERVIEW',
      divisions: 'CORE CANADIAN DIVISIONS',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE CANADIAN BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'CANADA EDITION HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in CAD.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // REAL ESTATE MEDIA (CA)',
        title: 'Real Estate Media & 3D Visualization',
        headline: 'CREA MLS-READY FLAMBIENT, VIRTUAL STAGING & SNOW-TO-SUMMER RETOUCHING',
        summary:
          'Architectural photo editing, seasonal sky/lawn balancing, virtual staging, and 3D exterior renders tailored for Canadian luxury listings and pre-construction developments.',
        metaTitle: 'Canada Real Estate Photo Editing & Virtual Staging | VAIKA GROUP',
        metaDescription:
          'Overnight flambient editing, virtual staging, and 3D pre-construction renders delivered from India HQ for Canadian brokerages and photographers.',
        deliverables: [
          'True-to-life flambient HDR & window pull blending',
          'Virtual staging & renovation previews for condos & estates',
          'Twilight conversion & seasonal exterior balancing',
          'Pre-construction 3D architectural CGI',
        ],
        standardsNote: 'Formatted for CREA, Realtor.ca, and Canadian pre-sale marketing suites.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENT SERVICES (CA)',
        title: 'Agent Services & Listing Operations',
        headline: 'DEDICATED LISTING COORDINATION & CRM OPS FOR CANADIAN BROKERAGES',
        summary:
          'Structured administrative coordination, CRM management, and transaction prep supporting busy Canadian real estate teams.',
        metaTitle: 'Canada Real Estate Agent Services & CRM Ops | VAIKA GROUP',
        metaDescription:
          'Listing coordination, CRM hygiene, and operational support delivered from India HQ for Canadian real estate teams.',
        deliverables: [
          'MLS listing packet & feature sheet preparation',
          'CRM segmentation & follow-up task automation',
          'Media & showing schedule coordination',
          'Weekly operational reporting across Canadian timezones',
        ],
        standardsNote: 'Aligned with Canadian brokerage documentation and CRM stacks.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (CA)',
        title: 'AI Data Operations & Engineering',
        headline: 'HIGH-ACCURACY MULTIMODAL ANNOTATION & DATASET PIPELINES',
        summary:
          'Reliable human-in-the-loop data labeling, vision QA, and LLM evaluation supporting Canadian AI research teams and SaaS companies.',
        metaTitle: 'Canada AI Data Annotation & Dataset Operations | VAIKA GROUP',
        metaDescription:
          'Multimodal data annotation, computer vision QA, and LLM evaluation delivered from India HQ for Canadian AI teams.',
        deliverables: [
          'Bounding boxes, polygons & video object tracking',
          'LLM evaluation & structured prompt rubric scoring',
          'Strict QA consensus & reproducible exports',
          'NDA-protected delivery pods from India HQ',
        ],
        standardsNote: 'PIPEDA-conscious data handling with zero unverified third-party sharing.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (CA)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'CANADIAN SEARCH ARCHITECTURE & PERFORMANCE ANALYTICS',
        summary:
          'Technical SEO, structured schema, and conversion-focused digital campaigns designed for Canadian real estate developers and B2B firms.',
        metaTitle: 'Canada Technical SEO & Digital Marketing | VAIKA GROUP',
        metaDescription:
          'Technical SEO, schema engineering, and growth analytics delivered from India HQ for Canadian B2B and property brands.',
        deliverables: [
          'Core Web Vitals & Next.js technical SEO engineering',
          'City-level & national Canadian search architecture',
          'GA4 conversion measurement & attribution',
          'Performance creative & search campaign scaling',
        ],
        standardsNote: 'Built for Google.ca organic authority and measurable lead velocity.',
      },
    },
  },
  'en-AU': {
    locale: 'en-AU',
    eyebrow: 'AUSTRALIA EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR AUSTRALIAN PROPERTY, AI & DIGITAL TEAMS',
    heroSubtitle:
      'Headquartered in India with near-real-time timezone overlap for Australian real estate agencies, architectural visualizers, and technology teams across AEST and AWST.',
    hqTransparencyBadge: 'Headquartered in India · Near-Live Australian Overlap (AUD)',
    metaTitle: 'VAIKA GROUP Australia | Property Media, AI Data & Technical SEO',
    metaDescription:
      'India-headquartered creative technology partner for Australian real estate and tech teams: photo editing, virtual staging, 3D CGI, AI data ops, and SEO.',
    keywords: [
      'Australia real estate photo editing',
      'virtual staging Sydney Melbourne',
      '3D architectural rendering Australia',
      'AI data annotation Australia',
      'technical SEO Australia',
    ],
    ctaPrimary: 'DISCUSS AUSTRALIAN PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'LIVE IST-TO-AEST COLLABORATION WINDOW',
    workflowSteps: [
      {
        step: '01',
        title: 'Same-Day AEST/AWST Sync',
        detail: '4.5-hour IST-to-AEST overlap enables live Slack/brief alignment during Australian business hours.',
      },
      {
        step: '02',
        title: 'Rapid India HQ Execution',
        detail: 'Dedicated editors, 3D CGI artists, and AI QA teams begin production immediately.',
      },
      {
        step: '03',
        title: 'Next-Morning Portal Launch',
        detail: 'realestate.com.au and Domain-ready assets arrive calibrated for morning campaign launch.',
      },
    ],
    complianceHeading: 'AUSTRALIAN MARKET ALIGNMENT & TRANSPARENCY',
    complianceCopy:
      'All delivery originates from VAIKA GROUP India HQ under NDA, Privacy Act-conscious workflows, and clear AUD invoicing.',
    sectionLabels: {
      overview: 'AUSTRALIAN MARKET OVERVIEW',
      divisions: 'CORE AUSTRALIAN DIVISIONS',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE AUSTRALIAN BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'AUSTRALIA EDITION HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in AUD.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // PROPERTY MEDIA (AU)',
        title: 'Property Media & 3D Visualization',
        headline: 'COASTAL-LIGHT FLAMBIENT, VIRTUAL STAGING & ARCHITECTURAL CGI',
        summary:
          'Vibrant natural-light photo editing, dusk conversions, virtual furniture staging, and architectural 3D renders built for Australian agencies and developers.',
        metaTitle: 'Australia Real Estate Photo Editing & 3D CGI | VAIKA GROUP',
        metaDescription:
          'Fast-turnaround flambient editing, virtual staging, twilight conversion, and 3D renders delivered from India HQ for Australian property agencies.',
        deliverables: [
          'Crisp coastal-light HDR & interior window pulls',
          'Contemporary Australian virtual staging',
          'Day-to-dusk twilight & pool reflection enhancement',
          'Off-the-plan 3D architectural CGI',
        ],
        standardsNote: 'Optimised for realestate.com.au, Domain.com.au, and auction campaign packs.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENCY OPS (AU)',
        title: 'Agent Services & Campaign Operations',
        headline: 'LISTING ADMINISTRATION & CRM WORKFLOWS IN AUSTRALIAN BUSINESS HOURS',
        summary:
          'Dedicated campaign coordination, vendor reporting prep, and CRM hygiene with live IST-AEST working-hour overlap.',
        metaTitle: 'Australia Real Estate Back-Office & CRM Support | VAIKA GROUP',
        metaDescription:
          'Same-day listing coordination and CRM operations delivered from India HQ for Australian real estate agencies.',
        deliverables: [
          'Campaign asset preparation & portal upload checks',
          'CRM database enrichment & buyer inquiry routing',
          'Vendor report compilation & inspection scheduling',
          'Live working-hour overlap across Sydney, Melbourne & Perth',
        ],
        standardsNote: 'Compatible with Rex, VaultRE, Agentbox, and HubSpot.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (AU)',
        title: 'AI Data Operations & Engineering',
        headline: 'PRECISION ANNOTATION, GEOSPATIAL LABELING & LLM QA',
        summary:
          'Structured multimodal annotation, geospatial/aerial object labeling, and LLM evaluation delivered with same-day Australian timezone collaboration.',
        metaTitle: 'Australia AI Data Annotation & Vision Ops | VAIKA GROUP',
        metaDescription:
          'Multimodal data annotation, computer vision QA, and LLM evaluation delivered from India HQ for Australian AI and enterprise teams.',
        deliverables: [
          'Aerial, geospatial & infrastructure computer vision labeling',
          'Multimodal document & text evaluation',
          'Multi-pass QA validation & schema delivery',
          'NDA-governed India HQ engineering pods',
        ],
        standardsNote: 'Built for Australian PropTech, mining-tech, and enterprise AI teams.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (AU)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'AUSTRALIAN SEARCH AUTHORITY & CONVERSION ENGINEERING',
        summary:
          'Technical SEO, structured data, and analytics architecture engineered for Australian property portals, agencies, and B2B SaaS.',
        metaTitle: 'Australia Technical SEO & Digital Growth | VAIKA GROUP',
        metaDescription:
          'Technical SEO, Core Web Vitals optimization, and performance marketing delivered from India HQ for Australian businesses.',
        deliverables: [
          'Google.com.au technical SEO & schema architecture',
          'Suburb & service-line landing page optimization',
          'GA4 server/client attribution & conversion tracking',
          'Targeted B2B acquisition & creative testing',
        ],
        standardsNote: 'Engineered for competitive Sydney, Melbourne, and national AU SERPs.',
      },
    },
  },
  'de-DE': {
    locale: 'de-DE',
    eyebrow: 'DEUTSCHLAND-AUSGABE // ZENTRALSTANDORT INDIEN',
    heroTitle: 'VAIKA GROUP FÜR IMMOBILIEN-, KI- & WACHSTUMSTEAMS IN DEUTSCHLAND',
    heroSubtitle:
      'Mit Hauptsitz in Indien und spezialisierten Teams für deutsche Maklerhäuser, Projektentwickler, Architekturbüros und Technologieunternehmen in MEZ/MESZ.',
    hqTransparencyBadge: 'Hauptsitz in Indien · Direkte Lieferung für Deutschland (EUR)',
    metaTitle: 'VAIKA GROUP Deutschland | Immobilien-Visualisierung, KI-Daten & SEO',
    metaDescription:
      'Kreativ- und Technologiepartner mit Hauptsitz in Indien für den deutschen Markt: Architektur-Retusche, Virtual Staging, 3D-Visualisierung, KI-Datenannotation und technisches SEO.',
    keywords: [
      'Immobilien Bildbearbeitung Agentur',
      'Virtual Staging Deutschland',
      '3D Architekturvisualisierung',
      'KI Datenannotation Deutschland',
      'Technisches SEO Next.js Deutschland',
      'Vaika Group Deutschland',
    ],
    ctaPrimary: 'PROJEKT ANFRAGEN',
    ctaSecondary: 'BEREICHE ENTDECKEN',
    workflowTitle: 'STRUKTURIERTER PRODUKTIONSABLAUF INDIEN – DEUTSCHLAND',
    workflowSteps: [
      {
        step: '01',
        title: 'Datenübergabe am Nachmittag (MEZ)',
        detail: 'Sichere Übermittlung von RAW-Aufnahmen, Grundrissen oder Datensätzen bis zum späten Nachmittag.',
      },
      {
        step: '02',
        title: 'Umsetzung im Indien-HQ',
        detail: 'Spezialisierte Bildbearbeiter, 3D-Artists und QA-Teams produzieren über Nacht nach Ihren Vorgaben.',
      },
      {
        step: '03',
        title: 'Auslieferung zum Arbeitsbeginn',
        detail: 'Fertige Exposé-Dateien, 3D-Renderings und geprüfte Datensätze stehen um 08:30 Uhr MEZ bereit.',
      },
    ],
    complianceHeading: 'TRANSPARENZ, DSGVO-BEWUSSTSEIN & QUALITÄTSSTANDARDS',
    complianceCopy:
      'Alle Leistungen werden transparent durch VAIKA GROUP am Hauptsitz in Indien erbracht – unter strenger Vertraulichkeitsvereinbarung (NDA), datensparsamer Verarbeitung und klarer EUR-Abrechnung.',
    sectionLabels: {
      overview: 'MARKTÜBERSICHT DEUTSCHLAND',
      divisions: 'UNSERE VIER LEISTUNGSBEREICHE',
      workflow: 'LIEFERPROZESS',
      contact: 'ANFRAGE FÜR DEUTSCHLAND STARTEN',
      exploreDivision: 'BEREICH ÖFFNEN',
      backToRegionalHome: 'DEUTSCHLAND-STARTSEITE',
      globalEditionLink: 'GLOBALE AUSGABE',
      currencyNote: 'Projektangebote und Rechnungsstellung erfolgen auf Wunsch in EUR.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // IMMOBILIENMEDIEN (DE)',
        title: 'Immobilienmedien & 3D-Visualisierung',
        headline: 'ARCHITEKTUR-RETUSCHE, VIRTUAL STAGING & PHOTOREALISTISCHE 3D-RENDERS',
        summary:
          'Präzise Belichtungskorrekturen, natürliches Virtual Staging, Tag-zu-Dämmerung-Konvertierungen und 3D-Architekturvisualisierungen für deutsche Bauträger und Makler.',
        metaTitle: 'Immobilien Bildbearbeitung, Virtual Staging & 3D-Visualisierung | VAIKA GROUP',
        metaDescription:
          'Professionelle Immobilien-Bildbearbeitung, Virtual Staging und 3D-Architekturvisualisierung aus unserem Indien-HQ für Makler und Projektentwickler in Deutschland.',
        deliverables: [
          'Natürliche HDR- & Flambient-Architekturretusche',
          'Stilgerechtes Virtual Staging für leerstehende Objekte',
          'Tag-zu-Dämmerung-Bearbeitung & Himmelsoptimierung',
          '3D-Außen- und Innenvisualisierungen für Neubauprojekte',
        ],
        standardsNote: 'Optimiert für ImmoScout24, Immowelt und hochwertige Bauträger-Exposés.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // MAKLER-OPERATIONS (DE)',
        title: 'Backoffice & Prozessunterstützung für Makler',
        headline: 'STRUKTURIERTE OBJEKTADMINISTRATION & CRM-PFLEGE',
        summary:
          'Zuverlässige Unterstützung bei Exposé-Vorbereitung, Portalpflege, CRM-Datenhygiene und Terminkoordination für wachsende Immobilienbüros.',
        metaTitle: 'Backoffice & CRM-Unterstützung für Immobilienmakler | VAIKA GROUP',
        metaDescription:
          'Strukturierte Objektadministration, CRM-Pflege und Prozessunterstützung aus Indien für Immobilienunternehmen in Deutschland.',
        deliverables: [
          'Aufbereitung von Exposé-Medien und Objektdaten',
          'CRM-Datenbereinigung und strukturierte Nachfassprozesse',
          'Koordination von Fototerminen und Dienstleistern',
          'Wöchentliche Status- und KPI-Berichte in MEZ/MESZ',
        ],
        standardsNote: 'Kompatibel mit gängigen CRM-Systemen und strukturierten Maklerprozessen.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATEN & KI-KERN (DE)',
        title: 'KI-Datenoperationen & Annotation',
        headline: 'PRÄZISE MULTIMODALE ANNOTATION & MODELL-EVALUIERUNG',
        summary:
          'Qualitätsgesicherte Bild-, Video- und Textannotation sowie strukturierte Evaluierungs-Pipelines für deutsche KI-Teams und Industrieunternehmen.',
        metaTitle: 'KI-Datenannotation & Qualitätsprüfung für Deutschland | VAIKA GROUP',
        metaDescription:
          'Präzise Computer-Vision-Annotation, multimodale Datensätze und LLM-Evaluierung aus unserem Indien-HQ für deutsche KI-Teams.',
        deliverables: [
          '2D/3D-Bounding-Boxes, Polygone & semantische Segmentierung',
          'Strukturierte LLM-Evaluierung und Qualitätsbewertung',
          'Mehrstufige QA-Prüfung mit nachvollziehbaren Protokollen',
          'Datensparsame Übergabe unter strikter NDA-Bindung',
        ],
        standardsNote: 'Ausführung in zugriffsgeschützten Teams mit Fokus auf Datenminimierung.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITALES WACHSTUM (DE)',
        title: 'Digitales Marketing & Technisches SEO',
        headline: 'SUCHARCHITEKTUR, PERFORMANCE-DATEN & CONVERSION-SYSTEME',
        summary:
          'Technisches SEO, strukturierte Daten nach Schema.org, Core-Web-Vitals-Optimierung und messbare Wachstumsstrategien für den DACH- und Deutschland-Markt.',
        metaTitle: 'Technisches SEO & Digitales Wachstum Deutschland | VAIKA GROUP',
        metaDescription:
          'Technisches SEO, Schema.org-Architektur und Performance-Marketing aus unserem Indien-HQ für Unternehmen in Deutschland.',
        deliverables: [
          'Technisches SEO & Next.js-Performance-Optimierung',
          'Strukturierte Daten (JSON-LD) & internationale Hreflang-Logik',
          'Sauberes Conversion-Tracking und Suchanalyse',
          'Performance-Kampagnen für B2B und Immobilienprojekte',
        ],
        standardsNote: 'Ausgerichtet auf nachhaltige Sichtbarkeit bei Google.de.',
      },
    },
  },
  'en-DE': {
    locale: 'en-DE',
    eyebrow: 'GERMANY ENGLISH EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR INTERNATIONAL TEAMS IN GERMANY',
    heroSubtitle:
      'Headquartered in India and built for English-speaking product, real estate, and AI engineering teams operating in Berlin, Munich, Frankfurt, and Hamburg (CET/CEST).',
    hqTransparencyBadge: 'Headquartered in India · English-Language Delivery for Germany (EUR)',
    metaTitle: 'VAIKA GROUP Germany (English) | Real Estate Media, AI Data & Technical SEO',
    metaDescription:
      'English-language service portal for teams in Germany: India-headquartered architectural visualization, virtual staging, AI data annotation, and technical SEO.',
    keywords: [
      'real estate photo editing Germany English',
      '3D architectural visualization Berlin Munich',
      'AI data annotation Germany English',
      'technical SEO agency Germany English',
      'Vaika Group Germany',
    ],
    ctaPrimary: 'DISCUSS GERMANY PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'INDIA-TO-GERMANY CET/CEST PRODUCTION WORKFLOW',
    workflowSteps: [
      {
        step: '01',
        title: 'Afternoon Brief in CET/CEST',
        detail: 'Share RAW property photography, 3D specs, or AI labeling guidelines in English.',
      },
      {
        step: '02',
        title: 'Overnight India HQ Execution',
        detail: 'Dedicated India specialists complete production with multi-stage quality verification.',
      },
      {
        step: '03',
        title: '08:30 CET Morning Delivery',
        detail: 'Production-ready imagery, datasets, and technical deliverables arrive before stand-up.',
      },
    ],
    complianceHeading: 'INDIA HQ DELIVERY & GDPR-CONSCIOUS GOVERNANCE',
    complianceCopy:
      'Operated from VAIKA GROUP India HQ with English-first project management, NDA confidentiality, data minimization, and EUR invoicing for German entities.',
    sectionLabels: {
      overview: 'GERMANY (ENGLISH) OVERVIEW',
      divisions: 'CORE DIVISIONS FOR GERMANY',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE GERMANY BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'GERMANY (EN) HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in EUR.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // REAL ESTATE MEDIA (DE · EN)',
        title: 'Real Estate Media & 3D Visualization',
        headline: 'ARCHITECTURAL RETOUCHING, VIRTUAL STAGING & 3D CGI IN GERMANY',
        summary:
          'Architectural photo editing, natural virtual staging, twilight conversions, and 3D exterior renders delivered in English for international property developers and agencies in Germany.',
        metaTitle: 'Germany Real Estate Media & 3D Visualization (EN) | VAIKA GROUP',
        metaDescription:
          'Architectural photo editing, virtual staging, and 3D CGI renders delivered in English from India HQ for property teams in Germany.',
        deliverables: [
          'Flambient architectural editing & window balancing',
          'European-style virtual staging for urban developments',
          'Day-to-dusk twilight & sky enhancements',
          '3D exterior & interior architectural CGI',
        ],
        standardsNote: 'Tailored for international real estate teams marketing across Germany.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENT SERVICES (DE · EN)',
        title: 'Agent Services & Back-Office Ops',
        headline: 'ENGLISH-FIRST LISTING COORDINATION & CRM SUPPORT FOR GERMAN TEAMS',
        summary:
          'Dedicated listing asset prep, CRM administration, and operational coordination for international brokerages and property startups operating in Germany.',
        metaTitle: 'Germany Real Estate Operations Support (EN) | VAIKA GROUP',
        metaDescription:
          'English-language listing coordination and CRM operations delivered from India HQ for real estate teams in Germany.',
        deliverables: [
          'Listing media & brochure pack preparation',
          'CRM cleanup & lead routing workflows',
          'Cross-timezone schedule & vendor coordination',
          'Weekly KPI reporting in CET/CEST',
        ],
        standardsNote: 'Seamless English communication aligned with German market timelines.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (DE · EN)',
        title: 'AI Data Operations & Engineering',
        headline: 'MULTIMODAL ANNOTATION & EVALUATION FOR BERLIN & MUNICH AI TEAMS',
        summary:
          'Precision computer vision labeling, multimodal annotation, and LLM evaluation delivered in English for international AI startups and research labs in Germany.',
        metaTitle: 'Germany AI Data Annotation Services (EN) | VAIKA GROUP',
        metaDescription:
          'Multimodal data annotation, vision QA, and LLM evaluation delivered in English from India HQ for AI teams in Germany.',
        deliverables: [
          '2D/3D computer vision & autonomous mobility labeling',
          'Multilingual & English LLM evaluation pipelines',
          'Multi-tier QA consensus & reproducible schemas',
          'NDA-backed, data-minimized delivery workflows',
        ],
        standardsNote: 'Structured for English-speaking engineering teams in German tech hubs.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (DE · EN)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'BILINGUAL SEARCH ARCHITECTURE & TECHNICAL SEO FOR GERMANY',
        summary:
          'International technical SEO, Next.js Core Web Vitals optimization, and B2B growth analytics for English-first companies scaling in Germany.',
        metaTitle: 'Germany Technical SEO & Growth Engineering (EN) | VAIKA GROUP',
        metaDescription:
          'Technical SEO, international hreflang architecture, and growth analytics delivered from India HQ for English-speaking teams in Germany.',
        deliverables: [
          'Multi-locale technical SEO & hreflang engineering',
          'Next.js performance & Core Web Vitals tuning',
          'Conversion tracking & B2B funnel instrumentation',
          'Targeted search & LinkedIn/Google campaign creative',
        ],
        standardsNote: 'Built to rank cleanly across both German and English search intent in Germany.',
      },
    },
  },
  'en-NZ': {
    locale: 'en-NZ',
    eyebrow: 'NEW ZEALAND EDITION // INDIA HQ GLOBAL DELIVERY',
    heroTitle: 'VAIKA GROUP FOR NEW ZEALAND PROPERTY, AI & DIGITAL TEAMS',
    heroSubtitle:
      'Headquartered in India and supporting New Zealand real estate agencies, architectural studios, and technology companies across NZST and NZDT.',
    hqTransparencyBadge: 'Headquartered in India · Dedicated New Zealand Delivery (NZD)',
    metaTitle: 'VAIKA GROUP New Zealand | Real Estate Media, AI Data & Technical SEO',
    metaDescription:
      'India-headquartered creative technology studio serving New Zealand real estate agencies and tech businesses with photo editing, virtual staging, 3D CGI, AI data ops, and SEO.',
    keywords: [
      'New Zealand real estate photo editing',
      'virtual staging Auckland Wellington',
      '3D architectural rendering New Zealand',
      'AI data annotation New Zealand',
      'technical SEO agency New Zealand',
    ],
    ctaPrimary: 'DISCUSS NZ PROJECT',
    ctaSecondary: 'EXPLORE DIVISIONS',
    workflowTitle: 'RELIABLE INDIA-TO-NZ PRODUCTION CADENCE',
    workflowSteps: [
      {
        step: '01',
        title: 'Same-Day NZST/NZDT Upload',
        detail: 'Submit shoots or briefs during Auckland/Wellington hours with direct IST studio overlap.',
      },
      {
        step: '02',
        title: 'India HQ Specialist Execution',
        detail: 'Dedicated editors, 3D artists, and QA reviewers complete assets with strict consistency.',
      },
      {
        step: '03',
        title: 'Next-Morning Portal Delivery',
        detail: 'Trade Me Property and realestate.co.nz ready media lands ready for listing launch.',
      },
    ],
    complianceHeading: 'NEW ZEALAND MARKET ALIGNMENT & TRANSPARENCY',
    complianceCopy:
      'All execution is performed by VAIKA GROUP in India under NDA, New Zealand Privacy Act-conscious handling, and transparent NZD commercial invoicing.',
    sectionLabels: {
      overview: 'NEW ZEALAND OVERVIEW',
      divisions: 'CORE NEW ZEALAND DIVISIONS',
      workflow: 'DELIVERY CADENCE',
      contact: 'INITIATE NZ BRIEF',
      exploreDivision: 'EXPLORE DIVISION',
      backToRegionalHome: 'NEW ZEALAND HOME',
      globalEditionLink: 'GLOBAL EDITION',
      currencyNote: 'Commercial engagement & invoicing available in NZD.',
    },
    divisions: {
      'real-estate': {
        slug: 'real-estate',
        badge: '01 // REAL ESTATE MEDIA (NZ)',
        title: 'Real Estate Media & 3D Visualization',
        headline: 'NATURAL-LIGHT RETOUCHING, VIRTUAL STAGING & ARCHITECTURAL CGI FOR NZ',
        summary:
          'Crisp architectural photo editing, twilight conversions, virtual staging, and 3D renders tailored for New Zealand residential and lifestyle listings.',
        metaTitle: 'New Zealand Real Estate Photo Editing & 3D CGI | VAIKA GROUP',
        metaDescription:
          'Architectural photo editing, virtual staging, twilight conversion, and 3D renders delivered from India HQ for New Zealand real estate agencies.',
        deliverables: [
          'True-colour flambient HDR & coastal view window pulls',
          'Modern virtual staging for NZ homes & apartments',
          'Day-to-dusk twilight & sky enhancements',
          'Architectural 3D exterior & site renders',
        ],
        standardsNote: 'Formatted for realestate.co.nz, Trade Me Property, and OneRoof.',
      },
      'agent-services': {
        slug: 'agent-services',
        badge: '02 // AGENT SERVICES (NZ)',
        title: 'Agent Services & Listing Support',
        headline: 'LISTING ADMINISTRATION & CRM OPERATIONS FOR NEW ZEALAND AGENCIES',
        summary:
          'Structured listing coordination, CRM hygiene, and back-office workflow execution supporting high-performing New Zealand real estate teams.',
        metaTitle: 'New Zealand Real Estate Agent Services & CRM Ops | VAIKA GROUP',
        metaDescription:
          'Listing coordination and CRM operations delivered from India HQ for New Zealand real estate teams.',
        deliverables: [
          'Portal listing prep & digital brochure formatting',
          'CRM database hygiene & inquiry routing',
          'Media & open-home asset scheduling support',
          'Weekly agency reporting in NZST/NZDT',
        ],
        standardsNote: 'Aligned with New Zealand agency workflows and CRM tools.',
      },
      'data-ai': {
        slug: 'data-ai',
        badge: '03 // DATA & AI CORE (NZ)',
        title: 'AI Data Operations & Engineering',
        headline: 'PRECISION ANNOTATION & DATASET QA FOR KIWI TECH TEAMS',
        summary:
          'Reliable computer vision labeling, agricultural/geospatial annotation, and LLM evaluation delivered from India HQ for New Zealand technology companies.',
        metaTitle: 'New Zealand AI Data Annotation & Vision Ops | VAIKA GROUP',
        metaDescription:
          'Computer vision annotation, geospatial labeling, and LLM evaluation delivered from India HQ for New Zealand AI teams.',
        deliverables: [
          'AgriTech, geospatial & drone imagery annotation',
          'Multimodal document & text classification',
          'Multi-stage QA audit & clean JSON exports',
          'NDA-protected India HQ delivery pods',
        ],
        standardsNote: 'Privacy Act-conscious handling with dedicated QA oversight.',
      },
      'digital-marketing': {
        slug: 'digital-marketing',
        badge: '04 // DIGITAL GROWTH (NZ)',
        title: 'Digital Marketing & Technical SEO',
        headline: 'NEW ZEALAND SEARCH VISIBILITY & CONVERSION ARCHITECTURE',
        summary:
          'Technical SEO, structured schema, and conversion analytics built for New Zealand property brands, service businesses, and SaaS teams.',
        metaTitle: 'New Zealand Technical SEO & Digital Growth | VAIKA GROUP',
        metaDescription:
          'Technical SEO, Core Web Vitals optimization, and performance marketing delivered from India HQ for New Zealand businesses.',
        deliverables: [
          'Google.co.nz technical SEO & schema architecture',
          'Regional & city landing page optimization',
          'GA4 attribution & lead conversion tracking',
          'Targeted search & social creative',
        ],
        standardsNote: 'Built for organic visibility across Auckland, Wellington, Christchurch, and nationwide.',
      },
    },
  },
};

