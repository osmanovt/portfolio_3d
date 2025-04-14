import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

function TechIcon ({ icon }) {
  const scene = useGLTF(icon.modelPath);

  useEffect(() => {
    if (icon.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5, 5, 5]} intensity={0.5}/>

      <Environment preset="city"/>

      <OrbitControls enableZoom={false}/>

      <Float
        speed={5.5}
        rotationIntensity={0.5}
        floatIntensity={0.9}
      >
        <group scale={icon.scale} rotation={icon.rotation}>
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  );
}

export default TechIcon;
