import { Physics } from "@react-three/rapier";
import CameraRig from "./CameraRig";
import Lights from "./Lights";
import PoolTable from "./PoolTable";
import Rack from "./Rack";
import CueBall from "./CueBall";
import Effects from "./Effects";

export default function HeroScene() {
  return (
    <>
      <CameraRig />

      <Lights />

      <Physics
        gravity={[0, -9.81, 0]}
        interpolate
        colliders={false}
      >
        <PoolTable />

        <Rack />

        <CueBall />
      </Physics>

      <Effects />
    </>
  );
}