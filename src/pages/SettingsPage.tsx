import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useJournal } from '../store/JournalContext'

export function SettingsPage() {
  const { state, clearJournal } = useJournal()
  const [cleared, setCleared] = useState(false)

  function handleClear() {
    const ok = window.confirm(
      'Clear all journal readings and notes? This cannot be undone.',
    )
    if (!ok) return
    clearJournal()
    setCleared(true)
  }

  return (
    <div className="page-stack">
      <header className="page-hero">
        <p className="eyebrow">
          <Link to="/">Home</Link>
        </p>
        <h1>Settings</h1>
        <p>Manage your local journal and learn about this deck.</p>
      </header>

      <section className="settings-block">
        <h2>Journal</h2>
        <p>
          You have {state.entries.length} saved{' '}
          {state.entries.length === 1 ? 'reading' : 'readings'} and{' '}
          {state.notes.length}{' '}
          {state.notes.length === 1 ? 'note' : 'notes'} on this device.
        </p>
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          Clear Journal
        </button>
        {cleared && <p className="hint">Journal cleared.</p>}
      </section>

      <section className="settings-block">
        <h2>About</h2>
        <p>
          Tarot Companion is a personal reading and journal app. Card meanings
          are inspired by classic Rider-Waite-Smith symbolism for reflection,
          not prediction.
        </p>
        <p>
          Artwork is based on the public-domain Rider-Waite-Smith deck. Images
          may be bundled under <code>/cards/</code> as{' '}
          <code>{'{id}.jpg'}</code> files (for example <code>major-0.jpg</code>
          ).
        </p>
        <p className="hint">Storage key: tarot-companion-v1</p>
      </section>
    </div>
  )
}
