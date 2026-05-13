import type { TextareaTheme } from 'reablocks';

export const textareaTheme: TextareaTheme = {
  base: `
    flex items-center transition-colors rounded-md border
    border-inputs-colors-normal-stroke-resting bg-inputs-colors-normal-background-resting
    hover:border-inputs-colors-normal-stroke-hover hover:bg-inputs-colors-normal-background-hover
    focus-within:border-inputs-colors-normal-stroke-selected focus-within:bg-inputs-colors-normal-background-selected
    disabled-within:hover:border-inputs-colors-normal-stroke-resting disabled-within:hover:bg-inputs-colors-normal-background-resting
  `,
  input: `
    border-0 resize-none read-only:cursor-not-allowed outline-hidden transition-colors
    text-inputs-colors-normal-text-input-text-resting
    placeholder:text-inputs-colors-normal-text-input-text-resting focus:placeholder:text-inputs-colors-normal-text-input-text-selected
  `,
  fullWidth: 'w-full',
  error: `
    border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting
    hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
    focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
    disabled-within:hover:border-inputs-colors-error-stroke-resting disabled-within:hover:bg-inputs-colors-error-background-resting
    [&>textarea]:text-inputs-colors-error-text-input-filled [&>textarea]:placeholder:text-inputs-colors-error-text-input-text-resting
  `,
  disabled: 'cursor-not-allowed opacity-40',
  sizes: {
    small: `
      text-xs
      pl-(--inputs-details-horizontal-padding-left-sm) pr-(--inputs-details-horizontal-padding-right-sm)
      py-[3px]
    `,
    medium: `
      text-sm
      pl-(--inputs-details-horizontal-padding-left-md) pr-(--inputs-details-horizontal-padding-right-md)
      py-[7px]
    `,
    large: `
      text-base
      pl-(--inputs-details-horizontal-padding-left-lg) pr-(--inputs-details-horizontal-padding-right-lg)
      py-[7px]
    `
  }
};
