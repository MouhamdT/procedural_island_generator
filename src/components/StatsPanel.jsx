/**
 * Mesh statistics overlay. Counts stay at 0 until terrain geometry exists (Milestone 5).
 */
export default function StatsPanel({ seed, resolution }) {
  return (
    <div className="stats-panel">
      <h2 className="stats-panel__title">Mesh Stats</h2>
      <dl className="stats-panel__list">
        <div className="stats-panel__row">
          <dt>Vertices</dt>
          <dd>0</dd>
        </div>
        <div className="stats-panel__row">
          <dt>Faces</dt>
          <dd>0</dd>
        </div>
        <div className="stats-panel__row">
          <dt>Resolution</dt>
          <dd>{resolution}</dd>
        </div>
        <div className="stats-panel__row">
          <dt>Seed</dt>
          <dd>{seed}</dd>
        </div>
      </dl>
    </div>
  )
}
