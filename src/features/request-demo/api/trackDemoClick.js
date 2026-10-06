import { apiRequest } from '@/shared/api'

// STUB: later it can send an analytics event
export function trackDemoClick(source) {
  return apiRequest('/analytics/demo-click', { source })
}
