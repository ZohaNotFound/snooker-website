import { PerspectiveCamera } from "@react-three/drei";

export default function CameraRig() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 3.5, 5.5]}
      fov={40}
    />
  );
}