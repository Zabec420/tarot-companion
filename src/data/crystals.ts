import type { Crystal } from './crystalTypes'

/** Common crystals and gems for reflection and everyday practice. */
export const CRYSTALS: Crystal[] = [
  {
    id: 'amethyst',
    name: 'Amethyst',
    family: 'quartz',
    color: 'Purple',
    chakra: 'Third Eye · Crown',
    element: 'Air · Water',
    intentions: ['Calm', 'Intuition', 'Sleep', 'Protection'],
    description:
      'A violet variety of quartz, often found in geodes with sparkling crystal points. Its color ranges from soft lilac to deep royal purple, sometimes banding into clear quartz at the tips.',
    properties:
      'Amethyst is widely kept for calm, clearer intuition, and easing mental chatter. Many people place it by the bed for restful sleep, or hold it during meditation when thoughts feel loud. It is also used as a gentle protective stone that softens rather than hardens your energy.',
    howToUse:
      'Keep a point on a nightstand, wear as jewelry for steady calm, or hold during breathwork. Pair with clear quartz if you want to amplify intention.',
    care:
      'Avoid long hours in harsh sun so the purple does not fade. Cleanse with smoke, sound, or moonlight. Water is usually fine for tumbled pieces.',
    imageFile: 'amethyst.svg',
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    family: 'quartz',
    color: 'Pink',
    chakra: 'Heart',
    element: 'Water · Earth',
    intentions: ['Love', 'Compassion', 'Self-care', 'Healing'],
    description:
      'Soft pink quartz with a milky or translucent glow. It often feels warm to the eye, like dawn light held in stone, and is one of the most recognizable heart stones.',
    properties:
      'Rose quartz is the classic stone of compassion: toward yourself, partners, friends, and the parts of you that need gentleness. It is used to soften self-criticism, invite kindness after heartbreak, and open space for receiving care.',
    howToUse:
      'Wear near the heart, rest on the chest during quiet rests, or place in a living space where warmth and connection matter.',
    care:
      'Mild soap and water are fine. Soft stone: store separately from harder crystals that can scratch it. Moonlight cleansing suits it well.',
    imageFile: 'rose-quartz.svg',
  },
  {
    id: 'clear-quartz',
    name: 'Clear Quartz',
    alsoCalled: 'Rock Crystal',
    family: 'quartz',
    color: 'Clear · White',
    chakra: 'Crown · All',
    element: 'Air · Fire',
    intentions: ['Clarity', 'Amplify', 'Focus', 'Energy'],
    description:
      'Transparent quartz that can look like frozen light. Points, clusters, and tumbled stones all show the same clean, glassy brilliance that made it a favorite across many traditions.',
    properties:
      'Often called a master amplifier. Clear quartz is used to sharpen focus, boost other stones, and hold programmed intentions. When you are unsure which crystal to reach for, many practitioners start here.',
    howToUse:
      'Program with a clear intention by holding it and naming your aim. Use in grids, on desks for focus, or beside other stones to strengthen their work.',
    care:
      'Very durable. Cleanse often if you use it to hold intentions. Sunlight, water, sound, and smoke are all generally safe.',
    imageFile: 'clear-quartz.svg',
  },
  {
    id: 'citrine',
    name: 'Citrine',
    family: 'quartz',
    color: 'Yellow · Gold',
    chakra: 'Solar Plexus',
    element: 'Fire',
    intentions: ['Confidence', 'Abundance', 'Joy', 'Motivation'],
    description:
      'Golden to honey-yellow quartz with a sunny glow. Natural citrine is less common than heat-treated amethyst sold as citrine; both are used similarly in modern crystal practice.',
    properties:
      'Citrine is linked with personal power, optimism, and healthy ambition. People keep it for confidence, creative momentum, and a brighter relationship with money and opportunity without forcing hustle energy.',
    howToUse:
      'Carry in a pocket before presentations, place in a workspace, or hold when you need a nudge toward action.',
    care:
      'Fairly sturdy. Prolonged intense sun can deepen color in some pieces. Cleanse with sound, smoke, or brief morning light.',
    imageFile: 'citrine.svg',
  },
  {
    id: 'smoky-quartz',
    name: 'Smoky Quartz',
    family: 'quartz',
    color: 'Brown · Grey',
    chakra: 'Root',
    element: 'Earth',
    intentions: ['Grounding', 'Release', 'Protection', 'Calm'],
    description:
      'Quartz tinted from pale tea-brown to deep smoky grey, as if mist were trapped in glass. It feels earthy and steady compared with brighter quartz cousins.',
    properties:
      'A go-to for grounding and gently releasing stress, overwhelm, or energetic residue after intense days. It is protective without feeling harsh, and helpful when you need to come back into your body.',
    howToUse:
      'Hold at the end of the day, place by the front door, or keep near electronics if that ritual helps you mentally reset.',
    care:
      'Durable. Cleanse in earth contact (on soil or a plant pot), smoke, or sound. Water is usually fine.',
    imageFile: 'smoky-quartz.svg',
  },
  {
    id: 'black-tourmaline',
    name: 'Black Tourmaline',
    alsoCalled: 'Schorl',
    family: 'silicate',
    color: 'Black',
    chakra: 'Root',
    element: 'Earth',
    intentions: ['Protection', 'Grounding', 'Boundaries', 'Shielding'],
    description:
      'Opaque black crystal that often forms in striated columns. It can look matte or lightly glassy, with a solid, weighty presence in the hand.',
    properties:
      'One of the most popular protection stones. Used for energetic boundaries, reducing overwhelm in busy spaces, and feeling more rooted when anxiety scatters you. Many people treat it as a daily shield stone.',
    howToUse:
      'Keep in a pocket, by a desk, or near entryways. Hold when you need to firm a boundary or leave a draining conversation.',
    care:
      'Cleanse regularly if used for protection work. Smoke, sound, and earth are favorites. Avoid salt water soaks for rough pieces with fractures.',
    imageFile: 'black-tourmaline.svg',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    family: 'other',
    color: 'Black · Rainbow',
    chakra: 'Root',
    element: 'Fire · Earth',
    intentions: ['Truth', 'Protection', 'Shadow work', 'Clarity'],
    description:
      'Volcanic glass with a mirror-smooth surface. Black obsidian is most common; snowflake, mahogany, and rainbow varieties add pattern and color flashes.',
    properties:
      'Known for honest reflection and cutting through denial. Helpful for shadow work, truth-telling, and strong protection. It can feel intense, so pair with a softer stone if you are new to it.',
    howToUse:
      'Use in journaling sessions, scrying-style reflection, or short meditation. Start with small amounts of time if the energy feels sharp.',
    care:
      'Can chip: handle gently. Cleanse with smoke or sound. Avoid harsh knocks.',
    imageFile: 'obsidian.svg',
  },
  {
    id: 'tigers-eye',
    name: "Tiger's Eye",
    family: 'quartz',
    color: 'Gold · Brown',
    chakra: 'Solar Plexus · Root',
    element: 'Fire · Earth',
    intentions: ['Courage', 'Focus', 'Confidence', 'Discernment'],
    description:
      'Chatoyant golden-brown stone with silky bands that shift in the light like a cat\'s eye. The shimmer feels both grounded and alert.',
    properties:
      'Used for courage, practical focus, and balanced confidence. Helpful when you need to act bravely without recklessness, or see a situation with clearer personal power.',
    howToUse:
      'Carry for interviews, travel, or tough conversations. Place on a desk when you need steady motivation.',
    care:
      'Wipe with a soft cloth. Water is usually fine. Keep away from harsh chemicals.',
    imageFile: 'tigers-eye.svg',
  },
  {
    id: 'lapis-lazuli',
    name: 'Lapis Lazuli',
    family: 'other',
    color: 'Deep Blue · Gold',
    chakra: 'Throat · Third Eye',
    element: 'Air · Water',
    intentions: ['Truth', 'Wisdom', 'Expression', 'Insight'],
    description:
      'Royal blue stone flecked with golden pyrite and sometimes white calcite. Ancient cultures prized it as a sky-and-star stone of royalty and knowing.',
    properties:
      'Linked with honest speech, inner wisdom, and clear sight. People use it when they need to say what is true, study deeply, or trust their insight without performing certainty.',
    howToUse:
      'Wear near the throat, hold before difficult talks, or keep with journals and study materials.',
    care:
      'Porous and softer: avoid soaking, salt, and harsh cleaners. Wipe gently. Moonlight or smoke cleansing is safer than water baths.',
    imageFile: 'lapis-lazuli.svg',
  },
  {
    id: 'malachite',
    name: 'Malachite',
    family: 'carbonate',
    color: 'Green',
    chakra: 'Heart',
    element: 'Earth · Fire',
    intentions: ['Transformation', 'Heart healing', 'Change', 'Protection'],
    description:
      'Vivid green copper carbonate with swirling bands like forest rings or peacock feathers. Polished pieces show dramatic light-and-dark patterning.',
    properties:
      'A stone of transformation and deep heart work. Used when life is changing and you need courage to grow, release old patterns, and protect the soft parts of yourself during transition.',
    howToUse:
      'Meditate with it during change, place on the heart in short sessions, or keep where you do inner work. Respect its intensity.',
    care:
      'Toxic if inhaled as dust or ingested: never make gem elixirs from raw malachite. Avoid water soaks. Cleanse with smoke or sound only. Wash hands after handling raw pieces.',
    imageFile: 'malachite.svg',
  },
  {
    id: 'moonstone',
    name: 'Moonstone',
    family: 'silicate',
    color: 'White · Peach · Grey',
    chakra: 'Crown · Sacral',
    element: 'Water',
    intentions: ['Intuition', 'Cycles', 'New beginnings', 'Emotion'],
    description:
      'Feldspar with a soft floating glow (adularescence) that rolls across the surface like moonlight on water. White, peach, and rainbow varieties are common.',
    properties:
      'Tied to cycles, intuition, and emotional tides. Used for new beginnings, feminine/receptive energy (in any gender), and navigating change with softer awareness.',
    howToUse:
      'Wear through lunar cycles, keep by the bed for dreamwork, or hold when starting something tender and new.',
    care:
      'Relatively soft: store carefully. Avoid hard knocks and ultrasonic cleaners. Gentle water wipe is usually fine; smoke and moonlight are favorites.',
    imageFile: 'moonstone.svg',
  },
  {
    id: 'labradorite',
    name: 'Labradorite',
    family: 'silicate',
    color: 'Grey · Iridescent',
    chakra: 'Third Eye',
    element: 'Air · Water',
    intentions: ['Magic', 'Protection', 'Intuition', 'Transformation'],
    description:
      'Dull grey stone until light hits it, then flashes of blue, green, gold, or violet (labradorescence). It feels like a hidden aurora trapped in rock.',
    properties:
      'Beloved for awakening wonder, strengthening intuition, and shielding the aura during spiritual work. Helpful when you want magic and discernment together.',
    howToUse:
      'Hold in meditation, wear when entering creative or ritual space, or keep on an altar as a reminder to look for the flash beneath the ordinary.',
    care:
      'Wipe clean; avoid harsh chemicals. Cleanse with smoke, sound, or moonlight.',
    imageFile: 'labradorite.svg',
  },
  {
    id: 'carnelian',
    name: 'Carnelian',
    family: 'quartz',
    color: 'Orange · Red',
    chakra: 'Sacral · Root',
    element: 'Fire',
    intentions: ['Creativity', 'Vitality', 'Courage', 'Motivation'],
    description:
      'Warm orange to reddish chalcedony with a sunset glow. Tumbled stones look like polished embers; raw pieces can be more matte and earthy.',
    properties:
      'A vitality and creativity stone. Used to spark action, sensual aliveness, courage, and follow-through when inspiration needs a body.',
    howToUse:
      'Keep in a creative workspace, wear for performance energy, or hold before workouts or bold conversations.',
    care:
      'Durable overall. Water and brief sun are usually fine. Smoke or sound cleanse as needed.',
    imageFile: 'carnelian.svg',
  },
  {
    id: 'jade',
    name: 'Jade',
    family: 'silicate',
    color: 'Green',
    chakra: 'Heart',
    element: 'Earth · Water',
    intentions: ['Harmony', 'Luck', 'Heart', 'Wisdom'],
    description:
      'Smooth green stone ranging from pale apple to deep spinach green. Nephrite and jadeite are both called jade in common use; both feel cool and serene polished.',
    properties:
      'Associated with harmony, steady fortune, heart ease, and wise choices. Many cultures treat jade as a guardian of balance and longevity.',
    howToUse:
      'Wear as a pendant, keep in a wealth or home altar corner, or hold when seeking peaceful decisions.',
    care:
      'Wipe with soft cloth. Avoid harsh chemicals and extreme temperature swings.',
    imageFile: 'jade.svg',
  },
  {
    id: 'fluorite',
    name: 'Fluorite',
    family: 'other',
    color: 'Purple · Green · Rainbow',
    chakra: 'Third Eye · Heart',
    element: 'Air',
    intentions: ['Focus', 'Study', 'Clarity', 'Order'],
    description:
      'Glass-like stone in purple, green, blue, yellow, or banded rainbow layers. Cubic crystal habits and soft color washes make it easy to recognize.',
    properties:
      'Used for mental order, study focus, and clearing scattered thoughts. A favorite desk stone when you need to organize ideas without harsh pressure.',
    howToUse:
      'Place beside books or a laptop, hold while planning, or keep in a study nook.',
    care:
      'Soft and water-sensitive: do not soak. Avoid sun fading for vibrant pieces. Cleanse with smoke or sound.',
    imageFile: 'fluorite.svg',
  },
  {
    id: 'selenite',
    name: 'Selenite',
    family: 'other',
    color: 'White · Pearly',
    chakra: 'Crown',
    element: 'Air · Water',
    intentions: ['Cleanse', 'Peace', 'Clarity', 'Light'],
    description:
      'Pearly white gypsum with a silky glow, often carved into wands, towers, or charging bowls. It looks like solidified moonlight.',
    properties:
      'Primarily used to cleanse other stones and clear heavy atmosphere. Also kept for peaceful mental clarity and soft spiritual connection. Many people rest jewelry on selenite overnight.',
    howToUse:
      'Place crystals on a selenite slab to refresh them. Sweep a wand around your space or body in a clearing ritual. Keep a tower in a room that needs lightness.',
    care:
      'Never soak in water; it can dissolve or cloud. Keep dry. Wipe gently. Does not usually need heavy cleansing itself.',
    imageFile: 'selenite.svg',
  },
  {
    id: 'pyrite',
    name: 'Pyrite',
    alsoCalled: "Fool's Gold",
    family: 'sulfide',
    color: 'Gold · Metallic',
    chakra: 'Solar Plexus',
    element: 'Fire · Earth',
    intentions: ['Confidence', 'Abundance', 'Protection', 'Will'],
    description:
      'Metallic gold cubes and clusters that catch light like tiny mirrors. Often mistaken for gold, it has a confident, structured sparkle.',
    properties:
      'Used for willpower, healthy confidence, and inviting opportunity. Also considered protective: a shield that says yes to growth and no to drain.',
    howToUse:
      'Keep on a work altar, in a wallet dish (symbolically), or hold before negotiations and creative launches.',
    care:
      'Keep dry; moisture can damage some specimens over time. Dust gently. No water cleanses.',
    imageFile: 'pyrite.svg',
  },
  {
    id: 'hematite',
    name: 'Hematite',
    family: 'oxide',
    color: 'Silver · Metallic',
    chakra: 'Root',
    element: 'Earth · Fire',
    intentions: ['Grounding', 'Focus', 'Strength', 'Calm'],
    description:
      'Heavy metallic-grey stone with a mirror polish when tumbled. It feels denser than it looks, which is part of its grounding reputation.',
    properties:
      'Strong grounding and mental focus. Used when you feel floaty, anxious, or scattered and need to return to body and practical next steps.',
    howToUse:
      'Hold in both hands during breathing exercises, wear as a bracelet, or place at your feet during meditation.',
    care:
      'Can rust if soaked; keep dry. Wipe with a soft cloth. Avoid salt water.',
    imageFile: 'hematite.svg',
  },
  {
    id: 'green-aventurine',
    name: 'Green Aventurine',
    family: 'quartz',
    color: 'Green',
    chakra: 'Heart',
    element: 'Earth',
    intentions: ['Luck', 'Opportunity', 'Heart', 'Optimism'],
    description:
      'Speckled green quartz with a gentle sparkle (aventurescence) from mica flecks. It looks like spring leaves catching light.',
    properties:
      'Often called a luck and opportunity stone. Soft heart energy for optimism, growth, and saying yes to good chances without forcing outcomes.',
    howToUse:
      'Carry to interviews or new social settings, keep in a plant corner, or hold when cultivating hopeful habits.',
    care:
      'Generally durable. Water and smoke cleanses are fine for tumbled pieces.',
    imageFile: 'green-aventurine.svg',
  },
  {
    id: 'amazonite',
    name: 'Amazonite',
    family: 'silicate',
    color: 'Turquoise · Green',
    chakra: 'Heart · Throat',
    element: 'Water',
    intentions: ['Truth', 'Calm', 'Communication', 'Boundaries'],
    description:
      'Sea-green to turquoise feldspar, often with soft white streaks. It evokes river water and clear sky in one stone.',
    properties:
      'Supports calm, honest communication and heart-aligned boundaries. Helpful when you need to speak kindly and clearly, or soothe nervous tension before talks.',
    howToUse:
      'Wear near the throat, hold before conversations, or keep on a bedside table for emotional ease.',
    care:
      'Avoid harsh chemicals and long sun exposure that may fade color. Gentle wipe and smoke cleanse.',
    imageFile: 'amazonite.svg',
  },
  {
    id: 'aquamarine',
    name: 'Aquamarine',
    family: 'silicate',
    color: 'Blue · Sea Green',
    chakra: 'Throat',
    element: 'Water',
    intentions: ['Communication', 'Courage', 'Calm', 'Clarity'],
    description:
      'Pale sea-blue beryl named for seawater. Fine pieces look like still ocean held in glass; tumbled stones are softer and mistier.',
    properties:
      'A throat-and-courage stone for speaking with calm clarity. Used for soothing fear, easing travel nerves, and finding truthful words without aggression.',
    howToUse:
      'Wear as jewelry for conversations, meditate with it before speaking up, or keep during travel over water (literal or emotional).',
    care:
      'Fairly tough for jewelry. Clean with mild soapy water; avoid harsh knocks on delicate settings.',
    imageFile: 'aquamarine.svg',
  },
  {
    id: 'garnet',
    name: 'Garnet',
    family: 'silicate',
    color: 'Deep Red',
    chakra: 'Root · Heart',
    element: 'Fire · Earth',
    intentions: ['Passion', 'Vitality', 'Commitment', 'Strength'],
    description:
      'Deep wine-red stone with a rich inner fire. Often appears as rounded grains or faceted gems that glow like embers.',
    properties:
      'Associated with vitality, devoted passion, and staying power. Used when you want to recommit to life, love, or a goal with warmth rather than burnout.',
    howToUse:
      'Wear close to the body, hold during intention setting, or keep where you need steady life-force reminders.',
    care:
      'Generally durable. Clean with mild soap and water. Avoid sudden temperature shocks.',
    imageFile: 'garnet.svg',
  },
  {
    id: 'turquoise',
    name: 'Turquoise',
    family: 'phosphate',
    color: 'Blue · Green',
    chakra: 'Throat · Heart',
    element: 'Earth · Air',
    intentions: ['Protection', 'Expression', 'Healing', 'Wisdom'],
    description:
      'Sky-blue to blue-green stone, often with brown or black matrix webbing. A sacred stone in many Indigenous and ancient cultures.',
    properties:
      'Used for protection, heartfelt speech, and wholeness. Many people keep it as a talisman for safe travel and honest connection.',
    howToUse:
      'Wear as a protective amulet, keep during travel, or hold when bridging heart and voice.',
    care:
      'Porous: avoid perfume, oils, and soaking. Wipe gently. Recharge in shade or with smoke rather than long sun baths.',
    imageFile: 'turquoise.svg',
  },
  {
    id: 'celestite',
    name: 'Celestite',
    alsoCalled: 'Celestine',
    family: 'other',
    color: 'Sky Blue',
    chakra: 'Crown · Throat',
    element: 'Air · Water',
    intentions: ['Peace', 'Angelical calm', 'Dreams', 'Softness'],
    description:
      'Delicate sky-blue crystal clusters that look like frozen clouds. Soft and ethereal, often displayed as geode-like pieces rather than worn.',
    properties:
      'Kept for peace, gentle spiritual connection, and soothing anxious minds. A favorite near beds for softer sleep and dreamy calm.',
    howToUse:
      'Place in a bedroom or meditation corner. Gaze softly at a cluster during breathwork. Avoid heavy handling of fragile points.',
    care:
      'Very soft and fragile. Keep dry, out of direct sun (can fade), and away from water. Dust carefully; cleanse with sound or intention.',
    imageFile: 'celestite.svg',
  },
]

export function getCrystalById(id: string): Crystal | undefined {
  return CRYSTALS.find((c) => c.id === id)
}
