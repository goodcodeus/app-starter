import type { ListTheme } from 'reablocks';

export const listTheme: ListTheme = {
  base: 'flex flex-col gap-1 p-(--select-menu-items-details-horizontal-padding-container) text-navigation-colors-text-resting',
  header:
    'px-(--select-menu-items-details-horizontal-padding-header) py-(--select-menu-items-details-vertical-padding-base) border rounded-md border-select-menu-items-color-item-stroke-header-resting text-navigation-colors-text-static bg-select-menu-items-color-item-background-header-resting text-xs font-semibold',
  listItem: {
    base: 'items-center flex relative rounded-none flex-1 px-(--select-menu-items-details-horizontal-padding-row) py-(--spacing-padding-2xs) whitespace-break-spaces break-words border border-navigation-colors-stroke-row-items-resting rounded-md text-xs outline-none text-navigation-colors-text-resting',
    disabled:
      'cursor-not-allowed opacity-40 hover:border-select-menu-items-color-item-stroke-row-resting hover:bg-select-menu-items-color-item-stroke-row-resting text-navigation-colors-text-static',
    active:
      'border-navigation-colors-stroke-row-items-selected bg-navigation-colors-background-row-items-selected hover:border-navigation-colors-stroke-row-items-selected hover:bg-navigation-colors-background-row-items-selected text-navigation-colors-text-selected',
    clickable:
      'cursor-pointer hover:border-navigation-colors-stroke-row-items-hover hover:bg-navigation-colors-background-row-items-hover hover:text-navigation-colors-text-hover focus-visible:border-navigation-colors-stroke-row-items-hover focus-visible:bg-navigation-colors-background-row-items-hover focus-visible:text-navigation-colors-text-hover',
    disablePadding: 'p-0',
    disableGutters: 'px-0',
    dense: {
      base: 'px-(--spacing-padding-3xs)',
      content: '',
      start: 'pr-[calc(5/2)]',
      end: 'pl-[calc(5/2)]'
    },
    adornment: {
      base: 'items-center flex',
      start: 'pr-(--spacing-space-between-2xs)',
      end: 'pl-(--spacing-space-between-2xs)',
      svg: 'fill-current'
    },
    content: 'overflow-wrap break-word word-wrap break-all flex-1'
  }
};
