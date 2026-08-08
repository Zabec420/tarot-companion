import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { drawCards } from '../data/draw'
import { getSpread } from '../data/spreads'
import type { DrawnCard } from '../data/types'
import { CardDetail } from '../components/CardDetail'
import { CardImage } from '../components/CardImage'
import { useJournal } from '../store/JournalContext'

export function ReadingPage() {
  const { spreadId = '' } = useParams()
  const spread = useMemo(() => getSpread(spreadId), [spreadId])
  const { saveEntry } = useJournal()
  const [cards, setCards] = useState<DrawnCard[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [notes, setNotes] = useState('')
  const [saved, setSaved] = useState(false)

  if (!spread) {
    return (
      <div className="page-stack">
        <header className="page-hero">
          <h1>Spread Not Found</h1>
          <p>That layout is not available.</p>
        </header>
        <Link to="/spreads" className="btn btn-primary">
          Back To Spreads
        </Link>
      </div>
    )
  }

  function handleDraw() {
    if (!spread) return
    const drawn = drawCards(spread.positions.length, true).map((d, i) => ({
      ...d,
      position: spread.positions[i],
    }))
    setCards(drawn)
    setActiveIndex(0)
    setNotes('')
    setSaved(false)
  }

  function handleSave() {
    if (!cards || !spread) return
    saveEntry({
      spreadId: spread.id,
      spreadName: spread.name,
      cards: cards.map((d) => ({
        cardId: d.card.id,
        cardName: d.card.name,
        reversed: d.reversed,
        position: d.position ?? 'Card',
      })),
      notes: notes.trim(),
    })
    setSaved(true)
  }

  const active = cards?.[activeIndex]

  return (
    <div className="page-stack">
      <header className="page-hero">
        <p className="eyebrow">
          <Link to="/spreads">Spreads</Link>
        </p>
        <h1>{spread.name}</h1>
        <p>{spread.description}</p>
      </header>

      {!cards && (
        <div className="empty-draw">
          <div className="empty-draw-art" aria-hidden>
            ✦
          </div>
          <button type="button" className="btn btn-primary" onClick={handleDraw}>
            New Reading
          </button>
        </div>
      )}

      {cards && (
        <>
          <div className="reading-grid">
            {cards.map((d, i) => (
              <button
                key={`${d.card.id}-${i}`}
                type="button"
                className={`reading-slot${i === activeIndex ? ' active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <span className="reading-slot-label">{d.position}</span>
                <CardImage card={d.card} reversed={d.reversed} size="sm" />
              </button>
            ))}
          </div>

          {active && (
            <CardDetail
              card={active.card}
              reversed={active.reversed}
              position={active.position}
            />
          )}

          <label className="field">
            <span>Journal Note</span>
            <textarea
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value)
                setSaved(false)
              }}
              rows={3}
              placeholder="Capture the story of this reading."
            />
          </label>

          <div className="btn-row">
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              {saved ? 'Saved' : 'Save Reading'}
            </button>
            <button type="button" className="btn btn-ghost" onClick={handleDraw}>
              New Reading
            </button>
          </div>
        </>
      )}
    </div>
  )
}
