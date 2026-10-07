import { Button } from '@/shared/ui/button'
import './features-tabs.css'

const tabs = [
  {
    id: 'create',
    name: 'Create',
    icon: '/images/create.svg',
    image: '/images/tab-create.png',
    text: 'Build contracts from smart templates in minutes. No copy and paste.',
    points: ['Start from a template', 'Add data fields once', 'Send in one click'],
  },
  {
    id: 'collaborate',
    name: 'Collaborate',
    icon: '/images/collaborate.svg',
    image: '/images/tab-collaborate.png',
    text: 'Work together on one version in real-time. No hocus pocus.',
    points: ['Edit live', 'Make fields interactive', 'Stay one step ahead'],
  },
  {
    id: 'sign',
    name: 'Sign',
    icon: '/images/sign.svg',
    image: '/images/tab-sign.png',
    text: 'Sign anywhere, on any device, with e-signatures that hold up legally.',
    points: ['Sign with e-ID or SMS', 'Invite many signers', 'Track every signature'],
  },
  {
    id: 'manage',
    name: 'Manage',
    icon: '/images/manage.svg',
    image: '/images/tab-manage.png',
    text: 'Keep every contract in one place, with clear owners and reminders.',
    points: ['Find any contract fast', 'Get renewal reminders', 'Set who can see what'],
  },
  {
    id: 'analyze',
    name: 'Analyze',
    icon: '/images/analyze.svg',
    image: '/images/tab-analyze.png',
    text: 'See what is happening across all contracts with live reports.',
    points: ['Follow contract status', 'Spot slow steps', 'Share reports with your team'],
  },
  {
    id: 'integrate',
    name: 'Integrate',
    icon: '/images/integrate.svg',
    image: '/images/tab-integrate.png',
    text: 'Connect your favorite tools and let contract data flow where you need it.',
    points: ['Connect CRM and HR tools', 'Sync fields automatically', 'Use our open API'],
  },
]

export function FeaturesTabs() {
  return (
    <section className="features-tabs" id="features">
      <div className="container">
        <div className="tabs">
          {tabs.map((tab) => (
            <div className="tab" key={tab.id}>
              {/* radio выбирает вкладку, CSS показывает нужный panel */}
              <input
                className="tab__radio"
                type="radio"
                name="tab"
                id={`tab-${tab.id}`}
                defaultChecked={tab.id === 'collaborate'}
              />
              <label className="tab__label" htmlFor={`tab-${tab.id}`}>
                <img src={tab.icon} alt="" />
                {tab.name}
              </label>

              <div className="tab__panel">
                <div>
                  <h3 className="tab__title">{tab.name}</h3>
                  <p className="tab__text">{tab.text}</p>
                  <ul className="tab__points">
                    {tab.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Button color="outline" size="xs">
                    Learn more
                  </Button>
                </div>
                <img className="tab__img" src={tab.image} alt={tab.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
