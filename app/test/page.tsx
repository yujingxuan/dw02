import Link from "next/link";

const demoPages = Array.from({ length: 6 }, (_, index) => ({
  href: `/test/demo-${index + 1}`,
  label: `Demo ${index + 1}`,
}));

export default function TestPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight">Demo 测试台</h1>
      <p className="mt-3 text-zinc-600">
        选择一个独立页面，然后将需要测试的 Demo 代码粘贴进去。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoPages.map((page) => (
          <Link
            key={page.href}
            className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
            href={page.href}
          >
            <h2 className="font-semibold">{page.label}</h2>
            <p className="mt-2 text-sm text-zinc-500">打开独立 Demo 页面</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
