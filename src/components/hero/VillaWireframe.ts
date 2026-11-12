// Procedural Architectural Villa Wireframe (Three.js WebGL)
// Modeled after the cliffside cantilevered villa architecture in /hero/villa-graded_.webp
import * as THREE from 'three';

export const WIREFRAME_CONFIG = {
  GOLD_COLOR: 0xd4af37,
  GOLD_GLOW: 0xf5d895,
  AMBER_ACCENT: 0xffaa44,
  GLASS_EDGE: 0x7ad7f0,
  POOL_EDGE: 0x38bdf8,
  FILL_OPACITY: 0.045,
  LINE_OPACITY: 0.88,
  SUBLINE_OPACITY: 0.34,
  ROTATION_SPEED_Y: 0.12, // rad/s
  POINTER_TILT_FACTOR: 0.05,
  MAX_TILT_X: 0.25,
  MAX_TILT_Y: 0.4,
  FOV: 40,
  CAMERA_POS: [0.35, 1.65, 7.75] as const,
  CAMERA_LOOK_AT: [-0.05, 0.72, 0.2] as const,
  INITIAL_YAW: -0.36,
  MAX_DPR: 1.5,
};

export class VillaWireframe {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private villaGroup: THREE.Group | null = null;
  private observer: IntersectionObserver | null = null;
  private rafId: number | null = null;
  private isVisible = true;
  private lastTime = 0;

  private mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  private boundOnPointerMove: (e: PointerEvent) => void;
  private boundOnResize: () => void;
  private boundOnVisibilityChange: () => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.boundOnPointerMove = this.onPointerMove.bind(this);
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnVisibilityChange = () => {
      this.isVisible = !document.hidden;
      if (this.isVisible) {
        this.lastTime = performance.now();
      }
    };

