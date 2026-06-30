/**
 * Scene lighting for the island demo.
 * - Ambient light: soft base illumination so shadows are not pure black
 * - Directional light: simulates sunlight; direction affects shading on terrain
 */
export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[60, 80, 40]}
        intensity={1.2}
        castShadow={false}
      />
    </>
  )
}
