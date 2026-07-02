export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.12} color="#3a2a10" />

      <spotLight
        position={[0, 5.5, 0]}
        angle={0.38}
        penumbra={0.65}
        intensity={180}
        color="#e8a044"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
        decay={2}
        distance={12}
      />

      <spotLight
        position={[-0.4, 4.8, -0.3]}
        angle={0.32}
        penumbra={0.7}
        intensity={80}
        color="#d4893a"
        castShadow={false}
        decay={2}
        distance={10}
      />

      <pointLight
        position={[2.5, 1.2, 1.8]}
        intensity={8}
        color="#c07030"
        decay={2}
        distance={6}
      />

      <pointLight
        position={[0, 0.5, 0]}
        intensity={2}
        color="#1a4a28"
        decay={2}
        distance={3}
      />
    </>
  )
}