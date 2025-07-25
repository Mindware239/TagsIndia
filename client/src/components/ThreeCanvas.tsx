import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  productId: number;
  className?: string;
}

export default function ThreeCanvas({ productId, className = "" }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a3c34);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xd4a017, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xd4a017, 0.5);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Create luxury tag geometry
    const createLuxuryTag = () => {
      const group = new THREE.Group();

      // Main tag body
      const tagGeometry = new THREE.BoxGeometry(2, 1.2, 0.1);
      const tagMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x4a2f2f,
        metalness: 0.2,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
      const tag = new THREE.Mesh(tagGeometry, tagMaterial);
      tag.castShadow = true;
      tag.receiveShadow = true;
      group.add(tag);

      // Gold border
      const borderGeometry = new THREE.RingGeometry(0.8, 1.0, 16);
      const borderMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xd4a017,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0xd4a017,
        emissiveIntensity: 0.1,
      });
      const border = new THREE.Mesh(borderGeometry, borderMaterial);
      border.position.z = 0.051;
      group.add(border);

      // Logo/text plane
      const logoGeometry = new THREE.PlaneGeometry(1.5, 0.3);
      const logoMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xd4a017,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xd4a017,
        emissiveIntensity: 0.05,
      });
      const logo = new THREE.Mesh(logoGeometry, logoMaterial);
      logo.position.z = 0.052;
      group.add(logo);

      // Ring hole
      const ringGeometry = new THREE.RingGeometry(0.08, 0.15, 16);
      const ringMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xd4a017,
        metalness: 0.9,
        roughness: 0.1,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(0, 0.8, 0);
      group.add(ring);

      return group;
    };

    const luxuryTag = createLuxuryTag();
    scene.add(luxuryTag);

    // Animation
    let startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      // Smooth rotation
      luxuryTag.rotation.y = elapsed * 0.5;
      luxuryTag.rotation.x = Math.sin(elapsed * 0.3) * 0.1;

      // Gentle floating
      luxuryTag.position.y = Math.sin(elapsed * 0.8) * 0.1;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [productId]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full bg-gradient-to-br from-luxury-green to-luxury-navy rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}
