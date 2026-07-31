'use client'

import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

export type ProductLightboxImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

type ProductImageLightboxProps = {
  images: ProductLightboxImage[]
  index: number
  onClose: () => void
  onIndexChange?: (index: number) => void
}

export function ProductImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: ProductImageLightboxProps) {
  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      slides={images}
      plugins={[Zoom, Counter]}
      carousel={{
        imageFit: 'contain',
        padding: 0,
        preload: 2,
        spacing: '16px',
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
        Previous: '上一张图片',
        Next: '下一张图片',
        Close: '关闭图片预览',
        Slide: '商品图片',
        Carousel: '商品图片预览',
        Lightbox: '商品图片全屏预览',
        'Photo gallery': '商品图片',
        '{index} of {total}': '第 {index} 张，共 {total} 张',
        'Zoom in': '放大图片',
        'Zoom out': '缩小图片',
      }}
      on={{
        view: ({ index: currentIndex }) => onIndexChange?.(currentIndex),
      }}
      styles={{
        container: {
          backgroundColor: 'rgba(9, 9, 11, 0.97)',
        },
      }}
    />
  )
}
