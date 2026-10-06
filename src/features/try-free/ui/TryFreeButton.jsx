import { Button } from '@/shared/ui'
import { SITE } from '@/shared/config'
import { trackTrialClick } from '../api/trackTrialClick'

// "Get Oneflow free" -> opens the sign-up form (TODO: confirm URL in SITE.links.signup)
export function TryFreeButton({ source = 'unknown', children = 'Get Oneflow free', ...props }) {
  return (
    <Button variant="yellow" href={SITE.links.signup} onClick={() => trackTrialClick(source)} {...props}>
      {children}
    </Button>
  )
}
