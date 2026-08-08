import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  clearJournalStorage,
  loadJournal,
  saveJournal,
  type JournalEntry,
  type JournalState,
} from './journal'

interface JournalContextValue {
  state: JournalState
  saveEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt'> & { id?: string }) => string
  deleteEntry: (id: string) => void
  clearJournal: () => void
}

const JournalContext = createContext<JournalContextValue | null>(null)

function persist(next: JournalState) {
  saveJournal(next)
  return next
}

export function JournalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<JournalState>(() => loadJournal())

  const saveEntry = useCallback(
    (entry: Omit<JournalEntry, 'id' | 'createdAt'> & { id?: string }) => {
      const id = entry.id ?? `reading-${Date.now()}`
      const createdAt = new Date().toISOString()
      const full: JournalEntry = {
        id,
        createdAt,
        spreadId: entry.spreadId,
        spreadName: entry.spreadName,
        cards: entry.cards,
        notes: entry.notes,
      }
      setState((prev) =>
        persist({
          entries: [full, ...prev.entries.filter((e) => e.id !== id)],
        }),
      )
      return id
    },
    [],
  )

  const deleteEntry = useCallback((id: string) => {
    setState((prev) =>
      persist({
        entries: prev.entries.filter((e) => e.id !== id),
      }),
    )
  }, [])

  const clearJournal = useCallback(() => {
    clearJournalStorage()
    setState({ entries: [] })
  }, [])

  const value = useMemo(
    () => ({
      state,
      saveEntry,
      deleteEntry,
      clearJournal,
    }),
    [state, saveEntry, deleteEntry, clearJournal],
  )

  return (
    <JournalContext.Provider value={value}>{children}</JournalContext.Provider>
  )
}

export function useJournal() {
  const ctx = useContext(JournalContext)
  if (!ctx) throw new Error('useJournal must be used within JournalProvider')
  return ctx
}
