import { useRef } from 'react'

// Touch swipe helper. Spread the result on an element: <div {...swipe}>
export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 40 }) {
  const startX = useRef(null)

  return {
    onTouchStart: (e) => {
      startX.current = e.touches[0].clientX
    },
    onTouchEnd: (e) => {
      if (startX.current === null) return
      const dx = e.changedTouches[0].clientX - startX.current
      startX.current = null
      if (dx <= -threshold) onSwipeLeft?.()
      else if (dx >= threshold) onSwipeRight?.()
    },
  }
}
