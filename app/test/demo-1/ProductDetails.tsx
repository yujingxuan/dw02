import { Check, PackageOpen, ShieldCheck, Truck } from "lucide-react";

export function ProductDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-violet-100 via-fuchsia-100 to-orange-100 text-violet-700 dark:from-violet-950 dark:via-fuchsia-950 dark:to-orange-950 dark:text-violet-300">
        <PackageOpen className="size-20" strokeWidth={1.25} aria-hidden="true" />
      </div>

      <div className="flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
          Studio collection
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Form Carry Tote
        </h1>
        <p className="mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">¥699</p>
        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          轻量耐用的日常托特包，拥有独立电脑夹层、磁吸开口和可调节肩带。
        </p>

        <div className="mt-6 space-y-3 border-y border-zinc-200 py-5 text-sm dark:border-zinc-800">
          <p className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <Check className="size-4 text-emerald-600" aria-hidden="true" />
            有库存，可立即发货
          </p>
          <p className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <Truck className="size-4 text-zinc-500" aria-hidden="true" />
            满 ¥499 免费配送
          </p>
          <p className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
            <ShieldCheck className="size-4 text-zinc-500" aria-hidden="true" />
            30 天无忧退换
          </p>
        </div>

        <button className="mt-6 min-h-12 w-full rounded-full bg-violet-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
          加入购物车
        </button>
      </div>
    </div>
  );
}
