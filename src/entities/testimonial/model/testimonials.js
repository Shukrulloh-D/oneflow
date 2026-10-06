import { images } from '@/shared/assets'

/**
 * @typedef {{ id: string, quote: string, name: string, role: string, company: string,
 *   avatar: string, storyUrl: string }} Testimonial
 */

export const TESTIMONIALS = [
  {
    id: 'mattias',
    quote:
      'With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!',
    name: 'Mattias Johnson',
    role: 'Key Account Manager',
    company: 'Bewico',
    avatar: images.avatarMattias,
    storyUrl: '/blog',
  },
  {
    id: 'elin',
    quote:
      'The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.',
    name: 'Elin Skoglund',
    role: 'HR Business Partner',
    company: 'Hadin Bil',
    avatar: images.avatarElin,
    storyUrl: '/blog',
  },
  {
    id: 'tor',
    quote:
      'From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.',
    name: 'Tor Nyhrman',
    role: 'Head of Indirect Sourcing',
    company: 'Systembolaget',
    avatar: images.avatarTor,
    storyUrl: '/blog',
  },
  {
    // TODO: replace with the real 4th quote from Figma
    id: 'jonas',
    quote:
      'All our contracts now live in one place instead of in email threads. Signing takes minutes, and everyone works on the same version.',
    name: 'Jonas Lind',
    role: 'Sales Manager',
    company: 'Nordic Co.',
    avatar: images.avatarJonas,
    storyUrl: '/blog',
  },
]
