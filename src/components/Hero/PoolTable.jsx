import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function PoolTable() {
  return (
    <group>
      {/* TABLE BODY - Dark wood frame */}
      <mesh position={[0, -0.12, 0]} receiveShadow castShadow>
        <boxGeometry args={[3.4, 0.25, 1.9]} />
        <meshStandardMaterial 
          color="#2a1f14" 
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {/* FELT - Professional snooker baize green */}
      <mesh position={[0, 0.02, 0]} receiveShadow castShadow>
        <boxGeometry args={[2.84, 0.05, 1.42]} />
        <meshStandardMaterial
          color="#1e5631"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* PHYSICS */}
      <RigidBody type="fixed" colliders={false}>
        {/* Playing surface */}
        <CuboidCollider
          args={[1.42, 0.05, 0.71]}
          position={[0, 0.05, 0]}
        />

        {/* Top cushion */}
        <CuboidCollider
          args={[1.42, 0.15, 0.03]}
          position={[0, 0.12, -0.74]}
        />

        {/* Bottom cushion */}
        <CuboidCollider
          args={[1.42, 0.15, 0.03]}
          position={[0, 0.12, 0.74]}
        />

        {/* Left cushion */}
        <CuboidCollider
          args={[0.03, 0.15, 0.71]}
          position={[-1.45, 0.12, 0]}
        />

        {/* Right cushion */}
        <CuboidCollider
          args={[0.03, 0.15, 0.71]}
          position={[1.45, 0.12, 0]}
        />
      </RigidBody>
    </group>
  );
}
