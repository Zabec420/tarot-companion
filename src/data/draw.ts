import { DECK } from './deck'
import type { DrawnCard, TarotCard } from './types'

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Fisher-Yates shuffle of a deck copy, then take the first `count` cards. */
export function drawCards(
  count: number,
  allowReversed = true,
): DrawnCard[] {
  const shuffled = shuffle(DECK)
  const n = Math.min(count, shuffled.length)
  return shuffled.slice(0, n).map((card: TarotCard) => ({
    card,
    reversed: allowReversed ? Math.random() < 0.3 : false,
  }))
}

export function getCardById(id: string): TarotCard | undefined {
  return DECK.find((c) => c.id === id)
}

export function cardsBySuit(suit: TarotCard['suit']): TarotCard[] {
  return DECK.filter((c) => c.suit === suit)
}
