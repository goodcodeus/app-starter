import type { ButtonTheme } from 'reablocks';

export const buttonTheme: ButtonTheme = {
  base: `
    inline-flex items-center justify-center font-sans
    cursor-pointer font-semibold whitespace-nowrap
    rounded-(--buttons-details-corner-radius-base) font-semibold cursor-pointer select-none transition-colors [&_svg]:transition-all focus-visible:outline-none
  `,
  disabled: `
    disabled:opacity-40 disabled:cursor-not-allowed
  `,
  fullWidth: 'flex w-full',
  group: 'rounded-none first:rounded-s last:rounded-e border-s-0 first:border-s',
  groupText: 'border border-y-transparent border-l-transparent last:border-r-transparent hover:bg-initial',
  adornment: {
    base: 'flex',
    start:
      'pr-(--buttons-details-space-between-horizontal-md) [&.large]:pr-(--buttons-details-space-between-horizontal-lg)',
    end: 'pl-(--buttons-details-space-between-horizontal-md) [&.large]:pl-(--buttons-details-space-between-horizontal-lg)',
    sizes: {
      small: '[&>svg]:size-(--buttons-details-asset-size-sm) small',
      medium: '[&>svg]:size-(--buttons-details-asset-size-md) medium',
      large: '[&>svg]:size-(--buttons-details-asset-size-lg) large',
    },
  },
  sizes: {
    small: 'h-(--buttons-details-height-core-icon-sm) text-xs px-(--buttons-details-horizontal-padding-sm)',
    medium: 'h-(--buttons-details-height-core-icon-md) text-sm px-(--buttons-details-horizontal-padding-md)',
    large: 'h-(--buttons-details-height-core-icon-lg) text-base px-(--buttons-details-horizontal-padding-lg)',
  },
  iconSizes: {
    xsmall: 'size-(--buttons-details-height-core-icon-xs) [&>svg]:size-(--buttons-details-asset-size-xs) px-0 py-0',
    small: 'size-(--buttons-details-height-core-icon-sm) [&>svg]:size-(--buttons-details-asset-size-sm) px-0 py-0',
    medium: 'size-(--buttons-details-height-core-icon-md) [&>svg]:size-(--buttons-details-asset-size-md) px-0 py-0',
    large: 'size-(--buttons-details-height-core-icon-lg) [&>svg]:size-(--buttons-details-asset-size-lg) px-0 py-0',
  },
  variants: {
    filled:
      'bg-secondary hover:bg-border-secondary-hover border-1 border-buttons-colors-core-icon-primary-stroke-hover',
    outline: 'border',
    text: 'border-0',
    ghost: '',
    link: 'border-0 border-b rounded-none border-transparent hover:border-b-buttons-colors-link-secondary-underline-detail-hover',
  },
  colors: {
    primary: {
      filled: `
        bg-buttons-colors-core-icon-primary-background-resting border-buttons-colors-core-icon-primary-stroke-resting text-buttons-colors-core-icon-primary-text-resting [&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
        hover:bg-buttons-colors-core-icon-primary-background-hover hover:border-buttons-colors-core-icon-primary-stroke-hover hover:text-buttons-colors-core-icon-primary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-primary-assets-hover
        focus-visible:bg-buttons-colors-core-icon-primary-background-selected focus-visible:border-buttons-colors-core-icon-primary-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-primary-assets-selected
        disabled:bg-buttons-colors-core-icon-primary-background-resting disabled:border-buttons-colors-core-icon-primary-stroke-resting disabled:text-buttons-colors-core-icon-primary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
      `,
      outline: `
        bg-buttons-colors-core-icon-outline-background-resting border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
        hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover
        focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected
        disabled:bg-buttons-colors-core-icon-outline-background-resting disabled:border-buttons-colors-core-icon-outline-stroke-resting disabled:text-buttons-colors-core-icon-outline-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
      `,
      text: `
        text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected
         hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
        disabled:text-buttons-colors-link-primary-text-resting 
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-ghost-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-ghost-background-selected focus-visible:border-buttons-colors-core-icon-ghost-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `,
      link: `
        text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected
        hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
        disabled:text-buttons-colors-link-primary-text-resting disabled:[&_svg]:fill-buttons-colors-link-primary-assets-resting
        focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
      `,
    },
    secondary: {
      filled: `
        bg-buttons-colors-core-icon-secondary-background-resting border-buttons-colors-core-icon-secondary-stroke-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
        hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-secondary-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover
        focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected
        disabled:bg-buttons-colors-core-icon-secondary-background-resting disabled:border-buttons-colors-core-icon-secondary-stroke-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
      `,
      outline: `
        border-buttons-colors-core-icon-secondary-background-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
        hover:border-buttons-colors-core-icon-secondary-background-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover
        focus-visible:border-buttons-colors-core-icon-secondary-background-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected
        disabled:border-buttons-colors-core-icon-secondary-background-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
      `,
      text: `
        text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected
        [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected
        disabled:text-buttons-colors-link-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-link-secondary-assets-resting
        hover:text-buttons-colors-core-icon-ghost-text-hover focus-visible:text-buttons-colors-core-icon-ghost-text-selected
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `,
      link: `
        text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected
        [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected
        disabled:text-buttons-colors-link-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-link-secondary-assets-resting
        hover:border-b-buttons-colors-core-icon-secondary-background-hover focus-visible:text-buttons-colors-core-icon-ghost-text-selected
      `,
    },
    default: {
      filled: `
        bg-buttons-colors-core-icon-primary-background-resting border-buttons-colors-core-icon-primary-stroke-resting text-buttons-colors-core-icon-primary-text-resting [&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
        hover:bg-buttons-colors-core-icon-primary-background-hover hover:border-buttons-colors-core-icon-primary-stroke-hover hover:text-buttons-colors-core-icon-primary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-primary-assets-hover
        focus-visible:bg-buttons-colors-core-icon-primary-background-selected focus-visible:border-buttons-colors-core-icon-primary-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-primary-assets-selected
        disabled:bg-buttons-colors-core-icon-primary-background-resting disabled:border-buttons-colors-core-icon-primary-stroke-resting disabled:text-buttons-colors-core-icon-primary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
      `,
      outline: `
        bg-buttons-colors-core-icon-outline-background-resting border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
        hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover
        focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected
        disabled:bg-buttons-colors-core-icon-outline-background-resting disabled:border-buttons-colors-core-icon-outline-stroke-resting disabled:text-buttons-colors-core-icon-outline-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
      `,
      text: `
        text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected
        [&_svg]:fill-buttons-colors-link-primary-assets-resting hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
        disabled:text-buttons-colors-link-primary-text-resting disabled:[&_svg]:fill-buttons-colors-link-primary-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-ghost-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-ghost-background-selected focus-visible:border-buttons-colors-core-icon-ghost-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `,
      link: `
        text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected
        [&_svg]:fill-buttons-colors-link-primary-assets-resting hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
        disabled:text-buttons-colors-link-primary-text-resting disabled:[&_svg]:fill-buttons-colors-link-primary-assets-resting
        focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
      `,
    },
    success: {
      filled: 'bg-background-semantic-success-5 border-background-semantic-success-4 hover:bg-background-semantic-success-4 hover:border-background-semantic-success-3',
      outline: 'border-background-semantic-success-4 hover:border-background-semantic-success-3',
      text: 'text-content-text-semantic-success-base hover:text-content-text-semantic-success-1',
    },
    warning: {
      filled: 'bg-background-semantic-warning-5 border-background-semantic-warning-4 hover:bg-background-semantic-warning-4 hover:border-background-semantic-warning-3',
      outline: 'border-background-semantic-warning-4 hover:border-background-semantic-warning-3',
      text: 'text-content-text-semantic-warning-base hover:text-content-text-semantic-warning-1',
    },
    destructive: {
      filled: `
        bg-buttons-colors-core-icon-destructive-background-resting border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-core-icon-destructive-text-resting [&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-core-icon-destructive-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-selected
        disabled:bg-buttons-colors-core-icon-destructive-background-resting disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-core-icon-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
      `,
      outline: `
        border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-link-destructive-text-resting [&_svg]:fill-buttons-colors-link-destructive-assets-resting
        hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-link-destructive-text-hover hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover
        focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-link-destructive-text-selected focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      text: `
        text-buttons-colors-link-destructive-text-resting hover:text-buttons-colors-link-destructive-text-hover focus-visible:text-buttons-colors-link-destructive-text-selected
        [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `,
      link: `
        text-buttons-colors-link-destructive-text-resting hover:text-buttons-colors-link-destructive-text-hover focus-visible:text-buttons-colors-link-destructive-text-selected
        [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
        hover:border-b-buttons-colors-core-icon-destructive-stroke-hover
      `,
    },
    error: {
      filled: `
        bg-buttons-colors-core-icon-destructive-background-resting border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-core-icon-destructive-text-resting [&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-core-icon-destructive-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-selected
        disabled:bg-buttons-colors-core-icon-destructive-background-resting disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-core-icon-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
      `,
      outline: `
        border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-link-destructive-text-resting [&_svg]:fill-buttons-colors-link-destructive-assets-resting
        hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-link-destructive-text-hover hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover
        focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-link-destructive-text-selected focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      text: `
        text-buttons-colors-link-destructive-text-resting hover:text-buttons-colors-link-destructive-text-hover focus-visible:text-buttons-colors-link-destructive-text-selected
        [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `,
    },
  },
};
