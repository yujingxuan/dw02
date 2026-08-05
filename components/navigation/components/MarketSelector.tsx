import { ChevronDown } from "lucide-react";

import type { MarketOption } from "../types";

interface MarketSelectorProps {
  market: MarketOption;
  onToggle: () => void;
}

export function MarketSelector({
  market,
  onToggle,
}: MarketSelectorProps) {
  return (
    <div className="grid h-full place-items-center px-4 pb-[max(env(safe-area-inset-bottom),1rem)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex h-14 w-2/3 min-w-64 max-w-sm touch-manipulation items-center gap-3 rounded-full border border-white/30 bg-black/35 px-5 text-left text-sm text-white shadow-xl backdrop-blur-2xl transition-colors duration-200 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Change market. Current market: ${market.country}, ${market.currency}`}
      >
        <span className="text-xl" aria-hidden="true">
          {market.flag}
        </span>
        <span className="min-w-0 flex-1 truncate">
          {market.country} · {market.currency}
        </span>
        <ChevronDown className="size-5 text-white/80" aria-hidden="true" />
      </button>
    </div>
  );
}
