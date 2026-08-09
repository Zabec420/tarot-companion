import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CRYSTALS } from '../data/crystals'
import { CrystalImage } from '../components/CrystalImage'

const INTENTION_FILTERS = [
  'All',
  'Protection',
  'Love',
  'Calm',
  'Clarity',
  'Abundance',
  'Grounding',
  'Intuition',
  'Creativity',
] as const

export function CrystalsPage() {
  const [query, setQuery] = useState('')
  const [intention, setIntention] =
    useState<(typeof INTENTION_FILTERS)[number]>('All')

  const crystals = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CRYSTALS.filter((c) => {
      if (
        intention !== 'All' &&
        !c.intentions.some((i) => i.toLowerCase().includes(intention.toLowerCase()))
      ) {
        return false
      }
      if (!q) return true
      const haystack = [
        c.name,
        c.alsoCalled ?? '',
        c.color,
        c.chakra,
        c.element,
        c.description,
        c.properties,
        ...c.intentions,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, intention])

  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Crystals & Gems</h1>
        <p>
          Browse common stones with properties, care notes, and ways to work with
          them.
        </p>
      </header>

      <label className="field deck-search">
        <span className="visually-hidden">Search crystals</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, color, or intention"
          autoComplete="off"
        />
      </label>

      <div className="filter-row" role="tablist" aria-label="Intention filter">
        {INTENTION_FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={intention === item}
            className={`filter-chip${intention === item ? ' active' : ''}`}
            onClick={() => setIntention(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {crystals.length === 0 ? (
        <div className="empty-state">
          <p>No crystals match that search.</p>
        </div>
      ) : (
        <div className="crystal-grid">
          {crystals.map((crystal) => (
            <Link
              key={crystal.id}
              to={`/crystals/${crystal.id}`}
              className="crystal-tile"
            >
              <CrystalImage crystal={crystal} size="sm" />
              <span className="deck-tile-name">{crystal.name}</span>
              <span className="crystal-tile-meta">{crystal.color}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
