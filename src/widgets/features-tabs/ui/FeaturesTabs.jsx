import { Container, Reveal } from '@/shared/ui'
import { ANCHORS } from '@/shared/config'
import { TabList, useTabs } from '@/features/tabs-switch'
import { PRODUCT_TABS, TabPanel, getTabById } from '@/entities/product-tab'
import './FeaturesTabs.css'

export function FeaturesTabs() {
  const { activeId, setActiveId } = useTabs(PRODUCT_TABS)
  const tab = getTabById(PRODUCT_TABS, activeId)

  return (
    <section className="features-tabs" id={ANCHORS.features}>
      <Container>
        <Reveal className="features-tabs__panel">
          <TabList tabs={PRODUCT_TABS} activeId={activeId} onChange={setActiveId} />
          {/* key restarts the CSS animation on every tab change */}
          <div
            key={tab.id}
            className="features-tabs__content"
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
          >
            <TabPanel tab={tab} />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
