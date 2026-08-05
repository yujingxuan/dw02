import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { DrawerDismiss } from "@/components/drawer";
import type { MenuCategory } from "../types";
import { ProductCard } from "./ProductCard";

interface CategoryPanelProps {
  category: MenuCategory;
  query: string;
  wishlist: Set<string>;
  onWishlistToggle: (productId: string) => void;
}

export function CategoryPanel({
  category,
  query,
  wishlist,
  onWishlistToggle,
}: CategoryPanelProps) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const subcategories = normalizedQuery
    ? category.subcategories.filter((subcategory) =>
        subcategory.label.toLocaleLowerCase().includes(normalizedQuery),
      )
    : category.subcategories;
  const products = normalizedQuery
    ? category.products.filter((product) =>
        product.name.toLocaleLowerCase().includes(normalizedQuery),
      )
    : category.products;

  return (
    <section
      className="flex min-h-0 min-w-0 flex-1 flex-col bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white"
      aria-labelledby="active-category-title"
    >
      <div className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
        <h2
          id="active-category-title"
          className="text-xl font-semibold"
        >
          {category.label}
        </h2>
        <DrawerDismiss asChild>
          <Link
            href={category.href}
            className="flex min-h-11 touch-manipulation items-center gap-1 rounded-full px-1 text-sm font-semibold text-fuchsia-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
          >
            Shop All
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        </DrawerDismiss>
      </div>

      <div className="grid h-44 shrink-0 grid-rows-4 px-4">
        {subcategories.length > 0 ? (
          subcategories.slice(0, 4).map((subcategory) => (
            <DrawerDismiss key={subcategory.label} asChild>
              <Link
                href={subcategory.href}
                className="flex min-h-11 touch-manipulation items-center justify-between border-b border-neutral-200 text-sm font-medium transition-colors duration-200 hover:text-fuchsia-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fuchsia-500 dark:border-neutral-800"
              >
                <span>{subcategory.label}</span>
                <ChevronRight className="size-4 stroke-[1.7]" aria-hidden="true" />
              </Link>
            </DrawerDismiss>
          ))
        ) : (
          <p className="flex min-h-11 items-center border-b border-neutral-200 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            No matching categories
          </p>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col border-t border-neutral-200 p-3 dark:border-neutral-800">
        <div className="mb-3 flex shrink-0 items-center justify-between">
          <h3 className="text-xl font-semibold">
            Best Sellers
          </h3>
        </div>

        {products.length > 0 ? (
          <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.has(product.id)}
                onWishlistToggle={onWishlistToggle}
              />
            ))}
          </div>
        ) : (
          <div className="grid min-h-0 flex-1 place-items-center rounded-2xl bg-neutral-100 px-3 text-center text-xs text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
            Try another search term
          </div>
        )}
      </div>
    </section>
  );
}
