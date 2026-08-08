/**
 * Generates src/data/deck.ts with all 78 RWS cards + downloads public-domain images.
 * Run: node scripts/build-deck.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const cardsDir = path.join(root, 'public', 'cards')
const outFile = path.join(root, 'src', 'data', 'deck.ts')

fs.mkdirSync(cardsDir, { recursive: true })

const majors = [
  ['0', 'The Fool', 'ar00.jpg', ['Beginnings', 'Faith', 'Adventure'], ['Recklessness', 'Naivety', 'Hesitation'],
    'A leap into the unknown. Trust the journey, stay open, and begin before you feel ready.',
    'Fear of change or careless risk. Pause, ground yourself, then choose with intention.',
    'A traveler at the cliff edge, face bright toward possibility.'],
  ['1', 'The Magician', 'ar01.jpg', ['Will', 'Skill', 'Manifestation'], ['Manipulation', 'Scattered energy', 'Trickery'],
    'You have the tools. Focus intention and turn ideas into form.',
    'Misused talent or blocked will. Reclaim honesty and concentrate your power.',
    'One hand skyward, one to earth: as above, so below.'],
  ['2', 'The High Priestess', 'ar02.jpg', ['Intuition', 'Mystery', 'Inner knowing'], ['Secrets', 'Silence', 'Disconnection'],
    'Listen beneath the noise. Answers live in stillness and dream.',
    'Ignoring intuition or hiding truth. Soften defenses and look within.',
    'Seated between pillars, keeper of the veiled temple.'],
  ['3', 'The Empress', 'ar03.jpg', ['Abundance', 'Nurture', 'Creation'], ['Smothering', 'Dependence', 'Creative block'],
    'Grow what you love. Care, beauty, and fertile creativity surround you.',
    'Overgiving or creative drought. Restore pleasure without self-erasure.',
    'A sovereign of nature, crowned in harvest and warmth.'],
  ['4', 'The Emperor', 'ar04.jpg', ['Structure', 'Authority', 'Stability'], ['Rigidity', 'Control', 'Domination'],
    'Build strong foundations. Leadership through clear boundaries.',
    'Inflexibility or power struggles. Soften the armor without losing spine.',
    'A throne of stone, order made visible.'],
  ['5', 'The Hierophant', 'ar05.jpg', ['Tradition', 'Teaching', 'Shared values'], ['Dogma', 'Conformity', 'Rebellion without wisdom'],
    'Seek guidance, ritual, or a trusted teacher. Belonging through shared meaning.',
    'Blind rule-following or rejecting all structure. Find living wisdom, not empty form.',
    'A bridge between heaven and the community of seekers.'],
  ['6', 'The Lovers', 'ar06.jpg', ['Union', 'Choice', 'Alignment'], ['Disharmony', 'Indecision', 'Misaligned values'],
    'A meaningful bond or a values-based choice. Choose what matches your soul.',
    'Temptation away from truth, or a relationship out of tune. Clarify what you stand for.',
    'Two figures blessed beneath an angel of air.'],
  ['7', 'The Chariot', 'ar07.jpg', ['Drive', 'Victory', 'Direction'], ['Aggression', 'Lack of control', 'Drift'],
    'Harness opposing forces and move forward with purpose.',
    'Force without focus, or stalled will. Realign the reins.',
    'A warrior of will steering sphinxes toward triumph.'],
  ['8', 'Strength', 'ar08.jpg', ['Courage', 'Compassion', 'Gentle power'], ['Self-doubt', 'Force', 'Inner unrest'],
    'Meet challenge with soft courage. Love tames what fear cannot.',
    'Harshness toward self or others. Return to patience and heart.',
    'A woman and lion in quiet communion.'],
  ['9', 'The Hermit', 'ar09.jpg', ['Solitude', 'Wisdom', 'Guidance'], ['Isolation', 'Withdrawal', 'Lost path'],
    'Step back to hear your own lantern. Wisdom ripens in quiet.',
    'Loneliness or avoidance. Seek solitude that nourishes, not hides.',
    'A lantern on the mountain path.'],
  ['10', 'Wheel of Fortune', 'ar10.jpg', ['Cycles', 'Destiny', 'Turning point'], ['Resistance', 'Bad luck story', 'Stagnation'],
    'A turn of fate. Ride the wheel with awareness; change is alive.',
    'Clinging as the wheel moves. Release the old story.',
    'The cosmic wheel spins angels, beasts, and letters of mystery.'],
  ['11', 'Justice', 'ar11.jpg', ['Truth', 'Fairness', 'Accountability'], ['Bias', 'Avoidance', 'Harsh judgment'],
    'Cause meets effect. Speak truth and make amends where needed.',
    'Denial or unfairness. Balance the scales with honesty.',
    'Sword and scales in clear light.'],
  ['12', 'The Hanged Man', 'ar12.jpg', ['Surrender', 'New perspective', 'Pause'], ['Stalling', 'Martyrdom', 'Indecision'],
    'Hang upside down willingly. Insight comes when you stop forcing.',
    'Stuck sacrifice or delay without wisdom. Choose conscious pause.',
    'Suspended in trust, seeing the world renewed.'],
  ['13', 'Death', 'ar13.jpg', ['Ending', 'Transformation', 'Release'], ['Resistance', 'Fear of change', 'Decay without rebirth'],
    'Something completes so something new can live. Let go cleanly.',
    'Refusing necessary endings. Compost the old life.',
    'A pale horse and sunrise beyond the gate.'],
  ['14', 'Temperance', 'ar14.jpg', ['Balance', 'Alchemy', 'Patience'], ['Excess', 'Impatience', 'Imbalance'],
    'Blend opposites slowly. Healing is a measured pour.',
    'Extremes or rushing the brew. Return to the middle path.',
    'An angel mixes waters between cups.'],
  ['15', 'The Devil', 'ar15.jpg', ['Shadow', 'Attachment', 'Desire'], ['Bondage', 'Addiction', 'Obsession'],
    'Name the chain. Desire and shadow hold lessons if faced.',
    'Feeling trapped by habit or fear. The chains are looser than they look.',
    'Torchlight on the material underworld.'],
  ['16', 'The Tower', 'ar16.jpg', ['Upheaval', 'Revelation', 'Breakthrough'], ['Chaos', 'Denial', 'Delayed collapse'],
    'False structures fall. Truth arrives as lightning.',
    'Resisting a needed shake-up. Better a clean break than a slow crack.',
    'Crown and flame, liberation through rupture.'],
  ['17', 'The Star', 'ar17.jpg', ['Hope', 'Healing', 'Inspiration'], ['Discouragement', 'Disconnection', 'Fading faith'],
    'After the storm, soft light. Renew hope and pour healing outward.',
    'Cynicism or depleted spirit. Look up; water still flows.',
    'A nude figure under open sky, pouring stars to earth.'],
  ['18', 'The Moon', 'ar18.jpg', ['Dreams', 'Illusion', 'Deep psyche'], ['Confusion', 'Anxiety', 'Deception'],
    'Walk by moonlight. Trust intuition through fog and feeling.',
    'Fear stories or unclear seeing. Wait for dawn before deciding.',
    'A path between dogs and towers under a watching moon.'],
  ['19', 'The Sun', 'ar19.jpg', ['Joy', 'Clarity', 'Vitality'], ['Temporary cloud', 'Ego glare', 'Burnout brightness'],
    'Warm success and simple happiness. Stand in clear light.',
    'Overexposure or forced cheer. Rest, then shine again.',
    'A child of light beneath a generous sun.'],
  ['20', 'Judgement', 'ar20.jpg', ['Awakening', 'Calling', 'Reckoning'], ['Self-criticism', 'Refusal to rise', 'Guilt'],
    'Hear the call. Rise into a truer life chapter.',
    'Ignoring the summons or drowning in guilt. Forgive and ascend.',
    'Trumpets and rising souls at the threshold.'],
  ['21', 'The World', 'ar21.jpg', ['Completion', 'Wholeness', 'Integration'], ['Incompletion', 'Delay', 'Scattered ends'],
    'A cycle completes. Celebrate mastery and step into the next dance.',
    'Loose threads or fear of finishing. Close the circle.',
    'The dancer within the wreath of fulfillment.'],
]

const suitMeta = {
  wands: {
    element: 'Fire',
    theme: 'passion, will, creativity, and momentum',
    files: {
      ace: 'waac.jpg',
      2: 'wa02.jpg', 3: 'wa03.jpg', 4: 'wa04.jpg', 5: 'wa05.jpg',
      6: 'wa06.jpg', 7: 'wa07.jpg', 8: 'wa08.jpg', 9: 'wa09.jpg', 10: 'wa10.jpg',
      page: 'wapa.jpg', knight: 'wakn.jpg', queen: 'waqu.jpg', king: 'waki.jpg',
    },
  },
  cups: {
    element: 'Water',
    theme: 'emotion, love, intuition, and relationships',
    files: {
      ace: 'cuac.jpg',
      2: 'cu02.jpg', 3: 'cu03.jpg', 4: 'cu04.jpg', 5: 'cu05.jpg',
      6: 'cu06.jpg', 7: 'cu07.jpg', 8: 'cu08.jpg', 9: 'cu09.jpg', 10: 'cu10.jpg',
      page: 'cupa.jpg', knight: 'cukn.jpg', queen: 'cuqu.jpg', king: 'cuki.jpg',
    },
  },
  swords: {
    element: 'Air',
    theme: 'thought, truth, conflict, and clarity',
    files: {
      ace: 'swac.jpg',
      2: 'sw02.jpg', 3: 'sw03.jpg', 4: 'sw04.jpg', 5: 'sw05.jpg',
      6: 'sw06.jpg', 7: 'sw07.jpg', 8: 'sw08.jpg', 9: 'sw09.jpg', 10: 'sw10.jpg',
      page: 'swpa.jpg', knight: 'swkn.jpg', queen: 'swqu.jpg', king: 'swki.jpg',
    },
  },
  pentacles: {
    element: 'Earth',
    theme: 'body, work, money, and the material world',
    files: {
      ace: 'peac.jpg',
      2: 'pe02.jpg', 3: 'pe03.jpg', 4: 'pe04.jpg', 5: 'pe05.jpg',
      6: 'pe06.jpg', 7: 'pe07.jpg', 8: 'pe08.jpg', 9: 'pe09.jpg', 10: 'pe10.jpg',
      page: 'pepa.jpg', knight: 'pekn.jpg', queen: 'pequ.jpg', king: 'peki.jpg',
    },
  },
}

const pipMeanings = {
  wands: {
    ace: [['Spark', 'Inspiration', 'New passion'], ['Delay', 'False start', 'Blocked drive'], 'A gift of fire arrives. Begin the creative quest.', 'The spark sputters. Clear clutter before lighting the next match.'],
    2: [['Planning', 'Future vision', 'Choice'], ['Fear of unknown', 'Indecision', 'Restlessness'], 'Look toward distant horizons and choose a bold path.', 'Stuck between options. Commit or consciously wait.'],
    3: [['Expansion', 'Foresight', 'Teamwork'], ['Obstacles', 'Short-sightedness', 'Delay'], 'Ships on the horizon. Growth through vision and collaboration.', 'Plans stall. Recalibrate and ask for help.'],
    4: [['Celebration', 'Homecoming', 'Harmony'], ['Tension at home', 'Unstable foundations', 'Postponed joy'], 'Raise a wreath of joy. Celebrate community and belonging.', 'Festivity delayed or home unsettled. Repair the foundation.'],
    5: [['Conflict', 'Competition', 'Chaos'], ['Avoidance', 'Inner conflict', 'Resolution forming'], 'Crossed wands: lively struggle that can sharpen you.', 'Conflict going underground. Name it to free energy.'],
    6: [['Victory', 'Recognition', 'Progress'], ['Ego', 'Private win', 'Delayed praise'], 'Ride forward after success. Let yourself be seen.', 'Victory feels hollow or unseen. Affirm your own worth.'],
    7: [['Courage', 'Defense', 'Standing firm'], ['Overwhelm', 'Giving up', 'Feeling outnumbered'], 'Hold the high ground. Defend what matters.', 'Too many battles. Choose which hill is yours.'],
    8: [['Swiftness', 'Messages', 'Movement'], ['Scattered energy', 'Delays', 'Frustration'], 'Arrows of action. Things accelerate now.', 'Haste without aim. Slow enough to steer.'],
    9: [['Resilience', 'Boundaries', 'Last stand'], ['Exhaustion', 'Paranoia', 'Defensive walls'], 'Wounded but upright. Protect your energy wisely.', 'Armor too heavy. Rest before the next stand.'],
    10: [['Burden', 'Responsibility', 'Hard work'], ['Release', 'Delegation', 'Burnout'], 'Carrying too many wands. Ambition needs sharing.', 'Set some down. Success should not crush you.'],
    page: [['Explorer', 'News', 'Creative spark'], ['Procrastination', 'Scattered ideas', 'Immature fire'], 'A messenger of inspiration. Stay curious.', 'Ideas without follow-through. Pick one flame.'],
    knight: [['Action', 'Adventure', 'Passion'], ['Impulsiveness', 'Anger', 'Reckless chase'], 'Charge toward desire with brave heat.', 'Rushing burns bridges. Temper the gallop.'],
    queen: [['Confidence', 'Warmth', 'Independent fire'], ['Jealousy', 'Demanding', 'Cold ambition'], 'Own your creative throne with generous heat.', 'Fire turned sharp. Soften control, keep radiance.'],
    king: [['Visionary leadership', 'Entrepreneurial fire', 'Mastery'], ['Tyranny', 'Impatience', 'Forceful will'], 'Lead with inspired authority.', 'Bossy fire. Rule with wisdom, not heat alone.'],
  },
  cups: {
    ace: [['New love', 'Emotional opening', 'Intuitive gift'], ['Emptiness', 'Blocked feeling', 'False start'], 'A cup overflows. Open to feeling and connection.', 'Heart closed or cup spilled. Gently refill.'],
    2: [['Partnership', 'Attraction', 'Mutual care'], ['Imbalance', 'Breakup energy', 'Miscommunication'], 'Two cups shared. Reciprocal love or alliance.', 'Uneven giving. Restore honest exchange.'],
    3: [['Friendship', 'Celebration', 'Community joy'], ['Gossip', 'Overindulgence', 'Exclusion'], 'Raise cups with chosen people. Belonging blossoms.', 'Hollow socializing. Seek true company.'],
    4: [['Apathy', 'Contemplation', 'Missed offers'], ['Sudden openness', 'New invitation', 'Restlessness'], 'Dissatisfaction with what is offered. Look within.', 'A new cup appears. Notice what you almost ignored.'],
    5: [['Grief', 'Loss', 'Focus on what spilled'], ['Acceptance', 'Moving on', 'Perspective'], 'Three cups fallen, two still stand. Honor sorrow and remaining gifts.', 'Turning toward what remains. Healing begins.'],
    6: [['Nostalgia', 'Innocence', 'Sweet memory'], ['Stuck in past', 'Naive trust', 'Letting go'], 'Childhood garden of feeling. Kind exchange.', 'Past rose-tinted. Bring sweetness into now.'],
    7: [['Choices', 'Fantasy', 'Possibilities'], ['Clarity', 'Temptation', 'Wishful thinking'], 'Many cups in the cloud. Dream, then discern.', 'Illusions clearing. Choose the real cup.'],
    8: [['Walking away', 'Seeking deeper meaning', 'Disillusion'], ['Fear of leaving', 'Aimless drifting', 'Return'], 'Leave the stacked cups for a truer path.', 'Reluctant departure or wandering. Name what you seek.'],
    9: [['Wish fulfilled', 'Contentment', 'Pleasure'], ['Smugness', 'Greed', 'Dissatisfaction'], 'A table of wishes. Enjoy emotional abundance.', 'Pleasure without peace. Check what the heart truly wants.'],
    10: [['Harmony', 'Family joy', 'Emotional completion'], ['Fracture', 'Broken home feeling', 'Misalignment'], 'Rainbow over the happy shore. Shared love fulfilled.', 'Discord at home. Repair bonds with honesty.'],
    page: [['Sensitive messenger', 'Creative feeling', 'Gentle news'], ['Moodiness', 'Immaturity', 'Emotional escape'], 'A young heart brings poetic news.', 'Feelings unprocessed. Stay curious, not flooded.'],
    knight: [['Romance', 'Idealism', 'Following the heart'], ['Mood swings', 'Unrealistic love', 'Inconsistency'], 'Ride toward beauty and devotion.', 'Charm without depth. Seek steady waters.'],
    queen: [['Compassion', 'Emotional wisdom', 'Intuitive care'], ['Codependence', 'Moodiness', 'Smothering'], 'Lead with empathy and psychic grace.', 'Drowning in feeling. Boundaried compassion heals.'],
    king: [['Emotional maturity', 'Calm support', 'Diplomatic heart'], ['Coldness', 'Manipulation', 'Suppressed feeling'], 'Master of waters: steady, wise, kind.', 'Control disguised as care. Soften into honesty.'],
  },
  swords: {
    ace: [['Clarity', 'Truth', 'Breakthrough thought'], ['Confusion', 'Harsh words', 'Mental fog'], 'A sword of clear air. Cut to truth.', 'Mind clouded or weaponized. Sheathe until clear.'],
    2: [['Stalemate', 'Difficult choice', 'Blind balance'], ['Information arrives', 'Indecision ends', 'False peace'], 'Crossed swords and a blindfold. A choice awaits.', 'Removing the blindfold. Decide with data and heart.'],
    3: [['Heartbreak', 'Sorrow', 'Painful truth'], ['Recovery', 'Forgiveness', 'Release'], 'Three swords through the heart cloud. Grief spoken.', 'Rain easing. Healing after truth.'],
    4: [['Rest', 'Recovery', 'Mental pause'], ['Restlessness', 'Burnout', 'Forced stillness'], 'Lie in stillness. Restore the mind.', 'Cannot rest. Protect quiet anyway.'],
    5: [['Conflict', 'Hollow win', 'Ego clash'], ['Amends', 'Moving on', 'Desire to reconcile'], 'Winner takes spoils while others grieve. Question the cost.', 'Lay swords down. Choose dignity over scorekeeping.'],
    6: [['Transition', 'Rite of passage', 'Calmer waters'], ['Resistance to change', 'Rough crossing', 'Baggage'], 'Boat toward quieter shores. Carry what matters.', 'Stuck mid-crossing. Trust the passage.'],
    7: [['Strategy', 'Cunning', 'Alone tactics'], ['Coming clean', 'Imposter feelings', 'Getting caught'], 'Sneaking away with swords. Clever but careful.', 'Conscience catches up. Choose honorable strategy.'],
    8: [['Restriction', 'Mental prison', 'Feeling trapped'], ['New perspective', 'Release', 'Self-liberation'], 'Blindfolded among swords. The bindings are belief.', 'Seeing a way out. Free your mind first.'],
    9: [['Anxiety', 'Night worries', 'Mental anguish'], ['Hope returning', 'Asking for help', 'Night easing'], 'Swords of sleepless fear. Name the worry to shrink it.', 'Dawn after nightmare. Support softens dread.'],
    10: [['Rock bottom', 'Painful ending', 'Collapse'], ['Recovery', 'Survival', 'New dawn'], 'The worst has pierced through. Ending clears the field.', 'Rise from the pins. The worst is turning.'],
    page: [['Curious mind', 'Vigilance', 'New ideas'], ['Gossip', 'Hasty words', 'Scattered thought'], 'A messenger of ideas and watchful learning.', 'Talk without listening. Sharpen kindness with speech.'],
    knight: [['Direct action', 'Ambition', 'Charging truth'], ['Brutality', 'Impatience', 'Tunnel vision'], 'Sword forward. Assert with courage.', 'Cutting too fast. Temper speed with care.'],
    queen: [['Clear perception', 'Independent mind', 'Honest speech'], ['Cold intellect', 'Bitterness', 'Overcritical'], 'See cleanly, speak precisely, stay sovereign.', 'Ice without heart. Warm the insight.'],
    king: [['Intellectual authority', 'Ethical judgment', 'Truth leadership'], ['Harsh judgment', 'Abuse of power', 'Rigid mind'], 'Rule with clear principle and fair thought.', 'Tyranny of being right. Listen as you lead.'],
  },
  pentacles: {
    ace: [['Opportunity', 'Prosperity seed', 'Embodied gift'], ['Missed chance', 'Scarcity mindset', 'Unstable start'], 'A coin in the garden gate. Plant material blessing.', 'Gift delayed or doubted. Prepare soil for receiving.'],
    2: [['Balance', 'Juggling', 'Adaptability'], ['Overwhelmed', 'Disorganized', 'Dropped balls'], 'Dance with two coins. Flex with change.', 'Too many priorities. Simplify the juggle.'],
    3: [['Teamwork', 'Craft', 'Skilled collaboration'], ['Poor quality', 'Working alone poorly', 'Lack of skill'], 'Builders of the cathedral. Create with others.', 'Misaligned effort. Recommit to craft.'],
    4: [['Conservation', 'Security', 'Holding on'], ['Greed', 'Fear spending', 'Closed fists'], 'Guarding resources wisely.', 'Clutching too tight. Trust circulation.'],
    5: [['Hardship', 'Exclusion', 'Material worry'], ['Help arriving', 'Recovery', 'Spiritual wealth'], 'Cold outside the window. Seek warmth and aid.', 'Light in the church. Support is near.'],
    6: [['Generosity', 'Fair exchange', 'Giving and receiving'], ['Strings attached', 'Debt', 'Imbalance'], 'Coins shared with dignity. Mutual support.', 'Unequal giving. Restore fair flow.'],
    7: [['Patience', 'Investment', 'Long game'], ['Impatience', 'Poor returns', 'Doubt'], 'Tend the crop you planted. Wait for harvest.', 'Anxious watching. Trust the timeline.'],
    8: [['Diligence', 'Skill-building', 'Apprenticeship'], ['Perfectionism', 'Tedium', 'Lack of ambition'], 'Hammer and coin: mastery through practice.', 'Grinding without growth. Elevate the craft.'],
    9: [['Self-sufficiency', 'Luxury', 'Enjoying fruits'], ['Overwork isolation', 'Dependency', 'Superficial comfort'], 'Garden of earned comfort. Enjoy your results.', 'Comfort without fulfillment. Share or deepen.'],
    10: [['Legacy', 'Family wealth', 'Long-term security'], ['Family tension', 'Unstable legacy', 'Financial conflict'], 'Generational garden. Belonging and lasting success.', 'Cracks in the inheritance story. Heal the roots.'],
    page: [['Student of earth', 'New job/skill', 'Practical news'], ['Laziness', 'Unrealistic plans', 'Poor study'], 'Curious about craft and money lessons.', 'Unfocused effort. Start with one practical step.'],
    knight: [['Reliable progress', 'Hard work', 'Steady pursuit'], ['Stubbornness', 'Stuck routine', 'Perfection delay'], 'Slow horse, sure path. Keep showing up.', 'Motion without meaning. Refresh purpose.'],
    queen: [['Nurturing abundance', 'Practical care', 'Grounded luxury'], ['Smothering care', 'Workaholic home', 'Insecurity'], 'Create cozy prosperity for self and others.', 'Control through caretaking. Soften grip.'],
    king: [['Wealth mastery', 'Business sense', 'Reliable provider'], ['Greed', 'Materialism', 'Inflexible'], 'King of the orchard: ethical success.', 'Success without soul. Lead with values.'],
  },
}

function titleCaseRank(rank, suit) {
  const suitName = suit[0].toUpperCase() + suit.slice(1)
  if (rank === 'ace') return `Ace of ${suitName}`
  if (['page', 'knight', 'queen', 'king'].includes(rank)) {
    return `${rank[0].toUpperCase()}${rank.slice(1)} of ${suitName}`
  }
  return `${rank} of ${suitName}`
}

const cards = []

for (const [num, name, file, ku, kr, mu, mr, desc] of majors) {
  cards.push({
    id: `major-${num}`,
    name,
    arcana: 'major',
    suit: 'major',
    number: Number(num),
    imageFile: file,
    keywordsUpright: ku,
    keywordsReversed: kr,
    meaningUpright: mu,
    meaningReversed: mr,
    description: desc,
  })
}

for (const [suit, meta] of Object.entries(suitMeta)) {
  const meanings = pipMeanings[suit]
  for (const [rank, file] of Object.entries(meta.files)) {
    const [ku, kr, mu, mr] = meanings[rank]
    const number =
      rank === 'ace' ? 1
        : rank === 'page' ? 11
          : rank === 'knight' ? 12
            : rank === 'queen' ? 13
              : rank === 'king' ? 14
                : Number(rank)
    cards.push({
      id: `${suit}-${rank}`,
      name: titleCaseRank(rank, suit),
      arcana: 'minor',
      suit,
      number,
      rank: ['page', 'knight', 'queen', 'king'].includes(rank) ? rank : undefined,
      imageFile: file,
      keywordsUpright: ku,
      keywordsReversed: kr,
      meaningUpright: `${mu} (${meta.element}: ${meta.theme}.)`,
      meaningReversed: `${mr} (${meta.element}: ${meta.theme}.)`,
      description: `A ${suit} card of ${meta.element.toLowerCase()}, speaking to ${meta.theme}.`,
    })
  }
}

if (cards.length !== 78) {
  throw new Error(`Expected 78 cards, got ${cards.length}`)
}

const header = `import type { TarotCard } from './types'

/** Rider-Waite-Smith inspired meanings. Images are public-domain RWS scans. */
export const DECK: TarotCard[] = `

fs.writeFileSync(outFile, `${header}${JSON.stringify(cards, null, 2)}\n`, 'utf8')
console.log(`Wrote ${cards.length} cards to src/data/deck.ts`)

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      resolve('skip')
      return
    }
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close()
          fs.unlinkSync(dest)
          download(res.headers.location, dest).then(resolve).catch(reject)
          return
        }
        if (res.statusCode !== 200) {
          file.close()
          fs.unlinkSync(dest)
          reject(new Error(`HTTP ${res.statusCode} for ${url}`))
          return
        }
        res.pipe(file)
        file.on('finish', () => file.close(() => resolve('ok')))
      })
      .on('error', (err) => {
        file.close()
        try { fs.unlinkSync(dest) } catch {}
        reject(err)
      })
  })
}

const base = 'https://www.sacred-texts.com/tarot/pkt/img'
let ok = 0
let fail = 0
for (const card of cards) {
  const dest = path.join(cardsDir, card.imageFile)
  const url = `${base}/${card.imageFile}`
  try {
    const result = await download(url, dest)
    ok += 1
    if (result === 'ok') process.stdout.write('.')
  } catch (e) {
    fail += 1
    console.warn(`\nFailed ${card.imageFile}: ${e.message}`)
  }
}
console.log(`\nImages: ${ok} ready, ${fail} failed (app will fall back to remote URLs).`)
