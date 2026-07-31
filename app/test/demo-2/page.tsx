import { ProductGallery } from './ProductGallery'

export default async function ProductPage() {
  // 模拟从后端 Go API 拿到的 SSR 数据
  const productData = {
    banners: [
      {
        id: 'summer-drop',
        eyebrow: 'Summer drop',
        title: 'Your texture. Your moment.',
        description: 'Soft movement and natural volume, made for every angle.',
        cta: 'Shop the new look',
        mediaType: 'video' as const,
        image: 'https://vcdn.unice.com/unice-video/unice-wnn-0ww-tu174-20260724.mp4',
        poster: 'https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704',
      },
      {
        id: 'members-week',
        eyebrow: 'Members week',
        title: 'Up to 30% off signature textures.',
        description: 'Limited-time prices on customer-favorite wigs and bundles.',
        cta: 'Explore the offer',
        image: 'https://ima.unice.com/ol/media/20260726/a17d90b593e39134163343a9f73229cb.jpg?im=Resize,width=528,height=704',
      },
      {
        id: 'street-edit',
        eyebrow: 'The street edit',
        title: 'Effortless volume, day to night.',
        description: 'Natural-looking styles designed for quick transformations.',
        cta: 'View the collection',
        image: 'https://ima.unice.com/ol/media/20260724/02f1eda83ee0e575b580ee1fad315362.png?im=Resize,width=528,height=704',
      },
    ],
    images: [
      'https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704',
      'https://ima.unice.com/ol/media/20260726/a17d90b593e39134163343a9f73229cb.jpg?im=Resize,width=528,height=704',
      'https://ima.unice.com/ol/media/20260522/f80ced30febb48680128bbb666edb433.gif?im=Resize,width=528,height=704',
      'https://ima.unice.com/ol/media/20260724/02f1eda83ee0e575b580ee1fad315362.png?im=Resize,width=528,height=704',
    ],
    relatedProducts: [
      { id: '1', name: 'Body Wave Lace Wig', price: '$169', image: 'https://ima.unice.com/ol/media/20250123/bf9f153139a41fe5a8578939b269d554.png?im=Resize,width=528,height=704' },
      { id: '2', name: 'Natural Curly Wig', price: '$189', image: 'https://ima.unice.com/ol/media/20260724/fc63ed9791c4cedb43cdf75dfdb95d9c.jpg' },
      { id: '3', name: 'HD Lace Collection', price: '$209', image: 'https://ima.unice.com/ol/media/20260724/0a63f79fbfc86c763f48dc7a8be912f0.jpg' },
      { id: '4', name: 'Glueless Everyday Wig', price: '$149', image: 'https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704' },
    ],
    reviews: [
      { id: 'r1', author: 'Sarah M.', comment: 'Super fast shipping to US! The quality is way better than expected.', rating: 5 },
      { id: 'r2', author: 'David K.', comment: 'Fits true to size. Very comfortable for daily workouts.', rating: 5 },
      { id: 'r3', author: 'Elena R.', comment: 'Looks exactly like the pictures. Will definitely buy again!', rating: 5 },
    ]
  }

  return (
    <main className="min-h-screen bg-white p-4">
      <ProductGallery
        banners={productData.banners}
        images={productData.images}
        relatedProducts={productData.relatedProducts}
        reviews={productData.reviews}
      />
    </main>
  )
}
