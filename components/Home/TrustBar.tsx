"use client";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const TRUST_MESSAGES = [
  "Ships within 24 hours",
  "30-day returns",
  "Tracked global delivery",
  "Secure checkout",
];

export default function TrustBar() {
  return (
    <motion.div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-center gap-2 text-center sm:gap-3">
      <LayoutTextFlip
        text="Shop confidently:"
        words={TRUST_MESSAGES}
        duration={3000}
      />
    </motion.div>
  );
}
