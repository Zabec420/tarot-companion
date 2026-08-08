import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CardPage } from './pages/CardPage'
import { DeckPage } from './pages/DeckPage'
import { HomePage } from './pages/HomePage'
import { JournalPage } from './pages/JournalPage'
import { ReadingPage } from './pages/ReadingPage'
import { SettingsPage } from './pages/SettingsPage'
import { SpreadsPage } from './pages/SpreadsPage'
import { JournalProvider } from './store/JournalContext'

export default function App() {
  return (
    <JournalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="spreads" element={<SpreadsPage />} />
            <Route path="reading/:spreadId" element={<ReadingPage />} />
            <Route path="deck" element={<DeckPage />} />
            <Route path="deck/:cardId" element={<CardPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </JournalProvider>
  )
}
