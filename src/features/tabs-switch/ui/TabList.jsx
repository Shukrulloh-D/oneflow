import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import './TabList.css'

// tabs: [{ id, label, icon }]
export function TabList({ tabs, activeId, onChange }) {
  const onKeyDown = (e, index) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const step = e.key === 'ArrowRight' ? 1 : -1
    const next = tabs[(index + step + tabs.length) % tabs.length]
    onChange(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }

  return (
    <div className="tab-list" role="tablist" aria-label="Oneflow features">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          type="button"
          role="tab"
          aria-selected={tab.id === activeId}
          aria-controls={`panel-${tab.id}`}
          tabIndex={tab.id === activeId ? 0 : -1}
          className={cn('tab-list__tab', tab.id === activeId && 'is-active')}
          onClick={() => onChange(tab.id)}
          onKeyDown={(e) => onKeyDown(e, index)}
        >
          <Icon name={tab.icon} size={20} />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
