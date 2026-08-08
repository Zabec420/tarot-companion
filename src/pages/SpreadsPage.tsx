import { Link } from 'react-router-dom'
import { SPREADS } from '../data/spreads'

export function SpreadsPage() {
  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Spreads</h1>
        <p>Choose a layout, then draw with intention.</p>
      </header>
      <ul className="spread-list">
        {SPREADS.map((spread) => (
          <li key={spread.id}>
            <Link to={`/reading/${spread.id}`} className="spread-card">
              <div>
                <h2>{spread.name}</h2>
                <p>{spread.description}</p>
                <span className="spread-meta">
                  {spread.positions.length}{' '}
                  {spread.positions.length === 1 ? 'Card' : 'Cards'}
                </span>
              </div>
              <span className="spread-arrow" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
