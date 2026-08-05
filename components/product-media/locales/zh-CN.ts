import type { ProductImageGalleryLabels } from "../types";

export const zhCNProductImageLabels: ProductImageGalleryLabels = {
  carousel: {
    gallery: "商品图片",
    carouselRoleDescription: "轮播",
    slideRoleDescription: "幻灯片",
    slideLabel: "第 {index} 张，共 {total} 张",
    liveRegion: "正在显示第 {index} 张，共 {total} 张",
    openImage: "打开第 {index} 张商品图片：{alt}",
    zoomHint: "全屏预览",
  },
  thumbnails: {
    thumbnails: "选择商品图片",
    selectImage: "显示第 {index} 张商品图片：{alt}",
  },
  viewer: {
    previous: "上一张图片",
    next: "下一张图片",
    close: "关闭图片预览",
    slide: "商品图片",
    carousel: "商品图片预览",
    lightbox: "商品图片全屏预览",
    gallery: "商品图片",
    counter: "第 {index} 张，共 {total} 张",
    zoomIn: "放大图片",
    zoomOut: "缩小图片",
  },
};
