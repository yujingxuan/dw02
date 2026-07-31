import { ProductDetailDemo } from './ProductDetailDemo'

const product = {
  name: 'Pre-Plucked Body Wave Wig',
  subtitle: '13×4 HD Lace · 180% Density',
  price: 169,
  originalPrice: 229,
  rating: 4.8,
  reviewCount: 326,
  description:
    '柔软顺滑的人发大波浪造型，预拔发际线搭配 HD Lace，轻松贴合多种肤色。无论日常通勤还是约会造型，都能快速获得自然蓬松效果。',
  colors: [
    { name: 'Natural Black', value: '#18181b' },
    { name: 'Chocolate Brown', value: '#5c3a2e' },
    { name: 'Burgundy', value: '#6b1d2a' },
  ],
  lengths: ['16 inch', '18 inch', '20 inch', '22 inch', '24 inch'],
  images: [
    {
      src: 'https://ima.unice.com/ol/media/20260522/de518c235c1918711f5cc2aaf5ca7fcc.jpg?im=Resize,width=528,height=704',
      alt: 'Body Wave Wig 正面造型',
      width: 528,
      height: 704,
    },
    {
      src: 'https://ima.unice.com/ol/media/20260726/a17d90b593e39134163343a9f73229cb.jpg?im=Resize,width=528,height=704',
      alt: 'Body Wave Wig 侧面造型',
      width: 528,
      height: 704,
    },
    {
      src: 'https://ima.unice.com/ol/media/20260522/f80ced30febb48680128bbb666edb433.gif?im=Resize,width=528,height=704',
      alt: 'Body Wave Wig 动态卷度展示',
      width: 528,
      height: 704,
    },
    {
      src: 'https://ima.unice.com/ol/media/20260724/02f1eda83ee0e575b580ee1fad315362.png?im=Resize,width=528,height=704',
      alt: 'Body Wave Wig 发际线细节',
      width: 528,
      height: 704,
    },
    {
      src: 'https://ima.unice.com/ol/media/20250123/bf9f153139a41fe5a8578939b269d554.png?im=Resize,width=528,height=704',
      alt: 'Body Wave Wig 背面长度展示',
      width: 528,
      height: 704,
    },
    {
      src: 'https://ima.unice.com/ol/media/20260724/fc63ed9791c4cedb43cdf75dfdb95d9c.jpg',
      alt: 'Body Wave Wig 佩戴效果',
      width: 528,
      height: 704,
    },
  ],
}

export default function Demo3Page() {
  return <ProductDetailDemo product={product} />
}
