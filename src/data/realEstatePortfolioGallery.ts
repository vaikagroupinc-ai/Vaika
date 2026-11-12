import { DemonstrationItem } from '@/types';

/**
 * Real Estate Portfolio & Editing Style Showcase for VAIKA GROUP Real Estate Division.
 * Uses verified local production imagery under `/public/` organized by editing discipline
 * with paired Before / After plates for interactive client comparison.
 */
export const REAL_ESTATE_PORTFOLIO_PROJECTS: DemonstrationItem[] = [
  {
    id: 'demo-flambient',
    title: 'HDR & Flambient Architectural Suite',
    category: 'HDR Flambient Editing',
    description:
      'Multi-bracket ambient and flash compositing delivering true-to-life white balance, crisp window pulls, and shadow recovery.',
    image: '/HDR  Flambient.jpg',
    imageAlt:
      'Luxury interior architecture showcase processed with HDR Flambient exposure blending',
    badge: 'HDR Flambient',
    tags: ['Flambient Blend', 'Window Pull', 'Color Accuracy'],
    projectDetails: {
      deliverableSpec: '16-Bit TIFF & High-Res Web Delivery',
      turnaround: '12–24 Hours',
      pipeline: 'Multi-Bracket HDR + Manual Flash-Ambient Blending',
      scopeSummary:
        'Balanced ambient daylight, natural timber and stone color fidelity, and clear exterior window views without harsh flash glare.',
    },
    gallery: [
      {
        id: 'flambient-01',
        title: 'Main HDR Flambient Interior Showcase',
        caption: 'Primary architectural living space balanced with natural window pulls and clean color temperature.',
        src: '/HDR  Flambient.jpg',
        alt: 'HDR Flambient balanced luxury architectural interior',
        assetRole: 'Master Showcase Frame',
      },
      {
        id: 'flambient-02',
        title: 'HDR Flambient — Alternate Room Elevation',
        caption: 'Consistent luminance and shadow detail across mixed interior lighting zones.',
        src: '/HDR  Flambient_1.jpg',
        alt: 'HDR Flambient edited residential interior angle 1',
        assetRole: 'Interior Visualization',
      },
      {
        id: 'flambient-03',
        title: 'HDR Flambient — Architectural Detail & Lighting',
        caption: 'Controlled highlights and crisp architectural geometry for MLS and print campaigns.',
        src: '/HDR  Flambient_2.jpg',
        alt: 'HDR Flambient edited residential interior angle 2',
        assetRole: 'Window & Lighting Detail',
      },
    ],
  },
  {
    id: 'demo-virtual-staging',
    title: 'Virtual Staging & Interior Transformation',
    category: 'Virtual Staging',
    description:
      'Vacant residential rooms transformed with scale-accurate furnishings, natural shadows, and photometric light matching.',
    image: '/Virtual staging after.jpg',
    imageAlt:
      'Virtually staged contemporary living room with photorealistic furniture and natural light bounce',
    badge: 'Virtual Staging',
    tags: ['Before & After', 'Scale Accurate', 'Luxury Furniture'],
    projectDetails: {
      deliverableSpec: 'Perspective-Matched High-Res Staged Plates',
      turnaround: '24–36 Hours',
      pipeline: 'Room Perspective Calibration + Photometric Furniture Staging',
      scopeSummary:
        'Empty rooms furnished in modern luxury styles while preserving original flooring reflections, glazing glare, and architectural lines.',
    },
    beforeAfterPairs: [
      {
        id: 'vs-pair-1',
        title: 'Living Salon — Vacant vs. Virtually Staged',
        caption: 'Drag the divider to compare the original vacant room against the staged interior.',
        originalSrc: '/Virtual staging before.jpg',
        originalAlt: 'Original vacant living room before virtual staging',
        originalLabel: 'BEFORE // VACANT',
        finalSrc: '/Virtual staging after.jpg',
        finalAlt: 'Virtually staged living room after furnishing',
        finalLabel: 'AFTER // STAGED',
      },
      {
        id: 'vs-pair-2',
        title: 'Lounge Suite — Vacant vs. Virtually Staged',
        caption: 'Alternate room perspective showing scale-matched seating, textiles, and shadow contact.',
        originalSrc: '/Virtual staging_1 before.jpg',
        originalAlt: 'Original vacant lounge room before virtual staging',
        originalLabel: 'BEFORE // VACANT',
        finalSrc: '/Virtual staging_1 after.jpg',
        finalAlt: 'Virtually staged lounge room after furnishing',
        finalLabel: 'AFTER // STAGED',
      },
    ],
    gallery: [
      {
        id: 'staging-01',
        title: 'Living Room Virtual Staging (After)',
        caption: 'Completed virtual staging with contemporary seating, lighting balance, and floor contact shadows.',
        src: '/Virtual staging after.jpg',
        alt: 'Virtually staged living room showcase',
        assetRole: 'Main Staged Interior',
      },
      {
        id: 'staging-02',
        title: 'Living Room Original Plate (Before)',
        caption: 'Original vacant room photograph prior to virtual staging.',
        src: '/Virtual staging before.jpg',
        alt: 'Vacant living room before virtual staging',
        assetRole: 'Original Vacant Space',
      },
      {
        id: 'staging-03',
        title: 'Lounge Virtual Staging (After)',
        caption: 'Second staged living composition tailored for modern residential listings.',
        src: '/Virtual staging_1 after.jpg',
        alt: 'Virtually staged lounge room angle 2',
        assetRole: 'Alternate Staged Angle',
      },
      {
        id: 'staging-04',
        title: 'Lounge Original Plate (Before)',
        caption: 'Unfurnished lounge photograph prior to staging.',
        src: '/Virtual staging_1 before.jpg',
        alt: 'Vacant lounge room before virtual staging',
        assetRole: 'Original Vacant Angle',
      },
      {
        id: 'staging-05',
        title: 'Master Bedroom Virtual Staging',
        caption: 'Tailored bedroom suite staging with warm textiles and balanced window daylight.',
        src: '/Master Bedroom_Virtual staging.jpg',
        alt: 'Master bedroom virtually staged with luxury bedding and decor',
        assetRole: 'Master Bedroom Staging',
      },
    ],
  },
  {
    id: 'demo-day-dusk',
    title: 'Day-to-Dusk & Twilight Conversion',
    category: 'Day-to-Dusk / Twilight',
    description:
      'Daytime exteriors converted into atmospheric twilight showcases with warm interior window glow and calibrated sky gradients.',
    image: '/Day dusk After_1.1.jpg',
    imageAlt:
      'Architectural exterior converted from daytime to golden-hour twilight with warm interior glow',
    badge: 'Day-to-Dusk',
    tags: ['Before & After', 'Twilight', 'Sky Replacement'],
    projectDetails: {
      deliverableSpec: 'High-Dynamic-Range Twilight Master Plates',
      turnaround: '12–24 Hours',
      pipeline: 'Daytime Sky Replacement + Ambient Relighting & Fixture Glow',
      scopeSummary:
        'Full ambient color temperature shift from harsh midday sun to inviting evening dusk with realistic window and exterior fixture illumination.',
    },
    beforeAfterPairs: [
      {
        id: 'dusk-pair-1',
        title: 'Day-to-Dusk Exterior 1.1 — Before & After',
        caption: 'Compare the original daytime capture against the converted twilight exterior.',
        originalSrc: '/Day dusk Before_1.1.jpg',
        originalAlt: 'Original daytime exterior photograph 1.1 before dusk conversion',
        originalLabel: 'BEFORE // DAYTIME',
        finalSrc: '/Day dusk After_1.1.jpg',
        finalAlt: 'Converted twilight exterior photograph 1.1 after day-to-dusk editing',
        finalLabel: 'AFTER // DUSK',
      },
      {
        id: 'dusk-pair-2',
        title: 'Day-to-Dusk Exterior 2.1 — Before & After',
        caption: 'Second architectural elevation transformed with golden-hour sky and warm lighting.',
        originalSrc: '/Day dusk before_2.1.jpg',
        originalAlt: 'Original daytime exterior photograph 2.1 before dusk conversion',
        originalLabel: 'BEFORE // DAYTIME',
        finalSrc: '/Day dusk After_2.1.jpg',
        finalAlt: 'Converted twilight exterior photograph 2.1 after day-to-dusk editing',
        finalLabel: 'AFTER // DUSK',
      },
      {
        id: 'dusk-pair-3',
        title: 'Twilight Retouching — Before & After',
        caption: 'Raw twilight plate enhanced for color depth, balanced highlights, and evening warmth.',
        originalSrc: '/twinlight_before.jpg',
        originalAlt: 'Original raw twilight photograph before grading',
        originalLabel: 'BEFORE // RAW',
        finalSrc: '/twinlight_after.jpg',
        finalAlt: 'Graded twilight architectural photograph after enhancement',
        finalLabel: 'AFTER // GRADED',
      },
    ],
    gallery: [
      {
        id: 'dusk-01',
        title: 'Day-to-Dusk Conversion 1.1 (After)',
        caption: 'Completed twilight conversion with warm window illumination and evening sky.',
        src: '/Day dusk After_1.1.jpg',
        alt: 'Day-to-dusk exterior showcase 1.1',
        assetRole: 'Primary Dusk Showcase',
      },
      {
        id: 'dusk-02',
        title: 'Day-to-Dusk Original 1.1 (Before)',
        caption: 'Original daytime exterior capture before twilight conversion.',
        src: '/Day dusk Before_1.1.jpg',
        alt: 'Original daytime exterior 1.1',
        assetRole: 'Original Daytime Plate',
      },
      {
        id: 'dusk-03',
        title: 'Day-to-Dusk Conversion 2.1 (After)',
        caption: 'Evening exterior grade balancing facade contrast and warm fixture glow.',
        src: '/Day dusk After_2.1.jpg',
        alt: 'Day-to-dusk exterior showcase 2.1',
        assetRole: 'Secondary Dusk Showcase',
      },
      {
        id: 'dusk-04',
        title: 'Day-to-Dusk Original 2.1 (Before)',
        caption: 'Original daytime elevation prior to dusk relighting.',
        src: '/Day dusk before_2.1.jpg',
        alt: 'Original daytime exterior 2.1',
        assetRole: 'Original Daytime Plate',
      },
      {
        id: 'dusk-05',
        title: 'Twilight Grading Master',
        caption: 'Hero twilight architectural composition.',
        src: '/twinlight_.jpg',
        alt: 'Twilight architectural showcase',
        assetRole: 'Twilight Master',
      },
      {
        id: 'dusk-06',
        title: 'Twilight Enhancement (After)',
        caption: 'Color-graded twilight exterior with balanced shadow recovery.',
        src: '/twinlight_after.jpg',
        alt: 'Graded twilight exterior after editing',
        assetRole: 'Graded Twilight',
      },
      {
        id: 'dusk-07',
        title: 'Twilight Raw Capture (Before)',
        caption: 'Unedited twilight frame prior to grading.',
        src: '/twinlight_before.jpg',
        alt: 'Raw twilight exterior before editing',
        assetRole: 'Original Twilight Plate',
      },
    ],
  },
  {
    id: 'demo-aerial-drone',
    title: 'Aerial Drone Photography & Site Perspectives',
    category: 'Aerial Drone View',
    description:
      'Elevated drone photography graded for crisp horizon clarity, true foliage greens, and surrounding property context.',
    image: '/aerial drone view.jpg',
    imageAlt:
      'High-resolution aerial drone photograph showcasing property footprint and surrounding landscape',
    badge: 'Aerial Drone',
    tags: ['Drone Grading', 'Lot Context', 'Sky Balance'],
    projectDetails: {
      deliverableSpec: 'Full-Resolution Aerial Stills (MLS & Print Ready)',
      turnaround: '12–24 Hours',
      pipeline: 'Lens Distortion Correction + Atmospheric Haze Removal + Color Grade',
      scopeSummary:
        'Clean aerial site perspectives highlighting roofline geometry, lot boundaries, and neighborhood proximity.',
    },
    gallery: [
      {
        id: 'aerial-01',
        title: 'Primary Aerial Drone Property Overview',
        caption: 'Elevated aerial view showcasing architectural massing and lot surroundings.',
        src: '/aerial drone view.jpg',
        alt: 'Aerial drone view of residential property and grounds',
        assetRole: 'Primary Aerial View',
      },
      {
        id: 'aerial-02',
        title: 'Secondary Aerial Drone Angle',
        caption: 'Alternate elevated perspective emphasizing driveway approach and neighborhood context.',
        src: '/aerial drone view_1.jpg',
        alt: 'Secondary aerial drone view of property',
        assetRole: 'Alternate Aerial Angle',
      },
    ],
  },
  {
    id: 'demo-matterport-3d',
    title: 'Matterport 3D Virtual Tours & Spatial Twins',
    category: 'Matterport 3D Tour',
    description:
      'Interactive 3D dollhouse views and spatial floor-plan visualizations enabling remote buyers to walk through every level.',
    image: '/Matterport.png',
    imageAlt:
      'Matterport 3D virtual tour dollhouse visualization showing full multi-room spatial layout',
    badge: 'Matterport 3D',
    tags: ['3D Dollhouse', 'Virtual Tour', 'Spatial Twin'],
    projectDetails: {
      deliverableSpec: 'Matterport Spatial Twin + High-Res Dollhouse Captures',
      turnaround: '24–48 Hours',
      pipeline: '3D Spatial Scan Alignment + Dollhouse & Floor Plan Presentation',
      scopeSummary:
        'Crystal-clear spatial navigation giving out-of-market buyers full confidence in room flow and proportions.',
    },
    gallery: [
      {
        id: 'matterport-01',
        title: 'Matterport 3D Dollhouse Spatial View',
        caption: 'Complete 3D architectural cutaway showing room connectivity and scale.',
        src: '/Matterport.png',
        alt: 'Matterport 3D dollhouse spatial overview',
        assetRole: '3D Dollhouse Showcase',
      },
      {
        id: 'matterport-02',
        title: 'Matterport Floor & Interior Perspective',
        caption: 'Detailed Matterport spatial view highlighting interior layout and sightlines.',
        src: '/Matterport 1.png',
        alt: 'Matterport 3D virtual tour interior perspective',
        assetRole: 'Spatial Walkthrough View',
      },
    ],
  },
];
