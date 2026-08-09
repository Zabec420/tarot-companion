import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/spreads', label: 'Spreads' },
  { to: '/crystals', label: 'Crystals' },
  { to: '/deck', label: 'Deck' },
  { to: '/journal', label: 'Journal' },
]

export function Layout() {
  return (
    <div className="app-shell">
      <div className="starfield" aria-hidden />
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden>
            ◐
          </span>
          <div className="brand-text">
            <strong>Mystic Companion</strong>
            <span>Tarot · Crystals · Journal</span>
          </div>
        </div>
        <NavLink to="/settings" className="settings-chip">
          Settings
        </NavLink>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <nav className="bottom-nav" aria-label="Main">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `nav-item${isActive ? ' active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
