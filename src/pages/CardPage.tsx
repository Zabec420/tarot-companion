import { Link, useParams } from 'react-router-dom'
import { getCardById } from '../data/draw'
import { CardDetail } from '../components/CardDetail'

export function CardPage() {
  const { cardId = '' } = useParams()
  const card = getCardById(cardId)

  if (!card) {
    return (
      <div className="page-stack">
        <header className="page-hero">
          <h1>Card Not Found</h1>
          <p>That card is not in the deck.</p>
        </header>
        <Link to="/deck" className="btn btn-primary">
          Back To Deck
        </Link>
      </div>
    )
  }

  return (
    <div className="page-stack">
      <p className="eyebrow">
        <Link to="/deck">Deck Library</Link>
      </p>
      <CardDetail card={card} showBothMeanings />
    </div>
  )
}