    this.init();
  }

  private init() {
    const dpr = Math.min(window.devicePixelRatio || 1, WIREFRAME_CONFIG.MAX_DPR);
    const width = this.canvas.clientWidth || 800;
    const height = this.canvas.clientHeight || 480;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height, false);
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      WIREFRAME_CONFIG.FOV,
      width / Math.max(height, 1),
      0.1,
      100
    );
    this.camera.position.set(...WIREFRAME_CONFIG.CAMERA_POS);
    this.camera.lookAt(...WIREFRAME_CONFIG.CAMERA_LOOK_AT);

    this.buildVilla();
    this.buildGroundGrid();

    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(WIREFRAME_CONFIG.GOLD_GLOW, 1.3);
    dirLight.position.set(5, 8, 4);
    this.scene.add(dirLight);

    window.addEventListener('pointermove', this.boundOnPointerMove, { passive: true });
    window.addEventListener('resize', this.boundOnResize, { passive: true });
    document.addEventListener('visibilitychange', this.boundOnVisibilityChange);

    this.setupIntersectionObserver();
    this.lastTime = performance.now();
    this.animate();
  }

  private buildVilla() {
    if (!this.scene) return;
    this.villaGroup = new THREE.Group();

    const mats = {
      primaryLine: new THREE.LineBasicMaterial({
        color: WIREFRAME_CONFIG.GOLD_COLOR,
        transparent: true,
        opacity: WIREFRAME_CONFIG.LINE_OPACITY,
      }),
      detailLine: new THREE.LineBasicMaterial({
        color: WIREFRAME_CONFIG.GOLD_GLOW,
        transparent: true,
        opacity: WIREFRAME_CONFIG.SUBLINE_OPACITY,
      }),
      glassLine: new THREE.LineBasicMaterial({
        color: WIREFRAME_CONFIG.GLASS_EDGE,
        transparent: true,
        opacity: 0.45,
      }),
      poolLine: new THREE.LineBasicMaterial({
        color: WIREFRAME_CONFIG.POOL_EDGE,
        transparent: true,
        opacity: 0.55,
      }),
      amberLine: new THREE.LineBasicMaterial({
        color: WIREFRAME_CONFIG.AMBER_ACCENT,
        transparent: true,
        opacity: 0.65,
      }),
      concreteFill: new THREE.MeshBasicMaterial({
        color: WIREFRAME_CONFIG.GOLD_COLOR,
        transparent: true,
        opacity: WIREFRAME_CONFIG.FILL_OPACITY,
        side: THREE.DoubleSide,
      }),
      timberFill: new THREE.MeshBasicMaterial({
        color: 0x8f6b24,
        transparent: true,
        opacity: 0.055,
        side: THREE.DoubleSide,
      }),
      glassFill: new THREE.MeshBasicMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.035,
        side: THREE.DoubleSide,
      }),
      poolFill: new THREE.MeshBasicMaterial({
        color: 0x2288aa,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      }),
      amberFill: new THREE.MeshBasicMaterial({
        color: WIREFRAME_CONFIG.AMBER_ACCENT,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      }),
    };

    const addBox = (
      w: number,
      h: number,
      d: number,
      x: number,
      y: number,
      z: number,
      fillMat: THREE.Material,
      lineMat: THREE.LineBasicMaterial
    ) => {
      const geom = new THREE.BoxGeometry(w, h, d);
      const mesh = new THREE.Mesh(geom, fillMat);
      mesh.position.set(x, y, z);

      const edges = new THREE.EdgesGeometry(geom);
      const line = new THREE.LineSegments(edges, lineMat);
      mesh.add(line);

      this.villaGroup?.add(mesh);
      return mesh;
    };

    const addLineSegment = (
      points: [number, number, number][],
      mat: THREE.LineBasicMaterial
    ) => {
      const geom = new THREE.BufferGeometry().setFromPoints(
        points.map(([px, py, pz]) => new THREE.Vector3(px, py, pz))
      );
      const seg = new THREE.LineSegments(geom, mat);
      this.villaGroup?.add(seg);
    };

    // ---------------------------------------------------------
    // 1. CLIFF PLINTH, MAIN SLATE TERRACE & INFINITY POOL DECK
    // ---------------------------------------------------------
    // Cliff structural substructure beneath pool & living deck
    addBox(6.1, 0.52, 3.2, 0.05, -0.28, 0.25, mats.concreteFill, mats.detailLine);
    // Main slate terrace floor around living pavilion & pool
    addBox(3.4, 0.1, 3.05, -1.25, -0.02, 0.25, mats.concreteFill, mats.primaryLine);
    // Right seaside cantilever deck & pool edge walkway
    addBox(2.85, 0.1, 1.35, 1.75, -0.02, -0.58, mats.concreteFill, mats.primaryLine);
    // Infinity pool outer concrete infinity retaining trough
    addBox(2.75, 0.42, 1.65, 1.68, -0.18, 0.92, mats.concreteFill, mats.primaryLine);
    // Water surface inside infinity pool + crisp water perimeter
    addBox(2.62, 0.05, 1.52, 1.68, -0.01, 0.92, mats.poolFill, mats.poolLine);
    // Submerged corner entry steps on near-left pool edge
    for (let s = 0; s < 3; s++) {
      addBox(0.45 - s * 0.1, 0.07, 0.55 - s * 0.12, 0.62 + s * 0.08, -0.08 - s * 0.07, 1.38 - s * 0.14, mats.poolFill, mats.poolLine);
    }

    // ---------------------------------------------------------
    // 2. GROUND FLOOR — OPEN-PLAN GLASS LIVING & KITCHEN PAVILION
    // ---------------------------------------------------------
    // Rear concrete spine wall & structural piers
    addBox(4.3, 1.04, 0.16, -0.55, 0.54, -1.02, mats.concreteFill, mats.primaryLine);
    addBox(0.22, 1.04, 1.75, -2.58, 0.54, -0.22, mats.concreteFill, mats.primaryLine);
    // Floor-to-ceiling living/dining front glass wall (Z = +0.62)
    addBox(3.85, 1.02, 0.04, -0.35, 0.54, 0.62, mats.glassFill, mats.glassLine);
    // Right ocean-view wraparound glass return (X = +1.56)
    addBox(0.04, 1.02, 1.62, 1.56, 0.54, -0.2, mats.glassFill, mats.glassLine);

    // Slender architectural steel window mullions along front & right glazing
    const mullionPts: [number, number, number][] = [];
    [-2.25, -1.6, -0.95, -0.3, 0.35, 1.0, 1.56].forEach((mx) => {
      mullionPts.push([mx, 0.03, 0.63], [mx, 1.05, 0.63]);
    });
    [-0.95, -0.2, 0.62].forEach((mz) => {
      mullionPts.push([1.56, 0.03, mz], [1.56, 1.05, mz]);
    });
    addLineSegment(mullionPts, mats.primaryLine);

    // Interior ground-floor furniture CAD wireframes (visible through glass)
    // Kitchen cabinetry & central island (left interior bay)
    addBox(0.95, 0.24, 0.36, -1.45, 0.14, -0.15, mats.amberFill, mats.amberLine);
    addBox(1.15, 0.96, 0.28, -1.5, 0.5, -0.78, mats.timberFill, mats.detailLine);
    // Dining table & L-sofa lounge (right interior bay)
    addBox(0.75, 0.18, 0.42, -0.25, 0.11, -0.12, mats.amberFill, mats.amberLine);
    addBox(0.95, 0.18, 0.42, 0.85, 0.11, -0.2, mats.amberFill, mats.amberLine);
    addBox(0.42, 0.18, 0.72, 1.12, 0.11, -0.05, mats.amberFill, mats.amberLine);

    // ---------------------------------------------------------
    // 3. MIDDLE CANTILEVERED CONCRETE SLAB & UPPER CORNER BALCONY
    // ---------------------------------------------------------
    // Thick signature slab projecting rightwards to form the outdoor balcony
    addBox(5.15, 0.18, 2.05, -0.25, 1.14, -0.14, mats.concreteFill, mats.primaryLine);

    // Frameless glass balcony railing wrapping right cantilevered edge
    addBox(1.45, 0.28, 0.025, 1.58, 1.37, 0.86, mats.glassFill, mats.glassLine);
    addBox(0.025, 0.28, 1.98, 2.3, 1.37, -0.13, mats.glassFill, mats.glassLine);

    // Lower terrace seaside glass balustrade (far right firepit lounge)
    addBox(0.025, 0.28, 1.68, 3.16, 0.16, -0.35, mats.glassFill, mats.glassLine);
    addBox(1.1, 0.28, 0.025, 2.62, 0.16, -1.18, mats.glassFill, mats.glassLine);

    // ---------------------------------------------------------
    // 4. SIGNATURE VERTICAL STAIRWELL CORE & LEFT CONCRETE/TIMBER WING
    // ---------------------------------------------------------
    // Tall dark timber stairwell core protruding proud of facade & roof
    addBox(0.62, 2.52, 1.88, -1.2, 1.24, -0.2, mats.timberFill, mats.primaryLine);
    // Vertical cladding rib accents on core tower
    const coreRibs: [number, number, number][] = [];
    for (let r = -1.42; r <= -0.98; r += 0.11) {
      coreRibs.push([r, 0.02, 0.75], [r, 2.48, 0.75]);
    }
    addLineSegment(coreRibs, mats.detailLine);

    // Left cantilevered wing concrete perimeter frame (return wall + roof + soffit)
    addBox(0.18, 1.12, 1.85, -2.98, 1.72, -0.24, mats.concreteFill, mats.primaryLine);
    addBox(1.55, 0.14, 1.85, -2.25, 2.26, -0.24, mats.concreteFill, mats.primaryLine);
    addBox(1.55, 0.12, 1.85, -2.25, 1.16, -0.24, mats.concreteFill, mats.primaryLine);
    // Left timber-clad wall bay with 3 tall vertical architectural slit windows
    addBox(1.36, 0.96, 1.56, -2.2, 1.71, -0.28, mats.timberFill, mats.detailLine);
    [-2.58, -2.14, -1.72].forEach((wx) => {
      addBox(0.16, 0.86, 0.04, wx, 1.71, 0.51, mats.amberFill, mats.amberLine);
    });

    // ---------------------------------------------------------
    // 5. UPPER cantilevered MASTER SUITE & WRAPAROUND CORNER GLAZING
    // ---------------------------------------------------------
    // Upper solid timber-clad wall section adjacent to stairwell core
    addBox(1.42, 1.0, 1.68, -0.18, 1.73, -0.22, mats.timberFill, mats.primaryLine);
    const upperRibs: [number, number, number][] = [];
    for (let r = -0.82; r <= 0.46; r += 0.14) {
      upperRibs.push([r, 1.24, 0.63], [r, 2.22, 0.63]);
    }
    addLineSegment(upperRibs, mats.detailLine);

    // Floor-to-ceiling upper corner glass master bedroom box
    addBox(1.22, 1.0, 0.04, 1.12, 1.73, 0.6, mats.glassFill, mats.glassLine);
    addBox(0.04, 1.0, 1.62, 1.72, 1.73, -0.2, mats.glassFill, mats.glassLine);
    // Corner mullion & sliding divider line
    addLineSegment(
      [
        [1.12, 1.23, 0.61], [1.12, 2.23, 0.61],
        [1.72, 1.23, 0.61], [1.72, 2.23, 0.61],
        [1.72, 1.23, -0.2], [1.72, 2.23, -0.2],
      ],
      mats.primaryLine
    );

    // Interior upper master suite CAD furniture (bed platform + headboard + chair)
    addBox(0.78, 0.18, 0.9, 1.02, 1.33, -0.25, mats.amberFill, mats.amberLine);
    addBox(0.84, 0.42, 0.08, 1.02, 1.46, -0.68, mats.amberFill, mats.detailLine);

    // Top cantilevered roof concrete slab crowning the entire upper suite & balcony
    addBox(3.45, 0.18, 2.08, 0.62, 2.32, -0.16, mats.concreteFill, mats.primaryLine);

    // ---------------------------------------------------------
    // 6. SEASIDE FIREPIT LOUNGE, STEPPING STONES & LANDSCAPE CAD
    // ---------------------------------------------------------
    // Minimalist outdoor firepit table & flanking lounge chairs (right terrace)
    addBox(0.46, 0.14, 0.46, 2.55, 0.09, -0.45, mats.amberFill, mats.amberLine);
    addBox(0.28, 0.12, 0.32, 2.1, 0.09, -0.42, mats.concreteFill, mats.detailLine);
    addBox(0.28, 0.12, 0.32, 2.95, 0.09, -0.5, mats.concreteFill, mats.detailLine);

    // Winding architectural concrete stepping stone pathway on left slope
    for (let i = 0; i < 6; i++) {
      const px = -3.05 + i * 0.28;
      const pz = 1.65 - i * 0.34;
      const py = -0.16 + i * 0.025;
      addBox(0.48, 0.045, 0.24, px, py, pz, mats.concreteFill, mats.detailLine);
    }

    // Minimal low-voltage garden bollard beacons along path & terrace corners
    [
      [-3.15, 0.0, 1.48],
      [-2.62, 0.06, 0.78],
      [2.15, 0.09, -0.82],
      [3.02, 0.09, -0.15],
    ].forEach(([bx, by, bz]) => {
      addBox(0.05, 0.2, 0.05, bx, by, bz, mats.amberFill, mats.amberLine);
    });

    this.villaGroup.position.set(0, -0.58, 0);
    this.villaGroup.rotation.y = WIREFRAME_CONFIG.INITIAL_YAW;
    this.scene.add(this.villaGroup);
  }

  private buildGroundGrid() {
    if (!this.scene) return;
    const grid = new THREE.GridHelper(12, 24, WIREFRAME_CONFIG.GOLD_COLOR, 0x332810);
    grid.position.y = -0.78;
    if (!Array.isArray(grid.material)) {
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
    }
    this.scene.add(grid);
  }

  private onPointerMove(e: PointerEvent) {
    const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
    const ny = -(e.clientY / Math.max(window.innerHeight, 1)) * 2 + 1;
    this.mouse.targetX = nx * WIREFRAME_CONFIG.MAX_TILT_Y;
    this.mouse.targetY = ny * WIREFRAME_CONFIG.MAX_TILT_X;
  }

  private onResize() {
    if (!this.canvas || !this.renderer || !this.camera) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isVisible = entry.isIntersecting && !document.hidden;
          if (this.isVisible) {
            this.lastTime = performance.now();
          }
        });
      },
      { threshold: 0.05 }
    );

    this.observer.observe(this.canvas);
  }

  private animate() {
    this.rafId = requestAnimationFrame(() => this.animate());
    if (!this.isVisible || !this.renderer || !this.scene || !this.camera) return;

    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * WIREFRAME_CONFIG.POINTER_TILT_FACTOR;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * WIREFRAME_CONFIG.POINTER_TILT_FACTOR;

    if (this.villaGroup) {
      this.villaGroup.rotation.y += WIREFRAME_CONFIG.ROTATION_SPEED_Y * delta;
      this.villaGroup.rotation.x = this.mouse.y * 0.5;
      this.villaGroup.rotation.z = -this.mouse.x * 0.25;
    }

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('pointermove', this.boundOnPointerMove);
    window.removeEventListener('resize', this.boundOnResize);
    document.removeEventListener('visibilitychange', this.boundOnVisibilityChange);

    if (this.scene) {
      this.scene.traverse((obj) => {
        if ('geometry' in obj && obj.geometry instanceof THREE.BufferGeometry) {
          obj.geometry.dispose();
        }
        if ('material' in obj && obj.material) {
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((mat) => {
            if (mat && typeof mat.dispose === 'function') mat.dispose();
          });
        }
      });
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}
