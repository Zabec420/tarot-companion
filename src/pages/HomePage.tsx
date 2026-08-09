import { useState } from 'react'
import { Link } from 'react-router-dom'
import { drawCards } from '../data/draw'
import type { DrawnCard } from '../data/types'
import { CardDetail } from '../components/CardDetail'
import { DrawReveal } from '../components/DrawReveal'
import { useJournal } from '../store/JournalContext'

export function HomePage() {
  const { saveEntry } = useJournal()
  const [drawn, setDrawn] = useState<DrawnCard | null>(null)
  const [notes, setNotes] = useState('')
  const [saved, setSaved] = useState(false)

  function handleDraw() {
    const [card] = drawCards(1, true)
    setDrawn(card)
    setNotes('')
    setSaved(false)
  }

  function handleSave() {
    if (!drawn) return
    saveEntry({
      spreadId: 'daily',
      spreadName: 'Daily Pull',
      cards: [
        {
          cardId: drawn.card.id,
          cardName: drawn.card.name,
          reversed: drawn.reversed,
          position: 'Daily Card',
        },
      ],
      notes: notes.trim(),
    })
    setSaved(true)
  }

  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Daily Pull</h1>
        <p>Draw a card for today, or explore crystals and gems beside the deck.</p>
      </header>

      <div className="home-links">
        <Link to="/crystals" className="home-link-card">
          <span className="home-link-mark" aria-hidden>
            ✦
          </span>
          <span>
            <strong>Crystals & Gems</strong>
            <small>Common stones, meanings, and care</small>
          </span>
        </Link>
        <Link to="/spreads" className="home-link-card">
          <span className="home-link-mark" aria-hidden>
            ✧
          </span>
          <span>
            <strong>Spreads</strong>
            <small>Single, three card, Celtic Cross</small>
          </span>
        </Link>
      </div>

      {!drawn && (
        <div className="empty-draw">
          <div className="empty-draw-art" aria-hidden>
            ◐
          </div>
          <button type="button" className="btn btn-primary" onClick={handleDraw}>
            Draw Card
          </button>
        </div>
      )}

      {drawn && (
        <>
          <DrawReveal drawn={drawn}>
            <CardDetail
              card={drawn.card}
              reversed={drawn.reversed}
              position="Daily Card"
              hideImage
            />
          </DrawReveal>
          <label className="field">
            <span>Journal Note</span>
            <textarea
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value)
                setSaved(false)
              }}
              rows={3}
              placeholder="What does this card ask of you today?"
            />
          </label>
          <div className="btn-row">
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              {saved ? 'Saved' : 'Save Reading'}
            </button>
            <button type="button" className="btn btn-ghost" onClick={handleDraw}>
              Draw Again
            </button>
          </div>
        </>
      )}
    </div>
  )
}
