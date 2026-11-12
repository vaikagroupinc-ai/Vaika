import { ServiceDivisionData, ServiceDetail } from '@/types';
import { REAL_ESTATE_PORTFOLIO_PROJECTS } from '@/data/realEstatePortfolioGallery';

/* =========================================================================
   VAIKA GROUP — FOUR PRIMARY DIVISIONS SERVICE DATA
   1. Real Estate Media & Visualization
   2. Agent Services
   3. Data & AI Core
   4. Digital Marketing & Creative
   ========================================================================= */

export const REAL_ESTATE_DIVISION: ServiceDivisionData = {
  key: 'estate',
  code: '01',
  title: 'REAL ESTATE MEDIA & VISUALIZATION',
  divisionLabel: 'DIVISION 01 // REAL ESTATE',
  tagline: 'PREMIUM REAL ESTATE MEDIA PRODUCTION & PROPERTY VISUALIZATION',
  positioning:
    'Premium real estate media production, property visualization, listing content, and digital property marketing solutions for luxury brokerages, property developers, and elite agents.',
  intro: {
    headline: 'CINEMATIC PROPERTY ASSETS THAT ACCELERATE SALES & LEASING.',
    subheadline: 'Luxury architectural imagery, precision renders, and multi-channel marketing collateral.',
    whatWeDo:
      'We produce high-impact visual media for residential and commercial properties, ranging from precision flambient photography and drone edits to full-scale 3D exterior/interior architectural renders and single-property marketing systems.',
    whoWeServe:
      'High-end real estate brokerages, architectural firms, property developers, luxury listing agents, hospitality groups, and institutional real estate asset managers.',
    problemsAddressed:
      'Subpar listing imagery, prolonged days-on-market, incomplete construction visualization, weather-compromised photography, and time-consuming marketing production.',
    whyValuable:
      'Properties presented with elite architectural media achieve higher perceived asset values, higher inquiry rates, and faster contractual closings while reinforcing the agent’s or developer’s premier market reputation.',
  },
  accentColor: '#d4af37', // Warm burnished champagne gold
  accentSecondary: '#f59e0b',
  accentBg: 'rgba(212, 175, 55, 0.08)',
  accentBorder: 'rgba(212, 175, 55, 0.25)',
  route: '/services/real-estate',
  heroBadge: 'LUXURY ARCHITECTURAL ASSETS',
  telemetryTag: 'OPTICS // 8K RESOLUTION',
  categories: [
    {
      id: 'photo-editing-visualization',
      title: 'Category A: Photo Editing & Visualization',
      description: 'Precision architectural retouching, virtual enhancements, 3D renderings, and measured spatial plans.',
      services: [
        {
          id: 'hdr-flambient-photo-editing',
          name: 'HDR / Flambient Photo Editing',
          slug: 'hdr-flambient-photo-editing',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Balanced dynamic range blending flash clarity with ambient warmth.',
          explanation:
            'Professional manual blending of flash and ambient exposures to yield natural window pulls, balanced interior lighting, color accuracy, and razor-sharp architectural clarity.',
          includes: [
            'Manual exposure bracket blending',
            'Window pull masking and exterior balance',
            'Color-cast removal and white balance calibration',
            'Perspective correction and vertical leveling',
            'Lens distortion correction and sharpness optimization'
          ],
          problemSolved:
            'Eliminates blown-out windows, harsh flash reflections, unnatural orange ceiling tints, and muddy ambient shadows.',
          deliverables: [
            'High-resolution print-ready TIFF/JPEG files',
            'MLS-optimized web formats',
            'Color-corrected master files'
          ],
          badge: 'Core Production'
        },
        {
          id: 'virtual-staging',
          name: 'Virtual Staging',
          slug: 'virtual-staging',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Transform vacant spaces into curated designer interiors.',
          explanation:
            'Photorealistic 3D furniture placement tailored to property architecture—modern contemporary, mid-century, scandinavian, coastal, or ultra-luxury minimalist aesthetics.',
          includes: [
            'Scale-accurate 3D furniture and decor placement',
            'Realistic cast shadows and directional ambient lighting',
            'Multiple interior design style options',
            'Room-by-room staging customization',
            'High-resolution texture and fabric rendering'
          ],
          problemSolved:
            'Cures cold, empty rooms that confuse buyers on scale and lifestyle potential without thousands of dollars in physical staging costs.',
          deliverables: [
            'Before-and-after side-by-side composites',
            'High-resolution MLS and brochure images',
            'Style reference design sheets'
          ],
          badge: 'High Conversion'
        },
        {
          id: 'day-to-dusk-twilight-conversion',
          name: 'Day-to-Dusk / Twilight Conversion',
          slug: 'day-to-dusk-twilight-conversion',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Atmospheric sunset lighting converted seamlessly from daytime shots.',
          explanation:
            'Converts daylight exterior photos into dramatic twilight and golden-hour scenes with customized interior warm window illumination, exterior landscape lighting, and sunset sky replacements.',
          includes: [
            'Realistic sunset/dusk sky replacement',
            'Interior window light turn-on and ambient warm glow',
            'Exterior landscape and fixture illumination',
            'Ground and facade shadow recalibration',
            'Atmospheric twilight color grading'
          ],
          problemSolved:
            'Allows sellers and agents to obtain high-value twilight imagery without expensive evening reshoots or unpredictable weather schedules.',
          deliverables: [
            'Dramatic hero listing images',
            'Print-quality twilight assets',
            'Social media cover ready formats'
          ],
          badge: 'Listing Hero'
        },
        {
          id: 'item-removal-decluttering',
          name: 'Item Removal & Decluttering',
          slug: 'item-removal-decluttering',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Clean architectural lines through seamless object removal.',
          explanation:
            'Advanced digital removal of tenant clutter, vehicles, garbage bins, pet items, cords, personal photos, and distracting artifacts while reconstructing original textures.',
          includes: [
            'Digital removal of clutter and personal items',
            'Texture reconstruction (hardwood, tiles, carpets, drywall)',
            'Vehicle removal from driveways and streetfronts',
            'Power cord and appliance decluttering',
            'Reflection and shadow reconstruction'
          ],
          problemSolved:
            'Removes private or messy items from occupied listings that deter potential buyers and compromise seller privacy.',
          deliverables: [
            'Cleaned and perfected interior and exterior photographs',
            'Pristine architectural showcase shots'
          ]
        },
        {
          id: 'virtual-renovation',
          name: 'Virtual Renovation',
          slug: 'virtual-renovation',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Visualize full architectural remodels before breaking ground.',
          explanation:
            'Digital remodeling of outdated spaces: replacing dated cabinetry, updating countertops, replacing flooring, removing non-structural walls, and adding modern fixtures.',
          includes: [
            'Flooring replacement (hardwood, herringbone, marble, polished concrete)',
            'Kitchen cabinet, backsplash, and appliance modernizations',
            'Bathroom tile, vanity, and shower renovations',
            'Wall paint and architectural molding updates',
            'Fixtures and modern lighting installation'
          ],
          problemSolved:
            'Helps buyers recognize the hidden potential in fixer-uppers and outdated properties, unlocking higher asking prices.',
          deliverables: [
            'Before and After concept boards',
            'High-definition architectural renovation images'
          ]
        },
        {
          id: 'drone-aerial-editing',
          name: 'Drone / Aerial Editing',
          slug: 'drone-aerial-editing',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'High-altitude panoramic clarity and geographic context.',
          explanation:
            'Comprehensive post-production for aerial and drone footage, balancing exposure, enhancing neighborhood landmarks, removing unwanted rooftop equipment, and maximizing color dynamic range.',
          includes: [
            'Haze removal and atmospheric clarity enhancement',
            'Horizon line leveling and geometric lens distortion correction',
            'Color grading for landscape, coastline, and architectural facades',
            'Rooftop HVAC and utility decluttering',
            'Subdivision and contextual neighborhood enhancement'
          ],
          problemSolved:
            'Turns flat, hazy aerial shots into crisp, high-impact landscape presentations highlighting proximity to amenities and natural features.',
          deliverables: [
            'Polished high-altitude overview images',
            'Wide-angle contextual neighborhood captures'
          ]
        },
        {
          id: 'property-line-marking',
          name: 'Property Line Marking',
          slug: 'property-line-marking',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Clear, accurate visual boundary graphics on aerial images.',
          explanation:
            'Overlays branded, luminous boundary lines, lot dimensions, setback indicators, and acreage callouts onto drone photographs based on plat maps and surveys.',
          includes: [
            'Custom styled boundary line graphics (solid, dashed, glowing)',
            'Lot dimension, acreage, and zoning callout overlays',
            'Proximity pointers to schools, beaches, transit, and downtown nodes',
            'Parcel highlight shading with transparency control',
            'Branded map legend and compass indicators'
          ],
          problemSolved:
            'Prevents buyer confusion over property boundaries on expansive estates, acreage lots, or dense suburban plots.',
          deliverables: [
            'Annotated aerial boundary master files',
            'Brochure and MLS-ready visual parcel guides'
          ]
        },
        {
          id: 'vacant-land-dream-home',
          name: 'Vacant Land to Dream Home Visualization',
          slug: 'vacant-land-dream-home',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Synthesize finished residences onto undeveloped land.',
          explanation:
            'Combines real drone photographs of raw, undeveloped parcels with photorealistic 3D architectural renders of proposed luxury residences and grounds.',
          includes: [
            'Camera perspective and focal length matching with drone photo',
            'Photorealistic 3D structure compositing into natural topography',
            'Driveway, pool, patio, and landscape integration',
            'True-to-life environmental lighting and shadow casting',
            'Vegetation blending and terrain grading visualization'
          ],
          problemSolved:
            'Overcomes buyer hesitation when buying bare lots by illustrating the exact build potential and lifestyle vision.',
          deliverables: [
            'Finished visionary concept images',
            'Development sales pitch assets'
          ]
        },
        {
          id: '3d-interior-exterior-renders',
          name: '3D Interior & Exterior Renders',
          slug: '3d-interior-exterior-renders',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Photorealistic CGI exteriors and curated luxury interiors from blueprints.',
          explanation:
            'Photorealistic architectural 3D exterior and interior renderings produced from CAD / Revit blueprints, depicting architectural facades, custom millwork, luxury finishes, lighting conditions, landscaping, and atmospheric spatial depth.',
          includes: [
            'BIM/CAD architectural exterior and interior model interpretation',
            'High-detail PBR material texturing (marble, brass, wood, stone, glass, concrete)',
            'Millwork, joinery, and curated luxury staging decor placement',
            'Multiple lighting conditions (Daylight, Golden Hour, Twilight, Artificial)',
            'Landscape architecture, vegetation populating, and multi-angle 8K views'
          ],
          problemSolved:
            'Secures off-plan pre-sales and investor financing while enabling buyers to emotionally connect with unbuilt architecture and interior finish palettes months before construction completes.',
          deliverables: [
            'Ultra-high-resolution 8K exterior & interior marketing renderings',
            'Suite of interior hero renders (Living, Kitchen, Primary Suite, Bath)',
            'Print billboard, finishes lookbook, and investor deck formats'
          ],
          badge: 'Off-Plan CGI'
        },
        {
          id: 'virtual-tour-editing',
          name: 'Virtual Tour (360 / Matterport) Editing',
          slug: 'virtual-tour-editing',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Optimized 360-degree panoramas and Matterport scans.',
          explanation:
            'Comprehensive post-processing for 360 virtual tours and Matterport scans: tripod leg removal, HDR panorama tone-mapping, privacy blurs, and navigation tag integration.',
          includes: [
            'Tripod and camera rig nadir cap / removal',
            '360 HDR panorama exposure stitching and tone-mapping',
            'Privacy blurring for family photos, addresses, and license plates',
            'Matterport highlight reel curation and floor plan sync',
            'Hotspot and feature tag annotations'
          ],
          problemSolved:
            'Eliminates messy stitching seams, glaring camera artifacts, and dark corners in interactive 3D virtual walkthroughs.',
          deliverables: [
            'Clean stitched equirectangular 360 panoramas',
            'Matterport tour configuration and enhancements'
          ]
        },
        {
          id: '2d-3d-floor-plans',
          name: '2D & 3D Floor Plans',
          slug: '2d-3d-floor-plans',
          category: 'Photo Editing & Visualization',
          divisionKey: 'estate',
          tagline: 'Measured architectural 2D schematics and isometric textured 3D cutaways.',
          explanation:
            'High-contrast 2D architectural floor plans drawn from sketches, Matterport scans, or blueprints with room dimensions and brokerage branding, paired with isometric 3D birds-eye cutaway renderings featuring realistic flooring textures, cabinetry, and scale furniture layouts.',
          includes: [
            'Accurate 2D room dimensions (Imperial / Metric) and GIA calculations',
            'Isometric 3D cutaway perspective rendering with wall heights and shadows',
            'Realistic flooring textures, cabinetry modeling, and scale furniture',
            'Door swing, window placement, and custom brokerage brand palettes',
            'Multi-level floor plan coordination, compass orientation, and scale bar'
          ],
          problemSolved:
            'Gives prospective buyers instant spatial clarity, functional furniture planning, and intuitive three-dimensional understanding of room flow.',
          deliverables: [
            'Vector PDF 2D plans for print brochures',
            'High-res 2D & 3D perspective floor plan graphics for MLS and web portals'
          ]
        },

      ]
    },
    {
      id: 'video-property-marketing',
      title: 'Category B: Video & Property Marketing',
      description: 'Cinematic listing films, social reels, AI narration, and complete property marketing collateral.',
      services: [
        {
          id: 'image-to-video-listing',
          name: 'Image-to-Video from Listing Photos',
          slug: 'image-to-video-listing',
          category: 'Video & Property Marketing',
          divisionKey: 'estate',
          tagline: 'Transform static photography into fluid cinematic video tours.',
          explanation:
            'Uses advanced depth mapping paired with motion interpolation to produce smooth, cinematic push-ins, drone-like pans, and orbital camera movements from still photographs.',
          includes: [
            'Dynamic camera motion generation (push-in, pan, tilt, subtle dolly)',
            'Depth-map extraction for realistic spatial parallax',
            'Cinematic transition sequences and pacing',
            'Ambient sound effects and background music synchronization',
            'Dynamic typography and listing price callout overlays'
          ],
          problemSolved:
            'Produces captivating video tours for listings where live videography was not budgeted or logistically possible.',
          deliverables: [
            'Horizontal 16:9 tour video',
            'Vertical 9:16 Instagram/TikTok format',
            'High-definition MP4 master file'
          ],
          badge: 'Motion Production'
        },
        {
          id: 'property-walkthrough-videos',
          name: 'Property Walkthrough Videos',
          slug: 'property-walkthrough-videos',
          category: 'Video & Property Marketing',
          divisionKey: 'estate',
          tagline: 'Immersive room-by-room continuous property walkthroughs.',
          explanation:
            'Gimbal-stabilized or drone interior walkthrough video editing designed to simulate an organic prospective buyer tour from front entrance to primary suite.',
          includes: [
            'Sequential room flow editing mirroring real buyer tours',
            'Smooth stabilization and motion smoothing',
            'Room title and architectural feature callouts',
            'Daylight balancing between rooms with different exposures',
            'Continuous background audio mix'
          ],
          problemSolved:
            'Provides remote, out-of-state, and international buyers with an intuitive understanding of the home’s layout and energy.',
          deliverables: [
            'Comprehensive walkthrough video in 4K',
            'Chapterized YouTube ready upload version'
          ]
        },
        {
          id: 'ai-voiceover-listing-videos',
          name: 'AI Voiceover for Listing Videos',
          slug: 'ai-voiceover-listing-videos',
          category: 'Video & Property Marketing',
          divisionKey: 'estate',
          tagline: 'Studio-grade narration without expensive voice actor bookings.',
          explanation:
            'Generates natural, emotive, and professional voiceover narrations in British, American, or regional accents using state-of-the-art neural voice synthesis.',
          includes: [
            'Custom script timing and cadence matching to video cuts',
            'Luxury editorial voice persona selection (warm, authoritative, sophisticated)',
            'Multi-language localization capability for international buyers',
            'Audio mastering (compression, de-essing, limiting)',
            'Seamless integration with soundtrack and ambient room sound'
          ],
          problemSolved:
            'Eliminates voice recording delays, studio rental costs, and microphone quality discrepancies.',
          deliverables: [
            'Mastered audio stem and synchronized video mix'
          ]
        },
        {
          id: 'flyers-brochures',
          name: 'Flyers & Brochures',
          slug: 'flyers-brochures',
          category: 'Video & Property Marketing',
          divisionKey: 'estate',
          tagline: 'High-gloss editorial print collateral that commands attention.',
          explanation:
            'Architectural editorial-grade print design: single-page open house flyers, multi-page saddle-stitched monographs, and gatefold property brochures.',
          includes: [
            'Luxury editorial typography and layout hierarchy',
            'High-resolution photo curation and retouch balance',
            'Property spec sheet, floor plan, and amenity summary integration',
            'Print-ready CMYK PDF with bleed and crop marks',
            'Digital interactive flipbook version for email distribution'
          ],
          problemSolved:
            'Leaves an indelible, tangible impression of quality in prospective buyers’ hands during private showings and open houses.',
          deliverables: [
            'Commercial press-ready PDF files',
            'Digital web-viewable PDF brochures'
          ]
        },
        {
          id: 'property-landing-pages',
          name: 'Property Landing Pages',
          slug: 'property-landing-pages',
          category: 'Video & Property Marketing',
          divisionKey: 'estate',
          tagline: 'Conversion-optimized capture pages for ad traffic.',
          explanation:
            'High-converting landing pages specifically designed for paid Facebook, Instagram, and Google ad traffic to capture qualified buyer and seller contact details.',
          includes: [
            'Lead gate mechanism (Exclusive photo preview / Price reveal / Floor plan download)',
            'Integrated appointment scheduling for private tours',
            'Fast sub-second load times on mobile 5G connections',
            'Meta Pixel, Google Tag, and CRM webhook integrations',
            'A/B tested headline and CTA variations'
          ],
          problemSolved:
            'Converts cold social media ad clicks into verified buyer and seller leads with phone numbers and emails.',
          deliverables: [
            'Fully configured, tracked landing page ready for paid traffic'
          ]
        },
      ]
    }
  ],
  workflow: [
    {
      step: '01',
      title: 'Discover & Ingest',
      description: 'Collect raw media, blueprints, property specs, and brand guidelines through our secure encrypted upload node.',
      deliverable: 'Dossier audit & project production timeline.'
    },
    {
      step: '02',
      title: 'Plan & Calibrate',
      description: 'Define exact visual treatments, color targets, perspective angles, and marketing copy requirements.',
      deliverable: 'Confirmed shot checklist & turnaround schedule.'
    },
    {
      step: '03',
      title: 'Execute & Master',
      description: 'Our senior architectural retouchers and digital artists execute precision editing, rendering, or video assembly.',
      deliverable: 'Watermarked proofing gallery for initial review.'
    },
    {
      step: '04',
      title: 'Review & Refine',
      description: 'Direct interactive feedback iteration to perfect window pulls, color balance, staging style, and copy.',
      deliverable: 'Revisions implemented within expedited SLA window.'
    },
    {
      step: '05',
      title: 'Deliver & Deploy',
      description: 'Final full-resolution print TIFFs, web-optimized JPEGs, and 4K video files delivered via high-speed CDN.',
      deliverable: 'Complete property media vault ready for market.'
    }
  ],
  whyChooseUs: [
    {
      title: 'Architectural Domain Expertise',
      description: 'We understand luxury construction, sightlines, window balance, and interior design materials, not just generic photo retouching.'
    },
    {
      title: 'Rapid Production Turnaround',
      description: 'Predictable 12-to-24 hour standard delivery windows for photo editing so your listings never miss critical weekend market launches.'
    },
    {
      title: 'Rigorous Quality Assurance',
      description: 'Every image, render, and video clip passes two senior visual art directors before final release to client accounts.'
    },
    {
      title: 'End-to-End Media Ecosystem',
      description: 'From photo enhancements to 3D floor plans and single-property landing pages, we handle the entire property marketing stack under one roof.'
    }
  ],
  demonstrations: REAL_ESTATE_PORTFOLIO_PROJECTS
};

/* =========================================================================
   2. AGENT SERVICES
   ========================================================================= */

export const AGENT_SERVICES_DIVISION: ServiceDivisionData = {
  key: 'agent',
  code: '02',
  title: 'AGENT SERVICES',
  divisionLabel: 'DIVISION 02 // AGENT SERVICES',
  tagline: 'STRATEGIC GROWTH, LEAD FUNNELS & OPERATIONAL SUPPORT FOR AGENTS',
  positioning:
    'A complete operational, marketing, and administrative support system for real estate agents, brokers, and property teams—reclaiming your time so you can focus on winning listings and closing transactions.',
  intro: {
    headline: 'MORE TIME FOR CLIENT RELATIONSHIPS. LESS TIME ON ADMINISTRATIVE FRICTION.',
    subheadline: 'Full-spectrum operational backbone: from buyer/seller ad funnels to transaction coordination.',
    whatWeDo:
      'We run your listing ads, build conversion-focused lead funnels, follow up with inquiries, coordinate MLS listings, manage transactions from contract to close, and maintain pristine CRM hygiene.',
    whoWeServe:
      'Top-producing real estate agents, boutique brokerages, mega-agent expansion teams, and ambitious listing specialists who have outgrown DIY administrative work.',
    problemsAddressed:
      'Inconsistent lead generation, slow speed-to-lead response times, endless transaction paperwork, lost repeat referrals from poor past-client follow-up, and agent burnout.',
    whyValuable:
      'Agents partnering with our operational infrastructure save an average of 15 to 20 administrative hours weekly while increasing pipeline conversion rates and closing volume without adding full-time payroll overhead.',
  },
  accentColor: '#e1e2e6', // Platinum Silver / Architectural Chrome
  accentSecondary: '#d4af37',
  accentBg: 'rgba(225, 226, 230, 0.08)',
  accentBorder: 'rgba(225, 226, 230, 0.25)',
  route: '/services/agent-services',
  heroBadge: 'OPERATIONAL BACKBONE FOR TOP PRODUCERS',
  telemetryTag: 'OPERATIONS // 99.4% SLA',
  categories: [
    {
      id: 'agent-marketing-leads',
      title: 'Category A: Agent Marketing & Leads',
      description: 'Paid advertising, high-intent funnels, automated outreach, and reputation management.',
      services: [
        {
          id: 'listing-promotion-ads',
          name: 'Listing Promotion Ads (Facebook / Instagram)',
          slug: 'listing-promotion-ads',
          category: 'Agent Marketing & Leads',
          divisionKey: 'agent',
          tagline: 'Hyper-targeted social ad campaigns that generate qualified local buyers.',
          explanation:
            'End-to-end ad setup and management across Meta Ads (Facebook & Instagram), targeting high-income demographics, real estate lookalikes, and active property seekers within specific zip codes.',
          includes: [
            'Ad creative design (Photo carousels, video reels, story ads)',
            'Targeted local audience calibration & demographic profiling',
            'Compelling direct-response ad copy & call-to-action testing',
            'Daily budget monitoring, bid optimization, and cost-per-lead tracking',
            'Weekly performance telemetry reporting'
          ],
          problemSolved:
            'Eliminates wasted ad spend on unqualified clicks and replaces guesswork with predictable local buyer inquiries.',
          deliverables: [
            'Active optimized Meta ad campaigns',
            'Live analytics dashboard access',
            'Weekly lead volume reports'
          ],
          badge: 'High Inbound'
        },
        {
          id: 'buyer-seller-lead-funnels',
          name: 'Buyer & Seller Lead Funnels',
          slug: 'buyer-seller-lead-funnels',
          category: 'Agent Marketing & Leads',
          divisionKey: 'agent',
          tagline: 'Automated digital funnels converting curious traffic into verified prospects.',
          explanation:
            'Tailored multi-step lead funnels (e.g. "What is Your Home Worth in Today\'s Market?", "Off-Market Luxury Inventory List", "Relocation VIP Guide") engineered to capture contact details.',
          includes: [
            'Multi-step dynamic qualification forms (timeline, price point, pre-approval status)',
            'Automated home valuation integration or curated property digest delivery',
            'Instant webhook integration to your CRM (Follow Up Boss, kvCORE, HubSpot)',
            'Real-time SMS notification to agent when a hot lead submits',
            'Spam and bot filtering mechanism'
          ],
          problemSolved:
            'Solves low-intent lead fatigue by screening prospects on readiness, timeline, and financing before handing them off to the agent.',
          deliverables: [
            'Turnkey hosted lead funnel',
            'CRM webhook integration setup'
          ]
        },
        {
          id: 'agent-social-media-management',
          name: 'Agent Social Media Management',
          slug: 'agent-social-media-management',
          category: 'Agent Marketing & Leads',
          divisionKey: 'agent',
          tagline: 'Consistent, premium social presence establishing local authority.',
          explanation:
            'Full-service management of your Instagram, Facebook, and LinkedIn profiles: curating content calendars, designing luxury property cards, posting local market updates, and community highlights.',
          includes: [
            'Monthly customized real estate content calendar',
            'Weekly posting of property highlights, market insights, and lifestyle content',
            'Custom-branded template system matching agent aesthetic',
            'Hashtag strategy and geo-tagging for maximum local discoverability',
            'Story and feed coordination'
          ],
          problemSolved:
            'Eliminates social media inconsistency and generic corporate template posts that fail to build local client trust.',
          deliverables: [
            'Monthly content calendar & graphic assets',
            'Scheduled and published social posts'
          ]
        },
        {
          id: 'past-client-email-newsletters',
          name: 'Past-Client Email Newsletters',
          slug: 'past-client-email-newsletters',
          category: 'Agent Marketing & Leads',
          divisionKey: 'agent',
          tagline: 'Stay top-of-mind with sphere of influence for consistent referrals.',
          explanation:
            'High-value, editorial monthly newsletters delivered to your past clients and sphere of influence, featuring local market trend analyses, home maintenance advice, and community features.',
          includes: [
            'Custom branded email template design',
            'Engaging, well-researched local real estate market commentary',
            'Recent sales and active neighborhood listing highlights',
            'List hygiene, bounce rate cleaning, and unsubscribe management',
            'Open and click-through analytics reporting'
          ],
          problemSolved:
            'Prevents past clients from using another agent simply because you lost touch after the closing.',
          deliverables: [
            'Monthly polished email newsletter broadcasts',
            'Audience engagement telemetry reports'
          ]
        },
        {
          id: 'google-business-profile-management',
          name: 'Google Business Profile Management',
          slug: 'google-business-profile-management',
          category: 'Agent Marketing & Leads',
          divisionKey: 'agent',
          tagline: 'Dominate local Google search for "top real estate agent near me".',
          explanation:
            'Ongoing optimization of your Google Business Profile (formerly GMB), including service category tuning, geo-tagged photos, regular weekly posts, and local citations.',
          includes: [
            'Complete profile audit and keyword category optimization',
            'Weekly posts showcasing new listings, open houses, and closed deals',
            'Geo-tagged photo uploads of properties and community landmarks',
            'Q&A section monitoring and keyword-rich answers',
            'Local map ranking tracking'
          ],
          problemSolved:
            'Ensures your profile ranks prominently in the Google Local 3-Pack when homeowners search for local real estate representation.',
          deliverables: [
            'Optimized local business profile',
            'Monthly local search visibility report'
          ]
        }
      ]
    },
    {
      id: 'agent-operations-support',
      title: 'Category B: Agent Operations & Support',
      description: 'Transaction coordination, virtual assistant delegation, MLS input, and appointment logistics.',
      services: [
        {
          id: 'mls-listing-coordination',
          name: 'MLS Listing Coordination',
          slug: 'mls-listing-coordination',
          category: 'Agent Operations & Support',
          divisionKey: 'agent',
          tagline: 'Flawless MLS listing input, photo ordering, and document uploads.',
          explanation:
            'Handles the tedious process of inputting new listings into your local MLS board: uploading high-res photos in optimal sequence, attaching tax records, verifying room measurements, and inputting agent remarks.',
          includes: [
            'Draft MLS listing creation with comprehensive field entry',
            'Photo upload, sequencing for storytelling, and virtual tour link attachment',
            'Disclosures, lead-based paint, and HOA document attachment',
            'Open house schedule publishing to MLS syndication feeds',
            'Price adjustment and status change updates (Pending, Closed)'
          ],
          problemSolved:
            'Saves 2 to 4 hours per listing and eliminates embarrassing typographical or compliance errors in the MLS.',
          deliverables: [
            'Completed, compliant MLS listing ready for 1-click agent activation'
          ]
        },
        {
          id: 'real-estate-virtual-assistant',
          name: 'Real Estate Virtual Assistant (VA)',
          slug: 'real-estate-virtual-assistant',
          category: 'Agent Operations & Support',
          divisionKey: 'agent',
          tagline: 'Trained, dedicated administrative support tailored to your workflow.',
          explanation:
            'Highly capable real estate virtual assistants specialized in calendar scheduling, CRM entry, email inbox triage, vendor outreach, and routine administrative duties.',
          includes: [
            'Daily email inbox triage and priority filtering',
            'Calendar scheduling for client appointments, inspections, and appraisals',
            'Vendor coordination (stagers, photographers, sign installers, cleaners)',
            'Spreadsheet maintenance, client gift ordering, and database updates',
            'Standard Operating Procedure (SOP) documentation'
          ],
          problemSolved:
            'Liberates agents from $15/hour administrative tasks so their daily focus remains solely on $500/hour client negotiation and prospecting activities.',
          deliverables: [
            'Daily operational recap reports',
            'Organized inbox and clean calendar dispatch'
          ]
        },
        {
          id: 'crm-management-agents',
          name: 'CRM Management for Agents',
          slug: 'crm-management-agents',
          category: 'Agent Operations & Support',
          divisionKey: 'agent',
          tagline: 'Clean, organized database hygiene that prevents leads slipping.',
          explanation:
            'Expert maintenance of your real estate CRM (Follow Up Boss, kvCORE, Brivity, LionDesk, Lofty): deduplicating contacts, segmenting pipelines, tagging lead sources, and setting up smart automated action plans.',
          includes: [
            'Contact import, cleanup, and deduplication',
            'Lead stage segmentation (Sphere, Warm Buyer, Past Client, Agent Referral)',
            'Automated smart plan and task reminder setup',
            'Lead source tracking to calculate return on marketing investment',
            'Pipeline reporting for revenue forecasting'
          ],
          problemSolved:
            'Fixes disorganized, neglected CRMs where valuable contacts sit untagged without active follow-up routines.',
          deliverables: [
            'Pristine, segmented CRM database',
            'Active automated action plans'
          ]
        }
      ]
    }
  ],
  workflow: [
    {
      step: '01',
      title: 'Operations Audit',
      description: 'We analyze your current lead sources, CRM setup, transaction volume, and operational bottlenecks.',
      deliverable: 'Tailored Agent Operations Blueprint.'
    },
    {
      step: '02',
      title: 'Integration & Setup',
      description: 'Connect lead funnels, Meta ad accounts, CRM pipelines, and transaction software.',
      deliverable: 'Fully synced dashboard & communication channels.'
    },
    {
      step: '03',
      title: 'Launch & Protocol Activation',
      description: 'Deploy ad campaigns, activate 2-minute follow-up workflows, and assign dedicated operational support.',
      deliverable: 'Active inbound pipeline & assigned coordinator.'
    },
    {
      step: '04',
      title: 'Daily Execution & Triage',
      description: 'Ongoing lead screening, transaction milestone tracking, and administrative task completion.',
      deliverable: 'Daily morning briefing & milestone alerts.'
    },
    {
      step: '05',
      title: 'Review & Scaling',
      description: 'Bi-weekly pipeline audits to refine ad spend, increase conversion velocity, and scale transaction capacity.',
      deliverable: 'Monthly ROI & pipeline conversion reports.'
    }
  ],
  whyChooseUs: [
    {
      title: 'Real Estate Specific DNA',
      description: 'We exclusively work in the real estate domain; our team knows MLS compliance, closing procedures, and agent workflows inside out.'
    },
    {
      title: 'Zero Payroll & Benefits Overhead',
      description: 'Get the operational capacity of an internal marketing director and transaction team without hiring full-time staff.'
    },
    {
      title: 'Institutional Speed-to-Lead',
      description: 'Inbound inquiries are acknowledged and pre-screened within minutes, dramatically raising contact-to-contract conversion.'
    },
    {
      title: 'Unified Marketing & Back-Office',
      description: 'We bridge the gap between generating leads and coordinating their closing paperwork under one cohesive system.'
    }
  ],
  demonstrations: [
    {
      id: 'demo-crm-pipeline',
      title: 'Autonomous CRM Pipeline Matrix',
      category: 'Agent Operations',
      description: 'Automated lead ingestion, tagging, and multi-stage nurture sequences for a $45M luxury agent team.',
      image: '/assets/demonstrations/agent-crm-pipeline.jpg',
      badge: 'Operations Architecture',
      tags: ['CRM Hygiene', 'Auto-Drips', 'Pipeline Tagging']
    },
    {
      id: 'demo-lead-funnel',
      title: 'Luxury Waterfront Listing Lead Funnel',
      category: 'Agent Marketing',
      description: 'Dynamic opt-in funnel capturing 140+ qualified buyer leads with pre-approval status in 14 days.',
      image: '/assets/demonstrations/agent-lead-funnel.jpg',
      badge: 'Lead Funnel Engine',
      tags: ['Meta Ads', 'Lead Qualification', 'High Conversion']
    },
    {
      id: 'demo-tc-escrow',
      title: 'Contract-to-Close Transaction Management',
      category: 'Transaction Coordination',
      description: 'Zero-contingency-missed escrow tracking for 28 concurrent multi-million residential closings.',
      image: '/assets/demonstrations/agent-escrow-ops.jpg',
      badge: 'Escrow Operations',
      tags: ['Compliance', 'Timeline SLA', 'DocuSign Integration']
    }
  ]
};

