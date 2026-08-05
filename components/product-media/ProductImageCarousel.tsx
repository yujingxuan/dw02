"use client";

import { useCarousel } from "@/hooks/useCarousel";
import Accessibility from "embla-carousel-accessibility";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { formatLabel } from "./formatLabel";
import type { ProductImage, ProductImageCarouselLabels } from "./types";

export interface ProductImageCarouselProps {
  images: readonly ProductImage[];
  activeIndex: number;
  labels: ProductImageCarouselLabels;
  onActiveIndexChange: (index: number) => void;
  onImageClick: (index: number) => void;
  imageSizes?: string;
  preloadFirstImage?: boolean;
  showCounter?: boolean;
  showZoomHint?: boolean;
}

export function ProductImageCarousel({
  images,
  activeIndex,
  labels,
  onActiveIndexChange,
  onImageClick,
  imageSizes = "(max-width: 767px) 100vw, 56vw",
  preloadFirstImage = true,
  showCounter = true,
  showZoomHint = true,
}: ProductImageCarouselProps) {
  const liveRegionRef = useRef<HTMLParagraphElement>(null);
  const accessibilityPlugin = useMemo(
    () =>
      Accessibility({
        announceChanges: true,
        carouselAriaLabel: labels.gallery,
        carouselAriaRoleDescription: labels.carouselRoleDescription,
        carouselRole: "group",
        slideAriaRoleDescription: labels.slideRoleDescription,
        slideAriaLabel: (
          _hasGroupedSlides,
          firstSlideIndex,
          _lastSlideIndex,
          totalSlides,
        ) =>
          formatLabel(labels.slideLabel, {
            index: firstSlideIndex + 1,
            total: totalSlides,
          }),
        liveRegionContent: (
          _hasGroupedSlides,
          firstSlideIndex,
          _lastSlideIndex,
          totalSlides,
        ) =>
          formatLabel(labels.liveRegion, {
            index: firstSlideIndex + 1,
            total: totalSlides,
          }),
      }),
    [labels],
  );
  const plugins = useMemo(
    () => [accessibilityPlugin],
    [accessibilityPlugin],
  );
  const [viewportRef, api, , scrollTo] = useCarousel({
    options: { loop: images.length > 1 },
    plugins,
    onSelect: onActiveIndexChange,
  });

  useEffect(() => {
    if (!api || api.selectedSnap() === activeIndex) return;
    scrollTo(activeIndex);
  }, [activeIndex, api, scrollTo]);

  useEffect(() => {
    if (!api || !liveRegionRef.current) return;

    api
      .plugins()
      .accessibility?.setupLiveRegion(liveRegionRef.current);
  }, [accessibilityPlugin, api]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        ref={viewportRef}
        className="touch-pan-y overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-3/4 min-w-0 flex-[0_0_100%]"
            >
              <button
                type="button"
                aria-label={formatLabel(labels.openImage, {
                  alt: image.alt,
                  index: index + 1,
                })}
                onClick={() => onImageClick(index)}
                className="group relative block size-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={imageSizes}
                  unoptimized
                  preload={preloadFirstImage && index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {showZoomHint ? (
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-4 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-black">
                    {labels.zoomHint}
                  </span>
                ) : null}
                {showCounter ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-950 backdrop-blur-sm">
                    {index + 1} / {images.length}
                  </span>
                ) : null}
              </button>
            </div>
          ))}
        </div>
      </div>
      <p ref={liveRegionRef} className="sr-only" />
    </>
  );
}
