import type { Metadata } from "next";
import Image from "next/image";

const title = "月上柳梢头，人约黄昏后";
const description = "借一场黄昏，收藏一首写给晚风的诗。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Demo5Page() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-400">
          Open Graph Demo
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          一张写给黄昏的分享卡片
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
          预览内容采用常见的 1200 × 630 社交分享比例，在小屏幕上也会完整缩放。
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-2 shadow-[0_24px_80px_-36px_rgba(24,24,27,0.35)] dark:border-zinc-800 dark:bg-zinc-950 sm:rounded-3xl sm:p-3">
        <article
          aria-label="黄昏古诗 Open Graph 图片预览"
          className="relative aspect-[1200/630] min-h-[260px] overflow-hidden rounded-xl bg-zinc-900 text-white sm:rounded-2xl"
        >
          <Image
            src="/images/og-evening.jpg"
            alt="黄昏里手捧玫瑰的少女剪影"
            fill
            priority
            sizes="(min-width: 1024px) 960px, calc(100vw - 64px)"
            className="object-cover object-[50%_54%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-amber-100/10" />

          <div className="relative flex h-full flex-col justify-between p-5 sm:p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-amber-200/80 sm:w-12" />
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-amber-100 sm:text-xs">
                晚风集 · Evening Notes
              </p>
            </div>

            <div className="max-w-[78%] sm:max-w-xl">
              <p className="text-2xl font-semibold leading-tight tracking-[0.08em] text-white drop-shadow-sm sm:text-4xl md:text-5xl">
                月上柳梢头
                <br />
                人约黄昏后
              </p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-zinc-200 sm:mt-6 sm:text-sm">
                <span className="h-px w-6 bg-white/50" />
                <span>宋 · 欧阳修《生查子·元夕》</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-xs text-zinc-500 dark:text-zinc-400">
        <span>预览比例 1200 × 630</span>
        <span aria-hidden="true" className="hidden text-zinc-300 sm:inline dark:text-zinc-700">
          /
        </span>
        <span>页面已配置 Open Graph 与 Twitter Card 元数据</span>
      </div>
    </section>
  );
}
