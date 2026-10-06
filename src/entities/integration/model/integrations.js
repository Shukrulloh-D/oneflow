import { images } from '@/shared/assets'

/**
 * Staggered logo grid. col (1-3) and row (1-7) place a logo on the desktop grid.
 * TODO: set the real tool names after checking the Figma layout.
 * @typedef {{ id: string, name: string, logo: string, col: number, row: number }} Integration
 */
export const INTEGRATIONS = [
  { id: 'i1', name: 'Integration 1', logo: images.integration01, col: 2, row: 1 },
  { id: 'i2', name: 'Integration 2', logo: images.integration02, col: 1, row: 2 },
  { id: 'i3', name: 'Integration 3', logo: images.integration03, col: 3, row: 2 },
  { id: 'i4', name: 'Integration 4', logo: images.integration04, col: 2, row: 3 },
  { id: 'i5', name: 'Integration 5', logo: images.integration05, col: 1, row: 4 },
  { id: 'i6', name: 'Integration 6', logo: images.integration06, col: 3, row: 4 },
  { id: 'i7', name: 'Integration 7', logo: images.integration07, col: 2, row: 5 },
  { id: 'i8', name: 'Integration 8', logo: images.integration08, col: 1, row: 6 },
  { id: 'i9', name: 'Integration 9', logo: images.integration09, col: 3, row: 6 },
  { id: 'i10', name: 'Integration 10', logo: images.integration10, col: 2, row: 7 },
]
