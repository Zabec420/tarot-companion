import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useJournal } from '../store/JournalContext'
import type { JournalNote } from '../store/journal'

type Tab = 'notes' | 'readings'

const MOODS = ['Reflective', 'Hopeful', 'Heavy', 'Curious', 'Grateful', 'Uncertain']

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return iso
  }
}

export function JournalPage() {
  const { state, deleteEntry, saveNote, deleteNote } = useJournal()
  const [tab, setTab] = useState<Tab>('notes')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [mood, setMood] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [savedFlash, setSavedFlash] = useState(false)

  const entries = state.entries
  const notes = state.notes

  function startEdit(note: JournalNote) {
    setEditingId(note.id)
    setTitle(note.title)
    setBody(note.body)
    setMood(note.mood ?? '')
    setTab('notes')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetForm() {
    setEditingId(null)
    setTitle('')
    setBody('')
    setMood('')
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!body.trim()) return
    saveNote({
      id: editingId ?? undefined,
      title,
      body,
      mood: mood || undefined,
    })
    resetForm()
    setSavedFlash(true)
    window.setTimeout(() => setSavedFlash(false), 1800)
  }

  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Journal</h1>
        <p>Write free notes, and keep saved readings in one place.</p>
      </header>

      <div className="journal-tabs" role="tablist" aria-label="Journal sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'notes'}
          className={`journal-tab${tab === 'notes' ? ' active' : ''}`}
          onClick={() => setTab('notes')}
        >
          Notes ({notes.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'readings'}
          className={`journal-tab${tab === 'readings' ? ' active' : ''}`}
          onClick={() => setTab('readings')}
        >
          Readings ({entries.length})
        </button>
      </div>

      {tab === 'notes' && (
        <>
          <form className="card-panel note-composer stack-gap" onSubmit={onSubmit}>
            <h2 className="section-title">
              {editingId ? 'Edit Note' : 'New Note'}
            </h2>
            <label className="field">
              <span>Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Moon thoughts, dream, intention…"
              />
            </label>
            <label className="field">
              <span>Mood (Optional)</span>
              <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">None</option>
                {MOODS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Your Words</span>
              <textarea
                rows={7}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write freely. What came up in the reading, in your body, in the day…"
                required
              />
            </label>
            <div className="btn-row">
              <button type="submit" className="btn btn-primary" disabled={!body.trim()}>
                {editingId ? 'Update Note' : 'Save Note'}
              </button>
              {editingId && (
                <button type="button" className="btn btn-ghost" onClick={resetForm}>
                  Cancel Edit
                </button>
              )}
            </div>
            {savedFlash && <p className="hint">Note saved on this device.</p>}
          </form>

          {notes.length === 0 ? (
            <div className="empty-state">
              <p>No freeform notes yet. Capture a feeling, dream, or reflection above.</p>
            </div>
          ) : (
            <ul className="journal-list">
              {notes.map((note) => (
                <li key={note.id} className="journal-entry">
                  <header>
                    <h2>{note.title}</h2>
                    <time dateTime={note.updatedAt}>
                      {formatDate(note.updatedAt)}
                    </time>
                  </header>
                  {note.mood && <span className="mood-chip">{note.mood}</span>}
                  <p className="journal-notes note-body">{note.body}</p>
                  <div className="btn-row">
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => startEdit(note)}
                    >
                      Edit Note
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger-ghost"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete Note
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {tab === 'readings' && (
        <>
          {entries.length === 0 ? (
            <div className="empty-state">
              <p>No readings yet. Draw a daily card or open a spread.</p>
              <div className="btn-row">
                <Link to="/" className="btn btn-primary">
                  Daily Pull
                </Link>
                <Link to="/spreads" className="btn btn-ghost">
                  Spreads
                </Link>
              </div>
            </div>
          ) : (
            <ul className="journal-list">
              {entries.map((entry) => (
                <li key={entry.id} className="journal-entry">
                  <header>
                    <h2>{entry.spreadName}</h2>
                    <time dateTime={entry.createdAt}>
                      {formatDate(entry.createdAt)}
                    </time>
                  </header>
                  <ul className="journal-cards">
                    {entry.cards.map((c, i) => (
                      <li key={`${c.cardId}-${i}`}>
                        <strong>{c.position}</strong>
                        <span>
                          {c.cardName}
                          {c.reversed ? ' (Reversed)' : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {entry.notes && <p className="journal-notes">{entry.notes}</p>}
                  <button
                    type="button"
                    className="btn btn-danger-ghost"
                    onClick={() => deleteEntry(entry.id)}
                  >
                    Delete Reading
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
