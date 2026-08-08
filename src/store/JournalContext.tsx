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
  type JournalNote,
  type JournalState,
} from './journal'

interface JournalContextValue {
  state: JournalState
  saveEntry: (
    entry: Omit<JournalEntry, 'id' | 'createdAt'> & { id?: string },
  ) => string
  deleteEntry: (id: string) => void
  saveNote: (input: {
    id?: string
    title: string
    body: string
    mood?: string
  }) => string
  deleteNote: (id: string) => void
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
          ...prev,
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
        ...prev,
        entries: prev.entries.filter((e) => e.id !== id),
      }),
    )
  }, [])

  const saveNote = useCallback(
    (input: { id?: string; title: string; body: string; mood?: string }) => {
      const now = new Date().toISOString()
      const id = input.id ?? `note-${Date.now()}`
      setState((prev) => {
        const existing = prev.notes.find((n) => n.id === id)
        const full: JournalNote = {
          id,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
          title: input.title.trim() || 'Untitled Note',
          body: input.body.trim(),
          mood: input.mood?.trim() || undefined,
        }
        const notes = existing
          ? prev.notes.map((n) => (n.id === id ? full : n))
          : [full, ...prev.notes]
        return persist({ ...prev, notes })
      })
      return id
    },
    [],
  )

  const deleteNote = useCallback((id: string) => {
    setState((prev) =>
      persist({
        ...prev,
        notes: prev.notes.filter((n) => n.id !== id),
      }),
    )
  }, [])

  const clearJournal = useCallback(() => {
    clearJournalStorage()
    setState({ entries: [], notes: [] })
  }, [])

  const value = useMemo(
    () => ({
      state,
      saveEntry,
      deleteEntry,
      saveNote,
      deleteNote,
      clearJournal,
    }),
    [state, saveEntry, deleteEntry, saveNote, deleteNote, clearJournal],
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
