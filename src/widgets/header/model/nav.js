import { ANCHORS, ROUTES, anchorHref } from '@/shared/config'

// Main menu. Items with `children` become dropdowns on desktop.
export const NAV_ITEMS = [
  {
    label: 'Why Oneflow?',
    to: anchorHref(ANCHORS.features),
    children: [
      { label: 'Product tour', to: anchorHref(ANCHORS.productTour) },
      { label: 'Smart contracts', to: anchorHref(ANCHORS.smartContracts) },
      { label: 'Built for scale', to: anchorHref(ANCHORS.platform) },
      { label: 'Integrations', to: anchorHref(ANCHORS.integrations) },
      { label: 'Customer stories', to: anchorHref(ANCHORS.testimonials) },
    ],
  },
  {
    label: 'Learn',
    to: anchorHref(ANCHORS.resources),
    children: [
      { label: 'Articles', to: anchorHref(ANCHORS.resources) },
      { label: 'More from Oneflow', to: anchorHref(ANCHORS.more) },
      { label: 'Blog', to: ROUTES.blog },
    ],
  },
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'About', to: ROUTES.about },
  { label: 'Blog', to: ROUTES.blog },
]
