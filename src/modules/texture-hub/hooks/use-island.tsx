import { Island } from '@/src/modules/texture-hub/hooks/Island';
import { Canvas } from '@react-three/fiber';

export const useIsland = () => {
  <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
    <ambientLight intensity={0.7} />
    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
    <Island />
  </Canvas>;
};
