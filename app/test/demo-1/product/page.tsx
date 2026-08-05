import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductDetails } from "../ProductDetails";

export default function ProductPage() {
  return (
    <section className="pb-16">
      <Link
        href="/test/demo-1"
        className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        返回 Drawer demos
      </Link>
      <ProductDetails />
    </section>
  );
}
