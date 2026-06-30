import { useMemo } from 'react'
import { PlaneGeometry } from 'three'

const TERRAIN_SIZE = 80
const HEIGHT_SCALE = 25

/**
 * Flat placeholder terrain grid. Resolution controls segment count;
 * real height displacement comes in Milestone 4–5.
 */
export default function Terrain({ params }) {
  const { resolution, shadingMode, waterLevel } = params
  const terrainY = waterLevel * HEIGHT_SCALE + 0.5

  const isWireframe = shadingMode === 'wireframe'
  const isFlat = shadingMode === 'flat'

  const geometry = useMemo(
    () =>
      new PlaneGeometry(
        TERRAIN_SIZE,
        TERRAIN_SIZE,
        resolution - 1,
        resolution - 1,
      ),
    [resolution],
  )

  return (
    <mesh position={[0, terrainY, 0]} rotation={[-Math.PI / 2, 0, 0]} geometry={geometry}>
      <meshStandardMaterial
        color="#4a7c3f"
        wireframe={isWireframe}
        flatShading={isFlat}
      />
    </mesh>
  )
}
