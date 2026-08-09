export type CrystalFamily =
  | 'quartz'
  | 'silicate'
  | 'oxide'
  | 'carbonate'
  | 'sulfide'
  | 'phosphate'
  | 'other'

export interface Crystal {
  id: string
  name: string
  alsoCalled?: string
  family: CrystalFamily
  color: string
  chakra: string
  element: string
  intentions: string[]
  description: string
  properties: string
  howToUse: string
  care: string
  imageFile: string
}

export function crystalImageUrl(crystal: Crystal): string {
  return `/crystals/${crystal.imageFile}`
}
