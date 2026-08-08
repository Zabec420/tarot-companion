import { Link } from 'react-router-dom'
import { useJournal } from '../store/JournalContext'

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
  const { state, deleteEntry } = useJournal()
  const entries = state.entries

  return (
    <div className="page-stack">
      <header className="page-hero">
        <h1>Journal</h1>
        <p>Saved readings live on this device.</p>
      </header>

      {entries.length === 0 && (
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
      )}

      <ul className="journal-list">
        {entries.map((entry) => (
          <li key={entry.id} className="journal-entry">
            <header>
              <h2>{entry.spreadName}</h2>
              <time dateTime={entry.createdAt}>{formatDate(entry.createdAt)}</time>
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
              Delete Entry
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
