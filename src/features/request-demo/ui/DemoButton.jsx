import { Button } from '@/shared/ui'
import { SITE } from '@/shared/config'
import { trackDemoClick } from '../api/trackDemoClick'

// "Get a demo" -> opens the booking form (TODO: confirm URL in SITE.links.demo)
export function DemoButton({ source = 'unknown', children = 'Get a demo', ...props }) {
  return (
    <Button variant="yellow" href={SITE.links.demo} onClick={() => trackDemoClick(source)} {...props}>
      {children}
    </Button>
  )
}
