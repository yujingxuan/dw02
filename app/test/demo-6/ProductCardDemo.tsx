"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Heart,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["All", "Wavy", "Curly", "Lace"] as const;

const products = [
  {
    id: "body-wave-lace-wig",
    name: "Body Wave Lace Wig",
    eyebrow: "13×4 HD lace · 180% density",
    category: "Wavy",
    price: 169,
    compareAt: 229,
    rating: 4.9,
    reviews: 326,
    badge: "BESTSELLER",
    image:
      "https://ima.unice.com/ol/media/20250123/bf9f153139a41fe5a8578939b269d554.png?im=Resize,width=528,height=704",
    imageAlt: "Body Wave Lace Wig styling result",
    imagePosition: "object-center",
    colors: ["#18181b", "#5c3a2e", "#6b1d2a"],
  },
  {
    id: "natural-curly-wig",
    name: "Natural Curly Wig",
    eyebrow: "Defined curls · Pre-plucked",
    category: "Curly",
    price: 189,
    compareAt: null,
    rating: 4.8,
    reviews: 184,
    badge: "NEW",
    image:
      "https://ima.unice.com/ol/media/20260724/fc63ed9791c4cedb43cdf75dfdb95d9c.jpg",
    imageAlt: "Natural Curly Wig styling result",
    imagePosition: "object-center",
    colors: ["#18181b", "#3d2a22", "#6b1d2a"],
  },
  {
    id: "hd-lace-collection",
    name: "HD Lace Collection",
    eyebrow: "Invisible lace · Natural hairline",
    category: "Lace",
    price: 209,
    compareAt: null,
    rating: 4.7,
    reviews: 92,
    badge: null,
    image:
      "https://ima.unice.com/ol/media/20260724/0a63f79fbfc86c763f48dc7a8be912f0.jpg",
    imageAlt: "HD Lace Wig styling result",
    imagePosition: "object-center",
    colors: ["#18181b", "#5c3a2e"],
  },
  {
    id: "glueless-everyday-wig",
    name: "Glueless Everyday Wig",
    eyebrow: "Ready to wear · Beginner friendly",
    category: "Lace",
    price: 149,
    compareAt: 199,
    rating: 4.9,
    reviews: 241,
    badge: "LOW STOCK",
    image:
      "https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704",
    imageAlt: "Glueless Everyday Wig styling result",
    imagePosition: "object-center",
    colors: ["#18181b", "#5c3a2e", "#6b1d2a"],
  },
] as const;

type Product = (typeof products)[number];

function ProductCard({
  product,
  wished,
  onToggleWish,
  onAdd,
}: {
  product: Product;
  wished: boolean;
  onToggleWish: () => void;
  onAdd: () => void;
}) {
  const discount = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : null;

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 dark:bg-zinc-900 md:rounded-[1.35rem]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition duration-500 ease-out group-hover:scale-[1.035] ${product.imagePosition}`}
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-2.5 sm:p-3">
          <div className="flex flex-wrap gap-1.5">
            {product.badge ? (
              <span className="rounded-full bg-zinc-950/90 px-2.5 py-1.5 text-[9px] font-bold tracking-[0.12em] text-white backdrop-blur-sm sm:text-[10px] dark:bg-white/90 dark:text-zinc-950">
                {product.badge}
              </span>
            ) : null}
            {discount ? (
              <span className="rounded-full bg-[#ff5c35] px-2.5 py-1.5 text-[9px] font-bold tracking-[0.08em] text-white sm:text-[10px]">
                −{discount}%
              </span>
            ) : null}
          </div>

          <button
            type="button"
            aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
            aria-pressed={wished}
            onClick={onToggleWish}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-sm backdrop-blur-sm transition active:scale-90 dark:bg-zinc-950/85 dark:text-white"
          >
            <Heart className={wished ? "fill-[#ff5c35] text-[#ff5c35]" : ""} size={19} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="pt-3">
        <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 sm:text-xs">
          <Star className="fill-amber-400 text-amber-400" size={13} strokeWidth={1.5} />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <h2 className="mt-1.5 truncate text-sm font-semibold tracking-[-0.01em] text-zinc-950 dark:text-white sm:text-base">
          {product.name}
        </h2>
        <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
          {product.eyebrow}
        </p>

        <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-sm font-bold tabular-nums text-zinc-950 dark:text-white sm:text-base">
            ${product.price}.00
          </span>
          {product.compareAt ? (
            <span className="text-xs tabular-nums text-zinc-400 line-through sm:text-sm">
              ${product.compareAt}.00
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex -space-x-1" aria-label={`${product.colors.length} colors available`}>
            {product.colors.map((color, index) => (
              <span
                key={color}
                className="size-5 rounded-full border-2 border-white ring-1 ring-zinc-200 dark:border-zinc-950 dark:ring-zinc-700"
                style={{ backgroundColor: color, zIndex: product.colors.length - index }}
              />
            ))}
          </div>
          <span className="text-[10px] font-medium text-zinc-400 sm:text-xs">
            {product.colors.length} colors
          </span>
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-3 text-xs font-semibold text-white transition hover:bg-[#ff5c35] active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#ff7a59] sm:text-sm"
        >
          <Plus size={16} strokeWidth={2.2} />
          Quick add
        </button>
      </div>
    </article>
  );
}

export function ProductCardDemo() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [wished, setWished] = useState<Set<string>>(new Set());
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const visibleProducts = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((product) => product.category === category),
    [category],
  );

  function toggleWish(id: string) {
    setWished((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function addToBag(product: Product) {
    setAddedProduct(product.name);
    window.setTimeout(() => setAddedProduct(null), 2200);
  }

  return (
    <section className="mx-auto w-full max-w-6xl pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#f1ebe1] px-5 py-7 text-zinc-950 dark:bg-[#191815] dark:text-white sm:px-8 sm:py-9 md:rounded-[2rem] md:px-10">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d64a29] dark:text-[#ff8a6e]">
          <Sparkles size={15} />
          Curated essentials
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <h1 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
              Small upgrades,
              <br />
              big everyday energy.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
              Thoughtfully made favorites, selected for better days and slower weekends.
            </p>
          </div>
          <button className="flex min-h-11 w-fit items-center gap-2 text-sm font-semibold underline decoration-zinc-400 underline-offset-4 transition hover:text-[#d64a29]">
            Shop the edit <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className="mt-7 flex items-end justify-between gap-4 sm:mt-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Trending now</p>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-white sm:text-3xl">
            Made to be used
          </h2>
        </div>
        <p className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">Free shipping over $75</p>
      </div>

      <div className="-mx-6 mt-5 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition active:scale-95 ${
                  active
                    ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-600"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            wished={wished.has(product.id)}
            onToggleWish={() => toggleWish(product.id)}
            onAdd={() => addToBag(product)}
          />
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 px-5 py-12 text-center text-sm text-zinc-500 dark:border-zinc-700">
          More picks are coming soon.
        </div>
      ) : null}

      <div className="mt-10 flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 sm:text-sm">
        <Check size={16} className="text-emerald-600" />
        30-day returns · Secure checkout · Ships worldwide
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-sm items-center gap-3 rounded-2xl bg-zinc-950 px-4 py-3 text-sm text-white shadow-2xl transition duration-300 dark:bg-white dark:text-zinc-950 ${
          addedProduct ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 dark:bg-zinc-950/10">
          <ShoppingBag size={18} />
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold">Added to your bag</span>
          <span className="block truncate text-xs text-zinc-300 dark:text-zinc-600">{addedProduct}</span>
        </span>
      </div>
    </section>
  );
}
