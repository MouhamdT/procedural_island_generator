import { useRef } from 'react'
import { useControls, button } from 'leva'
import Scene from './components/Scene.jsx'
import StatsPanel from './components/StatsPanel.jsx'

export default function App() {
  const paramsRef = useRef({})

  const params = useControls({
    seed: { value: 42, step: 1 },
    roughness: { value: 0.5, min: 0.1, max: 1.0, step: 0.01 },
    waterLevel: { value: 0.35, min: 0.0, max: 1.0, step: 0.01 },
    resolution: { value: 129, options: [129, 257] },
    shadingMode: { value: 'smooth', options: ['smooth', 'flat', 'wireframe'] },
    // Day 2 feature — L-system trees will use this toggle later
    showTrees: { value: false, label: 'Show Trees (Day 2)', disabled: true },
    Regenerate: button(() => {
      console.log('Regenerate with settings:', { ...paramsRef.current })
    }),
  })

  paramsRef.current = {
    seed: params.seed,
    roughness: params.roughness,
    waterLevel: params.waterLevel,
    resolution: params.resolution,
    shadingMode: params.shadingMode,
    showTrees: params.showTrees,
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Procedural Island Generator</h1>
      </header>
      <main className="app-main">
        <div className="viewport">
          <Scene params={params} />
          <StatsPanel seed={params.seed} resolution={params.resolution} />
        </div>
      </main>
    </div>
  )
}
