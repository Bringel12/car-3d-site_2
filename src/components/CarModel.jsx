// src/components/CarModel.jsx
// eslint-disable-next-line no-unused-vars
import { useGLTF } from '@react-three/drei';

export function CarModel() {
  // Se você ainda não tem um modelo 3D, use um modelo temporário (um carro vermelho simples)
  // Quando tiver o arquivo .glb, coloque na pasta public/models/ e use:
  // const { scene } = useGLTF('/models/seu-carro.glb');
  // return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} />;
  
  // MODELO TEMPORÁRIO PARA TESTE (um cubo representando o carro)
  return (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      <boxGeometry args={[2, 0.5, 1]} />
      <meshStandardMaterial color="#ff4444" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}