import type { TabsTheme } from 'reablocks';

export const tabsTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px border-b border-stroke-neutral-5',
    indicator: {
      base: 'bg-tabs-colors-underline-stroke-selected group-hover:bg-tabs-colors-underline-stroke-selected-hover absolute bottom-0 left-0 right-0 transition-colors',
      size: {
        small: 'h-(--tabs-details-stroke-width-underline-sm)',
        medium: 'h-(--tabs-details-stroke-width-underline-sm)',
        large: 'h-(--tabs-details-stroke-width-underline-lg)',
      },
    },
    divider: 'w-full h-px border-0 !-mb-1',
    variant: {
      primary: {
        divider: '',
      },
      secondary: {
        divider: '',
      },
    },
    tab: {
      base: 'group relative',
      button: `
        transition-colors [&_svg]:transition-colors
        text-tabs-colors-underline-text-resting border-tabs-colors-underline-background-resting border-b rounded-none
        hover:border-tabs-colors-underline-background-hover hover:text-tabs-colors-underline-text-hover
        focus-visible:text-tabs-colors-underline-text-hover
        [&_svg]:text-tabs-colors-underline-assets-resting hover:[&_svg]:text-tabs-colors-underline-assets-hover focus-visible:[&_svg]:text-tabs-colors-underline-assets-hover
      `,
      selected:
        'text-tabs-colors-underline-text-selected group-hover:text-tabs-colors-underline-text-selected-hover [&_svg]:text-tabs-colors-underline-assets-selected',
      disabled:
        'cursor-not-allowed opacity-40 disabled:text-tabs-colors-underline-text-resting hover:text-tabs-colors-underline-text-resting disabled:[&_svg]:text-tabs-colors-underline-assets-resting',
      size: {
        small: 'h-(--tabs-details-height-sm) px-(--tabs-details-horizontal-padding-sm) text-[10px] font-semibold',
        medium: 'h-(--tabs-details-height-lg) px-(--tabs-details-horizontal-padding-sm) text-xs font-semibold',
        large: 'h-(--tabs-details-height-lg) px-(--tabs-details-horizontal-padding-lg) text-sm font-semibold',
      },
    },
  },
  panel: 'mt-4',
};
