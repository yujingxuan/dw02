'use client'

import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import type { ProductReview } from '../types'

type ReviewsCarouselProps = {
  reviews: readonly ProductReview[]
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [viewportRef] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
    },
    [ClassNames({ snapped: 'is-selected' })]
  )

  return (
    <section
      aria-labelledby="reviews-carousel-title"
      className="space-y-3"
    >
      <h2
        id="reviews-carousel-title"
        className="px-1 text-sm font-bold text-zinc-900 dark:text-zinc-100"
      >
        Demo 4: Customer reviews
      </h2>

      <div ref={viewportRef} className="overflow-hidden py-2 touch-pan-y">
        <div className="-ml-3 flex">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="min-w-0 flex-[0_0_82%] scale-90 pl-3 opacity-40 transition-all duration-300 [&.is-selected]:scale-100 [&.is-selected]:opacity-100"
            >
              <div className="flex h-36 flex-col justify-between rounded-2xl bg-zinc-900 p-4 text-white shadow-lg">
                <p className="line-clamp-3 text-xs italic text-zinc-300">
                  “{review.comment}”
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-zinc-800 pt-2 text-xs font-medium">
                  <span className="text-zinc-400">{review.author}</span>
                  <span
                    aria-label={`${review.rating} 星评价`}
                    className="text-yellow-400"
                  >
                    {'★'.repeat(review.rating)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
