import { images } from '@/shared/images'

// variant is the card style: featured | dark | story | pink
export const featuredResource = {
  id: 'e-signatures-guide',
  variant: 'featured',
  tag: 'Article',
  title: 'A Basic Guide on E-signatures and What Makes Them Legally Binding',
  category: 'E-signature',
  readTime: 7,
  image: images.resourceFeatured,
}

export const resources = [
  {
    id: 'sign-online',
    variant: 'dark',
    tag: 'Guide',
    title: '29 documents you can sign online in 2021',
    category: 'Contract automation',
    readTime: 6,
    image: images.resourceGuide,
  },
  { id: 'sweco', variant: 'story', tag: 'Customer story', title: 'Sweco', cta: 'Read full story' },
  {
    id: 'digital-sales',
    variant: 'pink',
    tag: 'Article',
    title: 'Master digital sales: How to close deals when you’re not allowed to shake hands',
    category: 'Sales',
    readTime: 8,
    image: images.resourceArticle,
  },
]
