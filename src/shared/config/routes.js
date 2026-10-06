export const ROUTES = {
  home: '/',
  pricing: '/pricing',
  about: '/about',
  blog: '/blog',
}

// Section ids on the home page
export const ANCHORS = {
  customers: 'customers',
  smartContracts: 'smart-contracts',
  features: 'features',
  productTour: 'product-tour',
  platform: 'platform',
  demo: 'demo',
  testimonials: 'testimonials',
  integrations: 'integrations',
  resources: 'resources',
  more: 'more',
}

export function anchorHref(id) {
  return `${ROUTES.home}#${id}`
}
