import { useEffect, useState, type ReactNode } from 'react'
import type { DrawnCard } from '../data/types'
import { CardImage } from './CardImage'

interface DrawRevealProps {
  drawn: DrawnCard
  size?: 'md' | 'lg'
  children?: ReactNode
}

/** Flip-in reveal so the card does not snap or re-spin on reverse. */
export function DrawReveal({ drawn, size = 'lg', children }: DrawRevealProps) {
  const [phase, setPhase] = useState<'flipping' | 'shown'>('flipping')

  useEffect(() => {
    setPhase('flipping')
    const id = window.setTimeout(() => setPhase('shown'), 650)
    return () => window.clearTimeout(id)
  }, [drawn.card.id, drawn.reversed])

  return (
    <div className="draw-reveal">
      <div
        className={`draw-reveal-stage${phase === 'flipping' ? ' is-flipping' : ' is-shown'}`}
        key={`${drawn.card.id}-${drawn.reversed ? 'r' : 'u'}`}
      >
        <div className="draw-reveal-face draw-reveal-back" aria-hidden>
          <div className={`card-frame size-${size}`}>
            <div className="card-frame-inner card-back-face">
              <span className="card-back-moon">◐</span>
            </div>
          </div>
        </div>
        <div className="draw-reveal-face draw-reveal-front">
          <CardImage
            card={drawn.card}
            reversed={drawn.reversed}
            size={size}
            animateReverse={false}
          />
        </div>
      </div>
      {phase === 'shown' && children}
    </div>
  )
}
