'use client'

import { useCarousel } from '@/hooks/useCarousel'
import { useEffect, useMemo } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import type { BannerSlide } from '../types'

type BannerCarouselProps = {
  slides: readonly BannerSlide[]
}

export function BannerCarousel({ slides }: BannerCarouselProps) {
  const plugins = useMemo(
    () => [Autoplay({ delay: 5000, defaultInteraction: false })],
    [slides]
  )
  const [viewportRef, api, selectedIndex, scrollTo] = useCarousel({
    options: {
      align: 'start',
      loop: true,
    },
    plugins,
  })

  useEffect(() => {
    if (!api) return

    const autoplay = api.plugins().autoplay
    if (!autoplay) return

    autoplay.play()

    return () => {
      autoplay.stop()
    }
  }, [api])

  function selectSlide(index: number) {
    scrollTo(index)
    api?.plugins().autoplay?.reset()
  }

  return (
    <section
      aria-labelledby="banner-carousel-title"
      aria-roledescription="carousel"
      className="space-y-3"
    >
      <h2
        id="banner-carousel-title"
        className="px-1 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500"
      >
        Demo 1: Mobile storefront banner
      </h2>

      <div
        ref={viewportRef}
        className="touch-pan-y overflow-hidden rounded-2xl bg-zinc-950"
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              aria-label={`${index + 1} / ${slides.length}`}
              aria-roledescription="slide"
              className="min-w-0 flex-[0_0_100%]"
            >
              <article className="relative min-h-105 overflow-hidden sm:min-h-95">
                <BannerMedia slide={slide} />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-label="选择 Banner"
        className="flex items-center justify-center gap-1"
      >
        {slides.map((slide, index) => {
          const isActive = index === selectedIndex

          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`显示第 ${index + 1} 张 Banner`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => selectSlide(index)}
              className="flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white"
            >
              <span
                className={`block h-2 rounded-full transition-all ${isActive
                  ? 'w-6 bg-zinc-950 dark:bg-white'
                  : 'w-2 bg-zinc-300 dark:bg-zinc-600'
                  }`}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
}

function BannerMedia({ slide }: { slide: BannerSlide }) {
  if (slide.mediaType === 'video') {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={slide.poster}
        aria-label="UNice 新品造型展示视频"
        className="absolute inset-0 size-full object-cover"
      >
        <source src={slide.image} type="video/mp4" />
        当前浏览器不支持视频播放。
      </video>
    )
  }

  return (
    <Image
      src={slide.image}
      alt=""
      fill
      sizes="(max-width: 448px) 100vw, 448px"
      unoptimized
      className="object-cover"
    />
  )
}
