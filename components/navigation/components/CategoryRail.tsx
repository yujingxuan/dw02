import { ChevronRight } from "lucide-react";

import type { MenuCategory } from "../types";

interface CategoryRailProps {
  categories: MenuCategory[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function CategoryRail({
  categories,
  selectedId,
  onSelect,
}: CategoryRailProps) {
  return (
    <nav
      className="flex h-full w-2/5 shrink-0 flex-col border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
      aria-label="Product categories"
    >
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = category.id === selectedId;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className="group min-h-12 flex-1 touch-manipulation border-b border-neutral-200 px-2 py-2 text-left last:border-b-0 focus-visible:z-10 focus-visible:outline-none dark:border-neutral-800"
            aria-pressed={isSelected}
          >
            <span
              className={`flex h-full min-h-11 items-center gap-3 rounded-2xl px-3 text-sm font-medium transition-colors duration-200 group-focus-visible:ring-2 group-focus-visible:ring-neutral-500 ${
                isSelected
                  ? "bg-neutral-950 text-white shadow-lg dark:bg-white dark:text-neutral-950"
                  : "text-neutral-800 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
              }`}
            >
              <Icon className="size-5 shrink-0 stroke-[1.6]" aria-hidden="true" />
              <span className="min-w-0 flex-1 leading-tight">
                {category.label}
              </span>
              <ChevronRight
                className="size-4 shrink-0 stroke-[1.7]"
                aria-hidden="true"
              />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
