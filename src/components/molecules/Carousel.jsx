import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel({ children, options = { align: 'start', loop: false }, className = '' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={`kol-embla ${className}`.trim()}>
      <div className="kol-embla__viewport" ref={emblaRef}>
        <div className="kol-embla__container">
          {Array.isArray(children)
            ? children.map((child, i) => (
                <div key={i} className="kol-embla__slide">{child}</div>
              ))
            : <div className="kol-embla__slide">{children}</div>}
        </div>
      </div>
      <div className="kol-embla__controls">
        <button
          type="button"
          className="kol-embla__btn"
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
        >‹</button>
        <button
          type="button"
          className="kol-embla__btn"
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
        >›</button>
      </div>
    </div>
  )
}
