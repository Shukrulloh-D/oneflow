import { Children } from 'react'
import { Icon } from '@/shared/ui'
import { cn, useMediaQuery, useSwipe } from '@/shared/lib'
import { useSlider } from '../model/useSlider'
import './Slider.css'

// perView: how many slides are visible on each screen size
export function Slider({ children, gap = 24, perView = { desktop: 3.3, tablet: 2, mobile: 1.1 } }) {
  const slides = Children.toArray(children)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isTablet = useMediaQuery('(min-width: 640px)')
  const view = isDesktop ? perView.desktop : isTablet ? perView.tablet : perView.mobile

  const { index, maxIndex, goTo, next, prev, canPrev, canNext } = useSlider({
    count: slides.length,
    perView: view,
  })
  const swipe = useSwipe({ onSwipeLeft: next, onSwipeRight: prev })

  const slideWidth = `calc((100% - ${gap * (view - 1)}px) / ${view})`
  const shift = `calc(${-index} * (${slideWidth} + ${gap}px))`

  return (
    <div className="slider">
      <div className="slider__viewport" {...swipe}>
        <div
          className="slider__track"
          style={{ gap: `${gap}px`, transform: `translateX(${shift})` }}
        >
          {slides.map((slide, i) => (
            <div className="slider__slide" key={i} style={{ flexBasis: slideWidth }}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="slider__controls">
        <div className="slider__arrows">
          <button className="slider__arrow" type="button" aria-label="Previous" onClick={prev} disabled={!canPrev}>
            <Icon name="chevron-left" size={20} />
          </button>
          <button className="slider__arrow" type="button" aria-label="Next" onClick={next} disabled={!canNext}>
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
        <div className="slider__dots">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn('slider__dot', i === index && 'is-active')}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
