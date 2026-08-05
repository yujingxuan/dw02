"use client";

import { useCarousel } from "@/hooks/useCarousel";
import Image from "next/image";

const RELATED_PRODUCTS = [
  {
    id: "body-wave-lace-wig",
    name: "Body Wave Lace Wig",
    price: "$169",
    image:
      "https://ima.unice.com/ol/media/20250123/bf9f153139a41fe5a8578939b269d554.png?im=Resize,width=528,height=704",
  },
  {
    id: "natural-curly-wig",
    name: "Natural Curly Wig",
    price: "$189",
    image:
      "https://ima.unice.com/ol/media/20260724/fc63ed9791c4cedb43cdf75dfdb95d9c.jpg",
  },
  {
    id: "hd-lace-collection",
    name: "HD Lace Collection",
    price: "$209",
    image:
      "https://ima.unice.com/ol/media/20260724/0a63f79fbfc86c763f48dc7a8be912f0.jpg",
  },
  {
    id: "glueless-everyday-wig",
    name: "Glueless Everyday Wig",
    price: "$149",
    image:
      "https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704",
  },
] as const;

export default function RelatedProducts() {
  const [viewportRef] = useCarousel({
    options: {
      containScroll: "trimSnaps",
      dragFree: true,
    },
  });

  return (
    <section
      id="recommendations"
      aria-labelledby="related-products-title"
      className="mx-auto max-w-7xl space-y-4 px-2 py-4 sm:px-6 sm:py-14 lg:px-4"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Made for you
          </p>
          <h2
            id="related-products-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl"
          >
            You may also like
          </h2>
        </div>
        <span className="shrink-0 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          Swipe →
        </span>
      </div>

      <div ref={viewportRef} className="touch-pan-y overflow-hidden">
        <div className="flex gap-3 sm:gap-4">
          {RELATED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-[0_0_42%] sm:flex-[0_0_30%] lg:flex-[0_0_23%]"
            >
              <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 42vw, (max-width: 1023px) 30vw, 23vw"
                    unoptimized
                    className="object-cover transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="space-y-1 px-1 py-3">
                  <h3 className="truncate text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {product.name}
                  </h3>
                  <p className="text-base font-semibold text-neutral-950 dark:text-white">
                    {product.price}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
