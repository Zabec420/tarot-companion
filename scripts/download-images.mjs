/**
 * Downloads public-domain Rider-Waite images from mixvlad/TarotCards (Wikimedia-sourced).
 * Run: node scripts/download-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cardsDir = path.join(__dirname, '..', 'public', 'cards')
fs.mkdirSync(cardsDir, { recursive: true })

const RAW =
  'https://raw.githubusercontent.com/mixvlad/TarotCards/main/tarot/rider-waite/720px'

const majors = [
  ['major-0', '00_Fool.jpg'],
  ['major-1', '01_Magician.jpg'],
  ['major-2', '02_High_Priestess.jpg'],
  ['major-3', '03_Empress.jpg'],
  ['major-4', '04_Emperor.jpg'],
  ['major-5', '05_Hierophant.jpg'],
  ['major-6', '06_Lovers.jpg'],
  ['major-7', '07_Chariot.jpg'],
  ['major-8', '08_Strength.jpg'],
  ['major-9', '09_Hermit.jpg'],
  ['major-10', '10_Wheel_of_Fortune.jpg'],
  ['major-11', '11_Justice.jpg'],
  ['major-12', '12_Hanged_Man.jpg'],
  ['major-13', '13_Death.jpg'],
  ['major-14', '14_Temperance.jpg'],
  ['major-15', '15_Devil.jpg'],
  ['major-16', '16_Tower.jpg'],
  ['major-17', '17_Star.jpg'],
  ['major-18', '18_Moon.jpg'],
  ['major-19', '19_Sun.jpg'],
  ['major-20', '20_Judgement.jpg'],
  ['major-21', '21_World.jpg'],
]

const ranks = [
  'ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'page',
  'knight',
  'queen',
  'king',
]

const suitPrefix = {
  wands: 'Wands',
  cups: 'Cups',
  swords: 'Swords',
  pentacles: 'Pents',
}

const map = []
for (const [id, remote] of majors) {
  map.push({ id, local: `${id}.jpg`, remote })
}
for (const [suit, prefix] of Object.entries(suitPrefix)) {
  ranks.forEach((rank, i) => {
    const n = String(i + 1).padStart(2, '0')
    map.push({
      id: `${suit}-${rank}`,
      local: `${suit}-${rank}.jpg`,
      remote: `${prefix}${n}.jpg`,
    })
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, { headers: { 'User-Agent': 'TarotCompanion/1.0' } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close()
          fs.unlink(dest, () => {})
          download(res.headers.location, dest).then(resolve).catch(reject)
          return
        }
        if (res.statusCode !== 200) {
          file.close()
          fs.unlink(dest, () => {})
          reject(new Error(`HTTP ${res.statusCode}`))
          return
        }
        res.pipe(file)
        file.on('finish', () => file.close(() => resolve()))
      })
      .on('error', (err) => {
        file.close()
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

let ok = 0
let fail = 0
for (const item of map) {
  const dest = path.join(cardsDir, item.local)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 8000) {
    ok++
    continue
  }
  const url = `${RAW}/${item.remote}`
  try {
    await download(url, dest)
    ok++
    process.stdout.write('.')
  } catch (e) {
    fail++
    console.warn(`\n${item.id} (${item.remote}): ${e.message}`)
  }
}

// Remove leftover test file if present
const testFool = path.join(cardsDir, 'test-fool.jpg')
if (fs.existsSync(testFool)) fs.unlinkSync(testFool)

const entries = Object.fromEntries(map.map((m) => [m.id, m.local]))
fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'imageMap.ts'),
  `/** Local public-domain RWS image filenames by card id */\nexport const IMAGE_MAP: Record<string, string> = ${JSON.stringify(entries, null, 2)}\n`,
)

console.log(`\nDone. ${ok}/78 images ready, ${fail} failed.`)
if (ok < 78) process.exitCode = 1
