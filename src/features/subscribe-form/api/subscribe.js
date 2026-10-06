import { apiRequest } from '@/shared/api'

// STUB: sends the email to a fake API
export function subscribeToNewsletter(email) {
  return apiRequest('/subscribe', { email })
}
