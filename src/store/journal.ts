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

export interface JournalState {
  entries: JournalEntry[]
}

export const DEFAULT_JOURNAL: JournalState = {
  entries: [],
}

export function loadJournal(): JournalState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_JOURNAL, entries: [] }
    const parsed = JSON.parse(raw) as Partial<JournalState>
    return {
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
    }
  } catch {
    return { ...DEFAULT_JOURNAL, entries: [] }
  }
}

export function saveJournal(state: JournalState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearJournalStorage(): void {
  localStorage.removeItem(STORAGE_KEY)
}
