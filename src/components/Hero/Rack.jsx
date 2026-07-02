import Ball from "./Ball";
import { generateRack } from "../../../utils/rackPositions";
import { forwardRef, useRef } from "react";

const Rack = forwardRef((props, ref) => {
  const positions = generateRack();
  const ballRefs = useRef([]);

  // Expose reset method
  const resetBalls = () => {
    ballRefs.current.forEach((ballRef, i) => {
      if (ballRef) {
        const initialPos = positions[i];
        ballRef.setTranslation(
          { x: initialPos[0], y: initialPos[1], z: initialPos[2] },
          true
        );
        ballRef.setLinvel({ x: 0, y: 0, z: 0 }, true);
        ballRef.setAngvel({ x: 0, y: 0, z: 0 }, true);
      }
    });
  };

  // Expose via ref
  if (ref) {
    if (typeof ref === "function") {
      ref({ resetBalls });
    } else {
      ref.current = { resetBalls };
    }
  }

  return (
    <>
      {positions.map((position, i) => (
        <Ball
          key={i}
          ref={(el) => (ballRefs.current[i] = el)}
          position={position}
          color="#b91c1c"
        />
      ))}
    </>
  );
});

Rack.displayName = "Rack";
export default Rack;
