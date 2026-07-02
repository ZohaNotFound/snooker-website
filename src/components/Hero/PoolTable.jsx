import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function PoolTable() {
  const TW = 3.4
  const TD = 1.75
  const TH = 0.22
  const FW = 2.84
  const FD = 1.42
  const FELT_Y = 0.02
  const CUSHION_H = 0.12
  const CUSHION_T = 0.055

  return (
    <group>
      <mesh position={[0, -TH / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[TW, TH, TD]} />
        <meshStandardMaterial color="#3b2416" roughness={0.7} metalness={0.05} />
      </mesh>

      <mesh position={[0, FELT_Y, 0]} receiveShadow>
        <boxGeometry args={[FW, 0.025, FD]} />
        <meshStandardMaterial color="#14532d" roughness={0.92} metalness={0} />
      </mesh>

      <mesh position={[0, FELT_Y + CUSHION_H / 2, -(FD / 2 + CUSHION_T / 2)]} castShadow receiveShadow>
        <boxGeometry args={[FW + CUSHION_T * 2, CUSHION_H, CUSHION_T]} />
        <meshStandardMaterial color="#0f3d20" roughness={0.85} />
      </mesh>
      <mesh position={[0, FELT_Y + CUSHION_H / 2, (FD / 2 + CUSHION_T / 2)]} castShadow receiveShadow>
        <boxGeometry args={[FW + CUSHION_T * 2, CUSHION_H, CUSHION_T]} />
        <meshStandardMaterial color="#0f3d20" roughness={0.85} />
      </mesh>
      <mesh position={[-(FW / 2 + CUSHION_T / 2), FELT_Y + CUSHION_H / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[CUSHION_T, CUSHION_H, FD]} />
        <meshStandardMaterial color="#0f3d20" roughness={0.85} />
      </mesh>
      <mesh position={[(FW / 2 + CUSHION_T / 2), FELT_Y + CUSHION_H / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[CUSHION_T, CUSHION_H, FD]} />
        <meshStandardMaterial color="#0f3d20" roughness={0.85} />
      </mesh>

      <mesh position={[0, FELT_Y - 0.005, 0]} receiveShadow>
        <boxGeometry args={[TW, 0.02, TD]} />
        <meshStandardMaterial color="#4a2e18" roughness={0.65} metalness={0.05} />
      </mesh>

      {[
        [-TW / 2 + 0.12, -TD / 2 + 0.12],
        [ TW / 2 - 0.12, -TD / 2 + 0.12],
        [-TW / 2 + 0.12,  TD / 2 - 0.12],
        [ TW / 2 - 0.12,  TD / 2 - 0.12],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, -TH - 0.4, z]} castShadow>
          <cylinderGeometry args={[0.055, 0.07, 0.8, 8]} />
          <meshStandardMaterial color="#3b2416" roughness={0.7} metalness={0.05} />
        </mesh>
      ))}

      {[
        [-FW / 2, -FD / 2],
        [ FW / 2, -FD / 2],
        [-FW / 2,  FD / 2],
        [ FW / 2,  FD / 2],
        [0,        -FD / 2],
        [0,         FD / 2],
      ].map(([px, pz], i) => (
        <mesh key={i} position={[px, FELT_Y + 0.014, pz]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.055, 16]} />
          <meshStandardMaterial color="#0a1a0d" roughness={0.9} />
        </mesh>
      ))}

      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[FW / 2, 0.015, FD / 2]} position={[0, FELT_Y, 0]} friction={0.7} restitution={0.1} />
        <CuboidCollider args={[FW / 2 + CUSHION_T, CUSHION_H / 2, CUSHION_T / 2]} position={[0, FELT_Y + CUSHION_H / 2, -(FD / 2 + CUSHION_T / 2)]} restitution={0.6} friction={0.1} />
        <CuboidCollider args={[FW / 2 + CUSHION_T, CUSHION_H / 2, CUSHION_T / 2]} position={[0, FELT_Y + CUSHION_H / 2,  (FD / 2 + CUSHION_T / 2)]} restitution={0.6} friction={0.1} />
        <CuboidCollider args={[CUSHION_T / 2, CUSHION_H / 2, FD / 2]} position={[-(FW / 2 + CUSHION_T / 2), FELT_Y + CUSHION_H / 2, 0]} restitution={0.6} friction={0.1} />
        <CuboidCollider args={[CUSHION_T / 2, CUSHION_H / 2, FD / 2]} position={[ (FW / 2 + CUSHION_T / 2), FELT_Y + CUSHION_H / 2, 0]} restitution={0.6} friction={0.1} />
      </RigidBody>
    </group>
  )
}