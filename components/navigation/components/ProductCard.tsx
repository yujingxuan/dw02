import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { DrawerDismiss } from "@/components/drawer";
import type { MenuProduct } from "../types";

interface ProductCardProps {
  product: MenuProduct;
  isWishlisted: boolean;
  onWishlistToggle: (productId: string) => void;
}

export function ProductCard({
  product,
  isWishlisted,
  onWishlistToggle,
}: ProductCardProps) {
  return (
    <article className="grid min-h-0 grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="relative min-h-0 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <DrawerDismiss asChild>
          <Link
            href={product.href}
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fuchsia-500"
            aria-label={`View ${product.name}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 520px) 28vw, 150px"
              className="object-cover transition-transform duration-300 motion-reduce:transition-none hover:scale-[1.03]"
            />
          </Link>
        </DrawerDismiss>

        <button
          type="button"
          onClick={() => onWishlistToggle(product.id)}
          className="absolute right-1.5 top-1.5 z-10 grid size-11 touch-manipulation place-items-center rounded-full bg-white/90 text-neutral-950 shadow-sm backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
        >
          <Heart
            className={`size-4 ${isWishlisted ? "fill-current" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="grid gap-1 p-2.5">
        <DrawerDismiss asChild>
          <Link
            href={product.href}
            className="line-clamp-2 text-xs font-medium leading-tight text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 dark:text-white sm:text-sm"
          >
            {product.name}
          </Link>
        </DrawerDismiss>
        <p className="text-base font-semibold tabular-nums text-fuchsia-500">
          {product.price}
        </p>
      </div>
    </article>
  );
}
