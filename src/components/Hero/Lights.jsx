import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* Ambient fill */}
      <ambientLight intensity={0.25} />

      {/* Main overhead light */}
      <directionalLight
        position={[0, 8, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Warm spotlight like a snooker hall */}
      <spotLight
        position={[0, 6, 0]}
        angle={0.45}
        penumbra={0.8}
        intensity={120}
        castShadow
      />

      {/* HDR reflections */}
      <Environment preset="warehouse" />
    </>
  );
}