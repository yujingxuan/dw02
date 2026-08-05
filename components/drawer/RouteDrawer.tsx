"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { DrawerShell, type DrawerShellProps } from "./DrawerShell";

export type RouteDrawerProps = Omit<
  DrawerShellProps,
  | "trigger"
  | "open"
  | "defaultOpen"
  | "onOpenChange"
  | "onAnimationEnd"
>;

export function RouteDrawer(props: RouteDrawerProps) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const didNavigateBack = useRef(false);

  function handleAnimationEnd(isOpen: boolean) {
    if (isOpen || didNavigateBack.current) return;

    didNavigateBack.current = true;
    router.back();
  }

  return (
    <DrawerShell
      {...props}
      open={open}
      onOpenChange={setOpen}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