/* =========================================================================
   3. DATA & AI CORE
   ========================================================================= */

export const DATA_AI_DIVISION: ServiceDivisionData = {
  key: 'data-ai',
  code: '03',
  title: 'DATA & AI CORE',
  divisionLabel: 'DIVISION 03 // DATA & AI CORE',
  tagline: 'CONSOLIDATED AI DATA SERVICES & BACK-OFFICE DATA OPERATIONS',
  positioning:
    'VAIKA GROUP’s Data & AI Core division delivers end-to-end AI data services, machine learning data annotation, dataset preparation, geospatial data processing, document digitization, business data management and B2B operational support.',
  intro: {
    headline: 'THE HUMAN INTELLIGENCE LAYER BEHIND RELIABLE AI & STREAMLINED DATA OPERATIONS.',
    subheadline: '10 consolidated enterprise offerings across AI Data Services and Back-Office Processing.',
    whatWeDo:
      'Our approach combines structured data workflows, technology-assisted processing and human quality assurance to help businesses build reliable data foundations and improve operational efficiency.',
    whoWeServe:
      'AI research labs, autonomous systems engineering teams, geospatial intelligence groups, SaaS enterprises, Shopify & e-commerce retailers, and B2B revenue teams.',
    problemsAddressed:
      'Inconsistent training datasets, model hallucinations, ASR transcription errors, unverified spatial maps, legacy paper records, fragmented product catalogs, and decaying CRM databases.',
    whyValuable:
      'High-performing models and modern business operations require rigorously validated data. Our human-in-the-loop QA pipelines protect model reliability and save internal engineering and sales teams hundreds of operational hours.',
  },
  accentColor: '#8b5cf6', // Electric Violet / Neural Indigo
  accentSecondary: '#6366f1',
  accentBg: 'rgba(139, 92, 246, 0.08)',
  accentBorder: 'rgba(139, 92, 246, 0.25)',
  route: '/services/data-ai',
  heroBadge: 'HUMAN-IN-THE-LOOP DATA INFRASTRUCTURE',
  telemetryTag: 'DATA OPS // VERIFIED GROUND TRUTH',
  categories: [
    {
      id: 'ai-data-services',
      title: 'Category A: AI Data Services',
      description: 'Image & video annotation, NLP labeling, audio transcription, GIS mapping, human-in-the-loop validation, and dataset preparation.',
      services: [
        {
          id: 'image-video-annotation',
          name: 'Image & Video Annotation Services',
          slug: 'image-video-annotation',
          detailRoute: '/services/data-ai/image-video-annotation',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'Structured computer vision labeling, segmentation, and persistent video tracking.',
          explanation:
            'VAIKA GROUP provides professional image and video annotation services to help organizations develop, train and improve computer vision and machine learning models. Our workflows convert unstructured visual data into structured datasets for object detection, classification, segmentation and tracking.',
          overviewParagraphs: [
            'VAIKA GROUP provides professional image and video annotation services to help organizations develop, train and improve computer vision and machine learning models. Our image annotation and video labeling workflows convert unstructured visual data into structured, accurately labeled datasets for object detection, image classification, instance segmentation, semantic segmentation and object tracking applications.',
            'We work with complex visual datasets involving multiple objects, irregular boundaries, overlapping elements, motion patterns and changing environmental conditions. Our annotation workflows combine structured labeling guidelines, trained annotators and multi-stage quality assurance to maintain consistency across large-scale datasets.'
          ],
          includes: [
            '2D bounding box and polygon annotation',
            'Semantic and instance segmentation',
            'Video object tracking and re-identification',
            'Human pose estimation and skeletal keypoint labeling',
            'Action recognition and event timestamping',
            'Occlusion and object-state classification',
            'COCO, YOLO, JSON and XML annotation formats'
          ],
          processSteps: [
            { title: 'Dataset Assessment', description: 'Review incoming images and video footage, identify annotation requirements, define object classes and establish project-specific labeling guidelines.' },
            { title: 'Image Annotation', description: 'Apply 2D bounding boxes, polygons, semantic segmentation and instance segmentation to identify objects and their boundaries.' },
            { title: 'Video Object Tracking', description: 'Perform frame-by-frame annotation while maintaining persistent object IDs across video sequences, including object movement, occlusions and re-identification.' },
            { title: 'Keypoint & Pose Annotation', description: 'Identify skeletal points, body landmarks and movement patterns for human pose estimation and activity recognition models.' },
            { title: 'Temporal Event Labeling', description: 'Add timestamps, action labels, event classifications and object state information to video sequences.' },
            { title: 'Quality Assurance', description: 'Conduct annotation reviews, inter-annotator agreement checks, edge-case inspections and consistency validation.' },
            { title: 'Dataset Export', description: 'Validate annotation structures and deliver datasets in the required machine learning formats.' }
          ],
          problemSolved:
            'Eliminates object detector misclassifications, boundary drift, and broken object tracking across occlusions in complex computer vision pipelines.',
          deliverables: [
            'Structured image and video annotation datasets',
            'Object tracking and temporal annotation files',
            'COCO, YOLO, JSON and XML exports',
            'Annotation guidelines and quality validation reports'
          ],
          applications: [
            'Autonomous vehicles',
            'Robotics',
            'Retail analytics',
            'Medical imaging research',
            'Surveillance analytics',
            'Computer vision development'
          ],
          qaApproach:
            'Every visual dataset passes dual-stage quality assurance including inter-annotator agreement benchmarking, edge-case occlusion inspection, and programmatic schema validation prior to final export.',
          seoTitle: 'Image & Video Annotation Services | VAIKA',
          metaDescription:
            'Professional image and video annotation services by VAIKA GROUP: 2D bounding boxes, polygons, semantic segmentation, skeletal keypoints, and persistent video object tracking in COCO, YOLO, and JSON.',
          primaryKeywords: ['Image Annotation Services', 'Video Annotation Services', 'Data Labeling Services'],
          secondaryKeywords: [
            'Image Labeling for Machine Learning',
            'Video Annotation for AI',
            'Bounding Box Annotation',
            'Semantic Segmentation',
            'Object Tracking',
            'Keypoint Annotation',
            'Computer Vision Data Annotation'
          ],
          faqs: [
            {
              question: 'Which computer vision export formats do you support?',
              answer: 'We deliver validated annotations in COCO JSON, YOLO TXT, Pascal VOC XML, LabelMe JSON, and custom enterprise schemas tailored to your training pipeline.'
            },
            {
              question: 'How do you handle persistent object IDs during video occlusions?',
              answer: 'Our video annotation specialists track object state transitions frame-by-frame, preserving unique object identifiers when subjects pass behind obstacles and seamlessly re-identifying them upon reappearance.'
            },
            {
              question: 'Can you follow custom taxonomy and edge-case labeling rules?',
              answer: 'Yes. Every engagement starts with a Dataset Assessment and calibration pilot to formalize your class definitions, minimum pixel thresholds, and occlusion protocols.'
            }
          ],
          badge: 'Computer Vision'
        },
        {
          id: 'text-annotation-nlp',
          name: 'Text Annotation & NLP Data Labeling',
          slug: 'text-annotation-nlp',
          detailRoute: '/services/data-ai/text-annotation-nlp',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'Structured NER, sentiment, intent classification, and LLM training datasets.',
          explanation:
            'VAIKA GROUP provides structured text annotation and Natural Language Processing (NLP) data labeling services for organizations developing language models, conversational AI systems, search engines and automated text classification solutions.',
          overviewParagraphs: [
            'VAIKA GROUP provides structured text annotation and Natural Language Processing (NLP) data labeling services for organizations developing language models, conversational AI systems, search engines and automated text classification solutions.',
            'Our text annotation workflows transform unstructured text into machine-readable datasets through Named Entity Recognition (NER), sentiment analysis, intent classification, document categorization and conversational dialogue evaluation.',
            'We use domain-specific taxonomies and consistent labeling guidelines to support specialized NLP applications across industries such as finance, healthcare, legal services and customer support.'
          ],
          includes: [
            'Named Entity Recognition (NER)',
            'Sentiment and emotion analysis',
            'Intent and topic classification',
            'Document and sentence classification',
            'Conversational dialogue annotation',
            'LLM response evaluation',
            'Domain-specific NLP data labeling',
            'Custom taxonomy development'
          ],
          processSteps: [
            { title: 'Text Data Assessment', description: 'Review source documents, conversations, text corpora and labeling objectives to establish the required annotation taxonomy.' },
            { title: 'Named Entity Recognition', description: 'Identify and label entities such as organizations, people, locations, dates, financial terms and domain-specific terminology.' },
            { title: 'Sentiment & Emotion Annotation', description: 'Classify text based on positive, negative and neutral sentiment, emotional tone and contextual meaning.' },
            { title: 'Intent & Text Classification', description: 'Categorize sentences, documents and customer conversations according to predefined intent classes and business taxonomies.' },
            { title: 'Conversational Data Evaluation', description: 'Review dialogue turns, response relevance, contextual consistency and potential hallucinations in AI-generated conversations.' },
            { title: 'Domain-Specific Labeling', description: 'Apply specialized annotation guidelines for legal, healthcare, finance and other industry-specific datasets.' },
            { title: 'Quality Validation', description: 'Conduct consistency checks, taxonomy alignment reviews and multi-annotator quality assessments.' },
            { title: 'Dataset Delivery', description: 'Export validated annotations in structured JSONL, CSV or other requested formats.' }
          ],
          problemSolved:
            'Replaces noisy automated tags with consistent human linguistic judgment for specialized LLMs, search relevance, and document intelligence systems.',
          deliverables: [
            'Annotated JSONL and CSV datasets',
            'Entity tagging dictionaries',
            'Text classification datasets',
            'Annotation guidelines and taxonomy documentation',
            'Quality validation reports'
          ],
          applications: [
            'LLM fine-tuning',
            'Conversational AI',
            'Customer sentiment monitoring',
            'Intelligent search',
            'Document intelligence',
            'NLP model development'
          ],
          qaApproach:
            'Multi-annotator consensus scoring, taxonomy drift audits, and domain specialist spot-checks ensure label consistency across complex linguistic contexts.',
          seoTitle: 'Text Annotation & NLP Data Labeling | VAIKA',
          metaDescription:
            'Enterprise text annotation and NLP data labeling services: Named Entity Recognition (NER), sentiment analysis, intent classification, and LLM training dataset preparation.',
          primaryKeywords: ['Text Annotation Services', 'NLP Data Annotation', 'Text Data Labeling Services'],
          secondaryKeywords: [
            'Named Entity Recognition Services',
            'NER Annotation',
            'Sentiment Analysis Annotation',
            'Text Classification',
            'Intent Classification',
            'LLM Training Data',
            'NLP Dataset Preparation'
          ],
          faqs: [
            {
              question: 'Can you annotate specialized legal, medical, or financial text?',
              answer: 'Yes. We align each project with domain-specific labeling taxonomies to accurately capture regulated terminology, clauses, clinical terms, and financial entities.'
            },
            {
              question: 'What output formats are available for LLM and NLP training?',
              answer: 'Validated text annotations can be delivered in JSONL, CSV, CoNLL, or custom HuggingFace-compatible instruction tuning schemas.'
            }
          ],
          badge: 'NLP & LLMs'
        },
        {
          id: 'audio-transcription-annotation',
          name: 'Audio Transcription & Annotation Services',
          slug: 'audio-transcription-annotation',
          detailRoute: '/services/data-ai/audio-transcription-annotation',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'Human-verified speech-to-text, speaker diarization, and acoustic event labeling.',
          explanation:
            'VAIKA GROUP provides professional audio transcription and audio annotation services to transform speech recordings and acoustic data into structured, searchable and machine-readable datasets.',
          overviewParagraphs: [
            'VAIKA GROUP provides professional audio transcription and audio annotation services to transform speech recordings and acoustic data into structured, searchable and machine-readable datasets.',
            'Our workflows combine human-verified speech-to-text transcription with detailed acoustic event labeling, speaker diarization, timestamp annotation, language identification and speech emotion classification.',
            'We support interviews, conference recordings, business meetings, earnings calls, customer conversations, voice assistant recordings and environmental audio datasets.'
          ],
          includes: [
            'Verbatim and clean-read transcription',
            'Speaker diarization and identification',
            'Word-level and sentence-level timestamping',
            'Speech emotion and prosody annotation',
            'Acoustic event detection',
            'Wake-word and keyword labeling',
            'Language and dialect classification',
            'Background noise and audio quality tagging'
          ],
          processSteps: [
            { title: 'Audio Assessment', description: 'Evaluate recording quality, language, speaker count, background noise and transcription requirements.' },
            { title: 'Speech-to-Text Transcription', description: 'Convert audio recordings into accurate written transcripts using verbatim or clean-read transcription according to project requirements.' },
            { title: 'Speaker Diarization', description: 'Identify individual speakers and assign consistent speaker labels throughout the recording.' },
            { title: 'Timestamp Annotation', description: 'Add precise timestamps to words, phrases, speaker turns and important acoustic events.' },
            { title: 'Audio Event Labeling', description: 'Identify and classify environmental sounds such as sirens, footsteps, engines, alarms and background noise.' },
            { title: 'Speech & Emotion Annotation', description: 'Label speech tone, emotion, prosody, wake words, keywords and language-specific characteristics.' },
            { title: 'Language & Dialect Identification', description: 'Categorize language, accent and dialect information where required.' },
            { title: 'Human Quality Review', description: 'Verify transcripts, speaker identification, terminology, timestamps and annotation consistency.' }
          ],
          problemSolved:
            'Corrects automatic speech recognition (ASR) errors on accented, noisy, or overlapping multi-speaker audio and enriches sound files with acoustic context.',
          deliverables: [
            'TXT, DOCX and JSON transcripts',
            'Timestamped SRT and VTT subtitle files',
            'Speaker diarization datasets',
            'Segmented audio annotation files',
            'Acoustic event and classification metadata'
          ],
          applications: [
            'Voice assistants',
            'Speech recognition',
            'Conversational AI',
            'Call center analytics',
            'Speech emotion recognition',
            'Acoustic machine learning'
          ],
          qaApproach:
            'Human reviewers verify every transcript against source audio waveforms, auditing speaker turn boundaries, regional dialects, domain terminology, and millisecond timestamps.',
          seoTitle: 'Audio Transcription & Annotation Services | VAIKA',
          metaDescription:
            'Human-verified audio transcription and speech data labeling: verbatim transcripts, speaker diarization, word-level timestamps, emotion tagging, and acoustic event detection.',
          primaryKeywords: ['Audio Transcription Services', 'Audio Annotation Services', 'Speech Data Labeling'],
          secondaryKeywords: [
            'Speech-to-Text Transcription',
            'Audio Labeling',
            'Speaker Diarization',
            'Audio Transcription with Timestamps',
            'Speech Emotion Annotation',
            'Voice Data Annotation',
            'Acoustic Event Detection'
          ],
          faqs: [
            {
              question: 'Do you support both verbatim and clean-read audio transcription?',
              answer: 'Yes. Depending on whether you are training ASR speech models or producing business transcripts, we execute strict verbatim (preserving fillers and false starts) or clean-read formatting.'
            },
            {
              question: 'Can you isolate overlapping speakers and environmental background sounds?',
              answer: 'Yes, our annotators tag speaker diarization overlaps and classify environmental acoustic events such as alarms, machinery, sirens, or ambient noise.'
            }
          ],
          badge: 'Speech & Audio'
        },
        {
          id: 'geospatial-data-mapping',
          name: 'Geospatial Data & Mapping Services',
          slug: 'geospatial-data-mapping',
          detailRoute: '/services/data-ai/geospatial-data-mapping',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'GIS mapping, satellite image vectorization, and map data verification.',
          explanation:
            'VAIKA GROUP provides geospatial data processing, GIS mapping and satellite image annotation services to convert geographic information into accurate, structured and analysis-ready spatial datasets.',
          overviewParagraphs: [
            'VAIKA GROUP provides geospatial data processing, GIS mapping and satellite image annotation services to convert geographic information into accurate, structured and analysis-ready spatial datasets.',
            'Our workflows cover geographic data digitization, map data verification, satellite image interpretation, building footprint extraction, road network mapping, land-use classification and spatial database preparation.',
            'We support organizations working in urban planning, infrastructure development, logistics, agriculture, environmental monitoring, insurance analytics and location intelligence.'
          ],
          includes: [
            'Google Maps location and business data verification',
            'Point-of-interest enrichment',
            'Satellite image annotation and vectorization',
            'Building footprint and road network extraction',
            'Land-use and agricultural boundary mapping',
            'GIS digitization and georeferencing',
            'Spatial topology validation',
            'Coordinate reference system transformation',
            'Historical satellite imagery change detection'
          ],
          processSteps: [
            { title: 'Geospatial Data Assessment', description: 'Review satellite imagery, aerial photographs, existing maps, coordinate systems and project-specific mapping requirements.' },
            { title: 'Map Data Verification', description: 'Validate geographic attributes, business locations, operational hours, address positioning, road connectivity and points of interest.' },
            { title: 'Satellite Image Annotation', description: 'Identify and vectorize building footprints, agricultural boundaries, road networks, forests, water bodies and infrastructure assets.' },
            { title: 'GIS Data Digitization', description: 'Convert paper maps and legacy spatial files into structured geographic information system datasets.' },
            { title: 'Spatial Data Processing', description: 'Perform coordinate georeferencing, projection transformations, attribute joining and geographic data standardization.' },
            { title: 'Topological Validation', description: 'Identify and correct spatial inconsistencies such as gaps, overlaps, slivers and duplicate vertices.' },
            { title: 'Change Detection', description: 'Compare historical satellite imagery to identify changes in land use, infrastructure and geographic features.' },
            { title: 'Quality Assurance & Export', description: 'Validate spatial geometry, attributes and coordinate reference systems before delivering the final datasets.' }
          ],
          problemSolved:
            'Transforms unverified map pins, static paper maps, and raw satellite imagery into topologically clean, queryable geospatial vector datasets.',
          deliverables: [
            'GeoJSON and KML spatial datasets',
            'Shapefiles (SHP)',
            'PostGIS and GeoPackage databases',
            'Enriched geospatial attribute tables',
            'GIS validation and mapping documentation'
          ],
          applications: [
            'Urban planning',
            'Logistics',
            'Navigation',
            'Infrastructure mapping',
            'Agriculture',
            'Environmental monitoring',
            'Location intelligence'
          ],
          qaApproach:
            'Every geospatial layer undergoes topological integrity verification to eliminate gaps, overlaps, self-intersections, and CRS projection offsets.',
          seoTitle: 'GIS Mapping & Geospatial Data Services | VAIKA',
          metaDescription:
            'GIS mapping, satellite image annotation, and geospatial data verification services: building footprints, road networks, land-use vectors, GeoJSON, KML, and Shapefiles.',
          primaryKeywords: ['GIS Mapping Services', 'Geospatial Data Annotation', 'Satellite Mapping Services'],
          secondaryKeywords: [
            'Google Maps Data Verification',
            'Geographic Information System Services',
            'Satellite Image Annotation',
            'GIS Data Digitization',
            'Geospatial Data Processing',
            'Map Data Enrichment',
            'Spatial Data Validation'
          ],
          faqs: [
            {
              question: 'Which GIS vector and spatial database formats do you deliver?',
              answer: 'We export verified geospatial datasets as GeoJSON, KML, ESRI Shapefiles (SHP), GeoPackage, and PostGIS database dumps with synchronized CRS coordinates.'
            },
            {
              question: 'Do you perform topological cleanup on polygon extractions?',
              answer: 'Yes. All vectorizations undergo automated and human topological inspection to fix slivers, overlaps, unclosed boundaries, and duplicate vertices.'
            }
          ],
          badge: 'GIS & Spatial'
        },
        {
          id: 'ai-model-evaluation-hitl',
          name: 'AI Model Evaluation & Human-in-the-Loop Validation',
          slug: 'ai-model-evaluation-hitl',
          detailRoute: '/services/data-ai/ai-model-evaluation-hitl',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'Human-led LLM evaluation, hallucination audits, and confidence-based exception review.',
          explanation:
            'VAIKA GROUP provides human-led AI model evaluation and human-in-the-loop validation services to help organizations assess the accuracy, reliability, safety and consistency of automated AI systems.',
          overviewParagraphs: [
            'VAIKA GROUP provides human-led AI model evaluation and human-in-the-loop validation services to help organizations assess the accuracy, reliability, safety and consistency of automated AI systems.',
            'Our evaluation workflows examine generative AI outputs, large language model responses, code completions, image generations, OCR results and automated classification predictions.',
            'We combine structured human evaluation with confidence-based verification workflows to identify incorrect predictions, ambiguous outputs, hallucinations and edge cases before they affect downstream business processes.'
          ],
          includes: [
            'LLM response quality evaluation',
            'AI hallucination and factuality verification',
            'Prompt-following assessment',
            'AI code and image output review',
            'Safety, bias and toxicity evaluation',
            'Human-in-the-loop data verification',
            'OCR and computer vision exception processing',
            'Low-confidence prediction review',
            'Audit trails and quality scorecards'
          ],
          processSteps: [
            { title: 'Evaluation Requirement Analysis', description: 'Define model objectives, evaluation criteria, scoring frameworks and project-specific quality standards.' },
            { title: 'AI Output Assessment', description: 'Review generated text, code, images and automated predictions against the expected outputs and reference materials.' },
            { title: 'Factuality & Hallucination Detection', description: 'Identify unsupported claims, incorrect information and inconsistencies by comparing AI outputs with source documents.' },
            { title: 'Instruction Compliance Review', description: 'Evaluate whether AI-generated responses follow the requested instructions, context and formatting requirements.' },
            { title: 'Safety & Bias Assessment', description: 'Review outputs for harmful content, bias, toxicity and relevant policy violations.' },
            { title: 'Confidence-Based Human Verification', description: 'Route low-confidence OCR, computer vision and automated classification results to human specialists for manual inspection.' },
            { title: 'Exception Resolution', description: 'Verify ambiguous documents, signatures, stamps and other difficult data points, with escalation procedures for unresolved cases.' },
            { title: 'Quality Calibration', description: 'Conduct multi-annotator consistency checks, reviewer calibration and audit-trail documentation.' },
            { title: 'Feedback Integration', description: 'Organize verified corrections and evaluation results into structured feedback datasets for model improvement.' }
          ],
          problemSolved:
            'Catches model hallucinations, factual errors, safety policy violations, and low-confidence OCR/vision exceptions before they impact production users.',
          deliverables: [
            'AI model evaluation scorecards',
            'Human-reviewed AI output datasets',
            'Error classification and feedback reports',
            'Verified records and exception logs',
            'Quality assessment documentation'
          ],
          applications: [
            'Generative AI',
            'LLM development',
            'Document automation',
            'Intelligent OCR',
            'Computer vision',
            'Autonomous workflows',
            'Enterprise AI quality assurance'
          ],
          qaApproach:
            'Reviewer calibration benchmarks, dual-blind verification on sensitive outputs, and transparent audit trails ensure reproducible evaluation metrics.',
          seoTitle: 'AI Model Evaluation & Human-in-the-Loop Services | VAIKA',
          metaDescription:
            'Human-in-the-loop AI validation and LLM evaluation services: hallucination detection, prompt compliance, safety audits, and low-confidence OCR exception handling.',
          primaryKeywords: ['AI Model Evaluation Services', 'Human-in-the-Loop Services', 'AI Output Evaluation'],
          secondaryKeywords: [
            'LLM Evaluation Services',
            'AI Response Quality Assessment',
            'AI Hallucination Detection',
            'Human AI Verification',
            'AI Model Testing',
            'Generative AI Evaluation',
            'AI Quality Assurance'
          ],
          faqs: [
            {
              question: 'How does Human-in-the-Loop (HITL) validation integrate with existing OCR or classification pipelines?',
              answer: 'When your automated system flags predictions below a defined confidence threshold, our specialists review the source image or text, resolve ambiguous cases, and return verified ground truth corrections.'
            },
            {
              question: 'What criteria are evaluated during LLM output reviews?',
              answer: 'We evaluate factual accuracy against source references, instruction and constraint adherence, hallucination occurrence, safety/toxicity flags, and stylistic alignment.'
            }
          ],
          badge: 'HITL & Evaluation'
        },
        {
          id: 'ai-dataset-collection-preparation',
          name: 'AI Dataset Collection, Cleaning & Preparation',
          slug: 'ai-dataset-collection-preparation',
          detailRoute: '/services/data-ai/ai-dataset-collection-preparation',
          category: 'AI Data Services',
          divisionKey: 'data-ai',
          tagline: 'End-to-end multimodal data collection, deduplication, PII redaction, and train/val/test formatting.',
          explanation:
            'VAIKA GROUP provides end-to-end AI dataset collection, data cleaning and training data preparation services for organizations developing machine learning, computer vision, NLP and generative AI systems.',
          overviewParagraphs: [
            'VAIKA GROUP provides end-to-end AI dataset collection, data cleaning and training data preparation services for organizations developing machine learning, computer vision, NLP and generative AI systems.',
            'Our data preparation workflows cover the entire dataset lifecycle, from collecting rights-cleared multimodal data to removing duplicates, filtering corrupted records, standardizing formats and preparing datasets for model training.',
            'We help machine learning teams transform fragmented raw data into structured, validated and training-ready datasets.'
          ],
          includes: [
            'Multimodal dataset collection',
            'Image, video, audio and text data acquisition',
            'Dataset cleaning and preprocessing',
            'Duplicate and near-duplicate detection',
            'PII identification and redaction',
            'Image and text normalization',
            'Tokenization and text chunking',
            'Train, validation and test dataset splitting',
            'COCO, YOLO, TFRecord and WebDataset preparation',
            'JSONL and HuggingFace dataset formatting',
            'Dataset card creation and documentation'
          ],
          processSteps: [
            { title: 'Data Requirement Analysis', description: 'Understand model objectives, required modalities, data volume, domain requirements and dataset specifications.' },
            { title: 'Dataset Collection', description: 'Gather relevant images, videos, audio recordings, text corpora and domain-specific documents using appropriate collection and licensing procedures.' },
            { title: 'Metadata Enrichment', description: 'Organize collected data with relevant attributes such as timestamps, image resolution, camera information, language and source metadata.' },
            { title: 'Data Cleaning', description: 'Remove corrupted files, unreadable records, duplicates, near-duplicate images, blurred samples and inconsistent entries.' },
            { title: 'Data Deduplication', description: 'Apply perceptual hashing and similarity-based methods to identify duplicate and near-duplicate content.' },
            { title: 'Data Standardization', description: 'Normalize resolution, aspect ratios, color spaces, file structures and naming conventions.' },
            { title: 'Privacy & Sensitive Data Handling', description: 'Identify and redact relevant personally identifiable information (PII), including faces, license plates and sensitive identifiers, according to project requirements.' },
            { title: 'Dataset Structuring', description: 'Organize text and multimodal data into standardized schemas, tokenize text, perform chunking and prepare computer vision annotation structures.' },
            { title: 'Train/Validation/Test Splitting', description: 'Create appropriate dataset partitions, including stratified splits where suitable, while checking for potential data leakage.' },
            { title: 'Final Validation', description: 'Review class distribution, dataset consistency, formatting, metadata and documentation before delivery.' }
          ],
          problemSolved:
            'Eliminates corrupted files, near-duplicate leakage, unredacted PII, and formatting incompatibilities so engineering teams can launch training runs immediately.',
          deliverables: [
            'Curated multimodal dataset repositories',
            'Cleaned and normalized dataset archives',
            'Ready-to-train machine learning datasets',
            'JSONL and structured dataset files',
            'COCO, YOLO, TFRecord and WebDataset exports',
            'Dataset cards and processing manifests',
            'Data quality and validation reports'
          ],
          applications: [
            'Machine learning development',
            'LLM fine-tuning',
            'Computer vision',
            'NLP',
            'Generative AI',
            'Predictive analytics',
            'Deep learning research'
          ],
          qaApproach:
            'Perceptual hashing deduplication checks, automated PII redaction verification, data leakage prevention across splits, and comprehensive schema audit manifests.',
          seoTitle: 'AI Training Data Collection & Preparation | VAIKA',
          metaDescription:
            'End-to-end AI dataset collection, cleaning, deduplication, PII redaction, and ML training data formatting in JSONL, COCO, YOLO, TFRecord, and WebDataset.',
          primaryKeywords: ['AI Training Data Services', 'Dataset Collection Services', 'Data Cleaning Services'],
          secondaryKeywords: [
            'Machine Learning Dataset Preparation',
            'AI Dataset Cleaning',
            'Training Data Collection',
            'Dataset Preprocessing',
            'Data Deduplication',
            'Data Annotation Preparation',
            'LLM Training Dataset Preparation'
          ],
          faqs: [
            {
              question: 'How do you prevent data leakage when splitting datasets?',
              answer: 'We detect exact and near-duplicate items via perceptual hashing and embedding similarity before generating stratified Train/Validation/Test splits.'
            },
            {
              question: 'Do you handle PII redaction for compliance?',
              answer: 'Yes. We identify and redact personally identifiable information—such as faces, license plates, emails, and identification numbers—according to your compliance specs.'
            }
          ],
          badge: 'Training Data'
        }
      ]
    },
    {
      id: 'data-processing-back-office',
      title: 'Category B: Data Processing & Back-Office',
      description: 'Online/offline data entry, business record verification, OCR digitization, e-commerce catalog admin, and CRM & B2B lead research.',
      services: [
        {
          id: 'data-entry-business-verification',
          name: 'Data Entry & Business Data Verification',
          slug: 'data-entry-business-verification',
          detailRoute: '/services/data-ai/data-entry-business-verification',
          category: 'Data Processing & Back-Office',
          divisionKey: 'data-ai',
          tagline: 'Accurate online/offline data entry paired with strict human verification of business records.',
          explanation:
            'VAIKA GROUP provides professional online and offline data entry, business data processing and human verification services for organizations that require accurate and consistently maintained business records.',
          overviewParagraphs: [
            'VAIKA GROUP provides professional online and offline data entry, business data processing and human verification services for organizations that require accurate and consistently maintained business records.',
            'Our workflows cover manual data entry, spreadsheet management, structured record creation, financial data cross-checking, identity document verification and administrative data processing.',
            'We support both cloud-based business platforms and offline data environments, helping organizations convert unstructured records into organized and validated business information.'
          ],
          includes: [
            'Online and cloud-based data entry',
            'Offline spreadsheet and database data entry',
            'Excel and CSV data processing',
            'Identity document verification',
            'Financial statement cross-checking',
            'Compliance document inspection',
            'Double-key data verification',
            'Record standardization and validation',
            'Administrative back-office processing'
          ],
          processSteps: [
            { title: 'Data Assessment', description: 'Review source files, physical documents, digital forms, spreadsheets and destination system requirements.' },
            { title: 'Data Extraction', description: 'Collect relevant information from source documents, business forms, surveys, financial statements and administrative records.' },
            { title: 'Online Data Entry', description: 'Enter records directly into cloud-based ERP systems, CRM platforms, customer management portals and business applications.' },
            { title: 'Offline Data Entry', description: 'Process data into Excel, CSV, Access and other structured formats for offline or restricted environments.' },
            { title: 'Record Standardization', description: 'Apply consistent formatting for names, dates, phone numbers, currencies, addresses and other structured fields.' },
            { title: 'Business Data Verification', description: 'Cross-check identity documents, financial statements, compliance forms and other business records against provided source information.' },
            { title: 'Error Identification', description: 'Identify missing fields, duplicate records, mismatched information and data inconsistencies.' },
            { title: 'Quality Assurance', description: 'Conduct field-level validation, double-key verification where required and discrepancy escalation.' },
            { title: 'Final Delivery', description: 'Provide structured and verified records with appropriate processing logs and documentation.' }
          ],
          problemSolved:
            'Eliminates clerical backlogs, mismatched financial entries, unverified compliance records, and inconsistent field formatting across business platforms.',
          deliverables: [
            'Populated Excel and CSV databases',
            'Verified business records',
            'Structured online database entries',
            'Audit-logged data processing files',
            'Data quality and discrepancy reports'
          ],
          applications: [
            'Finance',
            'Healthcare administration',
            'Insurance',
            'Real estate',
            'Enterprise operations',
            'Compliance processing',
            'General business administration'
          ],
          qaApproach:
            'Field-level schema validation, double-key entry verification on critical records, and immediate discrepancy escalation logs ensure reliable business databases.',
          seoTitle: 'Online & Offline Data Entry Services | VAIKA',
          metaDescription:
            'Reliable online & offline data entry and business verification services: cloud ERP/CRM input, Excel/CSV processing, double-key verification, and compliance cross-checks.',
          primaryKeywords: ['Data Entry Services', 'Data Verification Services', 'Online Data Entry Services'],
          secondaryKeywords: [
            'Offline Data Entry',
            'Business Data Processing',
            'Data Validation Services',
            'Manual Data Entry',
            'Back-Office Data Processing',
            'Financial Data Verification',
            'Data Quality Control'
          ],
          faqs: [
            {
              question: 'Can your team work directly inside our cloud ERP or CRM?',
              answer: 'Yes. Our specialists securely process records directly inside web portals, ERP software, and SaaS dashboards over access-controlled sessions, or work offline using structured Excel/CSV templates.'
            },
            {
              question: 'How do you maintain high accuracy for financial and compliance records?',
              answer: 'We enforce consistent field formatting rules, double-key cross-verification on sensitive entries, and structured audit logs flagging any source document discrepancies.'
            }
          ],
          badge: 'Enterprise Ops'
        },
        {
          id: 'document-digitization-ocr-conversion',
          name: 'Document Digitization, OCR & File Conversion Services',
          slug: 'document-digitization-ocr-conversion',
          detailRoute: '/services/data-ai/document-digitization-ocr-conversion',
          category: 'Data Processing & Back-Office',
          divisionKey: 'data-ai',
          tagline: 'Transform static PDFs, scanned documents, and paper archives into formatted Excel & Word files.',
          explanation:
            'VAIKA GROUP provides document digitization, OCR-based data extraction and professional file conversion services to transform static PDFs, scanned documents and physical paper records into editable digital formats.',
          overviewParagraphs: [
            'VAIKA GROUP provides document digitization, OCR-based data extraction and professional file conversion services to transform static PDFs, scanned documents and physical paper records into editable digital formats.',
            'Our workflows combine optical character recognition (OCR), structured data extraction and human proofreading to preserve document accuracy, readability and formatting.',
            'We support businesses that need to convert financial reports, contracts, historical records, manuals, surveys and other document archives into Excel spreadsheets and editable Word documents.'
          ],
          includes: [
            'PDF to Excel conversion',
            'Scanned PDF to Excel conversion',
            'PDF to Word conversion',
            'Scanned documents to Word conversion',
            'OCR-based text extraction',
            'Multi-page table extraction',
            'Financial statement digitization',
            'Spreadsheet formula reconstruction',
            'Document formatting and layout recreation',
            'Human proofreading and OCR error correction'
          ],
          processSteps: [
            { title: 'Document Assessment', description: 'Review source PDFs, scanned images and physical document scans to identify document structure, quality and output requirements.' },
            { title: 'Image Preprocessing', description: 'Improve scan readability through appropriate image adjustments, including skew correction, contrast enhancement and noise reduction.' },
            { title: 'OCR Extraction', description: 'Extract text, tables, numbers and other document information using optical character recognition technology.' },
            { title: 'Table Reconstruction', description: 'Identify document tables, reconstruct rows and columns, preserve headings and align extracted information into structured spreadsheets.' },
            { title: 'Word Document Conversion', description: 'Recreate paragraphs, heading structures, tables, images, lists, page numbering and document layouts in editable DOCX files.' },
            { title: 'Human Proofreading', description: 'Compare extracted text and numerical information against source documents to identify OCR errors, missing content and formatting inconsistencies.' },
            { title: 'Formatting Reconstruction', description: 'Restore appropriate fonts, margins, indentation, headers, footers, footnotes and document hierarchy.' },
            { title: 'Formula & Data Validation', description: 'Recreate spreadsheet calculations where required and verify numerical consistency.' },
            { title: 'Final Quality Review', description: 'Inspect the converted documents for accuracy, readability, layout consistency and completeness.' }
          ],
          problemSolved:
            'Eliminates broken copy-paste layouts, OCR character misreads (such as 0 vs O), and trapped paper archive data by delivering clean, editable files.',
          deliverables: [
            'Editable Excel XLSX spreadsheets',
            'Editable Microsoft Word DOCX documents',
            'Structured extracted data',
            'Digitized document archives',
            'Quality-checked conversion files'
          ],
          applications: [
            'Accounting',
            'Financial reporting',
            'Legal documentation',
            'Healthcare records',
            'Administrative operations',
            'Historical archives',
            'Enterprise document management'
          ],
          qaApproach:
            'Every OCR extraction undergoes manual human proofreading against source scans, alongside spreadsheet total verification and exact layout inspection.',
          seoTitle: 'PDF Conversion & OCR Document Digitization | VAIKA',
          metaDescription:
            'Accurate PDF to Excel, PDF to Word, and OCR document digitization services with human proofreading, table reconstruction, and spreadsheet formula validation.',
          primaryKeywords: ['Document Digitization Services', 'PDF Conversion Services', 'OCR Data Extraction Services'],
          secondaryKeywords: [
            'PDF to Excel Conversion',
            'Scanned PDF to Excel',
            'PDF to Word Conversion',
            'Scanned Documents to Word',
            'OCR Document Processing',
            'Document Data Extraction',
            'Document Formatting Services'
          ],
          faqs: [
            {
              question: 'Why combine OCR with human proofreading?',
              answer: 'Automated OCR frequently introduces subtle character swaps (like 0 vs O or 1 vs l) and breaks complex multi-page tables. Human verification catches every discrepancy before delivery.'
            },
            {
              question: 'Can you preserve headings, tables, and formulas in converted files?',
              answer: 'Yes. We reconstruct active spreadsheet formulas for financial tables and faithfully recreate paragraph styles, headers, footers, and tables in DOCX.'
            }
          ],
          badge: 'OCR & Conversion'
        },
        {
          id: 'ecommerce-product-catalog-management',
          name: 'E-commerce Product Data & Catalog Management',
          slug: 'ecommerce-product-catalog-management',
          detailRoute: '/services/data-ai/ecommerce-product-catalog-management',
          category: 'Data Processing & Back-Office',
          divisionKey: 'data-ai',
          tagline: 'Bulk SKU uploads, Shopify catalog administration, variant mapping, and SEO listing optimization.',
          explanation:
            'VAIKA GROUP provides e-commerce product data management and catalog administration services to help online businesses maintain accurate, organized and searchable product inventories.',
          overviewParagraphs: [
            'VAIKA GROUP provides e-commerce product data management and catalog administration services to help online businesses maintain accurate, organized and searchable product inventories.',
            'Our workflows cover bulk product uploads, SKU and barcode management, product attribute mapping, category organization, product variant configuration, inventory updates and product listing optimization.',
            'We support Shopify and other e-commerce platforms, helping businesses streamline catalog operations while maintaining consistent product information across their online stores.'
          ],
          includes: [
            'Bulk product catalog uploads',
            'Shopify product listing management',
            'SKU, UPC and MPN data management',
            'Product title and description optimization',
            'Product variant configuration',
            'Product category and collection organization',
            'Product image processing and attachment',
            'Shopify tags and metafield management',
            'Product SEO metadata optimization',
            'Inventory and out-of-stock management'
          ],
          processSteps: [
            { title: 'Catalog Assessment', description: 'Review product source files, existing store structures, inventory data, SKU formats and platform requirements.' },
            { title: 'Product Data Preparation', description: 'Organize product titles, descriptions, pricing, SKU numbers, UPCs, MPNs, attributes and other catalog information.' },
            { title: 'Bulk Product Upload', description: 'Prepare and import product records using CSV, XLSX and supported platform import workflows.' },
            { title: 'Product Attribute Mapping', description: 'Configure product categories, sizes, colors, materials, specifications and other product attributes.' },
            { title: 'Product Variant Management', description: 'Organize product variants, bundles, pricing structures and inventory identifiers.' },
            { title: 'Image Management', description: 'Resize, rename, organize and attach relevant product images to the correct product listings.' },
            { title: 'Shopify Catalog Management', description: 'Organize collections, product tags, metafields, stock information and catalog structures within Shopify.' },
            { title: 'Product SEO Optimization', description: 'Improve product titles, descriptions, meta titles and meta descriptions using relevant product search keywords.' },
            { title: 'Inventory & Listing Validation', description: 'Verify product information, stock levels, variant configurations and listing consistency.' },
            { title: 'Final Quality Review', description: 'Check published products, category structures, filters and catalog organization.' }
          ],
          problemSolved:
            'Prevents launch delays, broken product variants, missing filter tags, and inconsistent SKU data across large e-commerce inventories.',
          deliverables: [
            'Published e-commerce product catalogs',
            'Structured product data spreadsheets',
            'Organized SKU and variant records',
            'Optimized product listings',
            'Updated Shopify collections and product attributes',
            'Product catalog quality reports'
          ],
          applications: [
            'Shopify stores',
            'Online retailers',
            'D2C brands',
            'Marketplace sellers',
            'Wholesale businesses',
            'Multi-product e-commerce operations'
          ],
          qaApproach:
            'End-to-end validation of published collections, filter tags, SKU/UPC mapping, image associations, and live storefront variant selectors.',
          seoTitle: 'E-commerce & Shopify Catalog Management | VAIKA',
          metaDescription:
            'Dedicated e-commerce product data & Shopify catalog management services: bulk CSV/XLSX product uploads, SKU/UPC mapping, variant setup, metafields, and SEO optimization.',
          primaryKeywords: ['E-commerce Product Data Management', 'Product Catalog Management Services', 'Shopify Catalog Management'],
          secondaryKeywords: [
            'Product Catalog Upload Services',
            'Shopify Product Upload',
            'Bulk Product Upload',
            'E-commerce Data Entry',
            'Product Data Optimization',
            'SKU Management',
            'E-commerce Inventory Management'
          ],
          faqs: [
            {
              question: 'Can you configure Shopify metafields, collections, and search filter tags?',
              answer: 'Yes. Beyond uploading CSV spreadsheets, we work inside Shopify admin to map metafields (dimensions, care instructions, materials), set up smart collections, and standardize filter tags.'
            },
            {
              question: 'How do you handle complex product variants like size, color, and bundle pricing?',
              answer: 'We organize parent-child variant matrices in clean structured templates, ensuring every SKU, UPC/MPN, price tier, and variant-specific photo maps accurately.'
            }
          ],
          badge: 'E-Commerce Ops'
        },
        {
          id: 'crm-data-management-lead-research',
          name: 'CRM Data Management & B2B Lead Research',
          slug: 'crm-data-management-lead-research',
          detailRoute: '/services/data-ai/crm-data-management-lead-research',
          category: 'Data Processing & Back-Office',
          divisionKey: 'data-ai',
          tagline: 'Clean, enriched CRM databases and ICP-matched, email-verified B2B prospect lists.',
          explanation:
            'VAIKA GROUP provides CRM data management, business contact enrichment and B2B lead research services to help organizations maintain reliable customer databases and build structured prospecting lists.',
          overviewParagraphs: [
            'VAIKA GROUP provides CRM data management, business contact enrichment and B2B lead research services to help organizations maintain reliable customer databases and build structured prospecting lists.',
            'Our workflows combine CRM record creation, database cleanup, company research, decision-maker identification, contact enrichment and business email verification.',
            'We support CRM environments such as Salesforce, HubSpot, Zoho and Pipedrive, helping sales and marketing teams maintain organized records and improve the quality of their prospect databases.'
          ],
          includes: [
            'CRM data entry and record creation',
            'Salesforce, HubSpot, Zoho and Pipedrive data management',
            'CRM database cleaning and deduplication',
            'Business contact enrichment',
            'B2B prospect list building',
            'Ideal Customer Profile (ICP)-based lead research',
            'Decision-maker identification',
            'Business email and phone verification',
            'Company and firmographic research',
            'CRM pipeline and field standardization'
          ],
          processSteps: [
            { title: 'CRM Database Assessment', description: 'Review existing CRM structures, contact records, company information, data fields and business requirements.' },
            { title: 'CRM Data Entry', description: 'Capture business contact details from business cards, event attendee lists, lead forms, incoming emails and other authorized sources.' },
            { title: 'CRM Record Organization', description: 'Create and associate contacts, companies, accounts, opportunities and relevant lead records.' },
            { title: 'CRM Data Cleaning', description: 'Identify duplicate records, incomplete fields, outdated contacts, inconsistent formatting and inaccurate information.' },
            { title: 'Contact Enrichment', description: 'Research and update business information such as job titles, company details, locations, employee information and relevant firmographic attributes.' },
            { title: 'B2B Lead Research', description: 'Identify companies and potential decision-makers based on the client\'s ideal customer profile (ICP), industry, location and business requirements.' },
            { title: 'Contact Verification', description: 'Validate business email addresses, phone numbers, company websites and professional profile information using appropriate verification methods.' },
            { title: 'CRM Taxonomy Management', description: 'Maintain lead sources, campaign attribution, custom fields, account hierarchies, tags and pipeline classifications.' },
            { title: 'Database Quality Assurance', description: 'Review record accuracy, field completeness, duplicate status and CRM consistency.' },
            { title: 'Final Delivery', description: 'Provide updated CRM records, enriched prospect lists and structured database reports.' }
          ],
          problemSolved:
            'Eliminates duplicate CRM records, stale contact titles, and bounced outbound emails while supplying sales teams with clean, ICP-targeted prospect lists.',
          deliverables: [
            'Cleaned and enriched CRM databases',
            'Verified B2B prospect lists',
            'Structured CSV and Excel lead databases',
            'Updated business contact records',
            'Company and decision-maker research data',
            'CRM data quality and enrichment reports'
          ],
          applications: [
            'B2B sales teams',
            'Marketing agencies',
            'SaaS companies',
            'Recruitment businesses',
            'Real estate organizations',
            'Enterprise sales',
            'Outbound prospecting operations'
          ],
          qaApproach:
            'Duplicate record matching, firmographic title verification, and multi-stage business email validation protect outbound sender reputation and pipeline data hygiene.',
          seoTitle: 'CRM Data Management & B2B Lead Research | VAIKA',
          metaDescription:
            'CRM data management, database deduplication, contact enrichment, and verified B2B lead generation research lists for Salesforce, HubSpot, Zoho, and Pipedrive.',
          primaryKeywords: ['CRM Data Management Services', 'B2B Lead Generation Research', 'CRM Data Entry Services'],
          secondaryKeywords: [
            'CRM Data Cleaning',
            'CRM Database Management',
            'B2B Prospect List Building',
            'Lead Research Services',
            'Business Contact Verification',
            'Email Verification',
            'Salesforce Data Management',
            'HubSpot CRM Management'
          ],
          faqs: [
            {
              question: 'Which CRM platforms do you manage directly?',
              answer: 'Our specialists manage databases inside Salesforce, HubSpot, Zoho CRM, Pipedrive, and custom spreadsheets with standardized account-to-contact hierarchies.'
            },
            {
              question: 'How do you verify B2B prospect lists before delivery?',
              answer: 'We research target companies matching your Ideal Customer Profile (ICP), verify active decision-maker job titles, and validate business emails using verification checks to minimize bounce rates.'
            }
          ],
          badge: 'CRM & Leads'
        }
      ]
    }
  ],
  workflow: [
    {
      step: '01',
      title: 'Taxonomy & Scope Definition',
      description: 'We audit your data schemas, annotation guidelines, and back-office SLAs to create strict Standard Operating Procedures.',
      deliverable: 'Comprehensive Annotation / Operations Rulebook.'
    },
    {
      step: '02',
      title: 'Pilot & Quality Calibration',
      description: 'A benchmark test batch is processed to calibrate inter-annotator consensus and establish accuracy baselines.',
      deliverable: 'Pilot test audit report & tuned guidelines.'
    },
    {
      step: '03',
      title: 'Scaled Production Execution',
      description: 'Trained specialists process datasets or records within dedicated, secure workspace environments.',
      deliverable: 'Continuous high-throughput data processing batches.'
    },
    {
      step: '04',
      title: 'Multi-Tier Quality Assurance',
      description: 'Senior QA leads conduct blind reviews, consensus matching, and statistical sampling to guarantee accuracy.',
      deliverable: 'QA scorecards with verified error rate under 0.5%.'
    },
    {
      step: '05',
      title: 'Secure Delivery & Ingestion',
      description: 'Final verified datasets and structured databases are pushed to client cloud buckets or enterprise APIs.',
      deliverable: 'Delivery manifest, schema documentation, and API sync.'
    }
  ],
  whyChooseUs: [
    {
      title: 'Human-in-the-Loop Precision',
      description: 'We do not rely on unchecked synthetic data; every critical edge case is verified by trained human intellect.'
    },
    {
      title: 'Enterprise Data Security',
      description: 'Strict confidentiality agreements, access-controlled workstations, encrypted transfers, and zero-data-retention compliance.'
    },
    {
      title: 'Scalable Throughput on Demand',
      description: 'Ability to ramp up from small experimental pilots to hundreds of thousands of annotations and records weekly.'
    },
    {
      title: 'Multi-Domain Versatility',
      description: 'Deep operational capabilities spanning computer vision, NLP, geospatial mapping, and back-office document processing.'
    }
  ],
  demonstrations: [
    {
      id: 'demo-computer-vision',
      title: 'Autonomous Robotics Vision Annotation',
      category: 'Computer Vision',
      description: 'Multi-class semantic segmentation and 2D bounding boxes for industrial navigation datasets.',
      image: '/assets/demonstrations/data-ai-vision-annotation.jpg',
      badge: 'Pixel Precision',
      tags: ['Segmentation', 'Bounding Box', 'Computer Vision']
    },
    {
      id: 'demo-spatial-gis',
      title: 'Urban Geospatial Infrastructure Mapping',
      category: 'GIS & Satellite',
      description: 'High-altitude vectorization of 50,000+ building footprints and roadway centerlines with topological validation.',
      image: '/assets/demonstrations/data-ai-geospatial-mapping.jpg',
      badge: 'Geospatial Vectors',
      tags: ['Building Footprints', 'OSM Mapping', 'Shapefiles']
    },
    {
      id: 'demo-backoffice-catalog',
      title: 'Multi-Channel E-Commerce Catalog Ingestion',
      category: 'Data Processing',
      description: 'Rapid standardization and variant attribute mapping for a 35,000 SKU luxury home goods retailer.',
      image: '/assets/demonstrations/data-ai-catalog-ingestion.jpg',
      badge: 'Catalog Ingestion',
      tags: ['Shopify Sync', 'CSV Formatting', 'Zero Errors']
    }
  ]
};

