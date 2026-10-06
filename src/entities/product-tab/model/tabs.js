import { images } from '@/shared/assets'

/**
 * @typedef {{ id: string, label: string, icon: string, title: string, text: string,
 *   points: string[], image: string }} ProductTab
 */
export const PRODUCT_TABS = [
  {
    id: 'create',
    label: 'Create',
    icon: 'create',
    title: 'Create',
    text: 'Build contracts from smart templates in minutes. No copy and paste.',
    points: ['Start from a template', 'Add data fields once', 'Send in one click'],
    image: images.tabCreate,
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    icon: 'collaborate',
    title: 'Collaborate',
    text: 'Work together on one version in real-time. No hocus pocus.',
    points: ['Edit live', 'Make fields interactive', 'Stay one step ahead'],
    image: images.tabCollaborate,
  },
  {
    id: 'sign',
    label: 'Sign',
    icon: 'sign',
    title: 'Sign',
    text: 'Sign anywhere, on any device, with e-signatures that hold up legally.',
    points: ['Sign with e-ID or SMS', 'Invite many signers', 'Track every signature'],
    image: images.tabSign,
  },
  {
    id: 'manage',
    label: 'Manage',
    icon: 'manage',
    title: 'Manage',
    text: 'Keep every contract in one place, with clear owners and reminders.',
    points: ['Find any contract fast', 'Get renewal reminders', 'Set who can see what'],
    image: images.tabManage,
  },
  {
    id: 'analyze',
    label: 'Analyze',
    icon: 'analyze',
    title: 'Analyze',
    text: 'See what is happening across all contracts with live reports.',
    points: ['Follow contract status', 'Spot slow steps', 'Share reports with your team'],
    image: images.tabAnalyze,
  },
  {
    id: 'integrate',
    label: 'Integrate',
    icon: 'integrate',
    title: 'Integrate',
    text: 'Connect your favorite tools and let contract data flow where you need it.',
    points: ['Connect CRM and HR tools', 'Sync fields automatically', 'Use our open API'],
    image: images.tabIntegrate,
  },
]
