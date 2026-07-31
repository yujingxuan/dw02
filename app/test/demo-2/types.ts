export type BannerSlide = {
  id: string
  eyebrow: string
  title: string
  description: string
  cta: string
  image: string
  mediaType?: 'image' | 'video'
  poster?: string
}

export type RelatedProduct = {
  id: string
  name: string
  price: string
  image: string
}

export type ProductReview = {
  id: string
  author: string
  comment: string
  rating: number
}
