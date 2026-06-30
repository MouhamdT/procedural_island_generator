const WATER_SIZE = 200
const HEIGHT_SCALE = 25

/**
 * Large horizontal water plane surrounding the island terrain.
 */
export default function Water({ params }) {
  const waterY = params.waterLevel * HEIGHT_SCALE

  return (
    <mesh position={[0, waterY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[WATER_SIZE, WATER_SIZE]} />
      <meshStandardMaterial
        color="#1a6b9c"
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  )
}
