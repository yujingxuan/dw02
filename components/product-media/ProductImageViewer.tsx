"use client";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { ProductImage, ProductImageViewerLabels } from "./types";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export interface ProductImageViewerProps {
  images: readonly ProductImage[];
  index: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
  labels: ProductImageViewerLabels;
}

export function ProductImageViewer({
  images,
  index,
  onClose,
  onIndexChange,
  labels,
}: ProductImageViewerProps) {
  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      slides={[...images]}
      plugins={[Zoom, Counter]}
      carousel={{
        imageFit: "contain",
        padding: 0,
        preload: 2,
        spacing: "16px",
      }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        scrollToZoom: true,
      }}
      labels={{
        Previous: labels.previous,
        Next: labels.next,
        Close: labels.close,
        Slide: labels.slide,
        Carousel: labels.carousel,
        Lightbox: labels.lightbox,
        "Photo gallery": labels.gallery,
        "{index} of {total}": labels.counter,
        "Zoom in": labels.zoomIn,
        "Zoom out": labels.zoomOut,
      }}
      on={{
        view: ({ index: currentIndex }) => onIndexChange?.(currentIndex),
      }}
      styles={{
        container: {
          backgroundColor: "rgba(9, 9, 11, 0.97)",
        },
      }}
    />
  );
}
