'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

const ProductImageLightbox = dynamic(
  () =>
    import('../../_components/ProductImageLightbox').then(
      (module) => module.ProductImageLightbox
    ),
  { ssr: false }
)

type ProductGalleryCarouselProps = {
  images: readonly string[]
}

export function ProductGalleryCarousel({
  images,
}: ProductGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [galleryRef, galleryApi] = useEmblaCarousel({ loop: true })
  const [thumbnailRef, thumbnailApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const lightboxImages = useMemo(
    () =>
      images.map((src, index) => ({
        src,
        alt: `Product view ${index + 1}`,
        width: 528,
        height: 704,
      })),
    [images]
  )

  const syncSelection = useCallback(() => {
    if (!galleryApi) return

    const nextIndex = galleryApi.selectedSnap()
    setActiveIndex(nextIndex)
    thumbnailApi?.goTo(nextIndex)
  }, [galleryApi, thumbnailApi])

  useEffect(() => {
    if (!galleryApi) return

    galleryApi.on('select', syncSelection)
    galleryApi.on('reinit', syncSelection)

    return () => {
      galleryApi.off('select', syncSelection)
      galleryApi.off('reinit', syncSelection)
    }
  }, [galleryApi, syncSelection])

  function selectImage(index: number) {
    galleryApi?.goTo(index)
  }

  function syncLightboxImage(index: number) {
    setLightboxIndex(index)
    galleryApi?.goTo(index)
  }

  return (
    <section
      aria-labelledby="product-gallery-title"
      className="space-y-3"
    >
      <h2
        id="product-gallery-title"
        className="px-1 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500"
      >
        Demo 2: Main gallery + thumbnails
      </h2>

      <div
        ref={galleryRef}
        className="overflow-hidden rounded-2xl bg-zinc-100 touch-pan-y dark:bg-zinc-900"
      >
        <div className="flex">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`打开第 ${index + 1} 张商品图的全屏预览`}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[3/4] min-w-0 flex-[0_0_100%] cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`Product view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                preload={index === 0}
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-black">
                点击放大
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={thumbnailRef}
        className="overflow-hidden touch-pan-y"
        aria-label="商品图缩略图"
      >
        <div className="flex gap-2">
          {images.map((src, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={src}
                type="button"
                aria-label={`显示第 ${index + 1} 张商品图`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => selectImage(index)}
                className={`relative aspect-[3/4] min-w-0 flex-[0_0_20%] overflow-hidden rounded-lg border-2 transition-all ${
                  isActive
                    ? 'scale-105 border-zinc-950 opacity-100 dark:border-white'
                    : 'border-transparent opacity-50'
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 448px) 20vw, 90px"
                  unoptimized
                  className="object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ProductImageLightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={syncLightboxImage}
        />
      )}
    </section>
  )
}
