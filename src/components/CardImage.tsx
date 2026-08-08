import { useState } from 'react'
import { cardImageUrl, type TarotCard } from '../data/types'

interface CardImageProps {
  card: TarotCard
  reversed?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CardImage({
  card,
  reversed = false,
  size = 'md',
  className = '',
}: CardImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`card-frame size-${size}${reversed ? ' is-reversed' : ''} ${className}`.trim()}
    >
      <div className="card-frame-inner">
        {failed ? (
          <div className="card-placeholder" role="img" aria-label={card.name}>
            <span className="card-placeholder-moon" aria-hidden>
              ◐
            </span>
            <span className="card-placeholder-name">{card.name}</span>
          </div>
        ) : (
          <img
            src={cardImageUrl(card)}
            alt={card.name}
            className="card-img"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {reversed && <span className="card-badge">Reversed</span>}
    </div>
  )
}
