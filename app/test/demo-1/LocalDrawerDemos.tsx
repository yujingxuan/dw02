"use client";

import { DrawerDismiss, StateDrawer } from "@/components/drawer";
import {
  ChevronRight,
  CircleUserRound,
  Grid2X2,
  House,
  Menu,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "首页", icon: House },
  { label: "全部商品", icon: Grid2X2 },
  { label: "本周新品", icon: Sparkles },
  { label: "我的账户", icon: CircleUserRound },
];

export function LocalDrawerDemos() {
  const [quantity, setQuantity] = useState(1);
  const subtotal = 399 * quantity;

  return (
    <>
      <article className="flex min-h-72 flex-col rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <DemoNumber className="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
          01
        </DemoNumber>
        <DemoCopy
          eyebrow="Left drawer"
          eyebrowClassName="text-orange-600 dark:text-orange-400"
          title="移动端导航"
        >
          从左侧滑入，适合站点主导航、商品分类和账户入口。
        </DemoCopy>

        <StateDrawer
          side="left"
          size="md"
          title="NORTH / GOODS"
          description="浏览店铺"
          closeLabel="关闭导航"
          bodyPadding="compact"
          trigger={
            <button className="mt-auto flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200">
              <Menu className="size-4" aria-hidden="true" />
              打开导航
            </button>
          }
          footer={
            <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              向左滑动、点击遮罩或关闭按钮都可以收起导航。
            </p>
          }
        >
          <nav aria-label="移动端主导航">
            <ul className="space-y-1">
              {navItems.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <DrawerDismiss asChild>
                    <button className="flex min-h-12 w-full items-center gap-3 rounded-2xl px-3 text-left text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900">
                      <Icon className="size-5 text-zinc-500" aria-hidden="true" />
                      <span className="flex-1">{label}</span>
                      <ChevronRight
                        className="size-4 text-zinc-400"
                        aria-hidden="true"
                      />
                    </button>
                  </DrawerDismiss>
                </li>
              ))}
            </ul>
          </nav>
        </StateDrawer>
      </article>

      <article className="flex min-h-72 flex-col rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <DemoNumber className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          02
        </DemoNumber>
        <DemoCopy
          eyebrow="Right drawer"
          eyebrowClassName="text-emerald-600 dark:text-emerald-400"
          title="购物车"
        >
          从右侧滑入，保留当前购物上下文，同时展示订单摘要和结账入口。
        </DemoCopy>

        <StateDrawer
          side="right"
          size="lg"
          title="购物车"
          description="1 件商品"
          closeLabel="关闭购物车"
          trigger={
            <button className="mt-auto flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
              <ShoppingBag className="size-4" aria-hidden="true" />
              查看购物车
            </button>
          }
          footer={
            <>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  小计
                </span>
                <span className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  ¥{subtotal.toLocaleString("zh-CN")}
                </span>
              </div>
              <button className="min-h-12 w-full rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
                去结账
              </button>
            </>
          }
        >
          <div className="flex gap-4 rounded-2xl bg-zinc-50 p-3 dark:bg-zinc-900">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-200 text-orange-800 dark:from-orange-950 dark:to-amber-900 dark:text-orange-200">
              <ShoppingBag className="size-8" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    Everyday Carry Bag
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Sand · One size
                  </p>
                </div>
                <button
                  className="flex size-11 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white hover:text-red-600 dark:hover:bg-zinc-800"
                  aria-label="移除商品"
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center rounded-full border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-950">
                  <button
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                    className="flex size-11 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-label="减少数量"
                  >
                    <Minus className="size-4" aria-hidden="true" />
                  </button>
                  <span
                    className="w-6 text-center text-sm font-medium"
                    aria-live="polite"
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((value) => value + 1)}
                    className="flex size-11 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-label="增加数量"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  ¥{subtotal.toLocaleString("zh-CN")}
                </p>
              </div>
            </div>
          </div>
        </StateDrawer>
      </article>
    </>
  );
}

function DemoNumber({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`flex size-11 items-center justify-center rounded-2xl text-sm font-bold ${className}`}
    >
      {children}
    </div>
  );
}

function DemoCopy({
  children,
  eyebrow,
  eyebrowClassName,
  title,
}: {
  children: React.ReactNode;
  eyebrow: string;
  eyebrowClassName: string;
  title: string;
}) {
  return (
    <div className="mt-6">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </div>
  );
}
