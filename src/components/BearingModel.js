
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Outlines } from '@react-three/drei';

const Bearing = () => {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const ballsRef = useRef([]);

  useFrame(() => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += 0.005;
      innerRingRef.current.rotation.y += 0.005;
      ballsRef.current.forEach(ball => {
        if (ball) ball.rotation.y += 0.005;
      });
    }
  });

  const numBalls = 12;
  const ballRadius = 0.1;
  const ringRadius = 1.2; // Average radius for balls

  return (
    <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* Outer Ring */}
      <Outlines thickness={0.1} color="gray" screenspace={false}>
        <mesh ref={outerRingRef}>
          <cylinderGeometry args={[1.5, 1.5, 0.5, 64, 1, true]} /> {/* Outer radius, inner radius, height, segments, openEnded */}
          <meshPhysicalMaterial
            color="#b0b0b0"
            metalness={1.0}
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>
      </Outlines>

      {/* Inner Ring */}
      <Outlines thickness={0.1} color="gray" screenspace={false}>
        <mesh ref={innerRingRef}>
          <cylinderGeometry args={[0.8, 0.8, 0.5, 64, 1, true]} /> {/* Outer radius, inner radius, height, segments, openEnded */}
          <meshPhysicalMaterial
            color="#b0b0b0"
            metalness={1.0}
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>
      </Outlines>

      {/* Balls */}
      {[...Array(numBalls)].map((_, i) => {
        const angle = (i / numBalls) * Math.PI * 2;
        const x = Math.cos(angle) * ringRadius;
        const z = Math.sin(angle) * ringRadius;
        return (
          <Outlines thickness={0.1} color="gray" screenspace={false}>
            <mesh key={i} ref={el => ballsRef.current[i] = el} position={[x, 0, z]}>
              <sphereGeometry args={[ballRadius, 32, 32]} />
              <meshPhysicalMaterial
                color="#b0b0b0"
                metalness={1.0}
                roughness={0.1}
                clearcoat={1.0}
                clearcoatRoughness={0.05}
              />
            </mesh>
          </Outlines>
        );
      })}
    </group>
  );
};

const BearingModel = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight intensity={0.8} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2.0} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={1.0} />
      <pointLight position={[0, 5, -5]} intensity={0.5} />
      <Bearing />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default BearingModel;
