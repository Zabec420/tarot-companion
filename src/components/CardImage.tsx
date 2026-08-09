import { useEffect, useState } from 'react'
import { cardImageUrl, type TarotCard } from '../data/types'

interface CardImageProps {
  card: TarotCard
  reversed?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  /** When false, reversed cards snap upright→reversed without CSS spin (default true for grids). */
  animateReverse?: boolean
}

export function CardImage({
  card,
  reversed = false,
  size = 'md',
  className = '',
  animateReverse = true,
}: CardImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setFailed(false)
    setLoaded(false)
  }, [card.id])

  return (
    <div
      className={`card-frame size-${size}${reversed ? ' is-reversed' : ''}${
        animateReverse ? '' : ' no-transform-transition'
      } ${className}`.trim()}
    >
      <div className={`card-frame-inner${loaded || failed ? ' is-ready' : ' is-loading'}`}>
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
            className={`card-img${loaded ? ' is-loaded' : ''}`}
            loading={size === 'lg' ? 'eager' : 'lazy'}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {reversed && <span className="card-badge">Reversed</span>}
    </div>
  )
}
