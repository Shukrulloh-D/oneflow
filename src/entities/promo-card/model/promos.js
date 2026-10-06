import { images } from '@/shared/assets'

/** @typedef {{ id: string, label: string, title: string, cta: string, href: string, image: string }} Promo */
export const PROMOS = [
  {
    id: 'one-platform',
    label: 'One platform. All departments',
    title: 'Create, sign and manage any type of agreement you can think of',
    cta: 'Find out more',
    href: '/about',
    image: images.more1,
  },
  {
    id: 'magic-of-flow',
    label: 'Customer stories',
    title: 'Six reasons why teams around the world love the magic of flow',
    cta: 'Find out more',
    href: '/blog',
    image: images.more2,
  },
]
