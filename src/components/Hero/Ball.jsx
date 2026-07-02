import { RigidBody } from '@react-three/rapier'
import { forwardRef } from 'react'

const BALL_RADIUS = 0.06

const Ball = forwardRef(({ position, color = '#b91c1c', visible = true }, ref) => {
  return (
    <RigidBody
      ref={ref}
      colliders="ball"
      position={position}
      restitution={0.5}
      friction={0.7}
      linearDamping={0.4}
      angularDamping={1.0}
      canSleep
    >
      <mesh castShadow receiveShadow visible={visible}>
        <sphereGeometry args={[BALL_RADIUS, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.06}
          metalness={0.0}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          reflectivity={0.9}
        />
      </mesh>
    </RigidBody>
  )
})

Ball.displayName = 'Ball'

export default Ball