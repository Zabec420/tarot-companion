export interface SpreadDefinition {
  id: string
  name: string
  description: string
  positions: string[]
}

export const SPREADS: SpreadDefinition[] = [
  {
    id: 'single',
    name: 'Single Card',
    description: 'One card for focus, clarity, or a daily theme.',
    positions: ['Focus'],
  },
  {
    id: 'three',
    name: 'Three Card',
    description: 'Past, Present, and Future in a simple arc.',
    positions: ['Past', 'Present', 'Future'],
  },
  {
    id: 'celtic-cross',
    name: 'Celtic Cross',
    description: 'A classic ten-card map of the situation and path ahead.',
    positions: [
      'Present',
      'Challenge',
      'Distant Past',
      'Recent Past',
      'Best Outcome',
      'Near Future',
      'Your Approach',
      'External Influences',
      'Hopes And Fears',
      'Outcome',
    ],
  },
]

export function getSpread(id: string): SpreadDefinition | undefined {
  return SPREADS.find((s) => s.id === id)
}
