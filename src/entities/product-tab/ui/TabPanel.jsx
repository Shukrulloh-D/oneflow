import { Button, Icon } from '@/shared/ui'
import { anchorHref, ANCHORS } from '@/shared/config'
import './TabPanel.css'

export function TabPanel({ tab }) {
  return (
    <div className="tab-panel">
      <div className="tab-panel__text">
        <h3 className="tab-panel__title">{tab.title}</h3>
        <p className="tab-panel__lead">{tab.text}</p>
        <ul className="tab-panel__points">
          {tab.points.map((point) => (
            <li key={point}>
              <Icon name="check-circle" size={16} />
              {point}
            </li>
          ))}
        </ul>
        <Button variant="outline" size="xs" href={anchorHref(ANCHORS.integrations)}>
          Learn more
        </Button>
      </div>
      <img className="tab-panel__img" src={tab.image} alt={tab.title} width="480" height="320" />
    </div>
  )
}
