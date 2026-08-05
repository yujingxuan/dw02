import type { MarketOption, MenuCategory } from "../types";
import { CategoryPanel } from "./CategoryPanel";
import { CategoryRail } from "./CategoryRail";
import { MarketSelector } from "./MarketSelector";
import { MenuHeader } from "./MenuHeader";
import { SearchActions } from "./SearchActions";

interface NavigationSheetProps {
  categories: MenuCategory[];
  selectedCategory: MenuCategory;
  query: string;
  wishlist: Set<string>;
  market: MarketOption;
  onCategorySelect: (id: string) => void;
  onQueryChange: (query: string) => void;
  onWishlistToggle: (productId: string) => void;
  onMarketToggle: () => void;
}

export function NavigationSheet({
  categories,
  selectedCategory,
  query,
  wishlist,
  market,
  onCategorySelect,
  onQueryChange,
  onWishlistToggle,
  onMarketToggle,
}: NavigationSheetProps) {
  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-black/70 backdrop-blur-2xl">
      <div className="relative z-10 flex h-full min-h-0 w-full flex-col overflow-hidden pt-[env(safe-area-inset-top)]">
        <div className="h-20 shrink-0">
          <MenuHeader />
        </div>
        <div className="h-40 shrink-0">
          <SearchActions query={query} onQueryChange={onQueryChange} />
        </div>

        <div className="flex min-h-0 flex-1 overflow-hidden rounded-3xl bg-white shadow-[0_22px_55px_rgba(0,0,0,0.22)] dark:bg-neutral-950">
          <CategoryRail
            categories={categories}
            selectedId={selectedCategory.id}
            onSelect={onCategorySelect}
          />
          <CategoryPanel
            category={selectedCategory}
            query={query}
            wishlist={wishlist}
            onWishlistToggle={onWishlistToggle}
          />
        </div>

        <div className="h-28 shrink-0">
          <MarketSelector market={market} onToggle={onMarketToggle} />
        </div>
      </div>
    </div>
  );
}
