
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group for all floating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const primaryLight = new THREE.PointLight(0x0daf82, 3, 50);
    primaryLight.position.set(5, 5, 5);
    scene.add(primaryLight);

    const secondaryLight = new THREE.PointLight(0x06b6d4, 2, 50);
    secondaryLight.position.set(-5, -5, 5);
    scene.add(secondaryLight);

    // Bacterium Builder
    const createBacterium = (type: 'bacillus' | 'coccus' | 'spirillum' | 'vibrio', color: number) => {
      let geometry;
      if (type === 'bacillus') {
        geometry = new THREE.CapsuleGeometry(0.15, 0.5, 4, 12);
      } else if (type === 'coccus') {
        geometry = new THREE.SphereGeometry(0.2, 16, 16);
      } else if (type === 'spirillum') {
        // Spiral shape using TorusKnot
        geometry = new THREE.TorusKnotGeometry(0.2, 0.05, 64, 8, 2, 5);
      } else {
        // Vibrio (comma shape) using a portion of a Torus
        geometry = new THREE.TorusGeometry(0.3, 0.08, 8, 16, Math.PI / 2);
      }

      const material = new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 0.4,
        shininess: 100,
        emissive: color,
        emissiveIntensity: 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );
      
      // Random rotation
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      
      return {
        mesh,
        speed: Math.random() * 0.002 + 0.001,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        offset: Math.random() * Math.PI * 2
      };
    };

    const bacteria: any[] = [];
    const colors = [0x0daf82, 0x06b6d4, 0x4f46e5];
    const types: ('bacillus' | 'coccus' | 'spirillum' | 'vibrio')[] = ['bacillus', 'coccus', 'spirillum', 'vibrio'];

    for (let i = 0; i < 50; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const b = createBacterium(type, color);
      bacteria.push(b);
      mainGroup.add(b.mesh);
    }

    camera.position.z = 12;

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth camera movement based on mouse
      mainGroup.rotation.y += (mouseX * 0.05 - mainGroup.rotation.y) * 0.02;
      mainGroup.rotation.x += (-mouseY * 0.05 - mainGroup.rotation.x) * 0.02;

      const time = Date.now() * 0.001;

      // Animate individual bacteria
      bacteria.forEach(b => {
        b.mesh.position.y += Math.sin(time + b.offset) * 0.01;
        b.mesh.position.x += Math.cos(time + b.offset) * 0.005;
        b.mesh.rotation.x += b.rotSpeed;
        b.mesh.rotation.y += b.rotSpeed;
        b.mesh.rotation.z += b.rotSpeed;
      });

      // Periodic HUD Update
      if (hudRef.current && Math.random() > 0.98) {
        const coords = hudRef.current.querySelectorAll('.hud-val');
        coords.forEach(el => {
            el.textContent = (Math.random() * 100).toFixed(3);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div ref={containerRef} className="w-full h-full opacity-60" />
      
      {/* HUD Elements Overlay */}
      <div ref={hudRef} className="absolute inset-0 z-10 pointer-events-none opacity-30 select-none">
        {/* Scanning Frame Corners */}
        <div className="absolute top-10 left-10 hud-element border-l-2 border-t-2 border-primary/40 p-4 font-mono text-[9px] leading-relaxed">
          <div className="text-primary font-bold mb-1 tracking-widest uppercase">Scanner_Active</div>
          COORD_X: <span className="hud-val">12.482</span><br/>
          COORD_Y: <span className="hud-val">08.219</span><br/>
          V_FLUX: 0.294nm
        </div>
        
        <div className="absolute bottom-10 right-10 hud-element border-r-2 border-b-2 border-secondary/40 p-4 text-right font-mono text-[9px] leading-relaxed">
          MAGNIFICATION: 4000X<br/>
          STAIN: GRAM_NEG_ALPHA<br/>
          <div className="text-secondary font-bold mt-1 tracking-widest uppercase">Optimal_Focus</div>
        </div>

        {/* Tactical Crosshair Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Outer rings */}
            <div className="w-64 h-64 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-dashed border-primary/20 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
            </div>
            {/* Center cross */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-px h-8 bg-primary/40 absolute"></div>
              <div className="w-8 h-px bg-primary/40 absolute"></div>
            </div>
        </div>

        {/* Lateral Data Strips */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-2 opacity-40">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="h-0.5 w-4 bg-white/20"></div>
            ))}
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-2 opacity-40">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="h-0.5 w-4 bg-white/20 ml-auto"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Background3D;
