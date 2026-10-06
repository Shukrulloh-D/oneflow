import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId, scrollToTop } from '@/shared/lib'

// Smooth scroll to #anchor, or to top when the page changes
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => scrollToId(hash.slice(1)), 50)
      return () => clearTimeout(timer)
    }
    scrollToTop()
  }, [pathname, hash, key])

  return null
}
