import { useCallback, useState } from 'react'

// perView can be a decimal (3.3 means 3 full cards and a part of the next one)
export function useSlider({ count, perView }) {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, count - Math.floor(perView))
  const current = Math.min(index, maxIndex)

  const goTo = useCallback(
    (i) => setIndex(Math.min(Math.max(i, 0), maxIndex)),
    [maxIndex]
  )

  return {
    index: current,
    maxIndex,
    goTo,
    next: () => goTo(current + 1),
    prev: () => goTo(current - 1),
    canPrev: current > 0,
    canNext: current < maxIndex,
  }
}
