import {
  Flame,
  Layers3,
  ShieldCheck,
  Sparkles,
  Tag,
  WandSparkles,
} from "lucide-react";

import type { MarketOption, MenuCategory } from "./types";

const PRODUCTS = {
  bodyWave: {
    id: "body-wave",
    name: 'Body Wave 13×6 Glueless Wig 24"',
    price: "$199.00",
    image:
      "https://ima.unice.com/ol/media/20260715/8c7709414cb2c7309cb0086f60a69d9b.png?im=Resize,width=534,height=712",
    href: "/product/wear-go-body-wave-glueless",
  },
  layered: {
    id: "layered",
    name: 'Water Wave 13×4 Lace Front Wig 22"',
    price: "$189.00",
    image:
      "https://ima.unice.com/ol/media/20260715/3c5060b5702965bb2e77850d825fabf2.png?im=Resize,width=534,height=712",
    href: "/product/wear-go-water-wave-glueless",
  },
  straight: {
    id: "straight",
    name: "Silky Straight Glueless Wig",
    price: "$139.00",
    image:
      "https://ima.unice.com/ol/media/20260517/e7d80795ced5f18f317ee908af76f229.jpg?im=Resize,width=690,height=912",
    href: "/product/wear-go-straight-glueless",
  },
  curly: {
    id: "curly",
    name: "Bouncy Curly Lace Front Wig",
    price: "$169.00",
    image:
      "https://ima.unice.com/ol/media/20251015/b334f96bfb585fb87decac7d10cff0ca.jpg?im=Resize,width=664,height=884",
    href: "/product/wear-go-kinky-curly-glueless",
  },
  bob: {
    id: "bob",
    name: "Soft Layered Bob Wig",
    price: "$119.00",
    image:
      "https://ima.unice.com/ol/media/20260522/80bd5399d2faa2ba334c35f5fd46af0f.jpg?im=Resize,width=664,height=884",
    href: "/product/bob-wavy-12-layered",
  },
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "new-in",
    label: "New In",
    href: "/shop",
    icon: Sparkles,
    subcategories: [
      { label: "New This Week", href: "/shop" },
      { label: "Trending Colors", href: "/collections/hd-lace" },
      { label: "New Glueless Wigs", href: "/collections/wear-go-glueless" },
      { label: "Editors' Picks", href: "/collections/bob-straight-classics" },
    ],
    products: [PRODUCTS.bob, PRODUCTS.straight],
  },
  {
    id: "wigs",
    label: "Wigs",
    href: "/shop",
    icon: WandSparkles,
    subcategories: [
      { label: "Glueless Wigs", href: "/collections/wear-go-glueless" },
      { label: "Lace Front Wigs", href: "/collections/hd-lace" },
      { label: "Bob Wigs", href: "/collections/bob-straight-classics" },
      { label: "Body Wave Wigs", href: "/collections/body-wave-essentials" },
    ],
    products: [PRODUCTS.bodyWave, PRODUCTS.layered],
  },
  {
    id: "glueless",
    label: "Glueless",
    href: "/collections/wear-go-glueless",
    icon: ShieldCheck,
    subcategories: [
      { label: "Wear & Go Wigs", href: "/collections/wear-go-glueless" },
      { label: "Pre-Cut Lace", href: "/collections/hd-lace" },
      { label: "Body Wave", href: "/collections/body-wave-essentials" },
      { label: "Beginner Friendly", href: "/shop" },
    ],
    products: [PRODUCTS.layered, PRODUCTS.bob],
  },
  {
    id: "bundles",
    label: "Bundles",
    href: "/shop",
    icon: Layers3,
    subcategories: [
      { label: "Shop All Hair", href: "/shop" },
      { label: "Straight Styles", href: "/collections/bob-straight-classics" },
      { label: "Body Wave Styles", href: "/collections/body-wave-essentials" },
      { label: "HD Lace Styles", href: "/collections/hd-lace" },
    ],
    products: [PRODUCTS.bodyWave, PRODUCTS.curly],
  },
  {
    id: "best-sellers",
    label: "Best Sellers",
    href: "/collections/wear-go-glueless",
    icon: Flame,
    subcategories: [
      { label: "Most Loved Wigs", href: "/collections/wear-go-glueless" },
      { label: "Top Glueless Wigs", href: "/collections/wear-go-glueless" },
      { label: "Lace Favorites", href: "/collections/hd-lace" },
      { label: "Shop All", href: "/shop" },
    ],
    products: [PRODUCTS.bodyWave, PRODUCTS.layered],
  },
  {
    id: "sale",
    label: "Sale",
    href: "/sale",
    icon: Tag,
    subcategories: [
      { label: "All Sale", href: "/sale" },
      { label: "Glueless Deals", href: "/collections/wear-go-glueless" },
      { label: "Lace Deals", href: "/collections/hd-lace" },
      { label: "Shop All", href: "/shop" },
    ],
    products: [PRODUCTS.straight, PRODUCTS.bodyWave],
  },
];

export const MARKET_OPTIONS: MarketOption[] = [
  { country: "United States", currency: "USD", flag: "🇺🇸" },
  { country: "Canada", currency: "CAD", flag: "🇨🇦" },
];
