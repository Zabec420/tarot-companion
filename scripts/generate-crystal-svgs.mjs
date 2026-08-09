/**
 * Generates distinctive crystal SVGs into public/crystals/
 * Run: node scripts/generate-crystal-svgs.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'crystals')
mkdirSync(outDir, { recursive: true })

/** @type {Record<string, { stops: [string, string, string], accent: string, shape: string }>} */
const SPECS = {
  amethyst: { stops: ['#c9a0ff', '#7b3fb8', '#3b1a6e'], accent: '#e8d4ff', shape: 'cluster' },
  'rose-quartz': { stops: ['#ffd6e8', '#f0a0c0', '#c45a88'], accent: '#fff0f6', shape: 'tumble' },
  'clear-quartz': { stops: ['#ffffff', '#dce8f5', '#9bb0c8'], accent: '#ffffff', shape: 'point' },
  citrine: { stops: ['#ffe9a8', '#f0b429', '#c47a10'], accent: '#fff6d0', shape: 'point' },
  'smoky-quartz': { stops: ['#c4b5a0', '#6e5a48', '#2f241c'], accent: '#ddd0c0', shape: 'point' },
  'black-tourmaline': { stops: ['#4a4a52', '#1a1a1e', '#050506'], accent: '#6a6a72', shape: 'column' },
  obsidian: { stops: ['#3a3a42', '#0c0c10', '#000000'], accent: '#5a6a88', shape: 'mirror' },
  'tigers-eye': { stops: ['#e8c070', '#a86a20', '#4a2e10'], accent: '#f5d898', shape: 'band' },
  'lapis-lazuli': { stops: ['#5a8ad8', '#1e3a8a', '#0c1a4a'], accent: '#d4b45a', shape: 'tumble' },
  malachite: { stops: ['#6fe0a0', '#1a8a4a', '#064020'], accent: '#a8f0c8', shape: 'band' },
  moonstone: { stops: ['#f4f0ff', '#c8d0e8', '#8a90a8'], accent: '#ffffff', shape: 'glow' },
  labradorite: { stops: ['#6a7a88', '#2a3440', '#101820'], accent: '#40e0c0', shape: 'flash' },
  carnelian: { stops: ['#ffb070', '#e05020', '#8a2008'], accent: '#ffd0a0', shape: 'tumble' },
  jade: { stops: ['#90e0a8', '#2f8a58', '#145030'], accent: '#c0f0d0', shape: 'tumble' },
  fluorite: { stops: ['#c090ff', '#50c090', '#4060c0'], accent: '#e8d0ff', shape: 'cube' },
  selenite: { stops: ['#ffffff', '#f0e8ff', '#d0c8e0'], accent: '#ffffff', shape: 'wand' },
  pyrite: { stops: ['#ffe9a0', '#c8a020', '#6a5010'], accent: '#fff6c8', shape: 'cube' },
  hematite: { stops: ['#c8d0d8', '#5a6570', '#1c2228'], accent: '#e0e8f0', shape: 'mirror' },
  'green-aventurine': { stops: ['#b0e090', '#3a9a50', '#1a5028'], accent: '#e0ffc0', shape: 'sparkle' },
  amazonite: { stops: ['#90e0d8', '#2a9a98', '#145858'], accent: '#d0fff8', shape: 'tumble' },
  aquamarine: { stops: ['#c0f0ff', '#50b8d8', '#206888'], accent: '#e8fbff', shape: 'point' },
  garnet: { stops: ['#e07070', '#8a1028', '#400010'], accent: '#ffb0b0', shape: 'facet' },
  turquoise: { stops: ['#70d8d0', '#2a8a9a', '#184858'], accent: '#c8f8f0', shape: 'matrix' },
  celestite: { stops: ['#d8ecff', '#88b8e8', '#4a78b0'], accent: '#ffffff', shape: 'cluster' },
}

