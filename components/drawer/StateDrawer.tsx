"use client";

import { DrawerShell, type DrawerShellProps } from "./DrawerShell";

export interface StateDrawerProps
  extends Omit<
    DrawerShellProps,
    "open" | "defaultOpen" | "onOpenChange" | "onAnimationEnd"
  > {
  trigger: NonNullable<DrawerShellProps["trigger"]>;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function StateDrawer({
  defaultOpen = false,
  onOpenChange,
  ...shellProps
}: StateDrawerProps) {
  return (
    <DrawerShell
      {...shellProps}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    />
  );
}
