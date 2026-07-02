import { EffectComposer, Noise } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      {/* Film grain effect for cinematic look */}
      <Noise opacity={0.12} />
    </EffectComposer>
  );
}
