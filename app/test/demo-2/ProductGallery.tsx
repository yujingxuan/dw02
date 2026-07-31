import { BannerCarousel } from './_components/BannerCarousel'
import { ProductGalleryCarousel } from './_components/ProductGalleryCarousel'
import { RelatedProductsCarousel } from './_components/RelatedProductsCarousel'
import { ReviewsCarousel } from './_components/ReviewsCarousel'
import type {
  BannerSlide,
  ProductReview,
  RelatedProduct,
} from './types'

type ProductGalleryProps = {
  banners?: readonly BannerSlide[]
  images: readonly string[]
  relatedProducts?: readonly RelatedProduct[]
  reviews?: readonly ProductReview[]
}

export function ProductGallery({
  banners = [],
  images,
  relatedProducts = [],
  reviews = [],
}: ProductGalleryProps) {
  return (
    <div className="mx-auto w-full max-w-md space-y-10 pb-10">
      {banners.length > 0 && <BannerCarousel slides={banners} />}
      <ProductGalleryCarousel images={images} />
      {relatedProducts.length > 0 && (
        <RelatedProductsCarousel products={relatedProducts} />
      )}
      {reviews.length > 0 && <ReviewsCarousel reviews={reviews} />}
    </div>
  )
}
