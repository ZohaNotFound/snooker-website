import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ANIMATION_DURATION = 8; // 8 seconds for full animation + 3 second delay before repeat

export default function CameraRig({ onBreakTrigger }) {
  const cameraRef = useRef(null);
  const elapsedRef = useRef(0);
  const breakTriggeredRef = useRef(false);

  useFrame((state, delta) => {
    if (!cameraRef.current) return;

    const camera = cameraRef.current;
    elapsedRef.current += delta;

    // Reset animation loop
    if (elapsedRef.current > ANIMATION_DURATION + 3) {
      elapsedRef.current = 0;
      breakTriggeredRef.current = false;
    }

    const t = elapsedRef.current;

    // Phase 1: Start position to pushed in (0-2.5s)
    if (t < 2.5) {
      const progress = t / 2.5;
      camera.position.z = 4.5 - (4.5 - 0.8) * easeInOutQuad(progress);
    }
    // Phase 2: Push in and drop angle (2.5-3.5s)
    else if (t < 3.5) {
      const progress = (t - 2.5) / 1;
      camera.position.y = 2.5 - (2.5 - 0.4) * easeInOutQuad(progress);
      camera.position.z = 0.8;
    }
    // Phase 3: Hold at break position and trigger break (3.5-4s)
    else if (t < 4 && !breakTriggeredRef.current) {
      breakTriggeredRef.current = true;
      onBreakTrigger?.();
    }
    // Phase 4: Pull back after break (4-5.5s)
    else if (t < 5.5) {
      const progress = (t - 4) / 1.5;
      camera.position.z = 0.8 + (2.5 - 0.8) * easeOutQuad(progress);
      camera.position.y = 0.4 + (2 - 0.4) * easeOutQuad(progress);
    }
    // Phase 5: Return to start (5.5-8s) - slow ease back
    else if (t < 8) {
      const progress = (t - 5.5) / 2.5;
      camera.position.z = 2.5 + (4.5 - 2.5) * easeInQuad(progress);
      camera.position.y = 2 + (2.5 - 2) * easeInQuad(progress);
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 2.5, 4.5]}
      fov={50}
      near={0.01}
      far={1000}
    />
  );
}

// Easing functions
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

function easeInQuad(t) {
  return t * t;
}
