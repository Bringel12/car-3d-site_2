// src/components/Hero.jsx
import { Canvas } from '@react-three/fiber';
import { CarModel } from './CarModel';

export default function Hero() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 2, 2]} intensity={0.5} />
        <CarModel />
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: 50,
        left: 50,
        color: 'white',
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>FUTURE CAR</h1>
        <p style={{ fontSize: '1.2rem' }}>Experiência automotiva em 3D</p>
      </div>
    </div>
  );
}