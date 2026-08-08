import type { TarotCard } from './types'

/** Rider-Waite-Smith inspired meanings. Images are public-domain RWS scans. */
export const DECK: TarotCard[] = [
  {
    "id": "major-0",
    "name": "The Fool",
    "arcana": "major",
    "suit": "major",
    "number": 0,
    "imageFile": "ar00.jpg",
    "keywordsUpright": [
      "Beginnings",
      "Faith",
      "Adventure"
    ],
    "keywordsReversed": [
      "Recklessness",
      "Naivety",
      "Hesitation"
    ],
    "meaningUpright": "A leap into the unknown. Trust the journey, stay open, and begin before you feel ready.",
    "meaningReversed": "Fear of change or careless risk. Pause, ground yourself, then choose with intention.",
    "description": "A traveler at the cliff edge, face bright toward possibility."
  },
  {
    "id": "major-1",
    "name": "The Magician",
    "arcana": "major",
    "suit": "major",
    "number": 1,
    "imageFile": "ar01.jpg",
    "keywordsUpright": [
      "Will",
      "Skill",
      "Manifestation"
    ],
    "keywordsReversed": [
      "Manipulation",
      "Scattered energy",
      "Trickery"
    ],
    "meaningUpright": "You have the tools. Focus intention and turn ideas into form.",
    "meaningReversed": "Misused talent or blocked will. Reclaim honesty and concentrate your power.",
    "description": "One hand skyward, one to earth: as above, so below."
  },
  {
    "id": "major-2",
    "name": "The High Priestess",
    "arcana": "major",
    "suit": "major",
    "number": 2,
    "imageFile": "ar02.jpg",
    "keywordsUpright": [
      "Intuition",
      "Mystery",
      "Inner knowing"
    ],
    "keywordsReversed": [
      "Secrets",
      "Silence",
      "Disconnection"
    ],
    "meaningUpright": "Listen beneath the noise. Answers live in stillness and dream.",
    "meaningReversed": "Ignoring intuition or hiding truth. Soften defenses and look within.",
    "description": "Seated between pillars, keeper of the veiled temple."
  },
  {
    "id": "major-3",
    "name": "The Empress",
    "arcana": "major",
    "suit": "major",
    "number": 3,
    "imageFile": "ar03.jpg",
    "keywordsUpright": [
      "Abundance",
      "Nurture",
      "Creation"
    ],
    "keywordsReversed": [
      "Smothering",
      "Dependence",
      "Creative block"
    ],
    "meaningUpright": "Grow what you love. Care, beauty, and fertile creativity surround you.",
    "meaningReversed": "Overgiving or creative drought. Restore pleasure without self-erasure.",
    "description": "A sovereign of nature, crowned in harvest and warmth."
  },
  {
    "id": "major-4",
    "name": "The Emperor",
    "arcana": "major",
    "suit": "major",
    "number": 4,
    "imageFile": "ar04.jpg",
    "keywordsUpright": [
      "Structure",
      "Authority",
      "Stability"
    ],
    "keywordsReversed": [
      "Rigidity",
      "Control",
      "Domination"
    ],
    "meaningUpright": "Build strong foundations. Leadership through clear boundaries.",
    "meaningReversed": "Inflexibility or power struggles. Soften the armor without losing spine.",
    "description": "A throne of stone, order made visible."
  },
  {
    "id": "major-5",
    "name": "The Hierophant",
    "arcana": "major",
    "suit": "major",
    "number": 5,
    "imageFile": "ar05.jpg",
    "keywordsUpright": [
      "Tradition",
      "Teaching",
      "Shared values"
    ],
    "keywordsReversed": [
      "Dogma",
      "Conformity",
      "Rebellion without wisdom"
    ],
    "meaningUpright": "Seek guidance, ritual, or a trusted teacher. Belonging through shared meaning.",
    "meaningReversed": "Blind rule-following or rejecting all structure. Find living wisdom, not empty form.",
    "description": "A bridge between heaven and the community of seekers."
  },
  {
    "id": "major-6",
    "name": "The Lovers",
    "arcana": "major",
    "suit": "major",
    "number": 6,
    "imageFile": "ar06.jpg",
    "keywordsUpright": [
      "Union",
      "Choice",
      "Alignment"
    ],
    "keywordsReversed": [
      "Disharmony",
      "Indecision",
      "Misaligned values"
    ],
    "meaningUpright": "A meaningful bond or a values-based choice. Choose what matches your soul.",
    "meaningReversed": "Temptation away from truth, or a relationship out of tune. Clarify what you stand for.",
    "description": "Two figures blessed beneath an angel of air."
  },
  {
    "id": "major-7",
    "name": "The Chariot",
    "arcana": "major",
    "suit": "major",
    "number": 7,
    "imageFile": "ar07.jpg",
    "keywordsUpright": [
      "Drive",
      "Victory",
      "Direction"
    ],
    "keywordsReversed": [
      "Aggression",
      "Lack of control",
      "Drift"
    ],
    "meaningUpright": "Harness opposing forces and move forward with purpose.",
    "meaningReversed": "Force without focus, or stalled will. Realign the reins.",
    "description": "A warrior of will steering sphinxes toward triumph."
  },
  {
    "id": "major-8",
    "name": "Strength",
    "arcana": "major",
    "suit": "major",
    "number": 8,
    "imageFile": "ar08.jpg",
    "keywordsUpright": [
      "Courage",
      "Compassion",
      "Gentle power"
    ],
    "keywordsReversed": [
      "Self-doubt",
      "Force",
      "Inner unrest"
    ],
    "meaningUpright": "Meet challenge with soft courage. Love tames what fear cannot.",
    "meaningReversed": "Harshness toward self or others. Return to patience and heart.",
    "description": "A woman and lion in quiet communion."
  },
  {
    "id": "major-9",
    "name": "The Hermit",
    "arcana": "major",
    "suit": "major",
    "number": 9,
    "imageFile": "ar09.jpg",
    "keywordsUpright": [
      "Solitude",
      "Wisdom",
      "Guidance"
    ],
    "keywordsReversed": [
      "Isolation",
      "Withdrawal",
      "Lost path"
    ],
    "meaningUpright": "Step back to hear your own lantern. Wisdom ripens in quiet.",
    "meaningReversed": "Loneliness or avoidance. Seek solitude that nourishes, not hides.",
    "description": "A lantern on the mountain path."
  },
  {
    "id": "major-10",
    "name": "Wheel of Fortune",
    "arcana": "major",
    "suit": "major",
    "number": 10,
    "imageFile": "ar10.jpg",
    "keywordsUpright": [
      "Cycles",
      "Destiny",
      "Turning point"
    ],
    "keywordsReversed": [
      "Resistance",
      "Bad luck story",
      "Stagnation"
    ],
    "meaningUpright": "A turn of fate. Ride the wheel with awareness; change is alive.",
    "meaningReversed": "Clinging as the wheel moves. Release the old story.",
    "description": "The cosmic wheel spins angels, beasts, and letters of mystery."
  },
  {
    "id": "major-11",
    "name": "Justice",
    "arcana": "major",
    "suit": "major",
    "number": 11,
    "imageFile": "ar11.jpg",
    "keywordsUpright": [
      "Truth",
      "Fairness",
      "Accountability"
    ],
    "keywordsReversed": [
      "Bias",
      "Avoidance",
      "Harsh judgment"
    ],
    "meaningUpright": "Cause meets effect. Speak truth and make amends where needed.",
    "meaningReversed": "Denial or unfairness. Balance the scales with honesty.",
    "description": "Sword and scales in clear light."
  },
  {
    "id": "major-12",
    "name": "The Hanged Man",
    "arcana": "major",
    "suit": "major",
    "number": 12,
    "imageFile": "ar12.jpg",
    "keywordsUpright": [
      "Surrender",
      "New perspective",
      "Pause"
    ],
    "keywordsReversed": [
      "Stalling",
      "Martyrdom",
      "Indecision"
    ],
    "meaningUpright": "Hang upside down willingly. Insight comes when you stop forcing.",
    "meaningReversed": "Stuck sacrifice or delay without wisdom. Choose conscious pause.",
    "description": "Suspended in trust, seeing the world renewed."
  },
  {
    "id": "major-13",
    "name": "Death",
    "arcana": "major",
    "suit": "major",
    "number": 13,
    "imageFile": "ar13.jpg",
    "keywordsUpright": [
      "Ending",
      "Transformation",
      "Release"
    ],
    "keywordsReversed": [
      "Resistance",
      "Fear of change",
      "Decay without rebirth"
    ],
    "meaningUpright": "Something completes so something new can live. Let go cleanly.",
    "meaningReversed": "Refusing necessary endings. Compost the old life.",
    "description": "A pale horse and sunrise beyond the gate."
  },
  {
    "id": "major-14",
    "name": "Temperance",
    "arcana": "major",
    "suit": "major",
    "number": 14,
    "imageFile": "ar14.jpg",
    "keywordsUpright": [
      "Balance",
      "Alchemy",
      "Patience"
    ],
    "keywordsReversed": [
      "Excess",
      "Impatience",
      "Imbalance"
    ],
    "meaningUpright": "Blend opposites slowly. Healing is a measured pour.",
    "meaningReversed": "Extremes or rushing the brew. Return to the middle path.",
    "description": "An angel mixes waters between cups."
  },
  {
    "id": "major-15",
    "name": "The Devil",
    "arcana": "major",
    "suit": "major",
    "number": 15,
    "imageFile": "ar15.jpg",
    "keywordsUpright": [
      "Shadow",
      "Attachment",
      "Desire"
    ],
    "keywordsReversed": [
      "Bondage",
      "Addiction",
      "Obsession"
    ],
    "meaningUpright": "Name the chain. Desire and shadow hold lessons if faced.",
    "meaningReversed": "Feeling trapped by habit or fear. The chains are looser than they look.",
    "description": "Torchlight on the material underworld."
  },
  {
    "id": "major-16",
    "name": "The Tower",
    "arcana": "major",
    "suit": "major",
    "number": 16,
    "imageFile": "ar16.jpg",
    "keywordsUpright": [
      "Upheaval",
      "Revelation",
      "Breakthrough"
    ],
    "keywordsReversed": [
      "Chaos",
      "Denial",
      "Delayed collapse"
    ],
    "meaningUpright": "False structures fall. Truth arrives as lightning.",
    "meaningReversed": "Resisting a needed shake-up. Better a clean break than a slow crack.",
    "description": "Crown and flame, liberation through rupture."
  },
  {
    "id": "major-17",
    "name": "The Star",
    "arcana": "major",
    "suit": "major",
    "number": 17,
    "imageFile": "ar17.jpg",
    "keywordsUpright": [
      "Hope",
      "Healing",
      "Inspiration"
    ],
    "keywordsReversed": [
      "Discouragement",
      "Disconnection",
      "Fading faith"
    ],
    "meaningUpright": "After the storm, soft light. Renew hope and pour healing outward.",
    "meaningReversed": "Cynicism or depleted spirit. Look up; water still flows.",
    "description": "A nude figure under open sky, pouring stars to earth."
  },
  {
    "id": "major-18",
    "name": "The Moon",
    "arcana": "major",
    "suit": "major",
    "number": 18,
    "imageFile": "ar18.jpg",
    "keywordsUpright": [
      "Dreams",
      "Illusion",
      "Deep psyche"
    ],
    "keywordsReversed": [
      "Confusion",
      "Anxiety",
      "Deception"
    ],
    "meaningUpright": "Walk by moonlight. Trust intuition through fog and feeling.",
    "meaningReversed": "Fear stories or unclear seeing. Wait for dawn before deciding.",
    "description": "A path between dogs and towers under a watching moon."
  },
  {
    "id": "major-19",
    "name": "The Sun",
    "arcana": "major",
    "suit": "major",
    "number": 19,
    "imageFile": "ar19.jpg",
    "keywordsUpright": [
      "Joy",
      "Clarity",
      "Vitality"
    ],
    "keywordsReversed": [
      "Temporary cloud",
      "Ego glare",
      "Burnout brightness"
    ],
    "meaningUpright": "Warm success and simple happiness. Stand in clear light.",
    "meaningReversed": "Overexposure or forced cheer. Rest, then shine again.",
    "description": "A child of light beneath a generous sun."
  },
  {
    "id": "major-20",
    "name": "Judgement",
    "arcana": "major",
    "suit": "major",
    "number": 20,
    "imageFile": "ar20.jpg",
    "keywordsUpright": [
      "Awakening",
      "Calling",
      "Reckoning"
    ],
    "keywordsReversed": [
      "Self-criticism",
      "Refusal to rise",
      "Guilt"
    ],
    "meaningUpright": "Hear the call. Rise into a truer life chapter.",
    "meaningReversed": "Ignoring the summons or drowning in guilt. Forgive and ascend.",
    "description": "Trumpets and rising souls at the threshold."
  },
  {
    "id": "major-21",
    "name": "The World",
    "arcana": "major",
    "suit": "major",
    "number": 21,
    "imageFile": "ar21.jpg",
    "keywordsUpright": [
      "Completion",
      "Wholeness",
      "Integration"
    ],
    "keywordsReversed": [
      "Incompletion",
      "Delay",
      "Scattered ends"
    ],
    "meaningUpright": "A cycle completes. Celebrate mastery and step into the next dance.",
    "meaningReversed": "Loose threads or fear of finishing. Close the circle.",
    "description": "The dancer within the wreath of fulfillment."
  },
  {
    "id": "wands-2",
    "name": "2 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 2,
    "imageFile": "wa02.jpg",
    "keywordsUpright": [
      "Planning",
      "Future vision",
      "Choice"
    ],
    "keywordsReversed": [
      "Fear of unknown",
      "Indecision",
      "Restlessness"
    ],
    "meaningUpright": "Look toward distant horizons and choose a bold path. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Stuck between options. Commit or consciously wait. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-3",
    "name": "3 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 3,
    "imageFile": "wa03.jpg",
    "keywordsUpright": [
      "Expansion",
      "Foresight",
      "Teamwork"
    ],
    "keywordsReversed": [
      "Obstacles",
      "Short-sightedness",
      "Delay"
    ],
    "meaningUpright": "Ships on the horizon. Growth through vision and collaboration. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Plans stall. Recalibrate and ask for help. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-4",
    "name": "4 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 4,
    "imageFile": "wa04.jpg",
    "keywordsUpright": [
      "Celebration",
      "Homecoming",
      "Harmony"
    ],
    "keywordsReversed": [
      "Tension at home",
      "Unstable foundations",
      "Postponed joy"
    ],
    "meaningUpright": "Raise a wreath of joy. Celebrate community and belonging. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Festivity delayed or home unsettled. Repair the foundation. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-5",
    "name": "5 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 5,
    "imageFile": "wa05.jpg",
    "keywordsUpright": [
      "Conflict",
      "Competition",
      "Chaos"
    ],
    "keywordsReversed": [
      "Avoidance",
      "Inner conflict",
      "Resolution forming"
    ],
    "meaningUpright": "Crossed wands: lively struggle that can sharpen you. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Conflict going underground. Name it to free energy. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-6",
    "name": "6 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 6,
    "imageFile": "wa06.jpg",
    "keywordsUpright": [
      "Victory",
      "Recognition",
      "Progress"
    ],
    "keywordsReversed": [
      "Ego",
      "Private win",
      "Delayed praise"
    ],
    "meaningUpright": "Ride forward after success. Let yourself be seen. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Victory feels hollow or unseen. Affirm your own worth. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-7",
    "name": "7 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 7,
    "imageFile": "wa07.jpg",
    "keywordsUpright": [
      "Courage",
      "Defense",
      "Standing firm"
    ],
    "keywordsReversed": [
      "Overwhelm",
      "Giving up",
      "Feeling outnumbered"
    ],
    "meaningUpright": "Hold the high ground. Defend what matters. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Too many battles. Choose which hill is yours. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-8",
    "name": "8 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 8,
    "imageFile": "wa08.jpg",
    "keywordsUpright": [
      "Swiftness",
      "Messages",
      "Movement"
    ],
    "keywordsReversed": [
      "Scattered energy",
      "Delays",
      "Frustration"
    ],
    "meaningUpright": "Arrows of action. Things accelerate now. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Haste without aim. Slow enough to steer. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-9",
    "name": "9 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 9,
    "imageFile": "wa09.jpg",
    "keywordsUpright": [
      "Resilience",
      "Boundaries",
      "Last stand"
    ],
    "keywordsReversed": [
      "Exhaustion",
      "Paranoia",
      "Defensive walls"
    ],
    "meaningUpright": "Wounded but upright. Protect your energy wisely. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Armor too heavy. Rest before the next stand. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-10",
    "name": "10 of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 10,
    "imageFile": "wa10.jpg",
    "keywordsUpright": [
      "Burden",
      "Responsibility",
      "Hard work"
    ],
    "keywordsReversed": [
      "Release",
      "Delegation",
      "Burnout"
    ],
    "meaningUpright": "Carrying too many wands. Ambition needs sharing. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Set some down. Success should not crush you. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-ace",
    "name": "Ace of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 1,
    "imageFile": "waac.jpg",
    "keywordsUpright": [
      "Spark",
      "Inspiration",
      "New passion"
    ],
    "keywordsReversed": [
      "Delay",
      "False start",
      "Blocked drive"
    ],
    "meaningUpright": "A gift of fire arrives. Begin the creative quest. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "The spark sputters. Clear clutter before lighting the next match. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-page",
    "name": "Page of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 11,
    "rank": "page",
    "imageFile": "wapa.jpg",
    "keywordsUpright": [
      "Explorer",
      "News",
      "Creative spark"
    ],
    "keywordsReversed": [
      "Procrastination",
      "Scattered ideas",
      "Immature fire"
    ],
    "meaningUpright": "A messenger of inspiration. Stay curious. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Ideas without follow-through. Pick one flame. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-knight",
    "name": "Knight of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 12,
    "rank": "knight",
    "imageFile": "wakn.jpg",
    "keywordsUpright": [
      "Action",
      "Adventure",
      "Passion"
    ],
    "keywordsReversed": [
      "Impulsiveness",
      "Anger",
      "Reckless chase"
    ],
    "meaningUpright": "Charge toward desire with brave heat. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Rushing burns bridges. Temper the gallop. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-queen",
    "name": "Queen of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 13,
    "rank": "queen",
    "imageFile": "waqu.jpg",
    "keywordsUpright": [
      "Confidence",
      "Warmth",
      "Independent fire"
    ],
    "keywordsReversed": [
      "Jealousy",
      "Demanding",
      "Cold ambition"
    ],
    "meaningUpright": "Own your creative throne with generous heat. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Fire turned sharp. Soften control, keep radiance. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "wands-king",
    "name": "King of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": 14,
    "rank": "king",
    "imageFile": "waki.jpg",
    "keywordsUpright": [
      "Visionary leadership",
      "Entrepreneurial fire",
      "Mastery"
    ],
    "keywordsReversed": [
      "Tyranny",
      "Impatience",
      "Forceful will"
    ],
    "meaningUpright": "Lead with inspired authority. (Fire: passion, will, creativity, and momentum.)",
    "meaningReversed": "Bossy fire. Rule with wisdom, not heat alone. (Fire: passion, will, creativity, and momentum.)",
    "description": "A wands card of fire, speaking to passion, will, creativity, and momentum."
  },
  {
    "id": "cups-2",
    "name": "2 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 2,
    "imageFile": "cu02.jpg",
    "keywordsUpright": [
      "Partnership",
      "Attraction",
      "Mutual care"
    ],
    "keywordsReversed": [
      "Imbalance",
      "Breakup energy",
      "Miscommunication"
    ],
    "meaningUpright": "Two cups shared. Reciprocal love or alliance. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Uneven giving. Restore honest exchange. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-3",
    "name": "3 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 3,
    "imageFile": "cu03.jpg",
    "keywordsUpright": [
      "Friendship",
      "Celebration",
      "Community joy"
    ],
    "keywordsReversed": [
      "Gossip",
      "Overindulgence",
      "Exclusion"
    ],
    "meaningUpright": "Raise cups with chosen people. Belonging blossoms. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Hollow socializing. Seek true company. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-4",
    "name": "4 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 4,
    "imageFile": "cu04.jpg",
    "keywordsUpright": [
      "Apathy",
      "Contemplation",
      "Missed offers"
    ],
    "keywordsReversed": [
      "Sudden openness",
      "New invitation",
      "Restlessness"
    ],
    "meaningUpright": "Dissatisfaction with what is offered. Look within. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "A new cup appears. Notice what you almost ignored. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-5",
    "name": "5 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 5,
    "imageFile": "cu05.jpg",
    "keywordsUpright": [
      "Grief",
      "Loss",
      "Focus on what spilled"
    ],
    "keywordsReversed": [
      "Acceptance",
      "Moving on",
      "Perspective"
    ],
    "meaningUpright": "Three cups fallen, two still stand. Honor sorrow and remaining gifts. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Turning toward what remains. Healing begins. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-6",
    "name": "6 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 6,
    "imageFile": "cu06.jpg",
    "keywordsUpright": [
      "Nostalgia",
      "Innocence",
      "Sweet memory"
    ],
    "keywordsReversed": [
      "Stuck in past",
      "Naive trust",
      "Letting go"
    ],
    "meaningUpright": "Childhood garden of feeling. Kind exchange. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Past rose-tinted. Bring sweetness into now. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-7",
    "name": "7 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 7,
    "imageFile": "cu07.jpg",
    "keywordsUpright": [
      "Choices",
      "Fantasy",
      "Possibilities"
    ],
    "keywordsReversed": [
      "Clarity",
      "Temptation",
      "Wishful thinking"
    ],
    "meaningUpright": "Many cups in the cloud. Dream, then discern. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Illusions clearing. Choose the real cup. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-8",
    "name": "8 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 8,
    "imageFile": "cu08.jpg",
    "keywordsUpright": [
      "Walking away",
      "Seeking deeper meaning",
      "Disillusion"
    ],
    "keywordsReversed": [
      "Fear of leaving",
      "Aimless drifting",
      "Return"
    ],
    "meaningUpright": "Leave the stacked cups for a truer path. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Reluctant departure or wandering. Name what you seek. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-9",
    "name": "9 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 9,
    "imageFile": "cu09.jpg",
    "keywordsUpright": [
      "Wish fulfilled",
      "Contentment",
      "Pleasure"
    ],
    "keywordsReversed": [
      "Smugness",
      "Greed",
      "Dissatisfaction"
    ],
    "meaningUpright": "A table of wishes. Enjoy emotional abundance. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Pleasure without peace. Check what the heart truly wants. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-10",
    "name": "10 of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 10,
    "imageFile": "cu10.jpg",
    "keywordsUpright": [
      "Harmony",
      "Family joy",
      "Emotional completion"
    ],
    "keywordsReversed": [
      "Fracture",
      "Broken home feeling",
      "Misalignment"
    ],
    "meaningUpright": "Rainbow over the happy shore. Shared love fulfilled. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Discord at home. Repair bonds with honesty. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-ace",
    "name": "Ace of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 1,
    "imageFile": "cuac.jpg",
    "keywordsUpright": [
      "New love",
      "Emotional opening",
      "Intuitive gift"
    ],
    "keywordsReversed": [
      "Emptiness",
      "Blocked feeling",
      "False start"
    ],
    "meaningUpright": "A cup overflows. Open to feeling and connection. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Heart closed or cup spilled. Gently refill. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-page",
    "name": "Page of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 11,
    "rank": "page",
    "imageFile": "cupa.jpg",
    "keywordsUpright": [
      "Sensitive messenger",
      "Creative feeling",
      "Gentle news"
    ],
    "keywordsReversed": [
      "Moodiness",
      "Immaturity",
      "Emotional escape"
    ],
    "meaningUpright": "A young heart brings poetic news. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Feelings unprocessed. Stay curious, not flooded. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-knight",
    "name": "Knight of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 12,
    "rank": "knight",
    "imageFile": "cukn.jpg",
    "keywordsUpright": [
      "Romance",
      "Idealism",
      "Following the heart"
    ],
    "keywordsReversed": [
      "Mood swings",
      "Unrealistic love",
      "Inconsistency"
    ],
    "meaningUpright": "Ride toward beauty and devotion. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Charm without depth. Seek steady waters. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-queen",
    "name": "Queen of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 13,
    "rank": "queen",
    "imageFile": "cuqu.jpg",
    "keywordsUpright": [
      "Compassion",
      "Emotional wisdom",
      "Intuitive care"
    ],
    "keywordsReversed": [
      "Codependence",
      "Moodiness",
      "Smothering"
    ],
    "meaningUpright": "Lead with empathy and psychic grace. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Drowning in feeling. Boundaried compassion heals. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "cups-king",
    "name": "King of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": 14,
    "rank": "king",
    "imageFile": "cuki.jpg",
    "keywordsUpright": [
      "Emotional maturity",
      "Calm support",
      "Diplomatic heart"
    ],
    "keywordsReversed": [
      "Coldness",
      "Manipulation",
      "Suppressed feeling"
    ],
    "meaningUpright": "Master of waters: steady, wise, kind. (Water: emotion, love, intuition, and relationships.)",
    "meaningReversed": "Control disguised as care. Soften into honesty. (Water: emotion, love, intuition, and relationships.)",
    "description": "A cups card of water, speaking to emotion, love, intuition, and relationships."
  },
  {
    "id": "swords-2",
    "name": "2 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 2,
    "imageFile": "sw02.jpg",
    "keywordsUpright": [
      "Stalemate",
      "Difficult choice",
      "Blind balance"
    ],
    "keywordsReversed": [
      "Information arrives",
      "Indecision ends",
      "False peace"
    ],
    "meaningUpright": "Crossed swords and a blindfold. A choice awaits. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Removing the blindfold. Decide with data and heart. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-3",
    "name": "3 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 3,
    "imageFile": "sw03.jpg",
    "keywordsUpright": [
      "Heartbreak",
      "Sorrow",
      "Painful truth"
    ],
    "keywordsReversed": [
      "Recovery",
      "Forgiveness",
      "Release"
    ],
    "meaningUpright": "Three swords through the heart cloud. Grief spoken. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Rain easing. Healing after truth. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-4",
    "name": "4 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 4,
    "imageFile": "sw04.jpg",
    "keywordsUpright": [
      "Rest",
      "Recovery",
      "Mental pause"
    ],
    "keywordsReversed": [
      "Restlessness",
      "Burnout",
      "Forced stillness"
    ],
    "meaningUpright": "Lie in stillness. Restore the mind. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Cannot rest. Protect quiet anyway. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-5",
    "name": "5 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 5,
    "imageFile": "sw05.jpg",
    "keywordsUpright": [
      "Conflict",
      "Hollow win",
      "Ego clash"
    ],
    "keywordsReversed": [
      "Amends",
      "Moving on",
      "Desire to reconcile"
    ],
    "meaningUpright": "Winner takes spoils while others grieve. Question the cost. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Lay swords down. Choose dignity over scorekeeping. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-6",
    "name": "6 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 6,
    "imageFile": "sw06.jpg",
    "keywordsUpright": [
      "Transition",
      "Rite of passage",
      "Calmer waters"
    ],
    "keywordsReversed": [
      "Resistance to change",
      "Rough crossing",
      "Baggage"
    ],
    "meaningUpright": "Boat toward quieter shores. Carry what matters. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Stuck mid-crossing. Trust the passage. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-7",
    "name": "7 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 7,
    "imageFile": "sw07.jpg",
    "keywordsUpright": [
      "Strategy",
      "Cunning",
      "Alone tactics"
    ],
    "keywordsReversed": [
      "Coming clean",
      "Imposter feelings",
      "Getting caught"
    ],
    "meaningUpright": "Sneaking away with swords. Clever but careful. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Conscience catches up. Choose honorable strategy. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-8",
    "name": "8 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 8,
    "imageFile": "sw08.jpg",
    "keywordsUpright": [
      "Restriction",
      "Mental prison",
      "Feeling trapped"
    ],
    "keywordsReversed": [
      "New perspective",
      "Release",
      "Self-liberation"
    ],
    "meaningUpright": "Blindfolded among swords. The bindings are belief. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Seeing a way out. Free your mind first. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-9",
    "name": "9 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 9,
    "imageFile": "sw09.jpg",
    "keywordsUpright": [
      "Anxiety",
      "Night worries",
      "Mental anguish"
    ],
    "keywordsReversed": [
      "Hope returning",
      "Asking for help",
      "Night easing"
    ],
    "meaningUpright": "Swords of sleepless fear. Name the worry to shrink it. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Dawn after nightmare. Support softens dread. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-10",
    "name": "10 of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 10,
    "imageFile": "sw10.jpg",
    "keywordsUpright": [
      "Rock bottom",
      "Painful ending",
      "Collapse"
    ],
    "keywordsReversed": [
      "Recovery",
      "Survival",
      "New dawn"
    ],
    "meaningUpright": "The worst has pierced through. Ending clears the field. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Rise from the pins. The worst is turning. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-ace",
    "name": "Ace of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 1,
    "imageFile": "swac.jpg",
    "keywordsUpright": [
      "Clarity",
      "Truth",
      "Breakthrough thought"
    ],
    "keywordsReversed": [
      "Confusion",
      "Harsh words",
      "Mental fog"
    ],
    "meaningUpright": "A sword of clear air. Cut to truth. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Mind clouded or weaponized. Sheathe until clear. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-page",
    "name": "Page of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 11,
    "rank": "page",
    "imageFile": "swpa.jpg",
    "keywordsUpright": [
      "Curious mind",
      "Vigilance",
      "New ideas"
    ],
    "keywordsReversed": [
      "Gossip",
      "Hasty words",
      "Scattered thought"
    ],
    "meaningUpright": "A messenger of ideas and watchful learning. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Talk without listening. Sharpen kindness with speech. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-knight",
    "name": "Knight of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 12,
    "rank": "knight",
    "imageFile": "swkn.jpg",
    "keywordsUpright": [
      "Direct action",
      "Ambition",
      "Charging truth"
    ],
    "keywordsReversed": [
      "Brutality",
      "Impatience",
      "Tunnel vision"
    ],
    "meaningUpright": "Sword forward. Assert with courage. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Cutting too fast. Temper speed with care. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-queen",
    "name": "Queen of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 13,
    "rank": "queen",
    "imageFile": "swqu.jpg",
    "keywordsUpright": [
      "Clear perception",
      "Independent mind",
      "Honest speech"
    ],
    "keywordsReversed": [
      "Cold intellect",
      "Bitterness",
      "Overcritical"
    ],
    "meaningUpright": "See cleanly, speak precisely, stay sovereign. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Ice without heart. Warm the insight. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "swords-king",
    "name": "King of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": 14,
    "rank": "king",
    "imageFile": "swki.jpg",
    "keywordsUpright": [
      "Intellectual authority",
      "Ethical judgment",
      "Truth leadership"
    ],
    "keywordsReversed": [
      "Harsh judgment",
      "Abuse of power",
      "Rigid mind"
    ],
    "meaningUpright": "Rule with clear principle and fair thought. (Air: thought, truth, conflict, and clarity.)",
    "meaningReversed": "Tyranny of being right. Listen as you lead. (Air: thought, truth, conflict, and clarity.)",
    "description": "A swords card of air, speaking to thought, truth, conflict, and clarity."
  },
  {
    "id": "pentacles-2",
    "name": "2 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 2,
    "imageFile": "pe02.jpg",
    "keywordsUpright": [
      "Balance",
      "Juggling",
      "Adaptability"
    ],
    "keywordsReversed": [
      "Overwhelmed",
      "Disorganized",
      "Dropped balls"
    ],
    "meaningUpright": "Dance with two coins. Flex with change. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Too many priorities. Simplify the juggle. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-3",
    "name": "3 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 3,
    "imageFile": "pe03.jpg",
    "keywordsUpright": [
      "Teamwork",
      "Craft",
      "Skilled collaboration"
    ],
    "keywordsReversed": [
      "Poor quality",
      "Working alone poorly",
      "Lack of skill"
    ],
    "meaningUpright": "Builders of the cathedral. Create with others. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Misaligned effort. Recommit to craft. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-4",
    "name": "4 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 4,
    "imageFile": "pe04.jpg",
    "keywordsUpright": [
      "Conservation",
      "Security",
      "Holding on"
    ],
    "keywordsReversed": [
      "Greed",
      "Fear spending",
      "Closed fists"
    ],
    "meaningUpright": "Guarding resources wisely. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Clutching too tight. Trust circulation. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-5",
    "name": "5 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 5,
    "imageFile": "pe05.jpg",
    "keywordsUpright": [
      "Hardship",
      "Exclusion",
      "Material worry"
    ],
    "keywordsReversed": [
      "Help arriving",
      "Recovery",
      "Spiritual wealth"
    ],
    "meaningUpright": "Cold outside the window. Seek warmth and aid. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Light in the church. Support is near. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-6",
    "name": "6 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 6,
    "imageFile": "pe06.jpg",
    "keywordsUpright": [
      "Generosity",
      "Fair exchange",
      "Giving and receiving"
    ],
    "keywordsReversed": [
      "Strings attached",
      "Debt",
      "Imbalance"
    ],
    "meaningUpright": "Coins shared with dignity. Mutual support. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Unequal giving. Restore fair flow. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-7",
    "name": "7 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 7,
    "imageFile": "pe07.jpg",
    "keywordsUpright": [
      "Patience",
      "Investment",
      "Long game"
    ],
    "keywordsReversed": [
      "Impatience",
      "Poor returns",
      "Doubt"
    ],
    "meaningUpright": "Tend the crop you planted. Wait for harvest. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Anxious watching. Trust the timeline. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-8",
    "name": "8 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 8,
    "imageFile": "pe08.jpg",
    "keywordsUpright": [
      "Diligence",
      "Skill-building",
      "Apprenticeship"
    ],
    "keywordsReversed": [
      "Perfectionism",
      "Tedium",
      "Lack of ambition"
    ],
    "meaningUpright": "Hammer and coin: mastery through practice. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Grinding without growth. Elevate the craft. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-9",
    "name": "9 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 9,
    "imageFile": "pe09.jpg",
    "keywordsUpright": [
      "Self-sufficiency",
      "Luxury",
      "Enjoying fruits"
    ],
    "keywordsReversed": [
      "Overwork isolation",
      "Dependency",
      "Superficial comfort"
    ],
    "meaningUpright": "Garden of earned comfort. Enjoy your results. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Comfort without fulfillment. Share or deepen. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-10",
    "name": "10 of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 10,
    "imageFile": "pe10.jpg",
    "keywordsUpright": [
      "Legacy",
      "Family wealth",
      "Long-term security"
    ],
    "keywordsReversed": [
      "Family tension",
      "Unstable legacy",
      "Financial conflict"
    ],
    "meaningUpright": "Generational garden. Belonging and lasting success. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Cracks in the inheritance story. Heal the roots. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-ace",
    "name": "Ace of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 1,
    "imageFile": "peac.jpg",
    "keywordsUpright": [
      "Opportunity",
      "Prosperity seed",
      "Embodied gift"
    ],
    "keywordsReversed": [
      "Missed chance",
      "Scarcity mindset",
      "Unstable start"
    ],
    "meaningUpright": "A coin in the garden gate. Plant material blessing. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Gift delayed or doubted. Prepare soil for receiving. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-page",
    "name": "Page of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 11,
    "rank": "page",
    "imageFile": "pepa.jpg",
    "keywordsUpright": [
      "Student of earth",
      "New job/skill",
      "Practical news"
    ],
    "keywordsReversed": [
      "Laziness",
      "Unrealistic plans",
      "Poor study"
    ],
    "meaningUpright": "Curious about craft and money lessons. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Unfocused effort. Start with one practical step. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-knight",
    "name": "Knight of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 12,
    "rank": "knight",
    "imageFile": "pekn.jpg",
    "keywordsUpright": [
      "Reliable progress",
      "Hard work",
      "Steady pursuit"
    ],
    "keywordsReversed": [
      "Stubbornness",
      "Stuck routine",
      "Perfection delay"
    ],
    "meaningUpright": "Slow horse, sure path. Keep showing up. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Motion without meaning. Refresh purpose. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-queen",
    "name": "Queen of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 13,
    "rank": "queen",
    "imageFile": "pequ.jpg",
    "keywordsUpright": [
      "Nurturing abundance",
      "Practical care",
      "Grounded luxury"
    ],
    "keywordsReversed": [
      "Smothering care",
      "Workaholic home",
      "Insecurity"
    ],
    "meaningUpright": "Create cozy prosperity for self and others. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Control through caretaking. Soften grip. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  },
  {
    "id": "pentacles-king",
    "name": "King of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": 14,
    "rank": "king",
    "imageFile": "peki.jpg",
    "keywordsUpright": [
      "Wealth mastery",
      "Business sense",
      "Reliable provider"
    ],
    "keywordsReversed": [
      "Greed",
      "Materialism",
      "Inflexible"
    ],
    "meaningUpright": "King of the orchard: ethical success. (Earth: body, work, money, and the material world.)",
    "meaningReversed": "Success without soul. Lead with values. (Earth: body, work, money, and the material world.)",
    "description": "A pentacles card of earth, speaking to body, work, money, and the material world."
  }
]
