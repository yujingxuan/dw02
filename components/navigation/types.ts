import type { LucideIcon } from "lucide-react";

export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  subcategories: MenuLink[];
  products: MenuProduct[];
}

export interface MarketOption {
  country: string;
  currency: string;
  flag: string;
}
