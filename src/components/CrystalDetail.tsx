import type { Crystal } from '../data/crystalTypes'
import { CrystalImage } from './CrystalImage'

interface CrystalDetailProps {
  crystal: Crystal
}

export function CrystalDetail({ crystal }: CrystalDetailProps) {
  return (
    <article className="crystal-detail">
      <CrystalImage crystal={crystal} size="lg" />
      <header className="card-detail-header">
        <h2>{crystal.name}</h2>
        <p className="card-meta">
          {crystal.color}
          {crystal.alsoCalled ? ` · Also called ${crystal.alsoCalled}` : ''}
        </p>
      </header>
      <p className="card-description">{crystal.description}</p>
      <div className="keywords">
        {crystal.intentions.map((item) => (
          <span key={item} className="keyword-chip">
            {item}
          </span>
        ))}
      </div>
      <dl className="crystal-facts">
        <div>
          <dt>Chakra</dt>
          <dd>{crystal.chakra}</dd>
        </div>
        <div>
          <dt>Element</dt>
          <dd>{crystal.element}</dd>
        </div>
        <div>
          <dt>Family</dt>
          <dd>{titleCase(crystal.family)}</dd>
        </div>
      </dl>
      <section className="meaning-block">
        <h3>Properties</h3>
        <p>{crystal.properties}</p>
      </section>
      <section className="meaning-block">
        <h3>How To Use</h3>
        <p>{crystal.howToUse}</p>
      </section>
      <section className="meaning-block">
        <h3>Care</h3>
        <p>{crystal.care}</p>
      </section>
    </article>
  )
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
