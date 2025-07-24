
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

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
  const ballRadius = 0.2;
  const ringRadius = 1.5; // Average radius for balls
  const outerRingRadius = 2; // Outer ring radius
  const innerRingRadius = 1; // Inner ring radius
  const ringHeight = 0.5; // Height of the outer ring

  return (
    <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* Outer Ring */}
      <mesh ref={outerRingRef}>
        <cylinderGeometry args={[outerRingRadius, outerRingRadius, ringHeight, 64, 1, true]} /> {/* Outer radius, inner radius, heigh
t, segments, openEnded */}
          <meshBasicMaterial
            color="#6E7073"
            transparent={true}
          opacity={0.3}
          />
        </mesh>

      {/* Inner Ring */}
      <mesh ref={innerRingRef}>
        <cylinderGeometry args={[innerRingRadius, innerRingRadius, ringHeight, 64, 1, true]} /> {/* Outer radius, inner radius, height, segments, openEnded */}
          <meshBasicMaterial
            color="#6E7073"
            transparent={true}
            opacity={0.3}
          />
        </mesh>

      {/* Balls */}
      {[...Array(numBalls)].map((_, i) => {
        const angle = (i / numBalls) * Math.PI * 2;
        const x = Math.cos(angle) * ringRadius;
        const z = Math.sin(angle) * ringRadius;
        return (
          <mesh key={i} ref={el => ballsRef.current[i] = el} position={[x, 0, z]}>
            <sphereGeometry args={[ballRadius, 32, 32]} />
              <meshBasicMaterial
                color="#6E7073"
                transparent={true}
                opacity={0.3}
              />
            </mesh>
        );
      })}
    </group>
  );
};

const BearingModel = ({ heroTitle, heroSubtitle }) => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <Html position={[0, 0, 0]} center>
        <div
        style={{
          fontSize: '2em',
          // fontWeight: 'bold',
          color: 'rgb(0, 0, 0)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          textAlign: 'center',
        }}
        >
          <h1 style={{fontSize: '2em'}}>{heroTitle}</h1>
            <p>{heroSubtitle}</p>
        </div>
      </Html>
      <ambientLight intensity={0.8} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.0} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={1.0} />
      <pointLight position={[0, 5, -5]} intensity={0.1} />
      <Bearing />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default BearingModel;
