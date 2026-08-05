"use client";

import { Menu } from "lucide-react";
import { type ComponentProps, useMemo, useState } from "react";

import { StateDrawer } from "@/components/drawer";
import { NavigationSheet } from "@/components/navigation/components/NavigationSheet";
import {
  MARKET_OPTIONS,
  MENU_CATEGORIES,
} from "@/components/navigation/NavigationData";

function MobileNavigationTrigger(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      type="button"
      aria-label="Open shop menu"
      className="grid size-11 touch-manipulation place-items-center rounded-full transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:hidden dark:hover:bg-neutral-900"
    >
      <Menu aria-hidden="true" className="size-5" />
    </button>
  );
}

export function MobileNavigation() {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState("best-sellers");
  const [query, setQuery] = useState("");
  const [wishlist, setWishlist] = useState<Set<string>>(
    () => new Set(["body-wave"]),
  );
  const [marketIndex, setMarketIndex] = useState(0);

  const selectedCategory = useMemo(
    () =>
      MENU_CATEGORIES.find(
        (category) => category.id === selectedCategoryId,
      ) ?? MENU_CATEGORIES[0],
    [selectedCategoryId],
  );

  function toggleWishlist(productId: string) {
    setWishlist((current) => {
      const next = new Set(current);

      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }

      return next;
    });
  }

  function toggleMarket() {
    setMarketIndex((current) => (current + 1) % MARKET_OPTIONS.length);
  }

  return (
    <StateDrawer
      title="Shop navigation"
      description="Browse product categories and account shortcuts"
      closeLabel="Close navigation"
      side="left"
      size="nearFull"
      bodyPadding="none"
      contentClassName="border-0! bg-transparent! dark:bg-transparent!"
      showHeader={false}
      showControls={false}
      trigger={<MobileNavigationTrigger />}
    >
      <div
        id="unice-mobile-navigation"
        className="relative h-full w-full overflow-hidden"
      >
        <NavigationSheet
          categories={MENU_CATEGORIES}
          selectedCategory={selectedCategory}
          query={query}
          wishlist={wishlist}
          market={MARKET_OPTIONS[marketIndex]}
          onCategorySelect={setSelectedCategoryId}
          onQueryChange={setQuery}
          onWishlistToggle={toggleWishlist}
          onMarketToggle={toggleMarket}
        />
      </div>
    </StateDrawer>
  );
}
