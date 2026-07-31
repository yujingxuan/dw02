'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ProductImageLightbox = dynamic(
  () =>
    import('../_components/ProductImageLightbox').then(
      (module) => module.ProductImageLightbox
    ),
  { ssr: false }
)

type Product = {
  name: string
  subtitle: string
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  description: string
  colors: { name: string; value: string }[]
  lengths: string[]
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

export function ProductDetailDemo({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  const [selectedLength, setSelectedLength] = useState(product.lengths[1])
  const lightboxImages = useMemo(() => product.images, [product.images])

  return (
    <article className="mx-auto max-w-5xl pb-[calc(7rem+env(safe-area-inset-bottom))] text-zinc-950 dark:text-zinc-50 md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] md:gap-10 md:pb-10">
      <section aria-label="商品图片" className="min-w-0">
        <button
          type="button"
          aria-label={`打开${product.images[activeImage].alt}的全屏预览`}
          onClick={() => setLightboxIndex(activeImage)}
          className="group relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-zinc-900 dark:focus-visible:outline-white"
        >
          <Image
            src={product.images[activeImage].src}
            alt={product.images[activeImage].alt}
            fill
            sizes="(max-width: 767px) 100vw, 56vw"
            unoptimized
            preload
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-4 py-3 text-xs font-semibold text-white backdrop-blur-sm">
            全屏预览
          </span>
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-950 backdrop-blur-sm">
            {activeImage + 1} / {product.images.length}
          </span>
        </button>

        <div
          aria-label="选择商品图片"
          className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {product.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`显示${image.alt}`}
              aria-current={index === activeImage ? 'true' : undefined}
              onClick={() => setActiveImage(index)}
              className={`relative size-20 shrink-0 overflow-hidden rounded-xl border-2 bg-zinc-100 transition sm:size-24 ${
                index === activeImage
                  ? 'border-zinc-950 dark:border-white'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="96px"
                unoptimized
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8 md:mt-0 md:pt-2">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          New arrival
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{product.name}</h1>
        <p className="mt-1 text-base text-zinc-500 dark:text-zinc-400">
          {product.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-2xl font-bold">${product.price}</p>
          <p className="text-sm text-zinc-400 line-through">
            ${product.originalPrice}
          </p>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            Save ${product.originalPrice - product.price}
          </span>
        </div>

        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          ★ {product.rating} · {product.reviewCount} 条评价
        </p>
        <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>

        <fieldset className="mt-8">
          <legend className="text-sm font-semibold">
            颜色：<span className="font-normal">{selectedColor}</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-label={`选择${color.name}`}
                aria-pressed={selectedColor === color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm transition ${
                  selectedColor === color.name
                    ? 'border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950'
                    : 'border-zinc-300 hover:border-zinc-500 dark:border-zinc-700'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full border border-black/15"
                  style={{ backgroundColor: color.value }}
                />
                {color.name}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-sm font-semibold">选择长度</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {product.lengths.map((length) => (
              <button
                key={length}
                type="button"
                aria-pressed={selectedLength === length}
                onClick={() => setSelectedLength(length)}
                className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition ${
                  selectedLength === length
                    ? 'border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950'
                    : 'border-zinc-300 hover:border-zinc-500 dark:border-zinc-700'
                }`}
              >
                {length}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-8 space-y-3 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
          <p>满 $80 免费配送</p>
          <p>30 天内支持退换货</p>
          <p>预计 2–5 个工作日送达</p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 md:static md:col-start-2 md:mt-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
        <button
          type="button"
          className="min-h-12 w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-white"
        >
          加入购物袋 · ${product.price}
        </button>
      </div>

      {lightboxIndex !== null && (
        <ProductImageLightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={(index) => {
            setLightboxIndex(index)
            setActiveImage(index)
          }}
        />
      )}
    </article>
  )
}
