'use client'

import { useCarousel } from '@/hooks/useCarousel'
import Image from 'next/image'
import type { RelatedProduct } from '../types'

type RelatedProductsCarouselProps = {
  products: readonly RelatedProduct[]
}

export function RelatedProductsCarousel({
  products,
}: RelatedProductsCarouselProps) {
  const [viewportRef] = useCarousel({
    options: {
      containScroll: 'trimSnaps',
      dragFree: true,
    },
  })

  return (
    <section
      id="recommendations"
      aria-labelledby="related-products-title"
      className="space-y-3"
    >
      <div className="flex items-center justify-between px-1">
        <h2
          id="related-products-title"
          className="text-sm font-bold text-zinc-900 dark:text-zinc-100"
        >
          Demo 3: You may also like
        </h2>
        <span className="text-xs text-zinc-400">Swipe →</span>
      </div>

      <div ref={viewportRef} className="touch-pan-y overflow-hidden">
        <div className="flex gap-3">
          {products.map((product) => (
            <div key={product.id} className="min-w-0 flex-[0_0_42%]">
              <article className="rounded-xl border border-zinc-100 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="relative mb-2 aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 448px) 42vw, 188px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="truncate text-xs font-medium text-zinc-800 dark:text-zinc-200">
                  {product.name}
                </p>
                <p className="mt-0.5 text-xs font-bold text-zinc-950 dark:text-white">
                  {product.price}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
