import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

import { DrawerDismiss } from "@/components/drawer";

export function MenuHeader() {
  return (
    <div className="grid h-full grid-cols-[3rem_1fr_3rem] items-center px-4 text-white">
      <DrawerDismiss asChild>
        <button
          type="button"
          autoFocus
          className="grid size-12 touch-manipulation place-items-center rounded-full transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close navigation"
        >
          <X className="size-8 stroke-[1.5]" aria-hidden="true" />
        </button>
      </DrawerDismiss>

      <DrawerDismiss asChild>
        <Link
          href="/"
          className="justify-self-center px-2 py-3 text-3xl font-light tracking-[0.2em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          UNICE
        </Link>
      </DrawerDismiss>

      <DrawerDismiss asChild>
        <Link
          href="/cart"
          className="relative grid size-12 touch-manipulation place-items-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Shopping bag"
        >
          <ShoppingBag className="size-7 stroke-[1.5]" aria-hidden="true" />
        </Link>
      </DrawerDismiss>
    </div>
  );
}
