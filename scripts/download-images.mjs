/**
 * Downloads public-domain Rider-Waite-Smith card images from Wikimedia Commons.
 * Run: node scripts/download-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cardsDir = path.join(__dirname, '..', 'public', 'cards')
fs.mkdirSync(cardsDir, { recursive: true })

const majors = [
  ['major-0', 'RWS_Tarot_00_Fool.jpg'],
  ['major-1', 'RWS_Tarot_01_Magician.jpg'],
  ['major-2', 'RWS_Tarot_02_High_Priestess.jpg'],
  ['major-3', 'RWS_Tarot_03_Empress.jpg'],
  ['major-4', 'RWS_Tarot_04_Emperor.jpg'],
  ['major-5', 'RWS_Tarot_05_Hierophant.jpg'],
  ['major-6', 'RWS_Tarot_06_Lovers.jpg'],
  ['major-7', 'RWS_Tarot_07_Chariot.jpg'],
  ['major-8', 'RWS_Tarot_08_Strength.jpg'],
  ['major-9', 'RWS_Tarot_09_Hermit.jpg'],
  ['major-10', 'RWS_Tarot_10_Wheel_of_Fortune.jpg'],
  ['major-11', 'RWS_Tarot_11_Justice.jpg'],
  ['major-12', 'RWS_Tarot_12_Hanged_Man.jpg'],
  ['major-13', 'RWS_Tarot_13_Death.jpg'],
  ['major-14', 'RWS_Tarot_14_Temperance.jpg'],
  ['major-15', 'RWS_Tarot_15_Devil.jpg'],
  ['major-16', 'RWS_Tarot_16_Tower.jpg'],
  ['major-17', 'RWS_Tarot_17_Star.jpg'],
  ['major-18', 'RWS_Tarot_18_Moon.jpg'],
  ['major-19', 'RWS_Tarot_19_Sun.jpg'],
  ['major-20', 'RWS_Tarot_20_Judgement.jpg'],
  ['major-21', 'RWS_Tarot_21_World.jpg'],
]

const suitKeys = {
  wands: 'Wands',
  cups: 'Cups',
  swords: 'Swords',
  pentacles: 'Pents',
}

const ranks = [
  ['ace', '01'],
  ['2', '02'],
  ['3', '03'],
  ['4', '04'],
  ['5', '05'],
  ['6', '06'],
  ['7', '07'],
  ['8', '08'],
  ['9', '09'],
  ['10', '10'],
  ['page', '11'],
  ['knight', '12'],
  ['queen', '13'],
  ['king', '14'],
]

/** Map our deck id -> local filename + commons filename */
const map = []

for (const [id, commons] of majors) {
  map.push({ id, local: `${id}.jpg`, commons })
}

for (const [suit, commonsSuit] of Object.entries(suitKeys)) {
  for (const [rank, num] of ranks) {
    map.push({
      id: `${suit}-${rank}`,
      local: `${suit}-${rank}.jpg`,
      commons: `RWS_Tarot_${commonsSuit}_${num}.jpg`,
    })
  }
}

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'TarotCompanion/1.0 (educational; public-domain RWS)' } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location).then(resolve).catch(reject)
          return
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} ${url}`))
          return
        }
        const chunks = []
        res.on('data', (c) => chunks.push(c))
        res.on('end', () => resolve(Buffer.concat(chunks)))
      })
      .on('error', reject)
  })
}

let ok = 0
let fail = 0
for (const item of map) {
  const dest = path.join(cardsDir, item.local)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
    ok++
    continue
  }
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(item.commons)}?width=480`
  try {
    const buf = await get(url)
    fs.writeFileSync(dest, buf)
    ok++
    process.stdout.write('.')
  } catch (e) {
    fail++
    console.warn(`\n${item.id}: ${e.message}`)
  }
}

// Write image map for the app
const mapOut = path.join(__dirname, '..', 'src', 'data', 'imageMap.ts')
const entries = Object.fromEntries(map.map((m) => [m.id, m.local]))
fs.writeFileSync(
  mapOut,
  `/** Local public-domain RWS image filenames by card id */\nexport const IMAGE_MAP: Record<string, string> = ${JSON.stringify(entries, null, 2)}\n`,
)
console.log(`\nDone. ${ok} images, ${fail} failed. Map written.`)
