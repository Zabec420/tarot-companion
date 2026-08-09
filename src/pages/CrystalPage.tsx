import { Link, useParams } from 'react-router-dom'
import { getCrystalById } from '../data/crystals'
import { CrystalDetail } from '../components/CrystalDetail'

export function CrystalPage() {
  const { crystalId = '' } = useParams()
  const crystal = getCrystalById(crystalId)

  if (!crystal) {
    return (
      <div className="page-stack">
        <header className="page-hero">
          <h1>Crystal Not Found</h1>
          <p>That stone is not in the library yet.</p>
        </header>
        <Link to="/crystals" className="btn btn-primary">
          Back To Crystals
        </Link>
      </div>
    )
  }

  return (
    <div className="page-stack">
      <p className="eyebrow">
        <Link to="/crystals">Crystals</Link>
      </p>
      <CrystalDetail crystal={crystal} />
      <Link to="/crystals" className="btn btn-ghost">
        Back To Library
      </Link>
    </div>
  )
}
