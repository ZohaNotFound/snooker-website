import { Environment } from "@react-three/drei";

export default function Lights() {
  // Tungsten color temperature (warm amber) ~3200K
  const tungstenColor = "#FFB84D";

  return (
    <>
      {/* Very subtle ambient fill (dark snooker hall atmosphere) */}
      <ambientLight intensity={0.12} color="#1a1510" />

      {/* Main tungsten overhead light - creates focused pool of light */}
      <directionalLight
        position={[0, 9, 1]}
        intensity={2.2}
        color={tungstenColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />

      {/* Warm spotlight - intense tungsten focused on table */}
      <spotLight
        position={[0.5, 8, 0.2]}
        angle={0.5}
        penumbra={0.9}
        intensity={150}
        color={tungstenColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        decay={1.5}
      />

      {/* Subtle rim light for depth - very warm */}
      <pointLight
        position={[-2, 4, 3]}
        intensity={0.8}
        color="#FFD699"
        distance={15}
      />

      {/* Subtle fill from opposite side to reduce harsh shadows */}
      <pointLight
        position={[2, 3, -2]}
        intensity={0.4}
        color="#D4AF37"
        distance={20}
      />

      {/* Warehouse environment for realistic reflections */}
      <Environment preset="warehouse" />
    </>
  );
}
