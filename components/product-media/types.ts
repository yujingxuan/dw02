export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProductImageViewerLabels {
  previous: string;
  next: string;
  close: string;
  slide: string;
  carousel: string;
  lightbox: string;
  gallery: string;
  counter: string;
  zoomIn: string;
  zoomOut: string;
}

export interface ProductImageCarouselLabels {
  gallery: string;
  carouselRoleDescription: string;
  slideRoleDescription: string;
  slideLabel: string;
  liveRegion: string;
  openImage: string;
  zoomHint: string;
}

export interface ProductImageThumbnailsLabels {
  thumbnails: string;
  selectImage: string;
}

export interface ProductImageGalleryLabels {
  carousel: ProductImageCarouselLabels;
  thumbnails: ProductImageThumbnailsLabels;
  viewer: ProductImageViewerLabels;
}
