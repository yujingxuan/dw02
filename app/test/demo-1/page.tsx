import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { LocalDrawerDemos } from "./LocalDrawerDemos";

export default function DrawerDemoPage() {
  return (
    <section className="pb-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">
          Vaul Drawer patterns
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          三种店铺 Drawer 场景
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          分别体验移动导航、购物车和拦截路由产品详情。前两个由本地状态控制，第三个由 URL 和浏览器历史控制。
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <LocalDrawerDemos />

        <article className="flex min-h-72 flex-col rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
            03
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
              Intercepted route
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              产品详情
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              站内点击从底部打开；刷新地址或直接访问时则呈现完整详情页。
            </p>
          </div>

          <div className="mt-auto space-y-2 pt-8">
            <Link
              href="/test/demo-1/product"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              拦截路由打开
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="/test/demo-1/product"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              完整页面打开
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
