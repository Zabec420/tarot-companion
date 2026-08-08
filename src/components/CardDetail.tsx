import type { TarotCard } from '../data/types'
import { CardImage } from './CardImage'

interface CardDetailProps {
  card: TarotCard
  reversed?: boolean
  showBothMeanings?: boolean
  position?: string
}

export function CardDetail({
  card,
  reversed = false,
  showBothMeanings = false,
  position,
}: CardDetailProps) {
  const keywords = reversed ? card.keywordsReversed : card.keywordsUpright
  const meaning = reversed ? card.meaningReversed : card.meaningUpright

  return (
    <article className="card-detail">
      {position && <p className="position-label">{position}</p>}
      <CardImage card={card} reversed={reversed} size="lg" />
      <header className="card-detail-header">
        <h2>{card.name}</h2>
        <p className="card-meta">
          {card.arcana === 'major' ? 'Major Arcana' : titleCase(card.suit)}
          {reversed ? ' · Reversed' : ' · Upright'}
        </p>
      </header>
      <p className="card-description">{card.description}</p>
      <div className="keywords">
        {keywords.map((k) => (
          <span key={k} className="keyword-chip">
            {k}
          </span>
        ))}
      </div>
      {!showBothMeanings && (
        <section className="meaning-block">
          <h3>{reversed ? 'Reversed Meaning' : 'Upright Meaning'}</h3>
          <p>{meaning}</p>
        </section>
      )}
      {showBothMeanings && (
        <>
          <section className="meaning-block">
            <h3>Upright</h3>
            <div className="keywords">
              {card.keywordsUpright.map((k) => (
                <span key={`u-${k}`} className="keyword-chip">
                  {k}
                </span>
              ))}
            </div>
            <p>{card.meaningUpright}</p>
          </section>
          <section className="meaning-block">
            <h3>Reversed</h3>
            <div className="keywords">
              {card.keywordsReversed.map((k) => (
                <span key={`r-${k}`} className="keyword-chip">
                  {k}
                </span>
              ))}
            </div>
            <p>{card.meaningReversed}</p>
          </section>
        </>
      )}
    </article>
  )
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
