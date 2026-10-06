import { apiRequest } from '@/shared/api'

// STUB: later it can send an analytics event
export function trackTrialClick(source) {
  return apiRequest('/analytics/trial-click', { source })
}
