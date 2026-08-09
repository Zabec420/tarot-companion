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
        <p>Manage your local journal and learn about this companion app.</p>
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
          Mystic Companion brings tarot and crystals together for reflection:
          daily pulls, spreads, a crystal library, and a private journal on this
          device.
        </p>
        <p>
          Tarot meanings are inspired by classic Rider-Waite-Smith symbolism.
          Crystal notes cover common stones for intention, care, and everyday
          practice. Neither is presented as prediction or medical advice.
        </p>
        <p>
          Card artwork is based on the public-domain Rider-Waite-Smith deck
          under <code>/cards/</code>. Crystal art lives under{' '}
          <code>/crystals/</code>.
        </p>
        <p className="hint">Storage key: tarot-companion-v1</p>
      </section>
    </div>
  )
}