function svgFor(id, spec) {
  const { stops, accent, shape } = spec
  const [c1, c2, c3] = stops
  const stone = stonePath(shape)
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 420" role="img" aria-label="${id}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a0b2e"/>
      <stop offset="100%" stop-color="#12081f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="${c2}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#12081f" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="stone" x1="0.2" y1="0" x2="0.85" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="48%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
  </defs>
  <rect width="320" height="420" rx="28" fill="url(#bg)"/>
  <circle cx="160" cy="190" r="150" fill="url(#glow)"/>
  <g transform="translate(160 210)">
    ${stone}
    ${details(shape, accent, c1)}
  </g>
  <text x="160" y="385" text-anchor="middle" fill="${accent}" font-family="Georgia, serif" font-size="15" opacity="0.75">${label(id)}</text>
</svg>`
}

function label(id) {
  return id
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function stonePath(shape) {
  const fill = 'url(#stone)'
  const stroke = 'rgba(255,255,255,0.2)'
  switch (shape) {
    case 'point':
      return `<polygon points="0,-120 52,-20 28,110 -28,110 -52,-20" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <polygon points="0,-120 52,-20 0,-10 -52,-20" fill="url(#sheen)" opacity="0.55"/>`
    case 'cluster':
      return `<polygon points="-40,-30 -10,-130 30,-40 10,20 -30,10" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
        <polygon points="10,-20 55,-110 80,-10 45,40 5,20" fill="${fill}" stroke="${stroke}" stroke-width="1.5" opacity="0.95"/>
        <polygon points="-70,-10 -35,-90 -5,-5 -25,50 -65,35" fill="${fill}" stroke="${stroke}" stroke-width="1.5" opacity="0.9"/>
        <polygon points="-10,-130 30,-40 0,-20 -40,-30" fill="url(#sheen)" opacity="0.4"/>`
    case 'tumble':
      return `<ellipse cx="0" cy="0" rx="88" ry="108" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <ellipse cx="-18" cy="-28" rx="40" ry="55" fill="url(#sheen)" opacity="0.45"/>`
    case 'column':
      return `<polygon points="-36,-120 36,-120 48,110 -48,110" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <line x1="-18" y1="-110" x2="-28" y2="100" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <line x1="8" y1="-110" x2="2" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
        <polygon points="-36,-120 36,-120 20,-95 -20,-95" fill="url(#sheen)" opacity="0.35"/>`
    case 'mirror':
      return `<polygon points="0,-115 78,-35 55,105 -55,105 -78,-35" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <polygon points="-20,-40 30,-70 45,20 -5,40" fill="url(#sheen)" opacity="0.35"/>`
    case 'band':
      return `<ellipse cx="0" cy="0" rx="90" ry="105" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <path d="M-70 -40 Q0 -10 70 -50" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="10"/>
        <path d="M-75 10 Q0 35 75 5" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="12"/>
        <path d="M-60 55 Q5 75 65 45" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="8"/>`
    case 'glow':
      return `<ellipse cx="0" cy="0" rx="86" ry="100" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <ellipse cx="0" cy="-5" rx="50" ry="60" fill="${fill}" opacity="0.5" filter="url(#soft)"/>
        <ellipse cx="-10" cy="-25" rx="28" ry="36" fill="#ffffff" opacity="0.45"/>`
    case 'flash':
      return `<polygon points="0,-110 70,-50 55,95 -55,95 -70,-50" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <polygon points="-15,-20 40,-55 50,10 5,35" fill="#40e0c0" opacity="0.55"/>
        <polygon points="-35,10 10,-15 20,50 -25,60" fill="#80a0ff" opacity="0.35"/>`
    case 'cube':
      return `<polygon points="0,-90 80,-40 80,50 0,100 -80,50 -80,-40" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <polygon points="0,-90 80,-40 0,10 -80,-40" fill="url(#sheen)" opacity="0.4"/>
        <line x1="0" y1="10" x2="0" y2="100" stroke="rgba(0,0,0,0.25)" stroke-width="2"/>
        <line x1="0" y1="10" x2="80" y2="50" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>
        <line x1="0" y1="10" x2="-80" y2="50" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>`
    case 'wand':
      return `<rect x="-28" y="-130" width="56" height="250" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <rect x="-18" y="-120" width="18" height="220" fill="#ffffff" opacity="0.35"/>
        <polygon points="-28,-130 28,-130 18,-145 -18,-145" fill="url(#sheen)" opacity="0.5"/>`
    case 'sparkle':
      return `<ellipse cx="0" cy="0" rx="88" ry="105" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <circle cx="-25" cy="-30" r="4" fill="#ffffff" opacity="0.8"/>
        <circle cx="20" cy="-10" r="3" fill="#ffffff" opacity="0.7"/>
        <circle cx="-5" cy="25" r="3.5" fill="#ffffff" opacity="0.65"/>
        <circle cx="35" cy="30" r="2.5" fill="#ffffff" opacity="0.75"/>
        <ellipse cx="-15" cy="-20" rx="30" ry="40" fill="url(#sheen)" opacity="0.35"/>`
    case 'facet':
      return `<polygon points="0,-115 68,-45 42,95 -42,95 -68,-45" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <polygon points="0,-115 68,-45 0,-15 -68,-45" fill="url(#sheen)" opacity="0.45"/>
        <polygon points="0,-15 42,95 0,55 -42,95" fill="#000000" opacity="0.18"/>`
    case 'matrix':
      return `<ellipse cx="0" cy="0" rx="90" ry="108" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <path d="M-40 -60 L-10 -20 L-35 30 M10 -50 L40 -10 L15 40 M-5 0 L25 55" fill="none" stroke="rgba(40,30,20,0.45)" stroke-width="4"/>
        <ellipse cx="-20" cy="-25" rx="35" ry="45" fill="url(#sheen)" opacity="0.3"/>`
    default:
      return `<ellipse cx="0" cy="0" rx="88" ry="108" fill="${fill}"/>`
  }
}

function details(shape, accent) {
  if (shape === 'flash') {
    return `<circle cx="25" cy="-30" r="6" fill="${accent}" opacity="0.7"/>`
  }
  if (shape === 'tumble' && accent.includes('d4b4')) {
    return `<circle cx="20" cy="10" r="3" fill="${accent}"/><circle cx="-25" cy="35" r="2" fill="${accent}"/><circle cx="5" cy="-40" r="2.5" fill="${accent}"/>`
  }
  return ''
}

let count = 0
for (const [id, spec] of Object.entries(SPECS)) {
  writeFileSync(join(outDir, `${id}.svg`), svgFor(id, spec))
  count++
}
console.log(`Wrote ${count} crystal SVGs to public/crystals`)
