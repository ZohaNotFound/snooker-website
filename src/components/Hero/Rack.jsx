import Ball from "./Ball";
import { generateRack } from "../utils/rackPositions";

export default function Rack() {
  const positions = generateRack();

  return (
    <>
      {positions.map((position, i) => (
        <Ball
          key={i}
          position={position}
          color="#b91c1c"
        />
      ))}
    </>
  );
}