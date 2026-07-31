import type { Metadata } from "next";
import Link from "next/link";

const demoPages = Array.from({ length: 5 }, (_, index) => ({
  href: `/test/demo-${index + 1}`,
  label: `Demo ${index + 1}`,
}));

export const metadata: Metadata = {
  title: "Demo 测试页面",
  description: "用于测试 Demo 代码的独立页面集合",
};

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <nav
          aria-label="Demo 页面导航"
          className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-6 py-4"
        >
          <Link className="mr-4 font-semibold" href="/test">
            Demo 测试台
          </Link>

          {demoPages.map((page) => (
            <Link
              key={page.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
              href={page.href}
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
