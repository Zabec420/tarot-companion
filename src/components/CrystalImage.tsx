import { useState } from 'react'
import { crystalImageUrl, type Crystal } from '../data/crystalTypes'

interface CrystalImageProps {
  crystal: Crystal
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CrystalImage({
  crystal,
  size = 'md',
  className = '',
}: CrystalImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`crystal-frame size-${size} ${className}`.trim()}>
      <div className="crystal-frame-inner">
        {failed ? (
          <div className="crystal-placeholder" role="img" aria-label={crystal.name}>
            <span className="crystal-placeholder-gem" aria-hidden>
              ✦
            </span>
            <span>{crystal.name}</span>
          </div>
        ) : (
          <img
            src={crystalImageUrl(crystal)}
            alt={crystal.name}
            className="crystal-img"
            loading={size === 'lg' ? 'eager' : 'lazy'}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}
