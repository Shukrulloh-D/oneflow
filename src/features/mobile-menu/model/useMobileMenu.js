import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((value) => !value), [])

  // close after navigation
  useEffect(() => {
    setIsOpen(false)
  }, [location.key])

  // lock page scroll + close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return { isOpen, toggle, close }
}
