"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";

type EmblaOptions = Parameters<typeof useEmblaCarousel>[0];
type EmblaPlugins = NonNullable<Parameters<typeof useEmblaCarousel>[1]>;

/** useCarousel 可以接收 Embla 原生配置、插件和选中项回调。 */
interface UseCarouselOptions {
  options?: EmblaOptions;
  plugins?: EmblaPlugins;
  onSelect?: (index: number) => void;
}

/**
 * 封装项目中所有轮播都会用到的状态和操作。
 *
 * 返回值依次为：视口 ref、Embla API、当前页索引、跳转方法。
 * 使用元组而不是对象，可以避免 React 把 ref 与渲染状态视为同一个复合值。
 */
export function useCarousel({
  options,
  plugins = [],
  onSelect,
}: UseCarouselOptions = {}) {
  // viewportRef 绑定到裁切内容的外层元素；api 在 Embla 初始化后才有值。
  const [viewportRef, api] = useEmblaCarousel(options, plugins);

  // 将 Embla 的事件系统转换成 React 可订阅的外部状态源。
  const subscribeToSelectedIndex = useCallback(
    (onStoreChange: () => void) => {
      // SSR 和首次渲染时 API 尚未初始化，此时无需注册事件。
      if (!api) return () => undefined;

      const handleChange = () => {
        // 通知 React 重新读取 getSelectedIndex 返回的最新索引。
        onStoreChange();
        // 让业务组件可以在轮播切换后同步自己的状态。
        onSelect?.(api.selectedSnap());
      };

      // select 处理正常切换，reinit 处理尺寸或配置变化后的重新初始化。
      api.on("select", handleChange);
      api.on("reinit", handleChange);

      // Hook 重新订阅或组件卸载时移除监听，避免重复执行和内存泄漏。
      return () => {
        api.off("select", handleChange);
        api.off("reinit", handleChange);
      };
    },
    [api, onSelect],
  );

  // 客户端从 Embla 读取当前页；服务端固定使用第 0 页保证 hydration 稳定。
  const getSelectedIndex = useCallback(() => api?.selectedSnap() ?? 0, [api]);
  const getServerSelectedIndex = useCallback(() => 0, []);
  const selectedIndex = useSyncExternalStore(
    subscribeToSelectedIndex,
    getSelectedIndex,
    getServerSelectedIndex,
  );

  // 对外提供稳定的跳转函数；jump=true 时跳过滚动动画。
  const scrollTo = useCallback(
    (index: number, jump = false) => {
      api?.goTo(index, jump);
    },
    [api],
  );

  // 元组顺序：[视口 ref, Embla API, 当前索引, 跳转方法]。
  return [viewportRef, api, selectedIndex, scrollTo] as const;
}
