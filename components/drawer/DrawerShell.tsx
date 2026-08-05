"use client";

import { X } from "lucide-react";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Drawer } from "vaul";

export type DrawerSide = "bottom" | "left" | "right";

export type DrawerSize = "sm" | "md" | "lg" | "nearFull" | "full";
export type DrawerBodyPadding = "none" | "compact" | "default" | "spacious";

export interface DrawerShellProps {
  children: ReactNode;
  title: string;
  description: string;
  trigger?: ReactElement;
  footer?: ReactNode;
  side?: DrawerSide;
  size?: DrawerSize;
  bodyPadding?: DrawerBodyPadding;
  contentClassName?: string;
  showHeader?: boolean;
  showControls?: boolean;
  closeLabel: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onAnimationEnd?: (open: boolean) => void;
}

const placementClasses: Record<DrawerSide, string> = {
  bottom:
    "inset-x-0 bottom-0 rounded-t-3xl border border-b-0 border-zinc-200 dark:border-zinc-800",
  left: "inset-y-0 left-0 border-r border-zinc-200 dark:border-zinc-800",
  right: "inset-y-0 right-0 border-l border-zinc-200 dark:border-zinc-800",
};

const verticalSizeClasses: Record<DrawerSize, string> = {
  sm: "max-h-[60dvh]",
  md: "max-h-[80dvh]",
  lg: "max-h-[92dvh]",
  nearFull: "max-h-[95dvh]",
  full: "h-[100dvh] max-h-[100dvh]",
};

const horizontalSizeClasses: Record<DrawerSize, string> = {
  sm: "w-[82vw] max-w-xs",
  md: "w-[88vw] max-w-sm",
  lg: "w-[92vw] max-w-md",
  nearFull: "w-[95vw] max-w-none",
  full: "w-full max-w-none",
};

const bodyPaddingClasses: Record<DrawerBodyPadding, string> = {
  none: "",
  compact: "px-3 pt-4",
  default: "px-4 pt-4 sm:px-6",
  spacious: "px-4 pt-2 sm:px-6",
};

const bodyBottomPaddingClasses: Record<DrawerBodyPadding, string> = {
  none: "",
  compact: "pb-4",
  default: "pb-4",
  spacious: "pb-6",
};

const bodySafeAreaClasses: Record<DrawerBodyPadding, string> = {
  none: "",
  compact: "pb-[max(1rem,env(safe-area-inset-bottom))]",
  default: "pb-[max(1rem,env(safe-area-inset-bottom))]",
  spacious: "pb-[max(1.5rem,env(safe-area-inset-bottom))]",
};

function classNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export function DrawerShell({
  children,
  title,
  description,
  trigger,
  footer,
  side = "bottom",
  size = "md",
  bodyPadding = "default",
  contentClassName,
  showHeader = true,
  showControls = true,
  closeLabel,
  open,
  defaultOpen,
  onOpenChange,
  onAnimationEnd,
}: DrawerShellProps) {
  const isVertical = side === "bottom";

  return (
    <Drawer.Root
      direction={side}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      onAnimationEnd={onAnimationEnd}
    >
      {trigger ? <Drawer.Trigger asChild>{trigger}</Drawer.Trigger> : null}

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-[2px]" />
        <Drawer.Content
          className={classNames(
            "fixed z-50 flex flex-col overflow-hidden bg-white text-zinc-950 outline-none dark:bg-zinc-950 dark:text-zinc-50",
            placementClasses[side],
            isVertical ? verticalSizeClasses[size] : horizontalSizeClasses[size],
            isVertical && size === "full" && "rounded-none! border-0!",
            contentClassName,
          )}
        >
          {isVertical && showControls ? (
            <div
              className={classNames(
                "relative flex min-h-14 shrink-0 items-center justify-end px-4 sm:px-6",
                size === "full"
                  ? "pt-[env(safe-area-inset-top)]"
                  : "pt-1",
              )}
            >
              <Drawer.Handle className="absolute! left-1/2! -translate-x-1/2!" />
              <DrawerCloseButton label={closeLabel} />
            </div>
          ) : null}

          {showHeader ? (
            <header
              className={classNames(
                "shrink-0 border-b border-zinc-200 dark:border-zinc-800",
                isVertical
                  ? "px-4 pb-4 sm:px-6"
                  : "flex min-h-16 items-center justify-between gap-4 px-4 pt-[env(safe-area-inset-top)]",
              )}
            >
              <div className="min-w-0">
                <Drawer.Title className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {title}
                </Drawer.Title>
                <Drawer.Description className="mt-0.5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                  {description}
                </Drawer.Description>
              </div>
              {!isVertical ? <DrawerCloseButton label={closeLabel} /> : null}
            </header>
          ) : (
            <>
              <Drawer.Title className="sr-only">{title}</Drawer.Title>
              <Drawer.Description className="sr-only">
                {description}
              </Drawer.Description>
            </>
          )}

          <div
            className={classNames(
              "min-h-0 flex-1 overflow-y-auto overscroll-contain",
              bodyPaddingClasses[bodyPadding],
              footer
                ? bodyBottomPaddingClasses[bodyPadding]
                : bodySafeAreaClasses[bodyPadding],
            )}
          >
            {children}
          </div>

          {footer ? (
            <footer className="shrink-0 border-t border-zinc-200 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 dark:border-zinc-800 sm:px-6">
              {footer}
            </footer>
          ) : null}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function DrawerCloseButton({ label }: { label: string }) {
  return (
    <Drawer.Close
      className="flex size-11 shrink-0 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
      aria-label={label}
    >
      <X className="size-5" aria-hidden="true" />
    </Drawer.Close>
  );
}

export type DrawerDismissProps = ComponentProps<typeof Drawer.Close>;

export function DrawerDismiss(props: DrawerDismissProps) {
  return <Drawer.Close {...props} />;
}
