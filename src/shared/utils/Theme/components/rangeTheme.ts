import type { RangeTheme } from 'reablocks';

export const rangeTheme: RangeTheme = {
  base: `
        group relative box-border w-full h-(--selectors-details-height-range-bar) rounded-sm transition-colors
        bg-selectors-colors-range-bar-background-base hover:bg-selectors-colors-range-bar-background-hover focus-within:bg-selectors-colors-range-bar-background-active
      `,
  drag: `
        absolute size-(--selectors-details-height-range-handle) -left-1.5 -top-1.5 rounded-sm border
        border-selectors-colors-range-handles-stroke-resting hover:border-selectors-colors-range-handles-stroke-hover focus-visible:border-selectors-colors-range-handles-stroke-active
        bg-selectors-colors-range-handles-background-resting hover:bg-selectors-colors-range-handles-background-hover focus-visible:hover:bg-selectors-colors-range-handles-background-active
      `,
  inputWrapper: {
    base: 'cursor-pointer inline-block relative size-full',
    disabled: 'cursor-not-allowed'
  },
  rangeHighlight: {
    base: 'pointer-events-none h-(--selectors-details-height-range-bar) bg-selectors-colors-range-bar-background-active-section rounded-sm',
    disabled: 'cursor-not-allowed'
  },
  disabled:
    'cursor-not-allowed opacity-40 disabled:bg-selectors-colors-range-bar-background-base!',
  input: 'absolute left-[-9999px]',
  tooltip:
    'absolute top-[-45px] whitespace-nowrap text-center text-xs font-semibold left-2/4 rounded-sm p-(--spacing-padding-xs) bg-tooltip-colors-neutral-background-default text-tooltip-colors-neutral-text-default'
};
