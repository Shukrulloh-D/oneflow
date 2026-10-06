import { ANCHORS, ROUTES, SITE, anchorHref } from '@/shared/config'

export const FOOTER_COLUMNS = [
  {
    title: 'Why Oneflow',
    links: [
      { label: 'Product tour', to: anchorHref(ANCHORS.productTour) },
      { label: 'Smart contracts', to: anchorHref(ANCHORS.smartContracts) },
      { label: 'Built for scale', to: anchorHref(ANCHORS.platform) },
      { label: 'Integrations', to: anchorHref(ANCHORS.integrations) },
      { label: 'Customer stories', to: anchorHref(ANCHORS.testimonials) },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'FAQ', to: ROUTES.about },
      { label: 'Onboarding', to: ROUTES.about },
      { label: 'Developers', to: ROUTES.about },
      { label: 'Help Center', to: ROUTES.about },
      { label: 'E-sign guide', to: anchorHref(ANCHORS.resources) },
    ],
  },
  {
    title: 'Security',
    links: [
      { label: 'Security Center', to: ROUTES.about },
      { label: 'Reliability', to: ROUTES.about },
      { label: 'Compliance', to: ROUTES.about },
      { label: 'E-signing legality', to: ROUTES.about },
      { label: 'GDPR', to: ROUTES.about },
    ],
  },
  {
    title: 'More Oneflow',
    links: [
      { label: 'About us', to: ROUTES.about },
      { label: 'Pricing', to: ROUTES.pricing },
      { label: 'Partners', to: ROUTES.about },
      { label: 'Blog', to: ROUTES.blog },
      { label: 'Careers', to: ROUTES.about },
      { label: 'Contact', to: ROUTES.about },
    ],
  },
]

export const LEGAL_LINKS = [
  { label: 'Login', to: SITE.links.login },
  { label: 'Privacy', to: ROUTES.about },
  { label: 'Cookie statement', to: ROUTES.about },
]
