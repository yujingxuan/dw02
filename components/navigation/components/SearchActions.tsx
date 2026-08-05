import Link from "next/link";
import {
  CircleHelp,
  Heart,
  PackageSearch,
  Search,
  UserRound,
} from "lucide-react";

import { DrawerDismiss } from "@/components/drawer";

const ACTIONS = [
  { label: "Account", href: "/login", icon: UserRound },
  { label: "Track", href: "/track-order", icon: PackageSearch },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Help", href: "/faq", icon: CircleHelp },
];

interface SearchActionsProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function SearchActions({
  query,
  onQueryChange,
}: SearchActionsProps) {
  return (
    <div className="flex h-full flex-col gap-3 px-4 py-3">
      <label className="relative block h-14 shrink-0">
        <span className="sr-only">Search products and categories</span>
        <Search
          className="pointer-events-none absolute left-5 top-1/2 size-6 -translate-y-1/2 text-neutral-950"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search wigs, texture, length..."
          className="h-full w-full rounded-2xl border border-white/80 bg-white/95 pl-14 pr-5 text-base text-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.12)] outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-white dark:bg-neutral-100"
        />
      </label>

      <nav
        className="grid min-h-0 flex-1 grid-cols-4 rounded-2xl border border-white/20 bg-black/20 px-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl"
        aria-label="Quick actions"
      >
        {ACTIONS.map((action) => {
          const Icon = action.icon;

          return (
            <DrawerDismiss key={action.label} asChild>
              <Link
                href={action.href}
                className="flex min-h-14 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-xl px-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:text-sm"
              >
                <Icon className="size-6 stroke-[1.6]" aria-hidden="true" />
                <span>{action.label}</span>
              </Link>
            </DrawerDismiss>
          );
        })}
      </nav>
    </div>
  );
}
