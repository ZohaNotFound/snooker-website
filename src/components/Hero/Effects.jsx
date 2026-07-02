import { EffectComposer, Grain } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      {/* Film grain effect for cinematic look */}
      <Grain scale={1.5} opacity={0.15} />
    </EffectComposer>
  );
}
