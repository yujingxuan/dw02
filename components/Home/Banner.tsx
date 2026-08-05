"use client";

import Accessibility from "embla-carousel-accessibility";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";

import { useCarousel } from "@/hooks/useCarousel";
const BANNER_SLIDES = [
  {
    id: "summer-textures",
    eyebrow: "The Summer Edit",
    title: "Your best hair days start here.",
    description:
      "Lightweight, effortless styles made for every plan on your calendar.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Woman wearing a natural textured hairstyle",
    action: "Shop new arrivals",
    href: "/shop",
  },
  {
    id: "glueless-collection",
    eyebrow: "Wear & Go",
    title: "Glueless. Gorgeous. Gone in minutes.",
    description:
      "Beginner-friendly styles with a secure fit and an invisible finish.",
    image:
      "https://ima.unice.com/ol/media/20260424/e371f8385eb71a52a9f91e03d60fdd7e.png?im=Resize,width=332,height=442",
    imageAlt: "Woman with long dark hair in a fashion portrait",
    action: "Explore glueless wigs",
    href: "/collections/wear-go-glueless",
  },
  {
    id: "signature-wave",
    eyebrow: "Signature Texture",
    title: "Soft waves. Major confidence.",
    description:
      "Natural movement, a polished finish, and volume that lasts all day.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Woman with voluminous curly hair",
    action: "Shop body wave",
    href: "/collections/body-wave-essentials",
  },
] as const;

export default function Banner() {
  const dotsRef = useRef<HTMLDivElement>(null);
  const plugins = useMemo(
    () => [
      Accessibility({ carouselAriaLabel: "Featured collections" }),
      Autoplay({ delay: 6000, defaultInteraction: false }),
    ],
    [],
  );
  const [viewportRef, api, selectedIndex, scrollTo] = useCarousel({
    options: {
      align: "start",
      loop: true,
      breakpoints: {
        "(prefers-reduced-motion: reduce)": { duration: 0 },
      },
    },
    plugins,
  });

  useEffect(() => {
    if (!api) return;

    const accessibility = api.plugins().accessibility;
    const autoplay = api.plugins().autoplay;

    if (dotsRef.current) {
      accessibility?.setupDotButtons(dotsRef.current);
    }
    autoplay?.play();

    return () => autoplay?.stop();
  }, [api]);

  function selectSlide(index: number) {
    scrollTo(index);
    api?.plugins().autoplay?.reset();
  }

  return (
    <section
      aria-label="Featured collections"
      aria-roledescription="carousel"
      className="relative bg-neutral-950 text-white"
    >
      <div ref={viewportRef} className="touch-pan-y overflow-hidden">
        <div className="flex">
          {BANNER_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              aria-label={`${index + 1} / ${BANNER_SLIDES.length}`}
              aria-roledescription="slide"
              className="min-w-0 flex-[0_0_100%]"
            >
              <article className="relative h-120 overflow-hidden sm:h-140 lg:h-160">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  sizes="100vw"
                  preload={index === 0}
                  unoptimized
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/10 md:bg-linear-to-r md:from-black/80 md:via-black/35 md:to-transparent"
                />

                <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-24 sm:px-6 sm:pb-28 lg:items-center lg:px-8 lg:pb-8">
                  <div className="max-w-xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm">
                      {slide.eyebrow}
                    </p>
                    <h2 className="max-w-lg text-4xl leading-[0.96] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                      {slide.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.href}
                      className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {slide.action}
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:bottom-7 sm:px-6 lg:px-8">
        <div
          ref={dotsRef}
          aria-label="Choose a banner"
          className="pointer-events-auto flex"
        >
          {BANNER_SLIDES.map((slide, index) => {
            const isActive = selectedIndex === index;

            return (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show banner ${index + 1}: ${slide.eyebrow}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => selectSlide(index)}
                className="flex size-11 touch-manipulation items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-300 motion-reduce:transition-none ${isActive ? "w-7 bg-white" : "w-2 bg-white/45"
                    }`}
                />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
