"use client";

import { useCallback, useState } from "react";

export function useProductImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const selectImage = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const openViewer = useCallback((index: number) => {
    setActiveIndex(index);
    setViewerIndex(index);
  }, []);

  const closeViewer = useCallback(() => {
    setViewerIndex(null);
  }, []);

  const changeViewerImage = useCallback((index: number) => {
    setActiveIndex(index);
    setViewerIndex(index);
  }, []);

  return {
    activeIndex,
    viewerIndex,
    selectImage,
    openViewer,
    closeViewer,
    changeViewerImage,
  };
}
