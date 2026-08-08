import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DECK } from '../data/deck'
import type { Suit } from '../data/types'
import { CardImage } from '../components/CardImage'

const FILTERS: { id: Suit | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'major', label: 'Major' },
  { id: 'wands', label: 'Wands' },
  { id: 'cups', label: 'Cups' },
  { id: 'swords', label: 'Swords' },
  { id: 'pentacles', label: 'Pentacles' },
]

export function DeckPage() {
  const [filter, setFilter] = useState<Suit | 'all'>('all')

  const cards = useMemo(() => {
    if (filter === 'all') return DECK
    return DECK.filter((c) => c.suit === filter)
  }, [filter])

  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Deck Library</h1>
        <p>Browse all 78 Rider-Waite-Smith cards.</p>
      </header>

      <div className="filter-row" role="tablist" aria-label="Suit filter">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={`filter-chip${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="deck-grid">
        {cards.map((card) => (
          <Link key={card.id} to={`/deck/${card.id}`} className="deck-tile">
            <CardImage card={card} size="sm" />
            <span className="deck-tile-name">{card.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
