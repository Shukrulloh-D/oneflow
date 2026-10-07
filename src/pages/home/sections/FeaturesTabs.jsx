import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { tabs } from '../data'
import './FeaturesTabs.css'

export function FeaturesTabs() {
  // Collaborate is open at the start, like in Figma
  const [activeId, setActiveId] = useState('collaborate')
  const tab = tabs.find((item) => item.id === activeId)

  return (
    <section className="features-tabs" id="features">
      <div className="container">
        <div className="features-tabs__panel">
          <div className="tab-list">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === activeId ? 'tab-list__tab is-active' : 'tab-list__tab'}
                onClick={() => setActiveId(item.id)}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* key makes React create a new block on every tab change, so the animation starts again */}
          <div key={tab.id} className="features-tabs__content">
            <div className="tab-panel">
              <div>
                <h3 className="tab-panel__title">{tab.label}</h3>
                <p className="tab-panel__lead">{tab.text}</p>
                <ul className="tab-panel__points">
                  {tab.points.map((point) => (
                    <li key={point}>
                      <Icon name="check-circle" size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="xs" href="#integrations">
                  Learn more
                </Button>
              </div>
              <img className="tab-panel__img" src={tab.image} alt={tab.label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
