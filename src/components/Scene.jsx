import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Water from './Water.jsx'
import Terrain from './Terrain.jsx'

/**
 * Main 3D viewport.
 *
 * WebGL uses a depth buffer (z-buffer) for hidden-surface removal: each pixel
 * stores its depth, and closer fragments win — so objects correctly occlude
 * each other without sorting triangles manually.
 */
export default function Scene({ params }) {
  return (
    <Canvas
      camera={{ position: [0, 35, 70], fov: 50, near: 0.1, far: 500 }}
      gl={{ antialias: true }}
      style={{ width: '100%', height: '100%', background: '#1a2332' }}
    >
      <Lights />

      <Water params={params} />
      <Terrain params={params} />

      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={20}
        maxDistance={200}
        maxPolarAngle={Math.PI / 2 - 0.02}
      />
    </Canvas>
  )
}
