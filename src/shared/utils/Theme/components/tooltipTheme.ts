import type { TooltipTheme } from 'reablocks';

export const tooltipTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-(--tooltip-details-horizontal-padding-sm) rounded-sm bg-tooltip-colors-neutral-background-default text-tooltip-colors-neutral-text-default',
  disablePointer: 'pointer-events-none',
  arrow: 'w-2 h-2 rotate-45 bg-inherit'
};
