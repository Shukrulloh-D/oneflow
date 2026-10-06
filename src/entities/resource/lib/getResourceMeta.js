import { formatReadTime } from '@/shared/lib'

// "E-signature · 7 min read" split into two parts for the UI
export function getResourceMeta(item) {
  return [item.category, item.readTime ? formatReadTime(item.readTime) : null].filter(Boolean)
}
