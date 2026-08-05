"use client";

import { useCarousel } from "@/hooks/useCarousel";
import Image from "next/image";
import { useEffect } from "react";
import { formatLabel } from "./formatLabel";
import type { ProductImage, ProductImageThumbnailsLabels } from "./types";

export interface ProductImageThumbnailsProps {
  images: readonly ProductImage[];
  activeIndex: number;
  labels: ProductImageThumbnailsLabels;
  onSelect: (index: number) => void;
  imageSizes?: string;
}

export function ProductImageThumbnails({
  images,
  activeIndex,
  labels,
  onSelect,
  imageSizes = "96px",
}: ProductImageThumbnailsProps) {
  const [viewportRef, , , scrollTo] = useCarousel({
    options: {
      containScroll: "keepSnaps",
      dragFree: true,
    },
  });

  useEffect(() => {
    scrollTo(activeIndex);
  }, [activeIndex, scrollTo]);

  if (images.length < 2) return null;

  return (
    <div
      ref={viewportRef}
      aria-label={labels.thumbnails}
      className="touch-pan-y overflow-hidden"
    >
      <div className="flex gap-3 pb-2">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={`${image.src}-thumbnail-${index}`}
              className="aspect-3/4 min-w-0 flex-[0_0_20%]"
            >
              <button
                type="button"
                aria-label={formatLabel(labels.selectImage, {
                  alt: image.alt,
                  index: index + 1,
                })}
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelect(index)}
                className={`relative block size-full overflow-hidden rounded-xl border-2 bg-zinc-100 transition dark:bg-zinc-900 ${
                  isActive
                    ? "border-zinc-950 opacity-100 dark:border-white"
                    : "border-transparent opacity-55 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes={imageSizes}
                  unoptimized
                  className="object-cover"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
