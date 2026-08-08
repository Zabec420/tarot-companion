import { IMAGE_MAP } from './imageMap'

export type Suit =
  | 'major'
  | 'wands'
  | 'cups'
  | 'swords'
  | 'pentacles'

export type Arcana = 'major' | 'minor'

export interface TarotCard {
  id: string
  name: string
  arcana: Arcana
  suit: Suit
  number: number | null
  rank?: string
  imageFile: string
  keywordsUpright: string[]
  keywordsReversed: string[]
  meaningUpright: string
  meaningReversed: string
  description: string
}

export interface DrawnCard {
  card: TarotCard
  reversed: boolean
  position?: string
}

/** Local card image path. Files are named `{id}.jpg` after download (e.g. major-0.jpg). */
export function cardImageUrl(card: TarotCard): string {
  const file = IMAGE_MAP[card.id] || `${card.id}.jpg`
  return `/cards/${file}`
}