/* =========================================================================
   4. DIGITAL MARKETING & CREATIVE
   ========================================================================= */

export const DIGITAL_MARKETING_DIVISION: ServiceDivisionData = {
  key: 'digital-marketing',
  code: '04',
  title: 'DIGITAL MARKETING & CREATIVE',
  divisionLabel: 'DIVISION 04 // DIGITAL MARKETING & CREATIVE',
  tagline: 'INTEGRATED DIGITAL GROWTH, BRAND SYSTEMS & CREATIVE PRODUCTION',
  positioning:
    'An integrated digital marketing, brand systems, web engineering, and video production division structured into 15 consolidated B2B service offerings across four operational disciplines.',
  intro: {
    headline: 'STRATEGIC GROWTH ARCHITECTURE MEETS DISCIPLINED CREATIVE EXECUTION.',
    subheadline: 'Social strategy, paid acquisition, organic search, brand systems, web engineering, and video production.',
    whatWeDo:
      'VAIKA GROUP consolidates multi-channel social management, paid Meta acquisition, technical and local SEO, lifecycle email marketing, editorial copywriting, UI/UX design, Next.js web engineering, and long- and short-form video post-production into one cohesive execution partner.',
    whoWeServe:
      'B2B enterprises, SaaS companies, e-commerce brands, real estate organizations, local commercial service providers, and founder-led companies seeking unified creative standards and accountable growth workflows.',
    problemsAddressed:
      'Fragmented agency handoffs, inconsistent brand messaging across channels, stalled organic search visibility, underperforming creative assets, and disconnected technical execution.',
    whyValuable:
      'By housing strategy, visual identity, web engineering, search optimization, and video production under shared brand standards, every campaign reinforces long-term equity while serving measurable pipeline goals.',
  },
  accentColor: '#00f0ff',
  accentSecondary: '#38bdf8',
  accentBg: 'rgba(0, 240, 255, 0.08)',
  accentBorder: 'rgba(0, 240, 255, 0.25)',
  route: '/services/digital-marketing',
  heroBadge: '15 CONSOLIDATED DIGITAL & CREATIVE CAPABILITIES',
  telemetryTag: 'DIVISION 04 // STRATEGY, WEB & PRODUCTION',
  categories: [
    {
      id: 'social-media-community',
      title: 'Category A: Social Media & Community Management',
      description: 'Channel strategy, 30-day editorial calendars, consistent publishing, active community moderation, graphic systems, and branded short-form social content.',
      services: [
        {
          id: 'social-media-management-strategy',
          name: 'Social Media Management & Strategy',
          slug: 'social-media-management-strategy',
          detailRoute: '/services/digital-marketing/social-media-management-strategy',
          category: 'Social Media & Community Management',
          divisionKey: 'digital-marketing',
          originalServices: ['Social Media Management', 'Monthly Content Calendar'],
          tagline: 'Channel governance, audience positioning, content pillars, and 30-day editorial planning.',
          explanation:
            'End-to-end social media strategy and monthly content calendar architecture across Instagram, LinkedIn, Facebook, TikTok, and X, aligning every publishing cycle with commercial business priorities.',
          h1Heading: 'Social Media Management & Strategy Services',
          suggestedH2s: [
            'Strategic Channel Governance & Monthly Content Calendar Planning',
            'Operational Process From Brand Audit to Monthly Optimization',
            'Key Capabilities & Platform Coverage',
            'Deliverables, Tools & Target Business Fit'
          ],
          seoTitle: 'Social Media Management & Strategy Services | VAIKA',
          metaDescription:
            'B2B social media management and monthly content calendar services. Audience research, content pillar planning, multi-platform strategy, and monthly reporting.',
          primaryKeywords: [
            'Social Media Management Services',
            'Social Media Strategy Agency',
            'Monthly Social Media Content Calendar',
            'B2B Social Media Management'
          ],
          secondaryKeywords: [
            'Instagram Management Services',
            'LinkedIn Company Page Management',
            'Social Media Content Strategy',
            'Editorial Content Calendar Planning',
            'Multi-Platform Social Media Governance',
            'Competitor Social Media Analysis',
            'Content Pillar Development',
            'Social Profile Optimization',
            'Monthly Social Analytics Reporting',
            'Brand Voice Alignment on Social'
          ],
          longTailKeywords: [
            'outsourced social media management and monthly content calendar',
            'B2B social media strategy agency for LinkedIn and Instagram',
            'structured 30 day social media planning for growing brands',
            'social media audit and content pillar framework service',
            'social media profile optimization and link architecture',
            'recurring monthly social media management for service businesses',
            'competitive social channel benchmarking for corporate brands',
            'integrated social content calendar linked to product launches'
          ],
          semanticKeywords: [
            'audience personas',
            'editorial cadence',
            'channel positioning',
            'engagement rate',
            'reach trends',
            'brand consistency',
            'social media audit',
            'content governance'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'VAIKA GROUP provides structured Social Media Management & Strategy designed to turn fragmented brand profiles into cohesive communication channels. By combining ongoing account oversight with forward-looking monthly content calendars, we eliminate reactive posting and align every social touchpoint with quarterly commercial goals.',
            'Many organizations struggle with dormant profiles, disconnected messaging across platforms, and last-minute scrambling for post ideas. Our strategic framework resolves those bottlenecks by defining audience-specific content pillars, clear platform roles, and pre-approved 30-day editorial roadmaps before asset production begins.',
            'Our strategists serve B2B firms, SaaS providers, real estate brokerages, e-commerce labels, and professional practices across LinkedIn, Instagram, Facebook, TikTok, and X. Every engagement begins with brand and competitor diagnostics and transitions into recurring calendar planning, approval workflows, and monthly performance reviews.'
          ],
          includes: [
            'Multi-platform social media account audit and bio/link architecture optimization',
            'Competitor channel benchmarking and audience persona alignment',
            'Custom content pillar design (Authority, Product/Service, Case Proof, Culture)',
            'Structured 30-day monthly content calendar with topic briefs and formats',
            'Campaign and seasonal launch synchronization across social channels',
            'Brand tone-of-voice governance and visual feed coherence planning',
            'Monthly performance tracking covering reach, impressions, engagement, and link clicks'
          ],
          optionalAddOns: [
            'Dedicated daily posting execution and active comment moderation (Service 02)',
            'Custom graphic and carousel batch design (Service 03)',
            'Paid social amplification campaigns via Meta Ads (Service 05)'
          ],
          processSteps: [
            {
              title: 'Business & Audience Audit',
              description: 'Review existing social profiles, brand guidelines, historical analytics, and ICP buyer journeys using native insights and audit worksheets to establish a clear baseline report.'
            },
            {
              title: 'Competitor & Category Benchmarking',
              description: 'Evaluate 4–6 direct and aspirational competitors across format mix, posting cadence, messaging angles, and audience interaction patterns to surface white-space positioning opportunities.'
            },
            {
              title: 'Platform Role & Profile Optimization',
              description: 'Define distinct strategic objectives per channel (e.g., LinkedIn executive authority vs. Instagram brand discovery) and refresh bios, highlights, CTAs, and tracking links.'
            },
            {
              title: 'Content Pillar Architecture',
              description: 'Establish 3–5 repeatable content pillars balancing education, commercial proof, product capabilities, and brand perspective so every post serves a defined funnel purpose.'
            },
            {
              title: '30-Day Monthly Content Calendar Build',
              description: 'Assemble a full monthly roadmap in structured Notion, Google Sheets, or Trello boards detailing publish dates, formats, concept briefs, visual direction, and CTA objectives.'
            },
            {
              title: 'Client Review & Approval Sign-Off',
              description: 'Conduct structured review cycles before the month begins, incorporating stakeholder feedback, compliance edits, and launch date shifts into a locked production schedule.'
            },
            {
              title: 'Performance Monitoring & Monthly Calibration',
              description: 'Compile native platform telemetry at month-end into an executive review report, adjusting next month’s topic mix and format ratios based on observed audience signals.'
            }
          ],
          problemSolved:
            'Eliminates ad-hoc, off-brand social activity and last-minute content bottlenecks by replacing guesswork with documented strategy and approved 30-day editorial calendars.',
          deliverables: [
            'Social Media Strategy & Positioning Brief',
            'Optimized channel bios, highlights, and link-in-bio setup',
            'Approved 30-day Monthly Content Calendar each cycle',
            'Monthly Social Performance & Insights Report'
          ],
          platformsTools: [
            'Instagram',
            'LinkedIn',
            'Facebook',
            'TikTok',
            'X (Twitter)',
            'Meta Business Suite',
            'Notion / Google Sheets',
            'Google Analytics 4 (UTM tracking)'
          ],
          applications: [
            'B2B Enterprises',
            'SaaS Companies',
            'Real Estate Agencies',
            'E-commerce Brands',
            'Professional Service Firms',
            'Executive Personal Brands'
          ],
          qaApproach:
            'Every monthly calendar passes a two-step editorial and brand-compliance check verifying audience relevance, balanced content pillars, accurate campaign dates, and UTM link hygiene before client sign-off.',
          imageAlt: 'Strategic social media content calendar and multi-platform campaign planning workspace',
          recommendedInternalLinks: [
            { label: 'Social Media Posting & Community Management', href: '/services/digital-marketing/social-media-posting-community-management' },
            { label: 'Social Media Graphic & Carousel Design', href: '/services/digital-marketing/social-media-graphic-carousel-design' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' }
          ],
          faqs: [
            {
              question: 'What is included in Social Media Management & Strategy?',
              answer: 'It covers channel auditing, profile optimization, competitor analysis, content pillar creation, a structured 30-day monthly content calendar with briefs, approval workflows, and monthly analytics reporting.'
            },
            {
              question: 'Does this service include graphic design, captions, or daily posting?',
              answer: 'Strategy and calendar planning are the core deliverables here. Graphic/carousel design (Service 03), copywriting/captions (Service 10), and daily publishing/community moderation (Service 02) can be bundled directly alongside this service.'
            },
            {
              question: 'Which social platforms do you strategize for?',
              answer: 'We build platform-native strategies for LinkedIn, Instagram, Facebook, TikTok, and X based on where your buyers actively evaluate vendors.'
            },
            {
              question: 'How far in advance is the monthly content calendar delivered?',
              answer: 'Monthly calendars are typically delivered 7–10 days before the start of the new cycle so your team has ample time to review and approve all concepts.'
            },
            {
              question: 'What information do we need to provide at onboarding?',
              answer: 'We collect existing brand guidelines, target customer profiles, upcoming product/service promotions, key compliance boundaries, and read/manager access to your social analytics.'
            }
          ],
          badge: 'Strategy & Calendar'
        },
        {
          id: 'social-media-posting-community-management',
          name: 'Social Media Posting & Community Management',
          slug: 'social-media-posting-community-management',
          detailRoute: '/services/digital-marketing/social-media-posting-community-management',
          category: 'Social Media & Community Management',
          divisionKey: 'digital-marketing',
          originalServices: ['Social Media Posting', 'Comment & Reply Management'],
          tagline: 'Consistent multi-platform publishing paired with structured comment and DM engagement.',
          explanation:
            'Operational publishing execution and human community moderation: scheduling posts in native formats at optimal windows while managing public comments, spam filtering, and DM inquiry routing.',
          h1Heading: 'Social Media Posting & Community Management Services',
          suggestedH2s: [
            'Consistent Publishing Execution & Active Audience Moderation',
            'Operational Workflow From Asset Staging to Comment Escalation',
            'Platform Scheduling & Community Triage Capabilities',
            'Supported Channels, Deliverables & Client Onboarding'
          ],
          seoTitle: 'Social Media Posting & Community Management | VAIKA',
          metaDescription:
            'Reliable multi-platform social media posting, scheduling, comment moderation, and DM inquiry triage services keeping brand feeds active and responsive.',
          primaryKeywords: [
            'Social Media Posting Services',
            'Social Media Community Management',
            'Comment and DM Moderation Services',
            'Social Media Scheduling Service'
          ],
          secondaryKeywords: [
            'Automated Social Media Publishing',
            'Instagram Comment Management',
            'LinkedIn Community Engagement',
            'Direct Message Triage Workflow',
            'Spam and Troll Comment Moderation',
            'Peak Window Post Scheduling',
            'Social Media Operations Support',
            'Multi-Account Publishing QA',
            'FAQ Response Playbook',
            'Partner Collaboration Tagging'
          ],
          longTailKeywords: [
            'outsourced social media posting and comment reply management',
            'daily social media scheduling across Instagram LinkedIn and Facebook',
            'brand comment moderation and sales DM routing workflow',
            'consistent social media publishing service with pre-flight QA',
            'human community management for B2B and consumer brands',
            'multi-timezone social media post scheduling management',
            'custom brand reply playbook for social media inquiries',
            'social media spam filtering and customer support triage'
          ],
          semanticKeywords: [
            'publishing cadence',
            'response SLA',
            'comment moderation',
            'DM triage',
            'alt-text tagging',
            'metadata hygiene',
            'community health',
            'lead escalation'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'Having strong creative assets accomplishes little if posts go live inconsistently or audience questions sit unanswered in the comments. VAIKA GROUP’s Social Media Posting & Community Management service provides dependable operational execution—managing the full publishing queue alongside attentive, on-brand comment and direct message handling.',
            'Busy internal teams frequently drop publishing cadence during busy quarters or miss high-intent buyer questions buried in comment threads and message requests. Our dedicated operations coordinators stage every post with proper aspect ratios, alt text, partner tags, and first-comment notes while moderating incoming engagement against an approved escalation playbook.',
            'Designed for active brands, real estate teams, e-commerce storefronts, and SaaS marketing departments that already have creative assets (or bundle our design services), this workflow turns daily channel maintenance into a reliable, auditable operation.'
          ],
          includes: [
            'Scheduled and manual native publishing across target social channels',
            'Time-zone calibrated posting windows matched to follower activity data',
            'Pre-publish media rendering checks, alt-text setup, location tagging, and collaborator invites',
            'Human review and tailored replies to public comments during defined coverage hours',
            'Direct message (DM) screening and lead/support escalation to client points of contact',
            'Spam, bot, and abusive comment filtering aligned with brand safety rules',
            'Living Brand FAQ & Tone Response Library maintained over time'
          ],
          optionalAddOns: [
            '24/7 or weekend extended moderation coverage SLAs',
            'Outbound proactive commenting on partner or industry leader accounts',
            'Monthly content strategy & calendar planning (Service 01)'
          ],
          processSteps: [
            {
              title: 'Channel Access & Escalation Setup',
              description: 'Establish secure role-based access via Meta Business Suite, LinkedIn Page Admin, or client-owned schedulers and document clear DM/complaint escalation paths.'
            },
            {
              title: 'Brand FAQ & Tone Playbook Creation',
              description: 'Compile approved response templates, product links, pricing boundaries, and brand voice guardrails so community moderators reply accurately without improvising policy.'
            },
            {
              title: 'Asset Ingestion & Pre-Flight Formatting',
              description: 'Receive finalized visuals, videos, and captions; inspect resolutions, safe zones, aspect ratios, link URLs, and accessibility alt text prior to staging.'
            },
            {
              title: 'Queue Scheduling & Native Feature Setup',
              description: 'Schedule content across platform queues—or execute manual uploads when native audio, collaborative tags, or interactive stickers require live posting.'
            },
            {
              title: 'Live Publish Verification',
              description: 'Verify each scheduled post shortly after publication on mobile viewports to confirm crisp media playback, accurate tagging, and functional links.'
            },
            {
              title: 'Active Comment Moderation & Reply Execution',
              description: 'Review incoming comments during contracted coverage windows, acknowledge positive engagement, answer routine inquiries, and filter obvious spam.'
            },
            {
              title: 'DM Triage, Lead Routing & Activity Log',
              description: 'Categorize direct messages into sales leads, customer support tickets, or partnership inquiries, routing qualified contacts to your CRM or team inbox with weekly summaries.'
            }
          ],
          problemSolved:
            'Eliminates missed publishing days, formatting errors on live feeds, and unanswered buyer questions in comments and direct messages.',
          deliverables: [
            'Verified active publishing queue across contracted social channels',
            'Custom Brand Reply & Escalation Playbook',
            'Weekly Community Moderation & Escalated Inquiry Summary'
          ],
          platformsTools: [
            'Meta Business Suite',
            'Instagram',
            'Facebook',
            'LinkedIn',
            'TikTok',
            'X (Twitter)',
            'Client-provided scheduling tools (e.g., Buffer / Sprout / Hootsuite)'
          ],
          applications: [
            'E-commerce Brands',
            'Real Estate Brokerages',
            'Local & Multi-Location Businesses',
            'B2B Service Companies',
            'Marketing Teams',
            'Personal & Founder Brands'
          ],
          qaApproach:
            'Every queued post undergoes a visual and metadata checklist (aspect ratio, tag handle verification, link check, spelling review), and escalated DMs follow strict client-approved response scripts.',
          imageAlt: 'Social media scheduling queue and community inbox moderation console',
          recommendedInternalLinks: [
            { label: 'Social Media Management & Strategy', href: '/services/digital-marketing/social-media-management-strategy' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Instagram Stories & Short-Form Social Content', href: '/services/digital-marketing/instagram-stories-short-form-content' }
          ],
          faqs: [
            {
              question: 'Do we supply the visuals and captions, or do you create them?',
              answer: 'This service specifically manages publishing, scheduling QA, and comment/DM moderation using approved assets. If you need us to design graphics, write captions, or plan the calendar, you can pair it with Services 01, 03, 04, or 10.'
            },
            {
              question: 'How do you handle sensitive customer complaints or sales questions?',
              answer: 'During onboarding, we build an escalation matrix with your team. Routine questions are answered from your approved FAQ library, while complaints or qualified leads are routed immediately to your designated owner.'
            },
            {
              question: 'What are your comment and DM response hours?',
              answer: 'Standard engagement operates during defined business-hour shifts aligned with your primary market time zone. Extended evening or weekend SLA coverage is available as a scoped add-on.'
            },
            {
              question: 'Do you publish natively or through third-party schedulers?',
              answer: 'We support Meta Business Suite and major client schedulers, and perform manual native publishing whenever features like trending Reels audio or Instagram collaborator invites require it.'
            },
            {
              question: 'Will our team still review posts before they go live?',
              answer: 'Yes. Content only enters the live publishing queue after your stakeholder sign-off.'
            }
          ],
          badge: 'Publishing & Triage'
        },
        {
          id: 'social-media-graphic-carousel-design',
          name: 'Social Media Graphic & Carousel Design',
          slug: 'social-media-graphic-carousel-design',
          detailRoute: '/services/digital-marketing/social-media-graphic-carousel-design',
          category: 'Social Media & Community Management',
          divisionKey: 'digital-marketing',
          originalServices: ['Social Media Post Design', 'Carousel Design'],
          tagline: 'Editorial static graphics and seamless multi-slide carousels built for feed authority.',
          explanation:
            'Bespoke visual design for social feeds: single-frame stat callouts, product spotlights, announcement cards, and cohesive 5-to-10 slide swipeable carousels engineered for readability and brand consistency.',
          h1Heading: 'Social Media Graphic & Carousel Design Services',
          suggestedH2s: [
            'Custom Static Post Design & Multi-Slide Carousel Systems',
            'Design Production Process From Visual Brief to Multi-Format Export',
            'Visual Systems, Typography & Layout Capabilities',
            'Deliverables, Design Software & Ideal Business Profiles'
          ],
          seoTitle: 'Social Media Graphic & Carousel Design | VAIKA',
          metaDescription:
            'Custom social media post design and LinkedIn/Instagram carousel design services. Editorial typography, modular brand templates, and multi-format exports.',
          primaryKeywords: [
            'Social Media Graphic Design Services',
            'Social Media Carousel Design',
            'LinkedIn Carousel Design Agency',
            'Branded Social Post Design'
          ],
          secondaryKeywords: [
            'Instagram Post Design Service',
            'Swipeable Carousel Graphics',
            'LinkedIn Document PDF Carousels',
            'Editorial Social Feed Aesthetics',
            'Modular Social Design Templates',
            'Infographic Social Media Design',
            'Custom Typography Social Posts',
            'Product Spotlight Graphics',
            'Brand-Consistent Social Creatives',
            'Multi-Aspect Ratio Social Exports'
          ],
          longTailKeywords: [
            'custom LinkedIn PDF carousel design for B2B companies',
            'Instagram educational carousel graphic design service',
            'editorial social media post design aligned with brand guidelines',
            'monthly batch social media graphic design agency',
            'reusable Canva and Figma social post template systems',
            'panoramic seamless Instagram carousel design workflow',
            'high contrast typography social graphics for SaaS brands',
            'custom infographic and stat card design for social feeds'
          ],
          semanticKeywords: [
            'visual hierarchy',
            'swipe-through flow',
            'grid cohesion',
            'safe-zone margins',
            'typography scale',
            'brand palette',
            'editorial layout',
            'vector iconography'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Visual polish dictates whether a prospective buyer pauses in a crowded LinkedIn or Instagram feed or scrolls straight past. VAIKA GROUP’s Social Media Graphic & Carousel Design service delivers cohesive static posts and structured multi-slide carousels crafted strictly around your brand’s typographic hierarchy and color system.',
            'Template-looking stock posts erode brand differentiation, especially for premium B2B firms and consumer labels. Rather than forcing your brand into generic layouts, our designers construct original compositions—ranging from minimalist data cards and executive quote frames to continuous 8-slide educational carousels built for mobile legibility.',
            'Outputs are exported cleanly across platform-specific dimensions (1:1 square, 4:5 portrait, 16:9 landscape, and LinkedIn PDF carousel decks), with optional modular source files in Figma or Canva so internal teams stay agile between production batches.'
          ],
          includes: [
            'Custom single-image social graphics (announcements, quotes, stats, product cards)',
            'Multi-slide Instagram carousels and LinkedIn document PDF decks (5–10 slides)',
            'Visual hook slide composition paired with scannable interior data/diagram layouts',
            'Seamless panoramic visual continuity across swipeable carousel transitions',
            'Strict application of brand fonts, color tokens, grids, and logo usage rules',
            'Multi-ratio adaptation across Instagram (4:5 / 1:1), LinkedIn (PDF / 1.91:1), and X',
            'Feed-grid visual harmony planning so recent posts look cohesive together'
          ],
          optionalAddOns: [
            'Editable Figma or Canva master template handoff for client self-service use',
            'Copywriting and slide-by-slide narrative condensation (paired with Service 10)',
            'Paid ad creative resizing for Meta Ads placements (paired with Service 05)'
          ],
          processSteps: [
            {
              title: 'Brand System & Asset Intake',
              description: 'Collect logo suites, typography licenses, hex palettes, product photography, and existing brand books to lock down non-negotiable visual standards.'
            },
            {
              title: 'Copy & Concept Structuring',
              description: 'Break approved post topics and carousel outlines into slide-by-slide text hierarchies, highlighting headline hooks, supporting points, and final CTA frames.'
            },
            {
              title: 'Art Direction & Layout Wireframing',
              description: 'Sketch grid alignment, whitespace proportions, and visual storytelling flow in Figma or Illustrator—designing continuous background elements for carousels.'
            },
            {
              title: 'High-Fidelity Graphic Execution',
              description: 'Produce refined static posts and multi-slide decks in Adobe Photoshop, Illustrator, and Figma with custom iconography, imagery retouching, and balanced contrast.'
            },
            {
              title: 'Safe-Zone & Mobile Readability Audit',
              description: 'Inspect typography sizes, UI edge cropping, and contrast legibility on smartphone viewport mockups before sharing drafts.'
            },
            {
              title: 'Client Revision Cycle',
              description: 'Present organized asset batches via Figma or shared proofing boards, executing copy tweaks or layout refinements cleanly.'
            },
            {
              title: 'Platform-Ready Multi-Format Export',
              description: 'Deliver compressed, crisp PNG/JPG sets plus multi-page PDF decks for LinkedIn carousels, named systematically to match the publishing calendar.'
            }
          ],
          problemSolved:
            'Replaces inconsistent DIY templates with cohesive, studio-grade feed graphics and educational carousels that command executive credibility.',
          deliverables: [
            'Batch of high-resolution static social graphics (4:5, 1:1, 16:9 PNG/JPG)',
            'Complete multi-slide Carousel suites (individual PNGs + LinkedIn PDF decks)',
            'Organized asset folders indexed to client content calendar dates'
          ],
          platformsTools: [
            'Figma',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Canva (when editable client handoff is requested)',
            'Instagram / LinkedIn / Facebook / X export specs'
          ],
          applications: [
            'B2B & SaaS Brands',
            'Consulting & Professional Firms',
            'E-commerce & Consumer Brands',
            'Real Estate Marketing Teams',
            'Founders & Thought Leaders'
          ],
          qaApproach:
            'Every visual asset is reviewed for typographic hierarchy, spelling accuracy against approved copy, brand color fidelity, and mobile UI safe-zone clearance.',
          imageAlt: 'High-contrast social media carousel slides and static graphic templates in Figma',
          recommendedInternalLinks: [
            { label: 'Social Media Management & Strategy', href: '/services/digital-marketing/social-media-management-strategy' },
            { label: 'Instagram Stories & Short-Form Social Content', href: '/services/digital-marketing/instagram-stories-short-form-content' },
            { label: 'Brand Strategy & Visual Identity Design', href: '/services/digital-marketing/brand-strategy-visual-identity' }
          ],
          faqs: [
            {
              question: 'How many slides are included in a typical carousel design?',
              answer: 'Most B2B LinkedIn and Instagram educational carousels range between 5 and 10 slides, structured with a headline hook slide, digestible interior breakdowns, and a closing call-to-action.'
            },
            {
              question: 'Do we need to provide the text for each post and carousel?',
              answer: 'You can supply approved slide copy directly, or pair this service with our Website Copywriting & Social Media Content service (Service 10) for full copy drafting.'
            },
            {
              question: 'Can you deliver editable source files in Canva or Figma?',
              answer: 'Yes. Standard delivery provides ready-to-publish PNG/JPG/PDF exports, and editable Figma or Canva templates can be included based on your agreed project scope.'
            },
            {
              question: 'Are graphics sized differently for LinkedIn versus Instagram?',
              answer: 'Yes. We export portrait 4:5 (1080x1350) or 1:1 assets optimized for Instagram feeds alongside crisp PDF document carousels formatted for LinkedIn.'
            },
            {
              question: 'What if we do not yet have formal brand guidelines?',
              answer: 'We can adapt your existing logo and website colors, or start with Brand Strategy & Visual Identity Design (Service 11) to establish formal design rules first.'
            }
          ],
          badge: 'Visual Feed Systems'
        },
        {
          id: 'instagram-stories-short-form-content',
          name: 'Instagram Stories & Short-Form Social Content',
          slug: 'instagram-stories-short-form-content',
          detailRoute: '/services/digital-marketing/instagram-stories-short-form-content',
          category: 'Social Media & Community Management',
          divisionKey: 'digital-marketing',
          originalServices: ['Story Design', 'Reels Creation', 'Short Video Creation for Brands'],
          tagline: 'Original vertical brand storytelling: interactive 9:16 Stories, Reels creation, and branded short videos.',
          explanation:
            'Creative conception and full production of branded 9:16 social content—covering interactive Story sequences, Story highlight systems, native Reels creation, and brand-led short vertical videos designed from concept through assembly.',
          h1Heading: 'Instagram Stories & Short-Form Social Content Creation',
          suggestedH2s: [
            'Interactive Story Systems & Branded Short-Form Content Creation',
            'How Concept-First Short Content Differs From Raw Post-Production Editing',
            'Production Process From Creative Brief to 9:16 Delivery',
            'Capabilities, Creative Stack & Target Brands'
          ],
          seoTitle: 'Instagram Stories & Brand Reels Creation | VAIKA',
          metaDescription:
            'Branded 9:16 short-form social content creation: interactive Instagram Story design, Reels concepting and creation, and brand-led short video production.',
          primaryKeywords: [
            'Instagram Story Design Services',
            'Brand Reels Creation Services',
            'Short-Form Social Content Production',
            'Branded Short Video Creation'
          ],
          secondaryKeywords: [
            '9:16 Vertical Story Templates',
            'Interactive Instagram Stories',
            'Brand Storytelling Reels',
            'Instagram Highlight Icon Design',
            'Short Video Concept Development',
            'Motion Typography Reels',
            'Brand-Forward Short Vertical Video',
            'Promotional Story Sequences',
            'Kinetic Story Motion Graphics',
            'Multi-Channel Short Content Assets'
          ],
          longTailKeywords: [
            'branded Instagram Reels creation from product assets and brand kit',
            'interactive 9:16 Instagram Story design with poll and CTA zones',
            'short-form vertical content creation for luxury and B2B brands',
            'concept to completion Reels creation service for businesses',
            'custom Instagram Story highlight covers and reusable templates',
            'high aesthetic short brand video creation without on-site crew',
            'promotional product launch Story sequence design service',
            'brand-compliant short social content for Instagram and LinkedIn'
          ],
          semanticKeywords: [
            'vertical storytelling',
            '9:16 safe zones',
            'interactive stickers',
            'brand aesthetics',
            'creative direction',
            'hook framing',
            'motion graphics',
            'story arc'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Vertical 9:16 placements—Instagram Stories, Reels, and brand-led short videos—require original creative conception rather than simple feed cropping. VAIKA GROUP’s Instagram Stories & Short-Form Social Content service focuses on conceptualizing, designing, and producing cohesive vertical brand narratives tailored for daily audience touchpoints.',
            'Distinct from pure post-production video editing of pre-recorded camera footage (covered in Service 15), this offering handles concept-driven Story design, animated product/brand Stories, Story highlight suites, and Reels/short-video creation assembled from brand imagery, 3D/product assets, curated licensed stock footage, motion graphics, and client-supplied clips.',
            'Whether launching an announcement sequence with designated interactive Poll/Link zones in Instagram Stories or producing polished 15-to-45 second brand showcase Reels that uphold refined B2B or luxury standards, every frame respects platform UI overlays and communicates clear value.'
          ],
          includes: [
            'Full-bleed 9:16 interactive Instagram Story sequences (launches, FAQs, event promos)',
            'Explicit UI safe-zone planning for Poll, Question, Slider, and Link stickers',
            'Bespoke Instagram Story Highlight cover icon sets aligned to feed branding',
            'Concept-to-output Reels creation combining brand visuals, kinetic typography, and licensed stock/client clips',
            'Editorial-grade Short Video Creation for B2B, luxury, and corporate brand positioning',
            'Music bed and beat-matched motion timing for brand storytelling',
            'Cover frame design sized cleanly for both profile Reels tabs and main grids'
          ],
          optionalAddOns: [
            'Full post-production editing of heavy talking-head, vlog, or multi-clip raw camera shoots (Service 15)',
            'Live Story publishing and interactive sticker setup during active posting windows (Service 02)',
            'UGC creator coordination or on-location filming (scoped separately upon request)'
          ],
          processSteps: [
            {
              title: 'Creative Direction & Vertical Brief',
              description: 'Define campaign messaging, audience hooks, brand tone guardrails, and platform objectives (Story engagement vs. Reels brand discovery).'
            },
            {
              title: 'Concept Scripting & Storyboarding',
              description: 'Draft frame-by-frame Story sequences or 15–45 second vertical narrative beats, mapping on-screen copy, visual transitions, and interactive CTA zones.'
            },
            {
              title: 'Visual Asset Gathering & Stock Curation',
              description: 'Compile existing client photography, brand vectors, product renders, and curated licensed stock motion clips needed to construct the visual narrative.'
            },
            {
              title: '9:16 Story & Frame Design',
              description: 'Compose layered vertical layouts in Figma, Photoshop, and Illustrator while marking interactive sticker zones clear of top handle bars and bottom reply bars.'
            },
            {
              title: 'Motion Assembly & Brand Reels Production',
              description: 'Animate typography, transitions, product highlights, and beat-matched cuts in After Effects and Premiere Pro to deliver fluid, high-craft brand videos.'
            },
            {
              title: 'Audio & Safe-Zone Verification',
              description: 'Mix clean background audio tracks and validate 9:16 safe margins across Instagram Story, Reels, LinkedIn Video, and YouTube Shorts overlays.'
            },
            {
              title: 'Client Review & Final Vertical Package Export',
              description: 'Deliver approved static Story decks, animated Story MP4s, highlight covers, and 1080x1920 H.264 vertical video files with cover graphics.'
            }
          ],
          problemSolved:
            'Solves the difficulty of maintaining refined, cohesive vertical brand storytelling across Instagram Stories and Reels without relying on off-brand viral clichés or full-scale studio shoots.',
          deliverables: [
            'Static and animated 9:16 Instagram Story sequences (PNG / MP4)',
            'Custom Story Highlight cover icon set',
            'Branded Reels & short-form vertical social videos (1080x1920 MP4)',
            'Dedicated Reels grid cover frames'
          ],
          platformsTools: [
            'Figma',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Adobe After Effects',
            'Adobe Premiere Pro',
            'Instagram Stories & Reels / LinkedIn / TikTok specs'
          ],
          applications: [
            'Luxury & Lifestyle Brands',
            'Real Estate Developments & Brokerages',
            'E-commerce Product Launches',
            'B2B & Corporate Brands',
            'Hospitality & Architectural Studios'
          ],
          qaApproach:
            'Every 9:16 file is tested against overlay safe zones (avoiding obscured captions behind platform icons) and audited for consistent brand typography, contrast, and audio levels.',
          imageAlt: 'Vertical 9:16 Instagram Story templates and branded short-form Reels storyboard frames',
          recommendedInternalLinks: [
            { label: 'Short-Form Video Editing & Reels Production', href: '/services/digital-marketing/short-form-video-editing-reels' },
            { label: 'Social Media Graphic & Carousel Design', href: '/services/digital-marketing/social-media-graphic-carousel-design' },
            { label: 'Social Media Posting & Community Management', href: '/services/digital-marketing/social-media-posting-community-management' }
          ],
          faqs: [
            {
              question: 'How is this different from Service 15 (Short-Form Video Editing & Reels Production)?',
              answer: 'Service 04 focuses on concept-first creative production—designing 9:16 Story systems, animated brand Stories, and short branded Reels built from brand graphics, product visuals, and assembled clips. Service 15 is dedicated post-production editing for your supplied or recorded raw video footage (tight pacing cuts, kinetic captions, color grading, and Shorts/Reels finishing).'
            },
            {
              question: 'Do you film on location for Reels Creation?',
              answer: 'Our core scope produces Stories and branded Reels remotely using your existing photo/video library, product assets, motion graphics, and curated stock footage. Remote shooting briefs can guide your team when fresh clips are needed.'
            },
            {
              question: 'Are interactive Instagram stickers pre-placed or live?',
              answer: 'Because Instagram Polls, Links, and Question boxes must be applied natively inside the Instagram app at upload time, we leave clean, visibly framed target zones on the creative ready for sticker placement.'
            },
            {
              question: 'Can luxury or B2B brands use short-form video without loud, chaotic trends?',
              answer: 'Yes. Short Video Creation for Brands specifically emphasizes restrained editorial pacing, bespoke typography, subtle motion design, and clean soundscapes suited to corporate and luxury positioning.'
            },
            {
              question: 'What dimensions and formats are delivered?',
              answer: 'All creatives are delivered in full-HD 1080x1920 (9:16) PNGs for static Stories and H.264 MP4 files for animated Stories and Reels.'
            }
          ],
          badge: 'Stories & Brand Reels'
        }
      ]
    },
    {
      id: 'digital-advertising-growth',
      title: 'Category B: Digital Advertising & Growth',
      description: 'Structured Meta paid acquisition, technical and on-page SEO, Google Business Profile local search management, and lifecycle email automation.',
      services: [
        {
          id: 'meta-advertising-campaign-management',
          name: 'Meta Advertising & Paid Campaign Management',
          slug: 'meta-advertising-campaign-management',
          detailRoute: '/services/digital-marketing/meta-advertising-campaign-management',
          category: 'Digital Advertising & Growth',
          divisionKey: 'digital-marketing',
          originalServices: ['Meta Ads'],
          tagline: 'Full-funnel Facebook and Instagram paid acquisition, tracking setup, creative testing, and budget governance.',
          explanation:
            'End-to-end Meta Ads architecture across Facebook and Instagram—combining campaign structuring, Pixel & Conversions API hygiene, structured creative A/B testing, audience segmentation, and transparent CPA/ROAS reporting.',
          h1Heading: 'Meta Advertising & Paid Campaign Management Services',
          suggestedH2s: [
            'Structured Paid Acquisition Across Facebook & Instagram',
            'End-to-End Campaign Architecture & Optimization Process',
            'Tracking, Targeting & Creative Testing Capabilities',
            'Account Deliverables, Tools & Ideal Advertisers'
          ],
          seoTitle: 'Meta Advertising & Paid Social Management | VAIKA',
          metaDescription:
            'Meta Ads management for Facebook and Instagram. Campaign architecture, Pixel and CAPI tracking setup, creative A/B testing, and transparent ROAS reporting.',
          primaryKeywords: [
            'Meta Ads Management Agency',
            'Facebook and Instagram Advertising Services',
            'Paid Social Campaign Management',
            'B2B Meta Advertising'
          ],
          secondaryKeywords: [
            'Facebook Ads Manager Optimization',
            'Instagram Paid Ad Campaigns',
            'Meta Pixel and Conversions API',
            'Paid Social Creative Testing',
            'Retargeting Ad Funnel Architecture',
            'Lookalike Audience Targeting',
            'Meta Lead Generation Campaigns',
            'E-commerce Paid Social Growth',
            'CPA and ROAS Monitoring',
            'Advantage+ Campaign Structuring'
          ],
          longTailKeywords: [
            'Meta advertising agency for B2B lead generation and e-commerce',
            'Facebook and Instagram ad campaign setup with Conversions API',
            'structured Meta ads A/B testing for hooks copy and creatives',
            'full funnel Meta retargeting campaign management service',
            'paid social media buying with transparent weekly reporting',
            'Meta ads account audit and wasted ad spend reduction',
            'real estate and local service lead ads management on Meta',
            'creative refresh workflow for Meta advertising fatigue'
          ],
          semanticKeywords: [
            'attribution window',
            'CPA efficiency',
            'creative fatigue',
            'CBO vs ABO',
            'event deduplication',
            'prospecting funnel',
            'cost per lead',
            'ad frequency'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'Rising customer acquisition costs and post-privacy signal loss mean profitable Meta advertising depends on disciplined account structure, reliable server-side tracking, and continuous creative iteration rather than isolated ad boosts. VAIKA GROUP manages full-funnel Facebook and Instagram paid acquisition built for measurable lead generation and e-commerce revenue.',
            'Unmanaged ad accounts frequently bleed budget across overlapping audiences, poorly tracked landing pages, and fatigued creative variants. We solve this through structured campaign architecture separating prospecting from retargeting, verified Meta Pixel and Conversions API (CAPI) event diagnostics, and systematic creative testing sprints.',
            'Your organization retains full ownership of its Meta Business Manager, Ad Account, billing method, and historical pixel data while our media buyers handle audience strategy, campaign launches, daily pacing oversight, and clear performance reporting.'
          ],
          includes: [
            'Meta Business Manager, Ad Account, Pixel, and domain verification audit',
            'Meta Pixel & Conversions API (CAPI) event mapping and deduplication review',
            'Full-funnel campaign architecture (Cold Prospecting, Mid-Funnel Engagement, Retargeting)',
            'Audience strategy across broad targeting, lookalikes, and first-party CRM custom audiences',
            'Structured ad copy and creative testing matrices (hooks, formats, CTAs)',
            'Budget pacing, bid-strategy governance, and frequency/fatigue monitoring',
            'UTM parameter standardization for Google Analytics 4 cross-verification',
            'Bi-weekly / monthly reporting covering Spend, CPL/CPA, CTR, Frequency, and ROAS'
          ],
          optionalAddOns: [
            'Bespoke static/carousel ad creative production (Service 03) or video ad editing (Service 15)',
            'Dedicated high-conversion landing page copy & UI/UX design (Services 10 & 12)',
            'Ad spend paid directly via client’s Meta billing profile (separate from management fee)'
          ],
          processSteps: [
            {
              title: 'Account, Offer & Funnel Audit',
              description: 'Audit historical Meta Ads Manager performance, landing page friction, unit economics, and target CPA/ROAS ceilings to validate realistic acquisition constraints.'
            },
            {
              title: 'Tracking & CAPI Verification',
              description: 'Inspect Meta Events Manager, verify standard events (Lead, Purchase, Schedule), confirm Conversions API alignment, and enforce consistent UTM tagging.'
            },
            {
              title: 'Audience & Funnel Architecture',
              description: 'Map cold prospecting cohorts, custom engager pools, and CRM suppression lists inside a clean campaign structure free from overlapping auction competition.'
            },
            {
              title: 'Creative Matrix & Ad Copy Preparation',
              description: 'Pair primary text variations, headlines, and creative formats (4:5 static, carousel, 9:16 Reels) to test distinct buyer angles systematically.'
            },
            {
              title: 'Staged Campaign Launch',
              description: 'Deploy campaigns in Meta Ads Manager after strict link, pixel firing, placement crop, and policy compliance checks.'
            },
            {
              title: 'Pacing & Bid Optimization',
              description: 'Monitor early delivery, cost-per-click, and conversion velocity daily, trimming underperforming ad sets and reallocating spend toward resilient winners.'
            },
            {
              title: 'Creative A/B Testing Sprints',
              description: 'Analyze thumb-stop ratios, CTR, and hold rates to brief replacement creative variations before frequency spikes erode campaign efficiency.'
            },
            {
              title: 'Performance Reporting & Strategy Review',
              description: 'Deliver clear executive summaries linking Meta platform metrics with CRM lead quality or GA4 checkout data to plan next-cycle scaling decisions.'
            }
          ],
          problemSolved:
            'Eliminates wasted ad spend caused by broken pixel tracking, disorganized campaign overlaps, and stale ad creatives.',
          deliverables: [
            'Tracking & Funnel Audit Report',
            'Structured active Meta Ads Manager campaigns owned in client Business Manager',
            'Creative & Copy Testing Log',
            'Bi-weekly or monthly CPA/ROAS Performance Reports'
          ],
          platformsTools: [
            'Meta Ads Manager',
            'Meta Business Suite & Events Manager',
            'Instagram & Facebook placements',
            'Conversions API (CAPI) integrations',
            'Google Analytics 4 (UTM verification)',
            'Looker Studio / Reporting Sheets'
          ],
          applications: [
            'E-commerce & DTC Brands',
            'Real Estate Agencies & Developments',
            'B2B Lead Generation Teams',
            'SaaS & Subscription Products',
            'Local & Regional Commercial Services'
          ],
          qaApproach:
            'Every campaign passes a pre-launch QA checklist covering destination URL status, UTM tagging, event firing in Meta Pixel Helper / Test Events, and placement safe zones across Feed, Stories, and Reels.',
          imageAlt: 'Meta Ads Manager campaign analytics and conversion funnel architecture dashboard',
          recommendedInternalLinks: [
            { label: 'Instagram Stories & Short-Form Social Content', href: '/services/digital-marketing/instagram-stories-short-form-content' },
            { label: 'Short-Form Video Editing & Reels Production', href: '/services/digital-marketing/short-form-video-editing-reels' },
            { label: 'Website & Application UI/UX Design', href: '/services/digital-marketing/website-application-ui-ux-design' }
          ],
          faqs: [
            {
              question: 'Is ad spend included in VAIKA GROUP’s management fee?',
              answer: 'No. Your ad budget is billed directly by Meta to your own payment method inside your Meta Ad Account, while our fee covers strategy, setup, optimization, and reporting.'
            },
            {
              question: 'Who owns the Meta Ad Account, Pixel, and historical data?',
              answer: 'You retain 100% ownership of your Business Manager, Ad Account, Pixel, and audience data. We operate via partner/employee permission access.'
            },
            {
              question: 'Are ad graphics and videos included in Meta Advertising management?',
              answer: 'Campaign setup, ad copy variations, and testing strategy are included. Dedicated static/carousel design or video ad editing from scratch can be bundled through Services 03, 04, or 15.'
            },
            {
              question: 'Can you guarantee a specific ROAS or cost per lead?',
              answer: 'No reputable agency can guarantee ad auction outcomes. We establish disciplined target benchmarks, reliable tracking, and rapid creative testing so performance improves methodically.'
            },
            {
              question: 'Do you set up Meta Conversions API and Pixel tracking?',
              answer: 'We audit your existing Pixel and CAPI setup, configure standard conversion events, and coordinate with your web team (or integrate natively on supported CMS stacks) to ensure accurate signal capture.'
            }
          ],
          badge: 'Paid Acquisition'
        },
        {
          id: 'seo-organic-search-optimization',
          name: 'SEO & Organic Search Optimization',
          slug: 'seo-organic-search-optimization',
          detailRoute: '/services/digital-marketing/seo-organic-search-optimization',
          category: 'Digital Advertising & Growth',
          divisionKey: 'digital-marketing',
          originalServices: ['SEO'],
          tagline: 'Technical site audits, search intent architecture, on-page optimization, structured schema, and authority strategy.',
          explanation:
            'Comprehensive organic search engineering covering crawlability & Core Web Vitals audits, keyword & search intent mapping, on-page metadata/HTML optimization, internal linking architecture, JSON-LD schema, and authority planning.',
          h1Heading: 'SEO & Organic Search Optimization Services',
          suggestedH2s: [
            'Technical, On-Page & Authority Search Architecture',
            'End-to-End SEO Implementation Methodology',
            'Technical Diagnostics, Schema & Search Capabilities',
            'Deliverables, Measurement Stack & FAQs'
          ],
          seoTitle: 'SEO & Organic Search Optimization Services | VAIKA',
          metaDescription:
            'B2B technical SEO, search intent mapping, on-page optimization, structured JSON-LD schema, and organic search analytics services.',
          primaryKeywords: [
            'Technical SEO Services',
            'Search Engine Optimization Agency',
            'On-Page and Technical SEO Audit',
            'B2B Organic Search Optimization'
          ],
          secondaryKeywords: [
            'Website Crawlability Audit',
            'Core Web Vitals Optimization',
            'Keyword and Search Intent Mapping',
            'On-Page Metadata Optimization',
            'JSON-LD Schema Markup Implementation',
            'Internal Linking Architecture',
            'Google Search Console Optimization',
            'Competitor Organic Gap Analysis',
            'Canonical and Redirect Hygiene',
            'Organic Search Performance Reporting'
          ],
          longTailKeywords: [
            'technical SEO audit and remediation for Next.js and WordPress',
            'B2B search intent mapping and site architecture planning',
            'on-page SEO optimization for commercial service pages',
            'structured JSON-LD schema implementation for service businesses',
            'internal linking strategy to consolidate keyword cannibalization',
            'sustainable organic search optimization without risky link schemes',
            'Google Search Console indexation and crawl budget diagnostics',
            'technical SEO roadmap before and after website redesign'
          ],
          semanticKeywords: [
            'indexation',
            'canonicalization',
            'XML sitemaps',
            'search intent',
            'topical authority',
            'crawl budget',
            'structured data',
            'organic impressions'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Dependence on paid clicks alone creates permanent acquisition vulnerability whenever auction costs rise. VAIKA GROUP’s SEO & Organic Search Optimization service establishes the technical foundation, keyword-to-URL architecture, on-page precision, and authority roadmap required to capture compounding high-intent search demand.',
            'Many corporate websites suffer from silent structural defects: orphan pages, keyword cannibalization across near-duplicate URLs, slow rendering scripts, missing canonical tags, and weak semantic hierarchy. Rather than chasing vanity traffic or brittle shortcuts, we resolve underlying crawl and indexation friction while optimizing commercial landing pages around actual buyer search intent.',
            'Working inside Google Search Console, Google Analytics 4, and clean semantic HTML/CMS setups (including Next.js, WordPress, Shopify, and Webflow), we align technical engineers, copywriters, and UX architects around clear organic visibility goals.'
          ],
          includes: [
            'Full technical SEO audit (crawlability, indexation, XML sitemaps, robots.txt, canonicals)',
            'Core Web Vitals and page-speed bottleneck diagnostics',
            'Commercial keyword research and page-by-page search intent mapping',
            'On-page optimization (title tags, meta descriptions, H1–H3 hierarchy, image alt attributes)',
            'Internal linking architecture and anchor-text rationalization',
            'Structured JSON-LD schema design (Organization, Service, BreadcrumbList, FAQPage)',
            'Competitor organic content & backlink gap diagnostics',
            'Monthly Google Search Console impression, click, and ranking movement reporting'
          ],
          optionalAddOns: [
            'Long-form SEO blog and topic-cluster article production (Service 09)',
            'Deep commercial page conversion copywriting (Service 10)',
            'Code-level frontend speed refactoring in Next.js or WordPress (Service 13)'
          ],
          processSteps: [
            {
              title: 'Technical Crawl & Indexation Audit',
              description: 'Inspect site architecture, Google Search Console indexing reports, status codes, redirect chains, canonical tags, and Core Web Vitals to isolate technical blockers.'
            },
            {
              title: 'Keyword Research & Search Intent Mapping',
              description: 'Cluster high-intent commercial, informational, and local search queries, mapping one primary theme per URL to prevent internal keyword cannibalization.'
            },
            {
              title: 'Technical Remediation Roadmap',
              description: 'Prioritize high-impact fixes—such as sitemap cleanup, broken link resolution, semantic tag structure, and rendering improvements—with clear developer tickets.'
            },
            {
              title: 'On-Page Structure & Metadata Optimization',
              description: 'Refine URL slugs, title tags, meta descriptions, H1/H2 headers, and image alt attributes across core service and commercial landing pages.'
            },
            {
              title: 'Structured Data (JSON-LD) Implementation',
              description: 'Author valid schema markup (`Service`, `BreadcrumbList`, `FAQPage`, `Organization`) to clarify entities cleanly for search crawlers.'
            },
            {
              title: 'Internal Linking & Hub Consolidation',
              description: 'Connect parent division hubs, child service pages, and supporting articles through contextual internal links that distribute authority clearly.'
            },
            {
              title: 'Authority & Off-Page Strategy Alignment',
              description: 'Analyze competitor referring-domain gaps and define white-hat digital PR, directory, and linkable-asset recommendations without manipulative link schemes.'
            },
            {
              title: 'Search Telemetry Monitoring & Iteration',
              description: 'Track impressions, click-through rates, indexed page health, and query shifts in Google Search Console, iterating weak titles and page sections over time.'
            }
          ],
          problemSolved:
            'Eliminates hidden technical crawl barriers, messy URL overlaps, and under-optimized commercial pages that prevent websites from earning qualified organic search traffic.',
          deliverables: [
            'Technical SEO & Indexation Audit Document',
            'Keyword-to-URL Search Intent Map',
            'On-Page Metadata & Heading Optimization Specs',
            'Validated JSON-LD Schema Templates & Monthly Search Performance Report'
          ],
          platformsTools: [
            'Google Search Console',
            'Google Analytics 4',
            'PageSpeed Insights / Lighthouse',
            'Schema Markup Validator',
            'WordPress / Shopify / Webflow / Next.js CMS environments'
          ],
          applications: [
            'B2B Enterprises & Agencies',
            'SaaS Platforms',
            'E-commerce Storefronts',
            'Real Estate Portals & Brokerages',
            'Professional Service Providers'
          ],
          qaApproach:
            'All metadata updates, canonical links, redirect maps, and JSON-LD payloads undergo pre-deployment validation checks so search engine indexation remains intact after every release.',
          imageAlt: 'Technical SEO audit dashboard showing indexation health and structured data validation',
          recommendedInternalLinks: [
            { label: 'Local SEO & Google Business Profile Management', href: '/services/digital-marketing/local-seo-google-business-profile' },
            { label: 'Blog Writing & SEO Content Development', href: '/services/digital-marketing/blog-writing-seo-content' },
            { label: 'Website Development & Engineering', href: '/services/digital-marketing/website-development-engineering' }
          ],
          faqs: [
            {
              question: 'What is included in your SEO service compared to Blog Writing?',
              answer: 'Service 06 covers technical SEO, site architecture, keyword-to-URL mapping, on-page metadata, internal linking, schema markup, and performance tracking. Ongoing long-form blog articles are delivered under Service 09 (Blog Writing & SEO Content Development).'
            },
            {
              question: 'Does this service include paid link buying or guaranteed #1 rankings?',
              answer: 'No. We never purchase artificial links or guarantee specific search engine positions, as search algorithms are controlled by third parties. We deliver white-hat technical engineering, intent alignment, and sustainable authority strategy.'
            },
            {
              question: 'Can you implement technical SEO directly on Next.js, WordPress, or Shopify?',
              answer: 'Yes. We provide implementation-ready pull requests, CMS updates, or precise developer specifications depending on your codebase and access preference.'
            },
            {
              question: 'How long does SEO typically take to show measurable movement?',
              answer: 'Technical fixes improve crawl efficiency promptly, while competitive keyword ranking gains generally compound over 3 to 6 months depending on domain history and content execution.'
            },
            {
              question: 'Do you help with SEO during a website migration or redesign?',
              answer: 'Yes. We prepare full URL redirect maps, staging crawl checks, and post-launch Search Console monitoring so traffic equity is preserved during launches.'
            }
          ],
          badge: 'Technical & On-Page'
        },
        {
          id: 'local-seo-google-business-profile',
          name: 'Local SEO & Google Business Profile Management',
          slug: 'local-seo-google-business-profile',
          detailRoute: '/services/digital-marketing/local-seo-google-business-profile',
          category: 'Digital Advertising & Growth',
          divisionKey: 'digital-marketing',
          originalServices: ['Google Business Profile Optimization'],
          tagline: 'Google Business Profile accuracy, category strategy, NAP consistency, and local map visibility management.',
          explanation:
            'Dedicated local search optimization focused on Google Business Profile setup and refinement, service-area and category structuring, Name/Address/Phone (NAP) citation consistency, Google Posts, photo curation, and review workflow setup.',
          h1Heading: 'Local SEO & Google Business Profile Management',
          suggestedH2s: [
            'Strengthening Regional Discovery on Google Maps & Local Search',
            'Step-by-Step Local SEO & GBP Optimization Workflow',
            'Profile Optimization, Citations & Review Enablement',
            'Deliverables, Supported Platforms & Buyer Questions'
          ],
          seoTitle: 'Local SEO & Google Business Profile Services | VAIKA',
          metaDescription:
            'Google Business Profile optimization and local SEO services. Category setup, NAP citation consistency, Google Updates, and local map visibility management.',
          primaryKeywords: [
            'Google Business Profile Optimization',
            'Local SEO Management Services',
            'Google Maps Local Search Optimization',
            'Multi-Location GBP Management'
          ],
          secondaryKeywords: [
            'Google My Business Profile Audit',
            'Local Business Category Selection',
            'NAP Citation Consistency Audit',
            'Service-Area Business SEO',
            'Google Business Profile Posts',
            'Local Review Request Workflow',
            'LocalBusiness Schema Markup',
            'Geo-Relevant Visual Asset Uploads',
            'Map Visibility Performance Tracking',
            'Suspension Recovery Guidance'
          ],
          longTailKeywords: [
            'Google Business Profile optimization for real estate and service companies',
            'local SEO management for single and multi-location businesses',
            'NAP citation cleanup and directory consistency audit service',
            'Google Business Profile categories products and services setup',
            'ongoing Google Business Profile posts and review response workflow',
            'local search optimization connecting GBP with location landing pages',
            'Google Maps optimization for regional commercial contractors',
            'structured client review request system for Google Business Profile'
          ],
          semanticKeywords: [
            'local pack',
            'NAP consistency',
            'primary category',
            'service area',
            'local citations',
            'Q&A moderation',
            'call clicks',
            'direction requests'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'For regional offices, real estate brokerages, healthcare clinics, and commercial service firms, high-intent buyers frequently discover providers directly on Google Maps before ever visiting a homepage. VAIKA GROUP’s Local SEO & Google Business Profile Management service ensures your business profile is complete, policy-compliant, consistently cited across the web, and aligned with local search behavior.',
            'Incomplete profiles, mismatched Name-Address-Phone (NAP) details across directories, poorly chosen categories, and neglected Q&A sections quietly depress local map visibility and cost inbound calls. We systematically audit your business information, select accurate primary and secondary categories, build out native services and products menus, and synchronize website location pages with LocalBusiness schema.',
            'Because Google enforces strict profile guidelines, our workflows emphasize verifiable accuracy, authentic visual documentation, structured review generation links, and ongoing GBP updates—building durable regional credibility without risky policy violations.'
          ],
          includes: [
            'Complete Google Business Profile audit and policy compliance verification',
            'Strategic primary and secondary category research against regional competitors',
            'Native GBP Services, Products, business attributes, and hours configuration',
            'Name, Address, Phone (NAP) and core directory citation consistency audit',
            'Curated high-resolution brand, office, and service imagery organization',
            'Monthly Google Business Profile Updates/Posts and Q&A monitoring',
            'Direct customer review link setup and approved review-response templates',
            'Alignment between GBP landing URLs, UTM tracking, and LocalBusiness JSON-LD schema'
          ],
          optionalAddOns: [
            'Dedicated city/location landing page copywriting & builds (Services 10 & 13)',
            'Paid Local / Meta geographic awareness campaigns (Service 05)'
          ],
          processSteps: [
            {
              title: 'GBP & Local Presence Audit',
              description: 'Review your existing Google Business Profile ownership status, categories, duplicate listings, website link hygiene, and Google guideline compliance.'
            },
            {
              title: 'Category & Keyword Alignment',
              description: 'Evaluate top regional map listings to select the most accurate primary category, secondary categories, and structured service descriptions.'
            },
            {
              title: 'Profile Information & Attributes Overhaul',
              description: 'Rewrite the business description naturally, verify service areas, configure opening hours/attributes, and add UTM tags to website and appointment URLs.'
            },
            {
              title: 'NAP Citation Audit & Standardization',
              description: 'Compare Name, Address, Phone, and URL records across major regional and industry directories to flag and remediate inconsistencies.'
            },
            {
              title: 'Visual Assets & Service Catalog Upload',
              description: 'Upload crisp exterior, interior, team, and work-showcase imagery alongside detailed service/product entries inside Google Business Profile.'
            },
            {
              title: 'Review Link & Response Workflow Setup',
              description: 'Configure shareable Google review request links for your client onboarding/offboarding touchpoints and establish on-brand review reply templates.'
            },
            {
              title: 'Ongoing GBP Updates & Insights Reporting',
              description: 'Publish timely Google Updates/offers, monitor Q&A entries, and report monthly on profile views, website clicks, call clicks, and direction requests.'
            }
          ],
          problemSolved:
            'Eliminates incomplete Google Business Profiles, inconsistent directory NAP data, and neglected local listings that lose nearby inbound calls and inquiries to competitors.',
          deliverables: [
            'Fully optimized and verified Google Business Profile configuration',
            'NAP Citation Audit & Remediation Tracker',
            'Review Request Link Kit & Approved Reply Playbook',
            'Monthly Local Search Insights & Action Summary'
          ],
          platformsTools: [
            'Google Business Profile Manager',
            'Google Maps',
            'Google Search Console',
            'Google Analytics 4 (GBP UTM tracking)',
            'Schema Markup Validator (LocalBusiness JSON-LD)'
          ],
          applications: [
            'Real Estate Brokerages & Property Offices',
            'Local & Regional Service Contractors',
            'Clinics, Legal & Accounting Practices',
            'Multi-Location Retail & Hospitality Brands',
            'Architecture & Design Studios'
          ],
          qaApproach:
            'Every edit adheres strictly to Google Business Profile representation policies—verifying accurate naming (no keyword stuffing in business titles), consistent NAP formatting, and clean UTM parameter tracking.',
          imageAlt: 'Google Business Profile optimization dashboard showing map visibility and local calls',
          recommendedInternalLinks: [
            { label: 'SEO & Organic Search Optimization', href: '/services/digital-marketing/seo-organic-search-optimization' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Social Media Posting & Community Management', href: '/services/digital-marketing/social-media-posting-community-management' }
          ],
          faqs: [
            {
              question: 'Can you work on an unverified or newly created Google Business Profile?',
              answer: 'Yes. We guide your team through Google’s verification requirements (video, postcard, or phone verification must be completed by an authorized business representative) and configure the full profile once verified.'
            },
            {
              question: 'Do you manage multiple office or branch locations?',
              answer: 'Yes. We structure location groups cleanly inside Google Business Profile Manager, ensuring each branch connects to its own dedicated local landing page.'
            },
            {
              question: 'Are fake reviews or paid review services included?',
              answer: 'Never. Buying or fabricating reviews violates platform policies and risks profile suspension. We build authentic customer review-request workflows and professional response processes.'
            },
            {
              question: 'Do you guarantee a top-3 Map Pack ranking?',
              answer: 'No. Map Pack visibility depends on proximity, relevance, prominence, and competitor activity. We ensure your technical and profile signals are thoroughly optimized for regional discovery.'
            },
            {
              question: 'What details do we need to get started?',
              answer: 'You provide Manager access to your Google Business Profile, exact legal/DBA business details, service areas, hours, and high-resolution authentic photos of your office, team, or work.'
            }
          ],
          badge: 'Local Search'
        },
        {
          id: 'email-marketing-newsletter-automation',
          name: 'Email Marketing & Newsletter Automation',
          slug: 'email-marketing-newsletter-automation',
          detailRoute: '/services/digital-marketing/email-marketing-newsletter-automation',
          category: 'Digital Advertising & Growth',
          divisionKey: 'digital-marketing',
          originalServices: ['Email Marketing', 'Email Newsletters'],
          tagline: 'Automated lifecycle sequences, recurring editorial newsletters, segmentation, and deliverability hygiene.',
          explanation:
            'Unified lifecycle email automation and broadcast newsletter production inside Mailchimp, Brevo, Klaviyo, or ActiveCampaign—covering welcome sequences, lead nurture, abandoned-cart/post-purchase flows, recurring newsletters, and sender domain hygiene.',
          h1Heading: 'Email Marketing & Newsletter Automation Services',
          suggestedH2s: [
            'Automated Lifecycle Flows & High-Engagement Broadcast Newsletters',
            'Email Engineering Process From Deliverability Setup to A/B Optimization',
            'Segmentation, Design & Lifecycle Capabilities',
            'Supported ESPs, Deliverables & FAQs'
          ],
          seoTitle: 'Email Marketing & Newsletter Automation | VAIKA',
          metaDescription:
            'B2B and e-commerce email marketing and newsletter automation services. Lifecycle flows, editorial broadcasts, responsive templates, and deliverability hygiene.',
          primaryKeywords: [
            'Email Marketing Automation Services',
            'B2B Newsletter Production Services',
            'Lifecycle Email Flow Setup',
            'Email Campaign Management Agency'
          ],
          secondaryKeywords: [
            'Klaviyo and Mailchimp Automation',
            'Brevo Email Marketing Setup',
            'Weekly Email Newsletter Design',
            'Welcome and Onboarding Email Sequences',
            'Cart Abandonment Email Flows',
            'Email List Segmentation Strategy',
            'SPF DKIM DMARC Deliverability Audit',
            'Responsive HTML Email Templates',
            'Subscriber List Hygiene Management',
            'Subject Line A/B Testing'
          ],
          longTailKeywords: [
            'outsourced B2B newsletter writing design and scheduling service',
            'automated email marketing flows for SaaS onboarding and e-commerce',
            'email deliverability audit with SPF DKIM and DMARC alignment',
            'Mailchimp and Brevo campaign setup and audience segmentation',
            'post-purchase and win-back email sequence copywriting and setup',
            'custom branded email newsletter template design in Figma',
            'email list cleaning and re-engagement campaign management',
            'recurring monthly email marketing retainer for service businesses'
          ],
          semanticKeywords: [
            'sender reputation',
            'lifecycle triggers',
            'behavioral segmentation',
            'open-rate hygiene',
            'click-to-open rate',
            'SPF/DKIM/DMARC',
            'unsubscribe compliance',
            'nurture cadence'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Unlike rented social feeds or rising paid search auctions, your subscriber list is a direct, owned communication channel. VAIKA GROUP’s Email Marketing & Newsletter Automation service unifies automated behavioral lifecycle flows with recurring editorial newsletters so prospective buyers are nurtured consistently and existing clients remain engaged.',
            'Many companies collect contacts through website forms or checkouts yet send erratic, unsegmented blasts—or leave domain authentication misconfigured so emails land in spam folders. We resolve both challenges by aligning DNS authentication (SPF, DKIM, DMARC), structuring clean audience segments, designing responsive templates, and building ongoing send calendars.',
            'Whether deploying onboarding sequences for a SaaS platform inside Brevo/ActiveCampaign, abandoned-checkout recovery in Klaviyo, or curated monthly B2B insights inside Mailchimp, every workflow prioritizes consent compliance, crisp readability on mobile mail clients, and clear single-goal calls to action.'
          ],
          includes: [
            'ESP account audit and sender authentication review (SPF, DKIM, DMARC guidance)',
            'Automated lifecycle flow architecture (Welcome, Lead Nurture, Onboarding, Cart/Browse Recovery, Win-Back)',
            'Weekly, bi-weekly, or monthly editorial email newsletter copywriting and design',
            'Responsive modular email template systems tested across desktop and mobile dark/light modes',
            'Behavioral and demographic audience segmentation & suppression rules',
            'List hygiene workflows (re-engagement passes and sunsetting inactive contacts)',
            'A/B testing across subject lines, preview text, send windows, and CTA blocks',
            'Post-send analytics covering delivery rate, CTR, unsubscribes, and flow-attributed conversions'
          ],
          optionalAddOns: [
            'Monthly ESP platform subscription fees (owned and billed directly on client accounts)',
            'Custom lead-magnet landing pages & form UI builds (Services 10, 12 & 13)'
          ],
          processSteps: [
            {
              title: 'ESP, List & Deliverability Audit',
              description: 'Review your Mailchimp, Brevo, Klaviyo, or ActiveCampaign setup, check SPF/DKIM/DMARC records, evaluate bounce/complaint rates, and audit existing sign-up forms.'
            },
            {
              title: 'Lifecycle & Newsletter Roadmap',
              description: 'Map behavioral triggers for automated flows alongside a recurring editorial calendar for broadcast newsletters tied to business launches and content.'
            },
            {
              title: 'Audience Segmentation & List Hygiene',
              description: 'Structure dynamic segments (new leads, active buyers, dormant subscribers) and clean high-risk unengaged records to protect domain sender reputation.'
            },
            {
              title: 'Modular Template Architecture',
              description: 'Design on-brand, mobile-responsive email components in Figma and build clean HTML/drag-and-drop master templates inside your ESP.'
            },
            {
              title: 'Copywriting & Visual Assembly',
              description: 'Draft focused subject lines, preview text, scannable body copy, and clear CTA buttons for each newsletter issue and automated sequence email.'
            },
            {
              title: 'Flow Logic, Trigger & Link QA',
              description: 'Test conditional splits, time delays, personalization fallbacks, UTM tracking parameters, and cross-client inbox rendering before activation.'
            },
            {
              title: 'Launch, A/B Testing & Reporting',
              description: 'Activate flows and scheduled broadcasts, run controlled subject-line or CTA split tests, and deliver monthly engagement and deliverability summaries.'
            }
          ],
          problemSolved:
            'Turns neglected subscriber lists and generic email blasts into reliable automated nurture sequences and readable newsletters with protected inbox deliverability.',
          deliverables: [
            'Deliverability & Segmentation Audit Summary',
            'Reusable modular Email Template suite inside client ESP',
            'Live automated lifecycle email workflows',
            'Scheduled editorial newsletter broadcasts & monthly engagement reports'
          ],
          platformsTools: [
            'Mailchimp',
            'Brevo',
            'Klaviyo',
            'ActiveCampaign',
            'HubSpot Email (client-licensed)',
            'Figma (template UI design)',
            'Google Analytics 4 (UTM tracking)'
          ],
          applications: [
            'E-commerce & DTC Stores',
            'SaaS & Software Businesses',
            'B2B Agencies & Consultancies',
            'Real Estate Brokerages & Investor Lists',
            'Media & Creator-Led Businesses'
          ],
          qaApproach:
            'Every broadcast and automated flow step goes through live inbox test sends checking broken links, alt text, personalization fallback tokens, mobile stacking, and CAN-SPAM / GDPR unsubscribe placement.',
          imageAlt: 'Automated email lifecycle flow diagram and responsive newsletter template preview',
          recommendedInternalLinks: [
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Blog Writing & SEO Content Development', href: '/services/digital-marketing/blog-writing-seo-content' },
            { label: 'Meta Advertising & Paid Campaign Management', href: '/services/digital-marketing/meta-advertising-campaign-management' }
          ],
          faqs: [
            {
              question: 'Which email marketing platforms do you work with?',
              answer: 'We regularly work inside Mailchimp, Brevo, Klaviyo, ActiveCampaign, and similar client-owned ESPs.'
            },
            {
              question: 'Does this cover both automated email sequences and regular newsletters?',
              answer: 'Yes. This consolidated service integrates lifecycle automations (Welcome, Lead Nurture, Post-Purchase, Win-Back) with recurring weekly or monthly editorial broadcasts.'
            },
            {
              question: 'Do you help fix emails landing in spam folders?',
              answer: 'Yes. We audit domain DNS alignment (SPF, DKIM, DMARC), clean unengaged subscriber segments, improve text-to-image balance, and institute sunset policies to restore sender reputation.'
            },
            {
              question: 'Do you provide or sell email lists?',
              answer: 'No. We work exclusively with permission-based, opt-in subscriber lists owned by your organization.'
            },
            {
              question: 'What does our team need to supply each month for newsletters?',
              answer: 'A brief sync on upcoming announcements, offers, blog articles, or case updates—we handle topic structuring, drafting, layout formatting, testing, and scheduling.'
            }
          ],
          badge: 'Lifecycle & Broadcasts'
        }
      ]
    },
    {
      id: 'content-branding-web',
      title: 'Category C: Content, Branding & Web Development',
      description: 'SEO blog development, website & social copywriting, brand identity & logo systems, web/app UI/UX design in Figma, and custom frontend engineering.',
      services: [
        {
          id: 'blog-writing-seo-content',
          name: 'Blog Writing & SEO Content Development',
          slug: 'blog-writing-seo-content',
          detailRoute: '/services/digital-marketing/blog-writing-seo-content',
          category: 'Content, Branding & Web Development',
          divisionKey: 'digital-marketing',
          originalServices: ['Blog Writing'],
          tagline: 'Search-intent researched long-form articles, guides, and topic clusters written for human readers and search engines.',
          explanation:
            'Research-backed B2B and niche blog writing designed to answer real buyer questions, build topical depth around commercial service hubs, and deliver CMS-ready articles with structured headings, internal links, and metadata.',
          h1Heading: 'Blog Writing & SEO Content Development Services',
          suggestedH2s: [
            'Search-Aligned Editorial Articles That Build Topical Authority',
            'Editorial Production Process From Keyword Brief to CMS Formatting',
            'Content Types, Formatting & Internal Linking Capabilities',
            'Deliverables, Workflow Tools & Buyer FAQs'
          ],
          seoTitle: 'Blog Writing & SEO Content Development | VAIKA',
          metaDescription:
            'B2B blog writing and SEO content development services. Search-intent briefs, researched long-form articles, internal linking, and CMS-ready formatting.',
          primaryKeywords: [
            'SEO Blog Writing Services',
            'B2B Thought Leadership Content',
            'Long-Form SEO Article Writing',
            'Content Marketing Writing Agency'
          ],
          secondaryKeywords: [
            'Technical B2B Article Writing',
            'SEO Topic Cluster Content',
            'Editorial Content Brief Creation',
            'Search-Intent Blog Optimization',
            'Pillar Page Content Writing',
            'On-Page Blog Metadata',
            'CMS-Ready Markdown Articles',
            'Original Industry Explainers',
            'Comparison and Buyer Guide Writing',
            'Internal Link Anchor Integration'
          ],
          longTailKeywords: [
            'human written B2B SEO blog articles with keyword research',
            'technical SEO blog writing for SaaS and digital agencies',
            'pillar and cluster blog content development strategy',
            'search intent matched long form guides ready for WordPress or Next.js',
            'real estate market and commercial SEO article writing service',
            'monthly editorial blog writing retainer with metadata included',
            'updating and refreshing decaying blog posts for SEO recovery',
            'subject-matter aligned B2B blog content without generic filler'
          ],
          semanticKeywords: [
            'topical depth',
            'heading hierarchy',
            'reader intent',
            'editorial calendar',
            'anchor text',
            'meta description',
            'featured snippet formatting',
            'content refresh'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Thin, generic blog posts fail both discerning B2B decision-makers and modern search quality evaluations. VAIKA GROUP’s Blog Writing & SEO Content Development service creates substantive, clearly structured articles grounded in real subject research, buyer pain points, and explicit search-intent briefs.',
            'Companies frequently publish disconnected articles that neither support commercial service pages nor satisfy reader depth. We fix that by mapping blog topics into structured clusters linked back to your core product and service pages—ensuring every article earns clarity, scannability, and logical internal navigation.',
            'Deliverables arrive cleanly formatted in Google Docs, Markdown/MDX, or staged directly inside WordPress, Shopify, or Webflow drafts complete with SEO title tags, meta descriptions, suggested image alt text, and clean H2/H3 structures.'
          ],
          includes: [
            'Keyword research and SERP search-intent brief prior to drafting',
            'Detailed article outline mapping H1, H2, and H3 logical flow',
            'Research-backed long-form articles (1,200–2,500+ words depending on topic depth)',
            'Natural primary, secondary, and semantic keyword integration',
            'Contextual internal link placements pointing to core commercial URLs',
            'Dedicated SEO title tag, meta description, URL slug, and featured-image alt text',
            'CMS-ready formatting (bulleted takeaways, comparison tables, FAQs)'
          ],
          optionalAddOns: [
            'Bespoke blog header diagrams or infographic illustrations (Service 03 / Design team)',
            'Direct CMS publishing & social promotion snippets (Services 02 & 10)',
            'Comprehensive site-wide technical SEO audits (Service 06)'
          ],
          processSteps: [
            {
              title: 'Topic & Commercial Alignment',
              description: 'Review your target services, buyer objections, and existing site content to prioritize article topics with clear commercial or mid-funnel relevance.'
            },
            {
              title: 'Search Intent & SERP Outline Brief',
              description: 'Analyze live search results for target queries to construct a structured outline detailing audience questions, required subtopics, and target internal links.'
            },
            {
              title: 'Subject Research & Fact Verification',
              description: 'Gather accurate terminology, client product context, and credible reference inputs so articles read like authoritative industry documentation.'
            },
            {
              title: 'Editorial Drafting',
              description: 'Write clear, engaging prose tailored to your brand voice—using concrete examples, clean transitions, and structured frameworks while avoiding generic fluff.'
            },
            {
              title: 'On-Page SEO & Readability Polish',
              description: 'Refine H2/H3 scanability, craft SEO titles and meta descriptions, embed natural anchor links to key service pages, and add FAQ blocks where appropriate.'
            },
            {
              title: 'Editorial & Accuracy QA Review',
              description: 'Run second-pass editing for factual accuracy, originality, grammar, tone consistency, and zero keyword stuffing prior to client review.'
            },
            {
              title: 'Client Sign-Off & CMS-Ready Delivery',
              description: 'Incorporate subject-matter feedback and deliver final articles in Google Docs, Markdown, or staged WordPress/Shopify/Webflow CMS drafts.'
            }
          ],
          problemSolved:
            'Replaces shallow, unreadable filler posts with purposeful, well-structured articles that support organic discovery and educate prospective buyers.',
          deliverables: [
            'Approved SEO Content Briefs & Outlines',
            'Publication-ready long-form Blog Articles (Docs, Markdown, or CMS Drafts)',
            'Complete on-page SEO metadata (Title, Meta Description, Slug, Alt Text, Internal Links)'
          ],
          platformsTools: [
            'Google Search Console insights',
            'Google Docs / Notion',
            'Markdown / MDX workflows',
            'WordPress',
            'Shopify Blog',
            'Webflow CMS'
          ],
          applications: [
            'SaaS & Technology Companies',
            'B2B Agencies & Service Providers',
            'Real Estate & Architecture Firms',
            'E-commerce Brands Seeking Organic Guides',
            'Consultancies & Professional Practices'
          ],
          qaApproach:
            'Every article passes editorial line-editing, originality verification, factual accuracy review against approved client claims, and an on-page SEO hierarchy checklist before delivery.',
          imageAlt: 'Structured SEO blog article outline and CMS publishing workspace',
          recommendedInternalLinks: [
            { label: 'SEO & Organic Search Optimization', href: '/services/digital-marketing/seo-organic-search-optimization' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Email Marketing & Newsletter Automation', href: '/services/digital-marketing/email-marketing-newsletter-automation' }
          ],
          faqs: [
            {
              question: 'How long are the blog articles you write?',
              answer: 'Typical B2B educational and SEO articles range from 1,200 to 2,500+ words, scaled to match what the specific search topic genuinely requires rather than padding arbitrary word counts.'
            },
            {
              question: 'Are articles human-edited and tailored to our industry?',
              answer: 'Yes. Every piece goes through dedicated outlining, brand voice calibration, technical accuracy checks, and human editorial review tailored to your sector.'
            },
            {
              question: 'Do you upload the blogs to our CMS as well?',
              answer: 'We deliver cleanly formatted Google Docs or Markdown by default, and can format and stage drafts directly inside WordPress, Shopify, or Webflow upon request.'
            },
            {
              question: 'Can you refresh or rewrite our older, underperforming blog posts?',
              answer: 'Yes. Content refreshes—updating outdated sections, improving heading structure, and realigning keywords—are regularly handled within this service.'
            },
            {
              question: 'Do you include stock photos or custom graphics?',
              answer: 'Each delivery includes suggested image placements and alt text. Bespoke diagrams or header illustrations can be added alongside our design capabilities.'
            }
          ],
          badge: 'Editorial SEO'
        },
        {
          id: 'website-copywriting-social-content',
          name: 'Website Copywriting & Social Media Content',
          slug: 'website-copywriting-social-content',
          detailRoute: '/services/digital-marketing/website-copywriting-social-content',
          category: 'Content, Branding & Web Development',
          divisionKey: 'digital-marketing',
          originalServices: ['Website Copywriting', 'Social Media Captions'],
          tagline: 'Conversion-focused website messaging paired with cohesive, hook-driven social media caption libraries.',
          explanation:
            'Strategic verbal identity and commercial copywriting across digital touchpoints—crafting homepage, service-page, and landing-page sales copy alongside platform-tailored social media captions.',
          h1Heading: 'Website Copywriting & Social Media Content Services',
          suggestedH2s: [
            'Unified Brand Voice Across Web Pages & Social Feeds',
            'Copywriting Workflow From Buyer Discovery to Wireframe Handoff',
            'Website Conversion Copy & Social Caption Capabilities',
            'Deliverables, Tools & Frequently Asked Questions'
          ],
          seoTitle: 'Website Copywriting & Social Content Services | VAIKA',
          metaDescription:
            'B2B website copywriting and social media caption services. Conversion-focused service pages, landing page messaging, and platform-native social copy.',
          primaryKeywords: [
            'Website Copywriting Services',
            'B2B Conversion Copywriting',
            'Social Media Caption Writing Services',
            'Brand Messaging Copywriter'
          ],
          secondaryKeywords: [
            'Homepage and Service Page Copywriting',
            'SaaS Landing Page Copywriter',
            'Instagram and LinkedIn Caption Copy',
            'Value Proposition Messaging',
            'UX Microcopy and CTA Writing',
            'Carousel Text Condensation',
            'Hashtag and Keyword Integration',
            'About Page Brand Storytelling',
            'Conversion Objection Handling Copy',
            'Cross-Channel Voice Consistency'
          ],
          longTailKeywords: [
            'wireframe ready B2B website copywriting for service pages',
            'conversion focused homepage copywriting for technology companies',
            'monthly batch social media caption writing matched to content calendar',
            'LinkedIn thought leadership post writing and Instagram caption hooks',
            'consistent brand messaging across website and social channels',
            'rewriting confusing corporate website copy for clarity and leads',
            'UX microcopy for web forms pricing tables and buttons',
            'pair website copywriting with Figma UI design handoff'
          ],
          semanticKeywords: [
            'value proposition',
            'first-line hook',
            'feature-to-benefit',
            'UX microcopy',
            'voice matrix',
            'call to action',
            'buyer objections',
            'readability'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'When a visitor clicks from a sharp LinkedIn post onto a vague, jargon-filled homepage, trust fractures immediately. VAIKA GROUP’s Website Copywriting & Social Media Content service brings verbal messaging under one roof—authoring crisp, conversion-focused website copy alongside scroll-stopping social media captions.',
            'Across websites, prospects often leave not because an offer lacks value, but because headlines bury what the company actually does or how to engage next. Meanwhile, on social feeds, thoughtful visuals lose momentum when paired with generic one-line captions lacking hooks, context, or conversation starters.',
            'We structure website pages section-by-section (hero positioning, problem/solution blocks, process explanations, objection FAQs, and CTA microcopy) ready for Figma wireframes or CMS builds, while producing batched social caption libraries formatted for LinkedIn, Instagram, Facebook, and X.'
          ],
          includes: [
            'Homepage, About, Service Page, and Landing Page conversion copywriting',
            'Wireframe-mapped copy deliverables structured for designers and developers',
            'Hero value proposition options, CTA button copy, and form microcopy',
            'Batched monthly Social Media Caption writing tied to visual post/carousel calendars',
            'Platform-native hook crafting (LinkedIn "see more" hooks, Instagram storytelling, X brevity)',
            'Structured mobile readability spacing, hashtag sets, and conversational engagement prompts',
            'Unified verbal tone alignment across web and social touchpoints'
          ],
          optionalAddOns: [
            'Comprehensive Brand Book & Strategic Positioning Workshops (Service 11)',
            'Long-form educational blog articles (Service 09)',
            'Full UI/UX layout design in Figma for written pages (Service 12)'
          ],
          processSteps: [
            {
              title: 'Messaging & Voice Discovery',
              description: 'Audit existing website pages, social captions, competitor positioning, and sales call notes to define exact buyer pain points and voice guardrails.'
            },
            {
              title: 'Information Hierarchy & Section Mapping',
              description: 'Outline page-by-page website sections (or monthly caption themes) so copy resolves buyer questions in a logical sequence before design begins.'
            },
            {
              title: 'Positioning & Hook Exploration',
              description: 'Draft multiple headline and first-line hook directions to confirm clarity and tone alignment with your leadership team early in the cycle.'
            },
            {
              title: 'Website Page Copy Drafting',
              description: 'Write wireframe-ready web copy translating technical features into concrete business outcomes, trust explanations, and friction-free CTAs.'
            },
            {
              title: 'Social Media Caption Batching',
              description: 'Produce platform-adapted captions with clear opening hooks, scannable line spacing, keyword-aware context, curated hashtags, and audience prompts.'
            },
            {
              title: 'Design Collaboration & Character Fit Check',
              description: 'Coordinate with UI/UX or social graphic designers (or your internal team) so text lengths fit cleanly inside responsive layouts and carousel frames.'
            },
            {
              title: 'Revision & Final Messaging Handoff',
              description: 'Execute two structured revision passes and deliver clean Google Docs / Notion tables or direct Figma text-layer updates.'
            }
          ],
          problemSolved:
            'Fixes unclear, jargon-heavy website pages and disconnected social captions by establishing crisp, persuasive messaging across every customer touchpoint.',
          deliverables: [
            'Wireframe-structured Website Copy Documents (page-by-page)',
            'Platform-formatted Social Media Caption Libraries synced to post dates',
            'Short-form CTA, button, and form Microcopy Reference Sheet'
          ],
          platformsTools: [
            'Google Docs / Notion',
            'Figma (copy-to-layout alignment)',
            'Instagram / LinkedIn / Facebook / X caption specs',
            'WordPress / Webflow / Next.js content workflows'
          ],
          applications: [
            'Startups & SaaS Launches',
            'B2B Service & Consulting Firms',
            'Real Estate Developments & Brokerages',
            'E-commerce Brands',
            'Corporate Websites Undergoing Redesign'
          ],
          qaApproach:
            'Every copy document is proofread for grammar, claim accuracy (zero fabricated metrics), character-limit compatibility inside Figma frames, and clear CTA continuity.',
          imageAlt: 'Wireframed website copywriting document alongside platform-tailored social caption library',
          recommendedInternalLinks: [
            { label: 'Website & Application UI/UX Design', href: '/services/digital-marketing/website-application-ui-ux-design' },
            { label: 'Social Media Management & Strategy', href: '/services/digital-marketing/social-media-management-strategy' },
            { label: 'Brand Strategy & Visual Identity Design', href: '/services/digital-marketing/brand-strategy-visual-identity' }
          ],
          faqs: [
            {
              question: 'Should website copywriting happen before or after website UI design?',
              answer: 'Writing copy alongside early wireframes is ideal because layout containers should serve the actual message rather than forcing designers to rely on placeholder Lorem Ipsum.'
            },
            {
              question: 'Can we order Website Copywriting and Social Media Captions separately?',
              answer: 'Yes. While consolidated under one core messaging capability for brand consistency, project scopes can focus strictly on a website build, ongoing social captions, or both.'
            },
            {
              question: 'How do you handle technical or specialized industries?',
              answer: 'We conduct structured intake interviews and review your existing technical documentation, product specs, and sales decks so the copy uses accurate industry language.'
            },
            {
              question: 'Do social media captions vary between LinkedIn and Instagram?',
              answer: 'Yes. Each platform receives tailored hook lengths, formatting breaks, hashtag limits, and calls to action matched to how users read on that network.'
            },
            {
              question: 'How many revision rounds are included?',
              answer: 'Every website and caption deliverable includes structured review and refinement rounds to lock down nuance and factual accuracy.'
            }
          ],
          badge: 'Web & Social Copy'
        },
        {
          id: 'brand-strategy-visual-identity',
          name: 'Brand Strategy & Visual Identity Design',
          slug: 'brand-strategy-visual-identity',
          detailRoute: '/services/digital-marketing/brand-strategy-visual-identity',
          category: 'Content, Branding & Web Development',
          divisionKey: 'digital-marketing',
          originalServices: ['Branding', 'Logo Design'],
          tagline: 'Cohesive brand positioning, verbal/visual architecture, bespoke logomarks, and production-ready brand books.',
          explanation:
            'Comprehensive brand development unifying strategic positioning (mission, audience personas, differentiation, verbal tone) with custom visual identity engineering (primary logos, lockups, typography systems, color tokens, and brand guidelines).',
          h1Heading: 'Brand Strategy & Visual Identity Design Services',
          suggestedH2s: [
            'Strategic Brand Positioning & Custom Logo System Engineering',
            'End-to-End Identity Process From Discovery to Brand Book Handoff',
            'Visual Systems, Vector Deliverables & Guidelines Scope',
            'Tools, Target Businesses & Identity FAQs'
          ],
          seoTitle: 'Brand Strategy & Visual Identity Design | VAIKA',
          metaDescription:
            'B2B brand strategy, visual identity systems, custom logo design, and brand guidelines books built for cohesive digital and print presence.',
          primaryKeywords: [
            'Brand Strategy and Identity Design',
            'Custom Logo Design Services',
            'Corporate Visual Identity Agency',
            'Brand Guidelines Development'
          ],
          secondaryKeywords: [
            'B2B Brand Positioning Strategy',
            'Primary Logomark and Wordmark Design',
            'Brand Book Guidelines PDF',
            'Typography and Color System Design',
            'Visual Rebranding Services',
            'Monogram and Favicon Design',
            'Verbal Identity and Tone Guidelines',
            'Vector Logo Package AI SVG EPS',
            'Startup Brand Foundation Kit',
            'Target Audience Persona Mapping'
          ],
          longTailKeywords: [
            'brand strategy workshop and complete visual identity package',
            'custom minimalist logo design with full vector suite and guidelines',
            'corporate rebranding agency for B2B and technology firms',
            'scalable color palette and typography design system for digital brands',
            'brand book documenting logo clearspace color codes and voice rules',
            'brand identity design before launching new website or ads',
            'real estate development and luxury brand identity system design',
            'logo lockups in horizontal stacked monochrome and dark mode'
          ],
          semanticKeywords: [
            'brand architecture',
            'logomark',
            'wordmark',
            'color tokens',
            'typographic pairing',
            'clearspace rules',
            'brand differentiation',
            'vector scalability'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'A standalone logo without strategic positioning leaves teams guessing how to speak, design ads, or structure web pages; conversely, strategy decks without sharp visual marks never establish instant market recognition. VAIKA GROUP’s Brand Strategy & Visual Identity Design service delivers both together in a single disciplined engagement.',
            'Growing companies frequently outgrow patchwork DIY logos and mismatched marketing collateral, making enterprise buyers question organizational maturity. We rebuild that foundation from the inside out—clarifying your market positioning, value proposition, and buyer archetypes before crafting bespoke geometric or typographic logo systems and visual rules.',
            'Whether launching a new venture or executing a disciplined corporate rebrand, clients receive original vector logo suites (AI, SVG, EPS, PNG), accessible color and type specifications, and a practical Brand Guidelines Book ready to govern websites, social channels, decks, and signage.'
          ],
          includes: [
            'Brand discovery & competitive positioning workshop',
            'Brand positioning statement, core pillars, and target audience profile summary',
            'Verbal identity and tone-of-voice direction guide',
            'Original conceptual logo directions presented with real-world visual mockups',
            'Complete logo suite (Primary Lockup, Stacked/Horizontal variants, Monogram/Submark, Favicon)',
            'Full color, monochrome, and light/dark-mode brand colorways',
            'Curated typography hierarchy and color palette specifications (HEX, RGB, CMYK)',
            'Comprehensive Brand Strategy & Visual Identity Guidelines PDF'
          ],
          optionalAddOns: [
            'Commercial font licensing fees (purchased directly by client for selected paid typefaces)',
            'Collateral extensions: pitch decks, business cards, social kits (Service 03 / custom scope)',
            'Full website UI/UX design applying the new identity (Service 12)'
          ],
          processSteps: [
            {
              title: 'Brand Discovery & Market Audit',
              description: 'Interview stakeholders and analyze competitor visual landscapes to surface positioning gaps, cultural clichés to avoid, and commercial differentiation.'
            },
            {
              title: 'Strategy & Positioning Framework',
              description: 'Define brand essence, core attributes, buyer personas, and verbal tone principles in a clear strategy brief before sketching visuals.'
            },
            {
              title: 'Visual Direction & Moodboarding',
              description: 'Curate distinct aesthetic moodboards exploring typographic tone, spatial rhythm, imagery treatment, and color psychology for stakeholder alignment.'
            },
            {
              title: 'Logo Concept Exploration',
              description: 'Sketch and refine original logomark and wordmark concepts in Adobe Illustrator, presenting 2–3 distinct, thoughtful routes in real-world contexts.'
            },
            {
              title: 'Refinement & Responsive Lockup Engineering',
              description: 'Refine the chosen direction across geometry, optical balance, micro-scale favicon legibility, horizontal/stacked lockups, and dark/light inversions.'
            },
            {
              title: 'Color, Typography & Application System',
              description: 'Lock down primary/accent color tokens (HEX/RGB/CMYK), accessible contrast pairings, and licensed/open-source web and print typography.'
            },
            {
              title: 'Brand Book Assembly & Vector Export',
              description: 'Compile rules on logo clearspace, minimum sizing, misuse examples, and tone into a Brand Guidelines PDF paired with organized vector master files.'
            }
          ],
          problemSolved:
            'Resolves fragmented visual collateral and generic stock branding by equipping teams with a distinctive logo suite and practical identity rulebook.',
          deliverables: [
            'Brand Strategy & Positioning Document',
            'Master Vector Logo Suite (AI, EPS, SVG, high-res transparent PNG)',
            'Favicon & Social Avatar Asset Pack',
            'Complete Visual & Verbal Brand Guidelines PDF'
          ],
          platformsTools: [
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Figma (brand tokens & digital guideline libraries)',
            'CMYK & sRGB digital/print color specifications'
          ],
          applications: [
            'Early-Stage & Funded Startups',
            'Rebranding B2B & SaaS Companies',
            'Real Estate Developments & Brokerages',
            'E-commerce & Consumer Product Labels',
            'Architecture & Professional Advisory Practices'
          ],
          qaApproach:
            'Every final logomark is tested for geometric path cleanliness in vector outlines, black-and-white single-color legibility, micro-scale 16px favicon clarity, and WCAG color contrast accessibility.',
          imageAlt: 'Bespoke vector logo construction grid, color tokens, and brand identity guidelines layout',
          recommendedInternalLinks: [
            { label: 'Website & Application UI/UX Design', href: '/services/digital-marketing/website-application-ui-ux-design' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Social Media Graphic & Carousel Design', href: '/services/digital-marketing/social-media-graphic-carousel-design' }
          ],
          faqs: [
            {
              question: 'Are trademarks or legal brand clearances included?',
              answer: 'We create original, custom-drawn brand marks and never reuse stock logo icons. However, formal trademark searches and legal registration must be completed by your intellectual property attorney.'
            },
            {
              question: 'Do we receive full editable vector source files?',
              answer: 'Yes. Upon final approval, you receive complete vector master files (AI, SVG, EPS) alongside transparent PNGs and a structured Brand Guidelines PDF.'
            },
            {
              question: 'Can we book Brand Strategy or Logo Design individually if we already have one half?',
              answer: 'Yes. While pairing strategy and visual design produces the strongest outcome, scopes can be calibrated for a logo-system refresh or standalone strategy guidelines.'
            },
            {
              question: 'Are paid font licenses included in the design fee?',
              answer: 'We recommend high-craft free/Google Fonts or commercial typefaces matched to your budget; any paid commercial font licenses are acquired directly under your company name.'
            },
            {
              question: 'How long does a full Brand Strategy & Identity engagement take?',
              answer: 'Typical projects run 3 to 5 weeks across discovery, concept presentation, refinement, and final brand book packaging.'
            }
          ],
          badge: 'Identity & Logo'
        },
        {
          id: 'website-application-ui-ux-design',
          name: 'Website & Application UI/UX Design',
          slug: 'website-application-ui-ux-design',
          detailRoute: '/services/digital-marketing/website-application-ui-ux-design',
          category: 'Content, Branding & Web Development',
          divisionKey: 'digital-marketing',
          originalServices: ['Website Design', 'UI/UX Design for Websites', 'UI/UX Design for Applications'],
          tagline: 'Figma interface architecture, UX user flows, conversion wireframes, SaaS dashboards, and developer-ready design systems.',
          explanation:
            'End-to-end digital product and web UI/UX design in Figma: uniting marketing website visual design, conversion-focused website UX architecture, and complex web/mobile application interfaces under scalable component systems.',
          h1Heading: 'Website & Application UI/UX Design Services',
          suggestedH2s: [
            'Bespoke Web Design, Conversion UX Architecture & Application Interfaces',
            'Figma Design Workflow From Information Architecture to Developer Handoff',
            'Design System, Prototyping & Responsive Capabilities',
            'Deliverables, Tech Handoff Standards & FAQs'
          ],
          seoTitle: 'Website & Application UI/UX Design | VAIKA',
          metaDescription:
            'Figma UI/UX design services for websites, SaaS dashboards, and mobile apps. Wireframing, conversion UX flows, design systems, and developer handoff specs.',
          primaryKeywords: [
            'Website UI UX Design Services',
            'SaaS Application UI Design',
            'Figma Web and App Design Agency',
            'UX Architecture and Prototyping'
          ],
          secondaryKeywords: [
            'Bespoke Corporate Website Design',
            'Web App Dashboard UI Design',
            'iOS and Android Mobile App UI',
            'UX Wireframing and Sitemaps',
            'Conversion Rate Focused UX Flows',
            'Figma Design System and Tokens',
            'Interactive Clickable Prototypes',
            'Responsive Breakpoint UI Mockups',
            'SaaS Onboarding Flow UX Design',
            'Developer Handoff Design Specs'
          ],
          longTailKeywords: [
            'custom Figma website UI design for B2B and luxury brands',
            'SaaS dashboard UI UX design with reusable component library',
            'UX audit and checkout or signup flow friction reduction',
            'mobile app UI UX design with empty loading and error states',
            'responsive desktop tablet mobile website mockups in Figma',
            'interactive Figma prototype before custom Next.js development',
            'scalable design system with color typography and spacing tokens',
            'redesigning legacy software interface for modern product usability'
          ],
          semanticKeywords: [
            'information architecture',
            'user journey',
            'wireframes',
            'auto-layout',
            'design tokens',
            'component variants',
            'usability heuristics',
            'responsive grid'
          ],
          searchIntent: 'Commercial',
          overviewParagraphs: [
            'Digital products and corporate websites fail when visual polish and usability engineering operate in silos. VAIKA GROUP’s Website & Application UI/UX Design service combines editorial-caliber interface aesthetics with disciplined user experience architecture inside Figma—covering corporate marketing sites, high-conversion landing funnels, SaaS dashboards, and mobile applications.',
            'Visitors abandon poorly structured websites within seconds, while software users churn when onboarding flows, tables, or settings panels feel confusing. Our designers resolve friction across both fronts: mapping sitemaps, user journeys, and low-fidelity wireframes first before layering refined typography, interactive prototypes, and comprehensive atomic component systems.',
            'Every interface is constructed with Figma Auto Layout, reusable component variants, explicit edge states (loading, empty, error, modal states), and responsive desktop/tablet/mobile breakpoints so engineering teams receive unambiguous specifications ready for Next.js, React, Webflow, or native builds.'
          ],
          includes: [
            'Information architecture, sitemaps, and end-to-end user flow diagrams',
            'Usability heuristic evaluation and conversion-funnel friction remediation',
            'Low-fidelity structural wireframes for websites and software screens',
            'Bespoke high-fidelity Website UI design across desktop, tablet, and mobile breakpoints',
            'Application & SaaS UI/UX design (dashboards, data tables, onboarding, settings, modals)',
            'Explicit UI edge states (empty states, skeleton/loading states, validation errors)',
            'Modular Figma Design System (color/type tokens, button/input variants, Auto Layout)',
            'Interactive clickable Figma prototypes and clean developer handoff annotations'
          ],
          optionalAddOns: [
            'Production frontend and CMS implementation (Service 13: Website Development & Engineering)',
            'Live user research interviews or moderated usability testing panels (scoped separately)',
            'Conversion-focused page copywriting prior to high-fidelity layout (Service 10)'
          ],
          processSteps: [
            {
              title: 'Product / Funnel Discovery & UX Audit',
              description: 'Review business goals, user personas, existing site analytics or product screens, and key conversion tasks to pinpoint usability bottlenecks.'
            },
            {
              title: 'Information Architecture & User Flows',
              description: 'Map navigation trees, critical conversion journeys, and multi-step app state flows so every screen has an unmistakable purpose.'
            },
            {
              title: 'Wireframing & Layout Hierarchy',
              description: 'Build clean structural wireframes establishing content priority, CTA placement, and responsive column behavior prior to visual styling.'
            },
            {
              title: 'Visual Exploration & UI Direction',
              description: 'Design 1–2 flagship screens establishing typography scale, surface contrast, grid geometry, and interactive aesthetic direction in Figma.'
            },
            {
              title: 'Full Screen & Component System Execution',
              description: 'Expand approved visual direction across all website pages or application modules using Figma Auto Layout, design tokens, and reusable component states.'
            },
            {
              title: 'Responsive Breakpoints & Edge States',
              description: 'Design mobile/tablet adaptations alongside interactive hover/focus states, form errors, empty data views, and modal overlays.'
            },
            {
              title: 'Interactive Prototyping & Stakeholder Review',
              description: 'Wire clickable navigation prototypes for realistic click-through testing and execute structured stakeholder feedback revisions.'
            },
            {
              title: 'Developer Handoff Packaging',
              description: 'Organize Figma files with clean layer naming, spacing specs, exported SVG assets, and interaction notes ready for engineering.'
            }
          ],
          problemSolved:
            'Eliminates confusing navigation, high bounce rates, and disjointed software interfaces while preventing costly developer rework through developer-ready Figma specifications.',
          deliverables: [
            'Sitemap, User Flow & Wireframe Documentation',
            'Complete High-Fidelity Figma Design File (Desktop, Tablet, Mobile / App views)',
            'Reusable Figma Design System & Component Library',
            'Clickable Interactive Prototype & Developer Handoff Specs'
          ],
          platformsTools: [
            'Figma (Auto Layout, Variables/Tokens, Prototyping)',
            'FigJam (User Flows & Architecture)',
            'Adobe Photoshop / Illustrator (supporting graphic/icon prep)',
            'WCAG accessibility contrast checkers'
          ],
          applications: [
            'SaaS & Web Application Teams',
            'B2B Technology & AI Companies',
            'Luxury Real Estate & Architectural Brands',
            'High-Growth E-commerce Storefronts',
            'Mobile App Startups (iOS / Android UI)'
          ],
          qaApproach:
            'All Figma handoffs undergo consistency audits checking design token usage, WCAG contrast compliance, complete interactive component states, and responsive mobile overflow checks.',
          imageAlt: 'High-fidelity Figma website and SaaS application dashboard design system',
          recommendedInternalLinks: [
            { label: 'Website Development & Engineering', href: '/services/digital-marketing/website-development-engineering' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' },
            { label: 'Brand Strategy & Visual Identity Design', href: '/services/digital-marketing/brand-strategy-visual-identity' }
          ],
          faqs: [
            {
              question: 'Can we engage you solely for Website UI design, or only Application UI/UX?',
              answer: 'Yes. This service encompasses marketing website UI, conversion UX architecture, and SaaS/mobile application interfaces, and every engagement is scoped to the exact screens and flows your team needs.'
            },
            {
              question: 'Are Figma designs built ready for our own internal engineering team?',
              answer: 'Yes. We organize clean Auto Layout frames, component variants, spacing tokens, and asset exports so any frontend engineer can inspect and build directly—or hand directly to our Website Development team (Service 13).'
            },
            {
              question: 'Do you design mobile responsive versions as well as desktop?',
              answer: 'Yes. Website scopes include responsive desktop, tablet, and mobile breakpoint designs, and application scopes support web/mobile viewport specs as agreed.'
            },
            {
              question: 'Do you write the website copy as part of UI/UX design?',
              answer: 'Copywriting is scoped separately or bundled via Service 10 (Website Copywriting & Social Media Content) so messaging and UX wireframes stay tightly synchronized.'
            },
            {
              question: 'Does this service include frontend coding or hosting deployment?',
              answer: 'Code engineering and deployment belong to Service 13 (Website Development & Engineering), ensuring clear scope separation between design architecture and production coding.'
            }
          ],
          badge: 'Web & App UI/UX'
        },
        {
          id: 'website-development-engineering',
          name: 'Website Development & Engineering',
          slug: 'website-development-engineering',
          detailRoute: '/services/digital-marketing/website-development-engineering',
          category: 'Content, Branding & Web Development',
          divisionKey: 'digital-marketing',
          originalServices: ['Website Development'],
          tagline: 'Production Next.js, React, Tailwind CSS, Webflow, and CMS engineering built for speed, responsiveness, and SEO hygiene.',
          explanation:
            'Clean, production-grade frontend and CMS web engineering using Next.js, React, TypeScript, Tailwind CSS, Webflow, or WordPress/Shopify templates—featuring semantic SEO markup, accessibility discipline, responsive execution, and CDN deployment.',
          h1Heading: 'Website Development & Engineering Services',
          suggestedH2s: [
            'High-Performance Frontend Engineering & CMS Implementations',
            'Development Lifecycle From Figma Spec to Production Launch',
            'Technical Stack, Animation & Accessibility Capabilities',
            'Deliverables, Deployment Platforms & FAQs'
          ],
          seoTitle: 'Website Development & Engineering Services | VAIKA',
          metaDescription:
            'Custom Next.js, React, TypeScript, and Webflow website development. Responsive layouts, CMS integration, semantic SEO markup, and clean deployment.',
          primaryKeywords: [
            'Next.js Website Development Services',
            'Custom React Web Engineering',
            'Webflow and CMS Development Agency',
            'Performance Web Development'
          ],
          secondaryKeywords: [
            'TypeScript Tailwind CSS Frontend',
            'Figma to Next.js Conversion',
            'SEO-Friendly HTML Architecture',
            'Responsive Cross-Browser Engineering',
            'Headless and WordPress CMS Setup',
            'Interactive Web Motion (Framer Motion / GSAP)',
            'Core Web Vitals Engineering',
            'WCAG Accessible Web Components',
            'Technical Staging and Deployment',
            'Custom Corporate Website Build'
          ],
          longTailKeywords: [
            'Figma to Next.js TypeScript Tailwind CSS development agency',
            'custom B2B marketing website engineering with static prerendering',
            'fast loading corporate website development without heavy page builders',
            'Webflow development from approved Figma design system',
            'interactive B2B agency website with smooth motion and forms',
            'technical SEO metadata schema and sitemap integration in Next.js',
            'responsive web engineering tested across Safari Chrome and mobile',
            'website rebuild migrating bloated legacy site to modern React'
          ],
          semanticKeywords: [
            'semantic HTML',
            'TypeScript safety',
            'static generation',
            'Core Web Vitals',
            'responsive CSS',
            'CMS collections',
            'SSL / CDN deployment',
            'lighthouse diagnostics'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'Even an extraordinary visual design loses impact when slowed by bloated plugins, layout shifts, or broken mobile breakpoints. VAIKA GROUP’s Website Development & Engineering service translates approved Figma systems and content specifications into resilient, fast-loading production websites built on Next.js, React, TypeScript, Tailwind CSS, Webflow, or WordPress/Shopify.',
            'Off-the-shelf multipurpose themes frequently bundle megabytes of unused scripts that hurt page responsiveness, accessibility, and organic crawlability. Our engineers write clean, modular semantic markup with optimized image pipelines, disciplined CSS architectures, structured SEO metadata, and purposeful motion polish.',
            'Every build progresses through strict repository hygiene, staging previews, cross-browser and device QA, analytics/form wiring, and clean deployment on your organization’s hosting environment—leaving your team with maintainable code and clean documentation.'
          ],
          includes: [
            'Pixel-faithful Figma-to-code implementation (Next.js, React, TypeScript, Tailwind CSS, or Webflow)',
            'Responsive layout verification across desktop, laptop, tablet, and mobile viewports',
            'Semantic HTML5 structure, accessible focus/ARIA patterns, and clean heading hierarchy',
            'Performance engineering (next/image optimization, asset sizing, minimal bundle overhead)',
            'Purposeful UI motion and transitions using CSS, Framer Motion, or GSAP where appropriate',
            'CMS setup and structured collection wiring (WordPress, Webflow CMS, or Headless/Markdown)',
            'SEO technical wiring (dynamic metadata, OpenGraph, XML sitemap, robots, JSON-LD hooks)',
            'Contact/lead form integration, GA4 analytics wiring, and production deployment support'
          ],
          optionalAddOns: [
            'Domain registration, hosting, and paid SaaS/CMS platform fees (owned & billed directly by client)',
            'Custom full-stack backend APIs, user authentication, or bespoke database applications (scoped separately)',
            'Preceding UI/UX design in Figma (Service 12) and technical SEO audit (Service 06)'
          ],
          processSteps: [
            {
              title: 'Technical Spec & Stack Confirmation',
              description: 'Audit approved Figma designs, page count, CMS needs, form destinations, and hosting constraints to lock down the optimal stack (Next.js vs. Webflow vs. CMS).'
            },
            {
              title: 'Repository & Design-Token Scaffolding',
              description: 'Initialize version-controlled codebase or project workspace, configuring typography variables, color tokens, grid containers, and shared layout shells.'
            },
            {
              title: 'Core Page & Component Engineering',
              description: 'Build reusable navigation, hero, card, modal, accordion, and form components with strict TypeScript types and responsive breakpoints.'
            },
            {
              title: 'CMS Collections & Content Integration',
              description: 'Wire dynamic service collections, blog schemas, metadata hooks, and approved copy/media assets with next-gen image optimization.'
            },
            {
              title: 'Motion & Interaction Polish',
              description: 'Implement subtle hover states, scroll reveals, and transition timing verified against `prefers-reduced-motion` accessibility standards.'
            },
            {
              title: 'Cross-Browser, Performance & SEO QA',
              description: 'Inspect layouts across Chrome, Safari, Firefox, iOS/Android viewports; run TypeScript/build checks, form submission tests, and Lighthouse performance reviews.'
            },
            {
              title: 'Staging Sign-Off & Production Deployment',
              description: 'Present staging environment for stakeholder QA, finalize DNS/SSL cutover on client hosting (e.g., Vercel / Cloudflare / hosting panel), and hand over repo access.'
            }
          ],
          problemSolved:
            'Eliminates sluggish, brittle template websites by delivering clean, maintainable code engineered for speed, responsive accuracy, and search crawlability.',
          deliverables: [
            'Clean, version-controlled production codebase or Webflow project',
            'Configured CMS collections, forms, and analytics tracking tags',
            'Cross-device QA & Technical Pre-Launch Checklist verification',
            'Live website deployed on client-owned hosting environment'
          ],
          platformsTools: [
            'Next.js (App Router)',
            'React & TypeScript',
            'Tailwind CSS',
            'Webflow',
            'WordPress / Shopify frontend themes',
            'Framer Motion / GSAP',
            'Vercel / Netlify / GitHub'
          ],
          applications: [
            'Digital Agencies & SaaS Flagships',
            'B2B Enterprises & Consultancies',
            'Real Estate Developments & Property Portals',
            'E-commerce Brands',
            'High-Growth Startups Launching New Flagships'
          ],
          qaApproach:
            'Builds must clear strict TypeScript compilation, zero console/hydration errors, responsive mobile testing without horizontal overflow, functional form routing, and clean metadata/sitemap validation prior to launch.',
          imageAlt: 'Modern Next.js and TypeScript web engineering environment deploying responsive code',
          recommendedInternalLinks: [
            { label: 'Website & Application UI/UX Design', href: '/services/digital-marketing/website-application-ui-ux-design' },
            { label: 'SEO & Organic Search Optimization', href: '/services/digital-marketing/seo-organic-search-optimization' },
            { label: 'Website Copywriting & Social Media Content', href: '/services/digital-marketing/website-copywriting-social-content' }
          ],
          faqs: [
            {
              question: 'Can you build from a Figma file our internal designer already created?',
              answer: 'Yes. We frequently engineer websites directly from client-supplied Figma designs, or run UI/UX design first through Service 12.'
            },
            {
              question: 'Which platforms do you develop on—custom Next.js or Webflow/WordPress?',
              answer: 'We engineer custom marketing and flagship sites in Next.js/React/TypeScript with Tailwind CSS, as well as Webflow and WordPress/Shopify depending on your team’s CMS maintenance needs.'
            },
            {
              question: 'Does Website Development include complex backend software or custom SaaS engineering?',
              answer: 'Standard Website Development covers corporate websites, landing systems, CMS blogs, and lead forms. Complex multi-tenant SaaS applications, payment engines, or custom APIs require separate custom software scoping.'
            },
            {
              question: 'Who owns the Git repository, domain, and hosting?',
              answer: 'Your organization owns 100% of the domain, hosting accounts, CMS licenses, and delivered source code repository.'
            },
            {
              question: 'Do you handle post-launch updates or ongoing technical maintenance?',
              answer: 'Yes. We provide a post-launch stabilization window and can arrange ongoing feature updates or SEO optimization retainers.'
            }
          ],
          badge: 'Web Engineering'
        }
      ]
    },
    {
      id: 'video-production-editing',
      title: 'Category D: Video Production & Editing',
      description: 'Retention-oriented YouTube long-form editing, bespoke high-CTR thumbnail design, and dedicated vertical post-production for Shorts and Instagram Reels.',
      services: [
        {
          id: 'long-form-video-editing-youtube',
          name: 'Long-Form Video Editing & YouTube Production',
          slug: 'long-form-video-editing-youtube',
          detailRoute: '/services/digital-marketing/long-form-video-editing-youtube',
          category: 'Video Production & Editing',
          divisionKey: 'digital-marketing',
          originalServices: ['YouTube Long-Form Video Editing', 'Thumbnail Design'],
          tagline: 'Narrative YouTube & podcast post-production paired with click-worthy 1280x720 thumbnail design.',
          explanation:
            'End-to-end post-production for 8-to-60 minute YouTube episodes, video podcasts, and B2B explainers—uniting story pacing, clean vocal mastering, motion graphics, and custom A/B YouTube thumbnail packages.',
          h1Heading: 'Long-Form Video Editing & YouTube Production Services',
          suggestedH2s: [
            'High-Retention YouTube Editing Paired With Click-Focused Thumbnail Design',
            'Post-Production Process From Raw Footage Review to Thumbnail Variants',
            'Audio, Color, Motion & Thumbnail Capabilities',
            'Deliverables, Post-Production Tools & FAQs'
          ],
          seoTitle: 'Long-Form Video Editing & YouTube Production | VAIKA',
          metaDescription:
            'YouTube long-form video editing and custom thumbnail design services. Narrative pacing, vocal mastering, motion callouts, B-roll integration, and 1280x720 thumbnails.',
          primaryKeywords: [
            'YouTube Video Editing Services',
            'Long-Form Video Post-Production',
            'YouTube Thumbnail Design Services',
            'Podcast and Documentary Editing'
          ],
          secondaryKeywords: [
            'YouTube Retention Video Editor',
            'Video Podcast Multi-Cam Editing',
            'High Contrast YouTube Thumbnails',
            'B-Roll and Motion Graphics Editing',
            'Vocal Cleanup and Audio Mastering',
            'YouTube A/B Thumbnail Variants',
            'Corporate Explainer Post-Production',
            '16:9 4K YouTube Master Exports',
            'YouTube Chapter Timestamp Prep',
            'Color Correction for Talking Heads'
          ],
          longTailKeywords: [
            'YouTube long form video editing and thumbnail package for creators',
            'B2B video podcast multi-camera editing with lower thirds and audio mix',
            'high retention narrative YouTube editing removing pauses and fluff',
            'custom 1280x720 YouTube thumbnail design with 2 to 3 A/B variants',
            'post-production editing for SaaS product walkthroughs and founders',
            'Premiere Pro and After Effects editing for educational YouTube channels',
            'consistent weekly YouTube episode editing turnaround workflow',
            'YouTube visual storytelling with B-roll screen recordings and SFX'
          ],
          semanticKeywords: [
            'A-roll tightening',
            'B-roll layering',
            'pattern interrupts',
            'loudness normalization',
            'curiosity gap',
            '1280x720 PNG',
            'lower-thirds',
            'color grading'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'Winning audience attention on YouTube relies on two tightly linked disciplines: packaging that earns the initial click and disciplined editing that sustains viewer retention through the final call to action. VAIKA GROUP pairs YouTube Long-Form Video Editing with bespoke Thumbnail Design so packaging and story pacing reinforce each other.',
            'Raw camera recordings, webinars, and multi-track podcasts often suffer from slow intros, distracting pauses, uneven audio levels, and flat visuals—or crisp edits get ignored in browse feeds due to cluttered thumbnails. Our post-production editors structure engaging openings, tighten A-roll delivery, weave relevant B-roll and screen captures, mix balanced vocal audio, and design crisp 1280x720 thumbnails tested against YouTube dark and light modes.',
            'Built for B2B channels, founder thought leaders, real estate tours/market briefings, and educational media teams, this service turns supplied raw footage into publication-ready 1080p/4K episodes alongside optional thumbnail variants for YouTube Studio testing.'
          ],
          includes: [
            'A-roll assembly and tightening (removing dead air, hesitations, and retakes while preserving natural cadence)',
            'Intro hook structuring to establish episode value cleanly within the opening minute',
            'Relevant B-roll, screen-capture, chart, and visual callout integration',
            'Custom branded lower-thirds, chapter cards, and subtle After Effects motion graphics',
            'Vocal cleanup, noise reduction, EQ/compression, and YouTube loudness balancing (-14 LUFS)',
            'Color correction and matching across multi-camera angles',
            'Bespoke YouTube Thumbnail Design (subject separation, typography hierarchy, mood contrast, 2–3 test variants)'
          ],
          optionalAddOns: [
            'Repurposing vertical Shorts/Reels clips extracted from the long-form episode (Service 15)',
            'Closed-caption SRT files or multi-language subtitle formatting',
            'On-location videography/studio recording (client supplies recorded raw files)'
          ],
          processSteps: [
            {
              title: 'Footage Ingestion & Episode Brief',
              description: 'Receive raw camera files, screen recordings, audio stems, and episode context via cloud transfer; confirm target title angle so edit and thumbnail align.'
            },
            {
              title: 'A-Roll Assembly & Story Cut',
              description: 'Cleanly trim silences, stumbles, and off-script retakes in Adobe Premiere Pro, shaping a tight opening hook and logical narrative progression.'
            },
            {
              title: 'B-Roll, Screen Captures & Visual Layering',
              description: 'Introduce relevant stock B-roll, product UI demos, callout overlays, and pacing shifts to keep visual interest steady across long explanations.'
            },
            {
              title: 'Motion Graphics & Branded Overlays',
              description: 'Apply animated speaker lower-thirds, chapter transitions, subscribe cues, and data callouts built in After Effects to match channel identity.'
            },
            {
              title: 'Audio Mastering & Color Correction',
              description: 'Denoise dialogue, balance music beds underneath speech, normalize loudness for streaming specs, and balance exposure/skin tones across shots.'
            },
            {
              title: 'Custom Thumbnail Concept & Design',
              description: 'Design high-contrast 1280x720 thumbnails in Adobe Photoshop pairing clear facial expression or focal visuals with concise 2–4 word intrigue text.'
            },
            {
              title: 'Timecoded Review & Final 4K/1080p Delivery',
              description: 'Collect consolidated frame-accurate revision notes via Frame.io/review links, render final H.264/ProRes exports, and deliver final PNG/JPG thumbnail options.'
            }
          ],
          problemSolved:
            'Eliminates hours of internal post-production bottlenecks while fixing slow video pacing and low-contrast thumbnails that limit YouTube audience growth.',
          deliverables: [
            'Master 16:9 Long-Form Video Export (1080p or 4K H.264 MP4)',
            '2–3 Custom High-Resolution YouTube Thumbnails (1280x720 PNG/JPG)',
            'Chapter Timestamp List matched to final edit duration'
          ],
          platformsTools: [
            'Adobe Premiere Pro',
            'Adobe After Effects',
            'Adobe Photoshop (Thumbnails)',
            'DaVinci Resolve (color workflows when required)',
            'Frame.io / cloud review workflows',
            'YouTube Studio export specifications'
          ],
          applications: [
            'B2B Thought Leaders & Founder Channels',
            'Podcast & Interview Shows',
            'SaaS Product Education Teams',
            'Real Estate Market & Property Channels',
            'Creators & Media Publications'
          ],
          qaApproach:
            'Every final render undergoes a full watch-through audit checking audio-video sync, safe vocal levels, spelling accuracy in motion graphics, black-frame gaps, and thumbnail mobile legibility at small feed sizes.',
          imageAlt: 'Long-form YouTube editing timeline in Premiere Pro paired with custom thumbnail variants',
          recommendedInternalLinks: [
            { label: 'Short-Form Video Editing & Reels Production', href: '/services/digital-marketing/short-form-video-editing-reels' },
            { label: 'Instagram Stories & Short-Form Social Content', href: '/services/digital-marketing/instagram-stories-short-form-content' },
            { label: 'Social Media Graphic & Carousel Design', href: '/services/digital-marketing/social-media-graphic-carousel-design' }
          ],
          faqs: [
            {
              question: 'Do you film the long-form videos, or edit footage we record?',
              answer: 'This service covers post-production editing and thumbnail design using raw video, screen recordings, and audio files provided by your team.'
            },
            {
              question: 'Can we order YouTube Thumbnails separately from Long-Form Video Editing?',
              answer: 'Yes. While pairing editing and thumbnails creates tighter packaging alignment, standalone thumbnail packages can be scoped for active channels.'
            },
            {
              question: 'How many thumbnail concepts or variants do we receive per video?',
              answer: 'Standard packaging delivers 2 to 3 distinct thumbnail variations formatted at 1280x720 ready for YouTube’s native thumbnail testing or rapid manual swaps.'
            },
            {
              question: 'Can you extract vertical YouTube Shorts or Reels from our long-form episodes?',
              answer: 'Yes! Long-form episode clipping and kinetic vertical re-editing integrate cleanly with Service 15 (Short-Form Video Editing & Reels Production).'
            },
            {
              question: 'How do we send large raw 4K camera files and leave feedback?',
              answer: 'You upload raw footage to shared Google Drive, Dropbox, or Frame.io folders, and leave frame-accurate comments directly on timestamped review cuts.'
            }
          ],
          badge: 'YouTube & Podcasts'
        },
        {
          id: 'short-form-video-editing-reels',
          name: 'Short-Form Video Editing & Reels Production',
          slug: 'short-form-video-editing-reels',
          detailRoute: '/services/digital-marketing/short-form-video-editing-reels',
          category: 'Video Production & Editing',
          divisionKey: 'digital-marketing',
          originalServices: ['Shorts Editing', 'Reels Editing'],
          tagline: 'Dedicated post-production editing turning client-recorded or clipped footage into polished Reels, YouTube Shorts, and vertical videos.',
          explanation:
            'High-craft vertical post-production (9:16) taking raw camera footage, talking-head clips, or long-form podcasts and transforming them into sharp Instagram Reels and YouTube Shorts with tight cuts, kinetic subtitles, sound effects, color grading, and platform-ready exports.',
          h1Heading: 'Short-Form Video Editing & Reels Production Services',
          suggestedH2s: [
            'Vertical Post-Production Editing for Instagram Reels & YouTube Shorts',
            'Post-Production Editing Workflow vs. Concept-First Story Creation',
            'Pacing, Kinetic Captions, Audio & Platform Export Capabilities',
            'Deliverables, Tools & Post-Production FAQs'
          ],
          seoTitle: 'Short-Form Video Editing & Reels Production | VAIKA',
          metaDescription:
            'Short-form video editing for Instagram Reels and YouTube Shorts. Raw footage editing, tight pacing cuts, kinetic subtitles, color grading, and 9:16 exports.',
          primaryKeywords: [
            'Short-Form Video Editing Services',
            'Instagram Reels Video Editing',
            'YouTube Shorts Editing Service',
            'Vertical Video Post-Production'
          ],
          secondaryKeywords: [
            'Talking Head Video Editing',
            'Podcast Clip Repurposing Service',
            'Kinetic Captions and Subtitles',
            'Vertical 9:16 Video Editor',
            'TikTok Video Post-Production',
            'Dynamic Jump Cut Editing',
            'Short Video Sound Design SFX',
            'Batch Reels Editing Retainer',
            'Reels Color Correction and Grading',
            'Platform-Optimized Vertical MP4 Exports'
          ],
          longTailKeywords: [
            'outsource Instagram Reels and YouTube Shorts video editing for raw footage',
            'podcast clip extraction and kinetic subtitle editing service',
            'fast paced YouTube Shorts editing from talking head recordings',
            'clean branded Reels editing for real estate agents and founders',
            'vertical 9:16 post production with B-roll cutaways and SFX',
            'monthly batch short form video editing service for agencies',
            'converting horizontal 16:9 YouTube interviews into vertical Shorts',
            'frame accurate Reels editing in Premiere Pro and After Effects'
          ],
          semanticKeywords: [
            'raw footage',
            'jump cuts',
            'kinetic subtitles',
            '9:16 reframing',
            'sound design',
            'B-roll cutaways',
            'looping transitions',
            'vocal clarity'
          ],
          searchIntent: 'Commercial / Transactional',
          overviewParagraphs: [
            'Recording consistent talking-head insights, property walkthroughs, or podcast discussions is only half the workflow—unpolished raw footage rarely holds attention in rapid vertical feeds. VAIKA GROUP’s Short-Form Video Editing & Reels Production service transforms your supplied or clipped footage into tight, platform-ready Instagram Reels, YouTube Shorts, and TikTok videos.',
            'Whereas Service 04 focuses on concept-driven social Story layouts and original brand-led Reels assembled from brand graphics and curated assets, Service 15 is engineered specifically for post-production editing of recorded video footage: tightening pauses, cropping multi-camera 16:9 frames cleanly into 9:16 vertical spaces, designing legible kinetic subtitles, layering subtle B-roll cutaways, and balancing dialogue with clean SFX.',
            'Whether delivering 15 vertical clips carved from a weekly founder podcast or editing polished 30-to-60 second talking-head batches for LinkedIn, Instagram Reels, and YouTube Shorts, our editors tailor pacing and subtitle aesthetics cleanly to your brand identity.'
          ],
          includes: [
            'Raw footage culling and clip selection (or editing from client-marked timestamps)',
            'Tight pacing edits removing dead air, breath gaps, and verbal stumbles',
            'Smart 16:9-to-9:16 horizontal reframing and speaker tracking for podcast/interview clips',
            'Styled kinetic captions & subtitles aligned with brand fonts and safe zones',
            'Relevant B-roll cutaways, screen overlays, subtle zoom punches, and visual props',
            'SFX accents, music bed ducking, and vocal clarity mastering',
            'Consistent color correction across phone and cinema camera footage',
            'Dedicated platform cover frames and clean 1080x1920 60fps/30fps MP4 renders'
          ],
          optionalAddOns: [
            'Concept-first interactive Story design and brand Reels created without raw filming (Service 04)',
            'Full long-form YouTube episode assembly (Service 14)',
            'Scheduled vertical publishing and caption writing (Services 02 & 10)'
          ],
          processSteps: [
            {
              title: 'Raw Footage Intake & Clip Mapping',
              description: 'Ingest supplied phone/camera recordings or long-form podcasts, logging strongest 20–60 second moments and checking audio/frame specs.'
            },
            {
              title: 'Story Hook & Rough Assembly',
              description: 'Sequence the strongest opening line first, tighten pauses with clean jump cuts, and establish crisp 9:16 vertical framing in Premiere Pro.'
            },
            {
              title: 'Fine Cuts, Zoom Punches & Pacing',
              description: 'Refine frame transitions, subtle scale punches on key phrases, and rhythmic visual resets to maintain momentum without jarring chaos.'
            },
            {
              title: 'B-Roll Cutaways & Visual Context',
              description: 'Layer supporting B-roll, UI screenshots, product close-ups, or document callouts over talking-head moments to illustrate spoken claims.'
            },
            {
              title: 'Kinetic Subtitle & Motion Styling',
              description: 'Generate, proofread, and animate on-brand subtitles—positioned strictly inside Instagram/YouTube Shorts UI safe margins so captions are never covered.'
            },
            {
              title: 'Sound Design & Color Consistency',
              description: 'Clean vocal audio, balance background tracks cleanly below speech, add subtle SFX cues, and match color/skin tones across clips.'
            },
            {
              title: 'Safe-Zone Check & Platform-Specific Export',
              description: 'Export crisp 1080x1920 MP4 masters (with clean audio-music separation options when trending native Instagram audio will be paired at upload).'
            }
          ],
          problemSolved:
            'Turns hours of unedited talking-head, walkthrough, or podcast recordings into consistent, polished vertical videos ready for Reels and YouTube Shorts.',
          deliverables: [
            'Batch of edited 9:16 vertical MP4 videos (1080x1920 H.264)',
            'Clean dialogue-only alternate versions (optional for native trending-audio pairing)',
            'Matching custom cover frames for Reels grid consistency'
          ],
          platformsTools: [
            'Adobe Premiere Pro',
            'Adobe After Effects',
            'DaVinci Resolve / Audition (audio & color polish)',
            'Frame.io / Google Drive review folders',
            'Instagram Reels / YouTube Shorts / TikTok / LinkedIn Video specs'
          ],
          applications: [
            'Founders & Executive Personal Brands',
            'B2B Podcasts & Media Channels',
            'Real Estate Agents & Property Marketers',
            'E-commerce & Product Educators',
            'SaaS Marketing Teams Producing Video Batches'
          ],
          qaApproach:
            'Every edited Short/Reel passes manual caption proofreading (fixing auto-transcript spelling errors on industry terms), vocal-level checks, and 9:16 safe-zone overlay validation.',
          imageAlt: 'Vertical 9:16 Premiere Pro editing timeline with kinetic captions and audio tracks',
          recommendedInternalLinks: [
            { label: 'Instagram Stories & Short-Form Social Content', href: '/services/digital-marketing/instagram-stories-short-form-content' },
            { label: 'Long-Form Video Editing & YouTube Production', href: '/services/digital-marketing/long-form-video-editing-youtube' },
            { label: 'Social Media Posting & Community Management', href: '/services/digital-marketing/social-media-posting-community-management' }
          ],
          faqs: [
            {
              question: 'How does this service differ from Service 04 (Instagram Stories & Short-Form Social Content)?',
              answer: 'Service 15 is dedicated video post-production for your supplied camera recordings, talking-head clips, or long-form podcasts (editing cuts, captions, color, sound, and Reels/Shorts exports). Service 04 focuses on concept-first creative production—interactive Story suites and branded Reels assembled from graphic/brand assets without raw talking-head shoots.'
            },
            {
              question: 'Do you handle both YouTube Shorts and Instagram Reels formatting?',
              answer: 'Yes. Both platforms share 9:16 dimensions, while we account for their different on-screen UI button zones and pacing expectations—or provide clean dialogue mixes when you want to add trending Instagram audio natively.'
            },
            {
              question: 'Can you pull short vertical clips directly out of our long-form podcasts or webinars?',
              answer: 'Yes. We review long-form recordings, extract cohesive standalone moments, reframe speakers into 9:16 vertical layout, and finish each clip with captions and B-roll.'
            },
            {
              question: 'Do you proofread the kinetic captions manually?',
              answer: 'Always. Auto-generated transcripts routinely misspell names, technical terms, and acronyms; every subtitle track is human-reviewed prior to export.'
            },
            {
              question: 'What kind of raw footage works best?',
              answer: 'Modern smartphone recordings (1080p/4K) with clear mic audio or mirrorless camera footage in cloud folders work seamlessly.'
            }
          ],
          badge: 'Reels & Shorts Edit'
        }
      ]
    }
  ],
  workflow: [
    {
      step: '01',
      title: 'Discovery & Channel Audit',
      description: 'Audit existing social channels, ad tracking, search visibility, brand identity, and video assets against commercial objectives.',
      deliverable: 'Channel Diagnostic & Consolidated Scope Roadmap.'
    },
    {
      step: '02',
      title: 'Architecture & Strategy Blueprint',
      description: 'Define brand positioning, keyword-to-URL maps, monthly content pillars, UI/UX wireframes, and funnel structures.',
      deliverable: 'Approved Strategy, Wireframes & Editorial Calendar.'
    },
    {
      step: '03',
      title: 'Creative & Technical Production',
      description: 'Produce bespoke graphics, website copy, Figma design systems, Next.js builds, email flows, and long/short video edits.',
      deliverable: 'QA-Verified Creative, Web & Campaign Deliverables.'
    },
    {
      step: '04',
      title: 'Deployment & Tracking Activation',
      description: 'Launch Meta campaigns, publish approved social queues, push production code, and validate Search Console and CAPI events.',
      deliverable: 'Live Digital Assets & Verified Telemetry.'
    },
    {
      step: '05',
      title: 'Review, Calibration & Compounding',
      description: 'Evaluate search queries, ad CPA, email engagement, and video pacing weekly/monthly to refine ongoing execution.',
      deliverable: 'Executive Growth Reports & Next-Cycle Sprints.'
    }
  ],
  whyChooseUs: [
    {
      title: '15 Unified Capabilities, Zero Fragmentation',
      description: 'Brand identity, copywriting, web engineering, SEO, paid social, and video editing operate under shared guidelines instead of disconnected freelancers.'
    },
    {
      title: 'Process Rigor & Transparent Scope',
      description: 'Every service follows a documented multi-stage workflow with clear distinctions between included deliverables and optional add-ons.'
    },
    {
      title: 'Client Ownership of Data & Assets',
      description: 'You retain ownership of ad accounts, analytics properties, email lists, vector logos, source repositories, and website domains.'
    },
    {
      title: 'Architectural Aesthetic & Technical Depth',
      description: 'Creative output reflects clean editorial restraint while web and search deliverables maintain strict semantic and technical standards.'
    }
  ],
  demonstrations: [
    {
      id: 'demo-meta-campaign',
      title: 'Full-Funnel Meta Acquisition & Tracking Architecture',
      category: 'Digital Advertising & Growth',
      description: 'Structured prospecting and retargeting campaign hierarchy with verified Pixel & Conversions API setup and systematic creative A/B testing.',
      image: '/assets/demonstrations/dm-meta-acquisition.jpg',
      badge: 'Paid Social System',
      tags: ['Meta Ads', 'Conversions API', 'Creative Testing']
    },
    {
      id: 'demo-brand-identity',
      title: 'Unified Brand System, Figma UI/UX & Next.js Build',
      category: 'Content, Branding & Web',
      description: 'End-to-end visual identity guidelines, scalable Figma component system, conversion copywriting, and TypeScript/Next.js web engineering.',
      image: '/assets/demonstrations/dm-brand-nextjs.jpg',
      badge: 'Brand & Web Build',
      tags: ['Figma System', 'Next.js', 'Brand Guidelines']
    },
    {
      id: 'demo-video-pipeline',
      title: 'Long-Form YouTube Packaging & Vertical Reels Post-Production',
      category: 'Video Production & Editing',
      description: 'Narrative YouTube episode assembly paired with 1280x720 thumbnail variants and kinetic vertical Reels/Shorts post-production.',
      image: '/assets/demonstrations/dm-video-postprod.jpg',
      badge: 'Post-Production',
      tags: ['YouTube Editing', 'Thumbnails', 'Reels & Shorts']
    }
  ]
};

/* =========================================================================
   MASTER EXPORTS & LOOKUP HELPERS
   ========================================================================= */

export const ALL_DIVISIONS: Record<string, ServiceDivisionData> = {
  estate: REAL_ESTATE_DIVISION,
  agent: AGENT_SERVICES_DIVISION,
  'data-ai': DATA_AI_DIVISION,
  'digital-marketing': DIGITAL_MARKETING_DIVISION,
};

export const ALL_SERVICES: ServiceDetail[] = [
  ...REAL_ESTATE_DIVISION.categories.flatMap((c) => c.services),
  ...AGENT_SERVICES_DIVISION.categories.flatMap((c) => c.services),
  ...DATA_AI_DIVISION.categories.flatMap((c) => c.services),
  ...DIGITAL_MARKETING_DIVISION.categories.flatMap((c) => c.services),
];

export function getDivisionByKey(key: string): ServiceDivisionData | undefined {
  if (key === 'estate' || key === 'real-estate') return REAL_ESTATE_DIVISION;
  if (key === 'agent' || key === 'agent-services' || key === 'studio') return AGENT_SERVICES_DIVISION;
  if (key === 'data-ai' || key === 'ai' || key === 'ai-engineering') return DATA_AI_DIVISION;
  if (key === 'digital-marketing') return DIGITAL_MARKETING_DIVISION;
  return undefined;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug || s.id === slug);
}

