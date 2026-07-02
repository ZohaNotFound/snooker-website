import { PerspectiveCamera } from '@react-three/drei'

export default function HeroScene({ isVisible }) {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 2.5, 4.5]} fov={50} />
      
      {/* Lights */}
      <ambientLight intensity={0.2} color="#1a1510" />
      <directionalLight 
        position={[0, 9, 1]} 
        intensity={2.2} 
        color="#FFB84D"
        castShadow
      />
      <spotLight 
        position={[0.5, 8, 0.2]} 
        angle={0.5} 
        penumbra={0.9} 
        intensity={150} 
        color="#FFB84D"
        castShadow
      />
      
      {/* Table */}
      <mesh position={[0, -0.12, 0]} receiveShadow castShadow>
        <boxGeometry args={[3.4, 0.25, 1.9]} />
        <meshStandardMaterial color="#2a1f14" roughness={0.4} metalness={0.05} />
      </mesh>
      
      {/* Felt */}
      <mesh position={[0, 0.02, 0]} receiveShadow castShadow>
        <boxGeometry args={[2.84, 0.05, 1.42]} />
        <meshStandardMaterial color="#1e5631" roughness={0.95} metalness={0} />
      </mesh>
    </>
  )
}
