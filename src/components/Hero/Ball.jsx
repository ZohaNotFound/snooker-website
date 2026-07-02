import { RigidBody } from "@react-three/rapier";
import { forwardRef } from "react";

const Ball = forwardRef(({ position, color = "red" }, ref) => {
  return (
    <RigidBody
      ref={ref}
      colliders="ball"
      position={position}
      restitution={0.94}
      friction={1}
      linearDamping={1.8}
      angularDamping={2.5}
      canSleep
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </RigidBody>
  );
});

export default Ball;