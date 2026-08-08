const STORAGE_KEY = 'tarot-companion-v1'

export interface JournalCardRef {
  cardId: string
  cardName: string
  reversed: boolean
  position: string
}

export interface JournalEntry {
  id: string
  createdAt: string
  spreadId: string
  spreadName: string
  cards: JournalCardRef[]
  notes: string
}

/** Freeform diary note (not tied to a reading) */
export interface JournalNote {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  body: string
  mood?: string
}

export interface JournalState {
  entries: JournalEntry[]
  notes: JournalNote[]
}

export const DEFAULT_JOURNAL: JournalState = {
  entries: [],
  notes: [],
}

export function loadJournal(): JournalState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { entries: [], notes: [] }
    const parsed = JSON.parse(raw) as Partial<JournalState>
    return {
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
      notes: Array.isArray(parsed.notes) ? parsed.notes : [],
    }
  } catch {
    return { entries: [], notes: [] }
  }
}

export function saveJournal(state: JournalState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearJournalStorage(): void {
  localStorage.removeItem(STORAGE_KEY)
}
