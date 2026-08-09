/**
 * Patches src/data/deck.ts with unique scene descriptions and richer meanings.
 * Run: node scripts/enrich-deck.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const deckPath = join(root, 'src', 'data', 'deck.ts')

/** @type {Record<string, { description: string, meaningUpright: string, meaningReversed: string }>} */
const E = {
  'major-0': {
    description:
      'A young traveler stands at a cliff edge with a small pack and a white rose, a loyal dog at their heels. The sun rises behind them as they step toward open sky, eyes bright with wonder rather than fear.',
    meaningUpright:
      'A fresh chapter asks for trust. Begin before you feel fully ready: stay curious, travel light, and let innocence reopen doors that cynicism closed. This is permission to leap with an open heart.',
    meaningReversed:
      'Fear of change, careless risk, or clinging to the familiar. Pause long enough to choose with intention, then move. Recklessness and frozen hesitation are two sides of the same untrusted step.',
  },
  'major-1': {
    description:
      'A figure in a garden raises one hand to the sky and points the other to earth, the infinity symbol above their head. On the table before them lie the cup, sword, wand, and pentacle: every tool of the suits within reach.',
    meaningUpright:
      'You already hold what you need. Focus will, align word with deed, and turn idea into form. Manifestation here is craft plus intention, not wishful thinking.',
    meaningReversed:
      'Scattered talent, half-truths, or skill used to manipulate. Reclaim honesty, gather your attention, and use power in service of what you actually want to build.',
  },
  'major-2': {
    description:
      'A veiled woman sits between black and white pillars, a scroll half-hidden in her robes, a crescent at her feet. Behind her hangs a patterned curtain that hides deep water and the pomegranates of secret knowledge.',
    meaningUpright:
      'Answers live beneath noise. Trust dreams, body signals, and the quiet knowing that arrives before language. Stillness is not emptiness; it is the temple where truth speaks.',
    meaningReversed:
      'Secrets kept too long, intuition ignored, or silence used as armor. Soften defenses, name what you sense, and look within without drowning in speculation.',
  },
  'major-3': {
    description:
      'A crowned woman rests on a lush throne amid wheat, trees, and a waterfall, the symbol of Venus on her shield. Soft light and ripe harvest surround her as nature itself seems to lean toward her care.',
    meaningUpright:
      'Grow what you love. Nurture people, projects, and pleasure with patience. Beauty, fertility, and creative abundance ask for embodied care rather than force.',
    meaningReversed:
      'Overgiving, creative drought, or comfort that becomes stagnation. Restore pleasure without erasing yourself. Tend your own garden before pouring into every other field.',
  },
  'major-4': {
    description:
      'A stern sovereign sits on a stone throne carved with rams, armored legs planted, an ankh scepter in hand. Mountains rise behind him like walls of law, order made visible in rock and red robe.',
    meaningUpright:
      'Build foundations that last. Lead with clear boundaries, structure, and responsibility. Authority here is stewardship: protect the realm so life inside it can flourish.',
    meaningReversed:
      'Rigidity, control struggles, or authority without heart. Soften armor without losing spine. Structure should serve life, not crush it.',
  },
  'major-5': {
    description:
      'A hierophant in triple crown raises two fingers in blessing between two pillars, keyed at his feet. Two tonsured seekers kneel before him, receiving tradition through ritual and shared teaching.',
    meaningUpright:
      'Seek living guidance: mentor, ritual, community, or a lineage of practice. Belonging grows when meaning is shared, not merely obeyed. Learn the forms that still carry spirit.',
    meaningReversed:
      'Blind rule-following or rejecting all structure out of spite. Find wisdom that breathes. Keep what teaches; release empty dogma.',
  },
  'major-6': {
    description:
      'An angel of air spreads arms above a man and woman in a garden, the Tree of Knowledge and Tree of Life behind them. A mountain rises between the pair as blessing and choice settle over the scene.',
    meaningUpright:
      'A meaningful bond, values-aligned choice, or union of desire and conscience. Choose what matches your soul, not only what flatters your ego. Love here includes integrity.',
    meaningReversed:
      'Temptation away from truth, misaligned partnership, or refusing to choose. Clarify what you stand for before promising your heart or your path.',
  },
  'major-7': {
    description:
      'A crowned warrior rides a stone chariot pulled by black and white sphinxes, canopy starred above, city walls behind. Armor gleams as opposing forces are yoked into one forward motion.',
    meaningUpright:
      'Harness conflict into direction. Victory comes through disciplined will, emotional steering, and refusing to let opposites tear you apart. Move with purpose, not frenzy.',
    meaningReversed:
      'Loss of control, aggression without aim, or stalled momentum. Realign the reins. Direction matters more than speed.',
  },
  'major-8': {
    description:
      'A woman in white gently closes the jaws of a lion, infinity above her head, flowers in the grass. Strength here is quiet communion, not domination: courage wrapped in softness.',
    meaningUpright:
      'Meet challenge with soft courage. Love and patience tame what fear cannot. True strength includes compassion for your own fierce instincts.',
    meaningReversed:
      'Self-doubt, force without heart, or passion turned destructive. Reclaim gentle power. You do not need to crush the lion to walk beside it.',
  },
  'major-9': {
    description:
      'An elder in a grey cloak holds a lantern lighting a snowy mountain path, staff in the other hand, hood drawn close. Distance and solitude frame a private pilgrimage toward inner light.',
    meaningUpright:
      'Step back to hear your own lantern. Wisdom ripens in quiet, study, and honest solitude. Withdrawal here is sacred, not escape from duty forever.',
    meaningReversed:
      'Isolation that hardens into loneliness, or refusing needed counsel. Return when the lantern has enough oil. Share what you learned in the dark.',
  },
  'major-10': {
    description:
      'A great wheel turns in the sky marked with letters and symbols, sphinx above, serpent descending, Anubis rising. Clouds and winged figures frame the eternal cycle of rise and fall.',
    meaningUpright:
      'Fate turns. Ride the wheel with awareness: luck, timing, and change are alive. Adapt rather than cling. What falls may rise again in another form.',
    meaningReversed:
      'Resistance to change, bad timing, or feeling crushed by cycles. Accept what you cannot steer, then act where you can. The wheel still turns.',
  },
  'major-11': {
    description:
      'A crowned figure holds upright sword and scales, seated between pillars under a violet veil. Clear light and balanced judgment fill the card like a courtroom of conscience.',
    meaningUpright:
      'Cause meets effect. Speak truth, weigh options fairly, and make amends where needed. Justice asks for accountability without cruelty.',
    meaningReversed:
      'Bias, avoidance of consequence, or harsh self-judgment. Correct the imbalance. Fairness includes mercy toward yourself when you repair harm.',
  },
  'major-12': {
    description:
      'A figure hangs upside down from a living tree by one foot, serene face glowing, free leg crossed into a triangle of light. Halo brightens as surrender becomes a new way of seeing.',
    meaningUpright:
      'Pause willingly. Insight arrives when you stop forcing outcomes. Sacrifice here is strategic: release control to gain perspective.',
    meaningReversed:
      'Stalling, martyrdom, or refusing a needed pause. Either commit to the wait with meaning, or come down and act. Do not hang forever without learning.',
  },
  'major-13': {
    description:
      'A skeletal rider in black armor carries a banner of the white rose past fallen figures, a rising sun beyond the gates. Endings ride beside dawn; the field is cleared for what comes next.',
    meaningUpright:
      'Something completes so something new can live. Let go cleanly of roles, habits, or stories that have finished. Transformation is not only loss; it is compost for rebirth.',
    meaningReversed:
      'Fear of endings, clinging to what is already gone, or change resisted until it breaks you. Release with ritual. Dawn waits past the gate.',
  },
  'major-14': {
    description:
      'An angel pours water between two cups at the edge of a pool, one foot on land and one in water, an iris blooming nearby. The path into distant mountains asks for measured alchemy.',
    meaningUpright:
      'Blend opposites slowly. Healing, moderation, and patient integration create gold from tension. Temperance is skillful mixing, not bland compromise.',
    meaningReversed:
      'Extremes, impatience, or forced fusion. Slow the pour. Balance returns one careful measure at a time.',
  },
  'major-15': {
    description:
      'A horned figure perches on a pedestal above two chained humans, torch inverted, pentagram above. Bat wings and dark stone frame temptation, attachment, and the shadow made visible.',
    meaningUpright:
      'Name the chain. Desire, addiction, or power dynamics hold lessons if faced honestly. Freedom begins when you see what owns your attention.',
    meaningReversed:
      'Breaking free, or denial that deepens the bond. Untie what you can. Shadow work is liberation, not shame.',
  },
  'major-16': {
    description:
      'Lightning splits a crowned tower as flame bursts from its windows and figures fall through storm-dark air. Sudden rupture clears false structures so truth can breathe.',
    meaningUpright:
      'What was unstable collapses. Liberation can arrive as shock. After the strike, rebuild on honest ground rather than returning to the old facade.',
    meaningReversed:
      'Delaying an inevitable fall, or trauma without integration. Face the crack before the whole wall goes. Healing follows honesty.',
  },
  'major-17': {
    description:
      'A nude woman kneels at a pool under a great star, pouring water onto land and into water, an ibis in a tree nearby. Soft night and open sky wash the scene with quiet hope.',
    meaningUpright:
      'After crisis, renew faith. Pour healing outward and inward. Inspiration, serenity, and gentle guidance return when you allow yourself to receive.',
    meaningReversed:
      'Discouragement, disconnection from wonder, or hope deferred. Look up anyway. Small rituals of care reopen the sky.',
  },
  'major-18': {
    description:
      'A full moon watches a path winding between a wolf and a dog toward distant towers, a crayfish rising from a pool. Mist and instinct rule this liminal night road.',
    meaningUpright:
      'Walk by feeling through uncertainty. Dreams, intuition, and emotional tides matter more than sharp daylight logic. Trust the path even when it is fogged.',
    meaningReversed:
      'Anxiety stories, illusion, or confusion clearing. Wait for enough light before major decisions. Name fear so it stops wearing a costume.',
  },
  'major-19': {
    description:
      'A joyful child rides a white horse beneath a radiant sun, sunflowers blooming along a garden wall. Clear light and simple happiness fill every corner of the card.',
    meaningUpright:
      'Warm success, vitality, and honest joy. Stand in clear light. Celebrate what is working without apology.',
    meaningReversed:
      'Temporary clouds, ego glare, or forced cheer. Rest, then shine again. Joy returns more easily when you stop performing it.',
  },
  'major-20': {
    description:
      'An angel blows a great trumpet above rising figures who answer the call from coffins and waves. Mountains frame an awakening that is both personal and collective.',
    meaningUpright:
      'Hear the summons to a truer life. Reckon with the past, forgive what you can, and rise into the chapter that fits who you have become.',
    meaningReversed:
      'Self-criticism, refusal to rise, or guilt that blocks rebirth. Answer the call gently. Awakening does not require perfection.',
  },
  'major-21': {
    description:
      'A dancing figure within a green wreath holds twin wands, surrounded by the four living creatures of the corners. Completion and celebration braid into one endless dance.',
    meaningUpright:
      'A cycle completes. Integrate what you learned, celebrate mastery, and step into the next dance with wholeness rather than leftover fragments.',
    meaningReversed:
      'Loose ends, delayed closure, or fear of finishing. Tie the threads. Completion frees you to begin again.',
  },

  // Wands
  'wands-ace': {
    description:
      'A hand emerges from a cloud offering a flowering wand, leaves tumbling toward a distant castle and rolling hills. The spark of fire is gifted, not forced.',
    meaningUpright:
      'A surge of creative fire arrives. Begin the project, passion, or quest while the spark is hot. Inspiration wants embodiment, not endless planning.',
    meaningReversed:
      'False starts, delayed drive, or inspiration blocked by clutter. Clear space, then strike the match again with one clear aim.',
  },
  'wands-2': {
    description:
      'A figure on a castle battlement holds a globe while gazing over sea and mountains, one wand fixed behind and another in hand. Horizon and choice share the same view.',
    meaningUpright:
      'Plan the bold next step. Vision meets decision: map the territory, then commit to a direction worthy of your fire.',
    meaningReversed:
      'Indecision, fear of the unknown, or restless pacing without departure. Choose, or consciously wait. Standing forever on the wall wastes the view.',
  },
  'wands-3': {
    description:
      'A cloaked figure stands among three planted wands watching ships on a yellow sea. Foresight and patience meet as ventures move toward distant shores.',
    meaningUpright:
      'Expansion is underway. Trust collaboration and long-range vision. Your ships are moving; stay present enough to guide them in.',
    meaningReversed:
      'Delays, short-sightedness, or going alone when help is needed. Recalibrate plans and ask for partnership before frustration burns the map.',
  },
  'wands-4': {
    description:
      'Four wands form a flowered arch as two figures raise bouquets toward a celebration near a castle. Joy, homecoming, and communal warmth fill the threshold.',
    meaningUpright:
      'Celebrate belonging. Mark milestones with people who feel like home. Harmony and shared happiness are worth the wreath.',
    meaningReversed:
      'Tension at home, shaky foundations, or joy postponed. Repair the base before forcing festivity. Belonging can be rebuilt.',
  },
  'wands-5': {
    description:
      'Five youths clash with wands in a chaotic scramble, none fully striking cleanly. Competition, noise, and scattered will fill the dusty ground.',
    meaningUpright:
      'Conflict can sharpen skill if you stay playful and fair. Channel rivalry into growth rather than injury. Chaos asks for clearer aims.',
    meaningReversed:
      'Avoidance, inner conflict, or a quarrel going underground. Name the struggle so energy can move. Resolution begins with honesty.',
  },
  'wands-6': {
    description:
      'A rider wearing a victory wreath parades on horseback through a cheering crowd, wand held high. Public recognition and hard-won progress light the street.',
    meaningUpright:
      'Claim your win. Let yourself be seen after effort. Progress deserves witness, and leadership here includes gracious confidence.',
    meaningReversed:
      'Ego inflation, private success unnoticed, or praise delayed. Affirm your worth without needing the crowd. Keep moving with integrity.',
  },
  'wands-7': {
    description:
      'A figure on a high ridge defends against six rising wands, one wand braced in both hands. Advantage of position meets the press of challenge from below.',
    meaningUpright:
      'Hold your ground. Defend values, work, or boundaries with courage. You are not alone in the fight, but the high ground is yours to keep.',
    meaningReversed:
      'Overwhelm, exhaustion, or feeling outnumbered. Choose which battles matter. Courage includes strategic retreat and rest.',
  },
  'wands-8': {
    description:
      'Eight flowering wands streak diagonally through open air toward earth, swift as arrows. Motion, messages, and momentum fill a sky empty of obstacles.',
    meaningUpright:
      'Things accelerate. News, travel, and action arrive quickly. Stay aligned so speed serves your aim rather than scattering you.',
    meaningReversed:
      'Delays, mixed signals, or haste creating mistakes. Slow just enough to aim. Momentum returns when the path is clear.',
  },
  'wands-9': {
    description:
      'A bandaged warrior leans on a wand before a wall of eight more upright wands, watching the road with wary readiness. Strength remains, but vigilance has a cost.',
    meaningUpright:
      'You are weary yet upright. Protect your energy, set boundaries, and prepare without assuming every approach is an attack.',
    meaningReversed:
      'Paranoia, collapse after long defense, or refusing rest. Lay some weapons down. Recovery is part of resilience.',
  },
  'wands-10': {
    description:
      'A bent figure carries a heavy bundle of ten wands toward a distant town, face hidden by the load. Ambition and duty have become a weight almost too large to see past.',
    meaningUpright:
      'You are carrying too much. Delegate, prioritize, or set some goals down. Success should not crush the person who earned it.',
    meaningReversed:
      'Release of burdens, or burnout forcing a drop. Ask for help. Lightening the load is wisdom, not failure.',
  },
  'wands-page': {
    description:
      'A young figure in a desert landscape studies a tall flowering wand with bright curiosity, as if hearing news in the wood itself. Fresh ideas wait to be spoken aloud.',
    meaningUpright:
      'A messenger of inspiration. Stay curious, explore, and say yes to creative experiments. Beginner energy is a gift.',
    meaningReversed:
      'Scattered ideas, procrastination, or immature fire without follow-through. Pick one spark and tend it until it becomes flame.',
  },
  'wands-knight': {
    description:
      'A knight in armor charges forward on a rearing horse, wand raised, pyramids behind in a landscape of heat and motion. Adventure and passion ride without looking back.',
    meaningUpright:
      'Act on desire with brave heat. Chase the opportunity, travel, create. Courage here is kinetic and charismatic.',
    meaningReversed:
      'Impulsiveness, temper, or reckless pursuit. Temper the gallop. Passion needs aim, or it burns the road behind you.',
  },
  'wands-queen': {
    description:
      'A queen sits on a throne carved with lions, sunflower in hand, black cat at her feet, desert sun around her. Warmth and independent confidence radiate from her gaze.',
    meaningUpright:
      'Own your creative throne. Lead with warmth, self-trust, and generous fire. Magnetism here comes from authenticity.',
    meaningReversed:
      'Jealousy, demanding energy, or confidence turned cold. Soften control while keeping your radiance. Warmth is strength.',
  },
  'wands-king': {
    description:
      'A king on a salamander-carved throne holds a flowering wand, lions on his cape, desert realm behind him. Mature fire: vision married to responsible leadership.',
    meaningUpright:
      'Lead with inspired authority. Big-picture vision, entrepreneurship, and decisive warmth create kingdoms others want to join.',
    meaningReversed:
      'Domineering will, arrogance, or high standards without kindness. Reign in ego. True kings grow other leaders.',
  },

  // Cups
  'cups-ace': {
    description:
      'A hand from a cloud offers an overflowing chalice with a dove and wafer above, lotus blossoms rising from the water below. Emotional blessing pours without scarcity.',
    meaningUpright:
      'Open to feeling, love, and new connection. A cup overflows: receive intuition and heart-led beginnings with gratitude.',
    meaningReversed:
      'Blocked emotion, empty offers, or love refused. Soften enough to feel again. Refill starts with honesty about what you need.',
  },
  'cups-2': {
    description:
      'A youth and maiden exchange cups beneath a winged lion caduceus, each mirroring the other in pledge. Partnership and mutual regard seal a quiet vow.',
    meaningUpright:
      'Reciprocal love, friendship, or alliance. Two hearts meeting as equals. Cherish give-and-take that feels balanced.',
    meaningReversed:
      'Imbalance, broken trust, or one-sided devotion. Restore equality or release what cannot meet you halfway.',
  },
  'cups-3': {
    description:
      'Three women raise cups in a garden celebration, fruits of harvest around their feet. Friendship, toast, and shared delight braid into community joy.',
    meaningUpright:
      'Celebrate with your people. Belonging, creativity shared, and chosen family renew the heart. Joy multiplies in company.',
    meaningReversed:
      'Gossip, overindulgence, or isolation from your circle. Return to genuine connection. Not every gathering nourishes.',
  },
  'cups-4': {
    description:
      'A seated figure under a tree crosses arms, three cups ignored at their feet while a cloud-hand offers a fourth. Apathy turns away from what is already present.',
    meaningUpright:
      'Dissatisfaction or emotional pause. Look within before rejecting what is offered. Contemplation can be wise; numbness is not.',
    meaningReversed:
      'Emerging from stuckness, or restless refusal of good enough. Notice new invitations. Motivation returns when you lift your eyes.',
  },
  'cups-5': {
    description:
      'A cloaked figure mourns three spilled cups while two remain upright behind them, a bridge and castle across the water. Loss is real, and so is what still stands.',
    meaningUpright:
      'Honor grief without denying remaining gifts. Feel the spill fully, then turn toward what can still be carried forward.',
    meaningReversed:
      'Acceptance after loss, or clinging to sorrow past its teaching. Begin the walk toward the bridge. Healing is already available.',
  },
  'cups-6': {
    description:
      'A child offers a cup of flowers to another in a sheltered garden village, six cups blooming with memory and kindness. Innocence and nostalgia share soft light.',
    meaningUpright:
      'Sweet exchange, childhood themes, or reconnection with old friends. Kindness and simple giving restore tenderness.',
    meaningReversed:
      'Stuck in the past, rose-colored memory, or immaturity. Keep the sweetness; release the trap of yesterday.',
  },
  'cups-7': {
    description:
      'A silhouetted figure faces seven cups in a cloud, each holding visions: jewels, laurels, a serpent, a castle, a dragon, a shrouded figure, and treasure. Fantasy crowds the sky.',
    meaningUpright:
      'Dream richly, then discern. Many options glitter; not all are true nourishment. Choose the cup that serves your real life.',
    meaningReversed:
      'Clarity after confusion, or temptation losing its glamour. Commit to one path. Imagination works best with feet on the ground.',
  },
  'cups-8': {
    description:
      'A figure in a red cloak walks away from eight stacked cups toward a moonlit mountain path. Leaving what was built seeks a truer emotional horizon.',
    meaningUpright:
      'Walk toward deeper meaning even if it means leaving comfort. Emotional honesty may require departure.',
    meaningReversed:
      'Fear of leaving, aimless wandering, or returning too soon. Know why you walk. Purpose turns departure into pilgrimage.',
  },
  'cups-9': {
    description:
      'A satisfied figure sits before a curved display of nine golden cups, arms crossed in contentment. Wishes manifested sit like a banquet of the heart.',
    meaningUpright:
      'Enjoy emotional abundance and wishes fulfilled. Pleasure, comfort, and gratitude are allowed. Savor what you asked for.',
    meaningReversed:
      'Overindulgence, hollow satisfaction, or wanting more without thanks. Recenter on what truly satisfies the heart.',
  },
  'cups-10': {
    description:
      'A couple stands arm in arm beneath a rainbow of ten cups while children dance nearby, home and river completing the scene. Shared love finds its happy shore.',
    meaningUpright:
      'Emotional fulfillment in family, partnership, or chosen kinship. Harmony and lasting affection are possible and present.',
    meaningReversed:
      'Discord at home, idealized family myths, or broken harmony. Repair communication. Love needs tending, not only rainbows.',
  },
  'cups-page': {
    description:
      'A youth in a floral tunic studies a cup from which a fish peeks, standing at the water\'s edge in surprise and wonder. A poetic message rises from the deep.',
    meaningUpright:
      'Gentle news of the heart, creative sensitivity, or beginner intuition. Stay open to unexpected feeling and art.',
    meaningReversed:
      'Emotional immaturity, moodiness, or creative blocks. Soften judgment of your feelings. Practice expressing them cleanly.',
  },
  'cups-knight': {
    description:
      'A knight rides a white horse along a river, cup held carefully, winged helm gleaming. Romance and idealism advance with graceful devotion.',
    meaningUpright:
      'Follow beauty and heartfelt pursuit. Offer devotion, art, and sincere feeling. Charm here is genuine invitation.',
    meaningReversed:
      'Moodiness, empty promises, or fantasy without follow-through. Ground romance in reliable action.',
  },
  'cups-queen': {
    description:
      'A queen on a seashell throne holds an ornate cup, gazing into its depths beside calm water and pebbled shore. Empathy and psychic grace flow from her quiet attention.',
    meaningUpright:
      'Lead with compassion and emotional intelligence. Deep listening heals. Trust your intuitive reading of people and rooms.',
    meaningReversed:
      'Emotional overwhelm, codependence, or withdrawn coldness. Care for your own cup first so you can offer without drowning.',
  },
  'cups-king': {
    description:
      'A king on a throne carved with sea creatures holds a cup with steady calm, water and ships in the distance. Mature emotional mastery without losing kindness.',
    meaningUpright:
      'Balanced feeling and wise counsel. Offer steady empathy, creative leadership, and calm in emotional storms.',
    meaningReversed:
      'Emotional manipulation, repression, or mood used as control. Return to honest kindness. Softness is not weakness.',
  },

  // Swords
  'swords-ace': {
    description:
      'A hand from a cloud grips an upright sword crowned with light, mountains sharp below. Clear air and decisive truth cut through fog.',
    meaningUpright:
      'Mental clarity and breakthrough. Cut to truth, speak cleanly, and claim a new idea with courage. The mind can liberate.',
    meaningReversed:
      'Confusion, harsh words, or truth used as a weapon. Soften the edge. Clarity without cruelty is the aim.',
  },
  'swords-2': {
    description:
      'A blindfolded figure sits between sea and sky holding two crossed swords, a slim moon above. Stalemate and guarded calm hold a choice at bay.',
    meaningUpright:
      'A decision waits behind the blindfold. Weigh options with honesty. Temporary truce is useful; endless avoidance is not.',
    meaningReversed:
      'Information emerging, or forced choice after delay. Remove the blindfold. Indecision has a cost you can now see.',
  },
  'swords-3': {
    description:
      'Three swords pierce a heart beneath a storm of rain and grey cloud. Sorrow is named and made visible without decoration.',
    meaningUpright:
      'Heartbreak, betrayal, or necessary grief. Speak the pain so it can move. Honesty about hurt begins healing.',
    meaningReversed:
      'Recovery after wounding, or lingering in pain past its season. Forgiveness (of self or other) loosens the blades.',
  },
  'swords-4': {
    description:
      'A knight lies in repose within a church-like chamber, three swords on the wall and one along the bier, stained glass glowing. Rest restores the mind.',
    meaningUpright:
      'Retreat and recover. Stillness, sleep, and contemplative pause heal mental exhaustion. Recuperation is strategic.',
    meaningReversed:
      'Restlessness, burnout ignored, or isolation that no longer heals. Return to life gently when the mind is ready.',
  },
  'swords-5': {
    description:
      'A smirking figure gathers swords while two others walk away in defeat under a stormy sky. Hollow victory and gloating shadow the field.',
    meaningUpright:
      'Conflict won at a cost. Question whether triumph is honorable. Ambition without empathy isolates the winner.',
    meaningReversed:
      'Desire to reconcile, or lingering humiliation after a fight. Choose dignity. Not every battle deserves a trophy.',
  },
  'swords-6': {
    description:
      'A figure ferries a child across quiet water toward distant land, six swords standing in the boat. Passage toward calmer shores carries what matters most.',
    meaningUpright:
      'Transition after difficulty. Leave turbulent waters; carry lessons, not all the weight. Healing travel is underway.',
    meaningReversed:
      'Stuck in transition, resisting help, or unfinished departure. Accept the crossing. Peace is on the other bank.',
  },
  'swords-7': {
    description:
      'A figure sneaks from a camp carrying five swords while two remain planted, glancing back mid-escape. Strategy, cunning, and secrecy share the scene.',
    meaningUpright:
      'Tact and clever strategy may be needed. Act discreetly, but examine motives. Not all quiet exits are theft; some are survival.',
    meaningReversed:
      'Coming clean, getting caught, or overcomplicated schemes. Simplify. Honesty may free more energy than stealth.',
  },
  'swords-8': {
    description:
      'A bound, blindfolded figure stands among eight surrounding swords on muddy ground, castle on a distant hill. Restriction is tight, yet the bindings look like belief.',
    meaningUpright:
      'Feeling trapped by thoughts, systems, or fear. The cage may be partly mental. Seek one small opening toward help and agency.',
    meaningReversed:
      'Release from restriction, or clearer sight of how you are bound. Untie what you can. Freedom starts with one loosened knot.',
  },
  'swords-9': {
    description:
      'A figure sits up in bed covering their face while nine swords hang on a dark wall above. Night worry and sleepless dread press close.',
    meaningUpright:
      'Anxiety, guilt, or racing thoughts at their loudest. Name the worry to shrink it. Reach for support; you are not meant to endure this alone.',
    meaningReversed:
      'Hope returning after anguish, or secrets coming to light. Morning exists. Practice grounding and speak what haunts you.',
  },
  'swords-10': {
    description:
      'A figure lies face down with ten swords in their back beneath a dark sky, distant water and sunrise beginning at the horizon. The worst has pierced through; ending clears the field.',
    meaningUpright:
      'Painful completion. An ordeal ends so a new dawn can begin. Accept the ending; do not keep fighting a finished battle.',
    meaningReversed:
      'Recovery after rock bottom, or resisting an ending that already happened. Rise carefully. Survival is already underway.',
  },
  'swords-page': {
    description:
      'A young figure stands windswept on uneven ground, sword upright, birds wheeling in a restless sky. Vigilant curiosity watches for news and ideas.',
    meaningUpright:
      'Curious mind, study, and watchful learning. Ask sharp questions. Fresh ideas and messages arrive for those who listen.',
    meaningReversed:
      'Gossip, scattered focus, or hasty judgments. Slow your speech. Truth needs patience as much as cleverness.',
  },
  'swords-knight': {
    description:
      'A knight charges through wind-bent trees, sword raised, armor gleaming with fierce determination. Thought becomes action at full speed.',
    meaningUpright:
      'Assert ideas with courage. Debate, defend, and move decisively. Mental bravery cuts through hesitation.',
    meaningReversed:
      'Aggression, cruelty in words, or charging without aim. Sheathe the blade until intention is clean.',
  },
  'swords-queen': {
    description:
      'A queen sits on a carved stone throne holding an upright sword, stern and clear-eyed beneath a windy sky. Perception is keen; compassion is chosen, not naive.',
    meaningUpright:
      'See cleanly and speak precisely. Independent thought and honest boundaries protect what matters. Clarity can still be kind.',
    meaningReversed:
      'Coldness, bitter judgment, or overthinking that isolates. Soften without abandoning truth. Warmth and intellect can share a throne.',
  },
  'swords-king': {
    description:
      'A king on a throne of butterflies and moons holds a sword upright, cloaked in stern intellect. Fair judgment and strategic thought rule the air.',
    meaningUpright:
      'Lead with principle, ethics, and clear analysis. Fair decisions and intellectual authority serve the whole.',
    meaningReversed:
      'Tyranny of intellect, harsh verdicts, or power without empathy. Temper justice with humanity.',
  },

  // Pentacles
  'pentacles-ace': {
    description:
      'A hand from a cloud holds a golden pentacle above a flowering garden path toward distant mountains. Material blessing and grounded opportunity are offered.',
    meaningUpright:
      'A tangible new beginning: income, health, craft, or resources. Receive the seed and plant it in real soil with care.',
    meaningReversed:
      'Missed opportunity, shaky finances, or gifts mishandled. Reassess foundations before expanding. Stewardship starts small.',
  },
  'pentacles-2': {
    description:
      'A dancing figure juggles two pentacles within an infinity loop beside ships on rolling waves. Flexibility and playful balance meet changing tides.',
    meaningUpright:
      'Adapt with change. Balance priorities, budgets, and roles. Stay light enough to dance while keeping both coins in play.',
    meaningReversed:
      'Dropped balls, financial disorganization, or overcommitment. Simplify. Choose what you can actually juggle.',
  },
  'pentacles-3': {
    description:
      'Three artisans work on a cathedral arch, one holding plans while others carve, pentacles set into the stone. Collaboration builds something lasting.',
    meaningUpright:
      'Skill shared in community. Teamwork, craftsmanship, and learning through practice create durable results.',
    meaningReversed:
      'Poor collaboration, mediocrity accepted, or working in isolation when help would elevate the work. Raise the standard together.',
  },
  'pentacles-4': {
    description:
      'A crowned figure sits clutching a pentacle, with two beneath the feet and one held tightly atop the crown, city behind. Security becomes a closed fist.',
    meaningUpright:
      'Protect resources wisely. Saving and boundaries around money or energy matter. Careful stewardship prevents loss.',
    meaningReversed:
      'Greed, fear-based hoarding, or sudden release of control. Loosen the grip enough to live. Security without joy is another cage.',
  },
  'pentacles-5': {
    description:
      'Two figures in winter rags pass a lit church window, five pentacles in the stained glass above them. Hardship is real; warmth may be nearer than it feels.',
    meaningUpright:
      'Material or health struggle. Seek aid, community, and practical support. Isolation deepens the cold; asking is strength.',
    meaningReversed:
      'Recovery beginning, help accepted, or leaving a scarcity story. Step toward the lit door. Improvement can be incremental.',
  },
  'pentacles-6': {
    description:
      'A prosperous figure scales coins into a beggar\'s hands while another waits, six pentacles balanced in the scene. Giving and receiving share dignity.',
    meaningUpright:
      'Generosity with fairness. Share resources, accept help, and keep exchanges honorable. Mutual support builds trust.',
    meaningReversed:
      'Strings attached, debt imbalance, or charity that shames. Restore dignity to both giver and receiver.',
  },
  'pentacles-7': {
    description:
      'A farmer leans on a hoe gazing at seven pentacles growing on a bush, assessing the crop mid-season. Patience and evaluation share the field.',
    meaningUpright:
      'Tend what you planted. Assess progress without harvesting too early. Long-term investment asks for faith and honest review.',
    meaningReversed:
      'Impatience, poor returns, or quitting before fruit. Adjust strategy. Not every crop fails; some need more seasons.',
  },
  'pentacles-8': {
    description:
      'An artisan hammers a pentacle at a workbench, finished coins displayed, city gate behind. Devotion to craft fills the quiet workshop.',
    meaningUpright:
      'Mastery through practice. Diligent skill-building, apprenticeship, and focused work compound into excellence.',
    meaningReversed:
      'Perfectionism, boredom, or cut corners. Return to purposeful practice. Quality grows from care, not haste alone.',
  },
  'pentacles-9': {
    description:
      'A woman in a garden of grapes stands among nine pentacles, a hooded bird on her hand, estate walls behind her. Self-sufficient abundance and refined pleasure.',
    meaningUpright:
      'Enjoy the fruits of your labor. Independence, comfort, and cultivated beauty are rewards of steady effort.',
    meaningReversed:
      'Overwork, lonely success, or status without satisfaction. Share the garden. Luxury means little without presence.',
  },
  'pentacles-10': {
    description:
      'An elder in an archway watches a family and dogs in a prosperous courtyard, ten pentacles patterned in the air. Legacy, home, and lasting wealth intertwine.',
    meaningUpright:
      'Long-term security, family resources, and inheritance of values as well as wealth. Build what outlasts you.',
    meaningReversed:
      'Family money conflict, unstable foundations, or legacy burdens. Clarify agreements. Wealth needs wise relationships.',
  },
  'pentacles-page': {
    description:
      'A youth stands in a grassy field studying a pentacle held carefully, as if learning the language of earth one coin at a time. Practical study begins.',
    meaningUpright:
      'Student of the material world. Learn skills, budgets, and embodied practice. Good news about work or study may arrive.',
    meaningReversed:
      'Procrastination, poor planning, or unfocused study. Start with one practical lesson and complete it.',
  },
  'pentacles-knight': {
    description:
      'A knight rides a heavy horse through a plowed field, pentacle held steady, methodical rather than rushed. Reliable progress moves acre by acre.',
    meaningUpright:
      'Steady work ethic and responsible ambition. Keep promises. Slow, thorough progress builds trust and results.',
    meaningReversed:
      'Stubbornness, stagnation, or laziness dressed as caution. Adjust pace without abandoning duty.',
  },
  'pentacles-queen': {
    description:
      'A queen on a floral throne holds a pentacle in a blooming garden, rabbits nearby, lush and grounded. Nurture of home, body, and resources radiates calm prosperity.',
    meaningUpright:
      'Practical care and abundance mindset. Tend health, home, and finances with warmth. Security can feel generous.',
    meaningReversed:
      'Smothering care, insecurity about money, or neglect of the body. Rebalance nurture so it includes you.',
  },
  'pentacles-king': {
    description:
      'A king on a carved throne holds a pentacle, castle and grapevines behind him, gaze steady and assessing. Mastery of the material realm without losing dignity.',
    meaningUpright:
      'Reliable leadership in work, money, and provision. Build empires with ethics. Prosperity shared wisely endures.',
    meaningReversed:
      'Greed, rigidity, or status obsession. Soften control. True wealth includes integrity and generosity.',
  },
}

const src = readFileSync(deckPath, 'utf8')
const ids = [...src.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1])
const missing = ids.filter((id) => !E[id])
if (missing.length) {
  console.error('Missing enrichments for:', missing.join(', '))
  process.exit(1)
}

let out = src
for (const [id, fields] of Object.entries(E)) {
  const blockRe = new RegExp(
    `("id":\\s*"${id}"[\\s\\S]*?"meaningUpright":\\s*")([\\s\\S]*?)("\\s*,\\s*\\n\\s*"meaningReversed":\\s*")([\\s\\S]*?)("\\s*,\\s*\\n\\s*"description":\\s*")([\\s\\S]*?)(")`,
    'm',
  )
  if (!blockRe.test(out)) {
    console.error('Could not match card block for', id)
    process.exit(1)
  }
  out = out.replace(
    blockRe,
    `$1${escapeTs(fields.meaningUpright)}$3${escapeTs(fields.meaningReversed)}$5${escapeTs(fields.description)}$7`,
  )
}

writeFileSync(deckPath, out)
console.log(`Enriched ${Object.keys(E).length} cards in deck.ts`)

function escapeTs(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}
