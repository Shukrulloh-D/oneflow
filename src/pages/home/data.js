import { images } from '@/shared/images'

// texts, images and lists for the sections of the home page
// (testimonials and resources have their own data in entities)

export const companies = [
  { id: 'apotea', name: 'Apotea', logo: images.apotea },
  { id: 'tele2', name: 'Tele2', logo: images.tele2 },
  { id: 'dagens-industri', name: 'Dagens industri', logo: images.dagensIndustri },
  { id: 'dormakaba', name: 'dormakaba', logo: images.dormakaba },
  { id: 'experis', name: 'Experis', logo: images.experis },
  { id: 'newsec', name: 'Newsec', logo: images.newsec },
  { id: 'system-bolaget', name: 'Systembolaget', logo: images.systemBolaget },
]

export const tabs = [
  {
    id: 'create',
    label: 'Create',
    icon: 'create',
    text: 'Build contracts from smart templates in minutes. No copy and paste.',
    points: ['Start from a template', 'Add data fields once', 'Send in one click'],
    image: images.tabCreate,
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    icon: 'collaborate',
    text: 'Work together on one version in real-time. No hocus pocus.',
    points: ['Edit live', 'Make fields interactive', 'Stay one step ahead'],
    image: images.tabCollaborate,
  },
  {
    id: 'sign',
    label: 'Sign',
    icon: 'sign',
    text: 'Sign anywhere, on any device, with e-signatures that hold up legally.',
    points: ['Sign with e-ID or SMS', 'Invite many signers', 'Track every signature'],
    image: images.tabSign,
  },
  {
    id: 'manage',
    label: 'Manage',
    icon: 'manage',
    text: 'Keep every contract in one place, with clear owners and reminders.',
    points: ['Find any contract fast', 'Get renewal reminders', 'Set who can see what'],
    image: images.tabManage,
  },
  {
    id: 'analyze',
    label: 'Analyze',
    icon: 'analyze',
    text: 'See what is happening across all contracts with live reports.',
    points: ['Follow contract status', 'Spot slow steps', 'Share reports with your team'],
    image: images.tabAnalyze,
  },
  {
    id: 'integrate',
    label: 'Integrate',
    icon: 'integrate',
    text: 'Connect your favorite tools and let contract data flow where you need it.',
    points: ['Connect CRM and HR tools', 'Sync fields automatically', 'Use our open API'],
    image: images.tabIntegrate,
  },
]

// align = place of the block in the checkerboard: right | left | mid
export const platformFeatures = [
  {
    id: 'friction',
    icon: 'friction',
    align: 'right',
    title: 'Forget friction',
    text: 'Experience a truly digital contract process that makes creating, signing, and managing agreements quick, smooth, and effortless. Contracts without trickery.',
  },
  {
    id: 'data',
    icon: 'data',
    align: 'left',
    title: 'Unleash data',
    text: 'Get faster and smarter with automated processes and intelligent insights that unlock the data inside your agreements. Leave behind the limitations of paper and PDFs. Just like that.',
  },
  {
    id: 'control',
    icon: 'control',
    align: 'mid',
    title: 'Take control',
    text: 'Know what’s happening in real-time with a complete overview of all your contracts, all in one place. It’s all the visibility and transparency you need, at your fingertips.',
  },
]

// col (1-3) and row (1-7) = place of the logo in the grid on desktop
export const integrations = [
  { id: 'i1', logo: images.integration01, col: 2, row: 1 },
  { id: 'i2', logo: images.integration02, col: 1, row: 2 },
  { id: 'i3', logo: images.integration03, col: 3, row: 2 },
  { id: 'i4', logo: images.integration04, col: 2, row: 3 },
  { id: 'i5', logo: images.integration05, col: 1, row: 4 },
  { id: 'i6', logo: images.integration06, col: 3, row: 4 },
  { id: 'i7', logo: images.integration07, col: 2, row: 5 },
  { id: 'i8', logo: images.integration08, col: 1, row: 6 },
  { id: 'i9', logo: images.integration09, col: 3, row: 6 },
  { id: 'i10', logo: images.integration10, col: 2, row: 7 },
]

export const promos = [
  {
    id: 'one-platform',
    label: 'One platform. All departments',
    title: 'Create, sign and manage any type of agreement you can think of',
    image: images.more1,
  },
  {
    id: 'magic-of-flow',
    label: 'Customer stories',
    title: 'Six reasons why teams around the world love the magic of flow',
    image: images.more2,
  },
]
