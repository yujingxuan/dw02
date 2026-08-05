"use client";

import {
  ProductImageCarousel,
  ProductImageThumbnails,
  ProductImageViewer,
  type ProductImage,
  useProductImageGallery,
} from "@/components/product-media";
import { zhCNProductImageLabels } from "@/components/product-media/locales/zh-CN";

export function ProductImagesDemo({
  images,
}: {
  images: readonly ProductImage[];
}) {
  const gallery = useProductImageGallery();

  return (
    <section
      aria-labelledby="demo-product-images-title"
      className="min-w-0 space-y-3"
    >
      <h2
        id="demo-product-images-title"
        className="px-1 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500"
      >
        Demo 2: Main gallery + thumbnails
      </h2>

      <ProductImageCarousel
        images={images}
        activeIndex={gallery.activeIndex}
        labels={zhCNProductImageLabels.carousel}
        onActiveIndexChange={gallery.selectImage}
        onImageClick={gallery.openViewer}
        imageSizes="(max-width: 448px) 100vw, 448px"
      />

      <ProductImageThumbnails
        images={images}
        activeIndex={gallery.activeIndex}
        labels={zhCNProductImageLabels.thumbnails}
        onSelect={gallery.selectImage}
        imageSizes="(max-width: 448px) 20vw, 90px"
      />

      {gallery.viewerIndex !== null ? (
        <ProductImageViewer
          images={images}
          index={gallery.viewerIndex}
          labels={zhCNProductImageLabels.viewer}
          onClose={gallery.closeViewer}
          onIndexChange={gallery.changeViewerImage}
        />
      ) : null}
    </section>
  );
}
