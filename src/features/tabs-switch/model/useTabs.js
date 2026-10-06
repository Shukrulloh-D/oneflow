import { useCallback, useState } from 'react'

// tabs: [{ id }]
export function useTabs(tabs, initialId = tabs[0]?.id) {
  const [activeId, setActiveId] = useState(initialId)

  const move = useCallback(
    (step) => {
      const index = tabs.findIndex((tab) => tab.id === activeId)
      const nextIndex = (index + step + tabs.length) % tabs.length
      setActiveId(tabs[nextIndex].id)
      return tabs[nextIndex].id
    },
    [tabs, activeId]
  )

  return { activeId, setActiveId, next: () => move(1), prev: () => move(-1) }
}
