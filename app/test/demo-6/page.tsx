import type { Metadata } from "next";
import { ProductCardDemo } from "./ProductCardDemo";

export const metadata: Metadata = {
  title: "Product Card Demo",
  description: "A mobile-first product card system for a global storefront.",
};

export default function Demo6Page() {
  return <ProductCardDemo />;
}
