import type { CheckboxTheme } from 'reablocks';

export const checkboxTheme: CheckboxTheme = {
  base: 'inline-flex items-center w-full group/checkbox',
  label: {
    base: 'ml-(--selectors-details-space-between-horizontal-sm) w-full text-selectors-colors-text-description-not-selected whitespace-nowrap',
    checked: 'checked text-selectors-colors-text-description-selected',
    disabled: 'cursor-not-allowed opacity-40',
    clickable: `
          cursor-pointer transition-colors
          group-hover/checkbox:text-selectors-colors-text-label-selected group-focus-within/checkbox:text-selectors-colors-text-label-selected
        `,
    sizes: {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base'
    }
  },
  check: {
    base: 'stroke-selectors-colors-checkbox-selected-assets-base group-hover/checkbox:stroke-selectors-colors-checkbox-selected-assets-hover',
    checked: '',
    disabled: 'cursor-not-allowed'
  },
  border: {
    base: '',
    checked: '',
    disabled: 'cursor-not-allowed'
  },
  checkbox: {
    base: `
          flex items-center justify-center cursor-pointer border transition-colors focus-visible:outline-none
          bg-selectors-colors-checkbox-not-selected-background-resting group-hover/checkbox:bg-selectors-colors-checkbox-not-selected-background-hover group-focus-within/checkbox:bg-selectors-colors-checkbox-not-selected-background-hover
          border-selectors-colors-checkbox-not-selected-stroke-resting group-hover/checkbox:border-selectors-colors-checkbox-not-selected-stroke-hover group-focus-within/checkbox:border-selectors-colors-checkbox-not-selected-stroke-hover
          [&>svg>path:first-child]:stroke-transparent [&>svg]:fill-transparent [&>svg]:outline-none
        `,
    checked: `
          bg-selectors-colors-checkbox-selected-background-resting group-hover/checkbox:bg-selectors-colors-checkbox-selected-background-hover group-focus-within/checkbox:bg-selectors-colors-checkbox-selected-background-hover
          border-selectors-colors-checkbox-selected-stroke-resting group-hover/checkbox:border-selectors-colors-checkbox-selected-stroke-hover group-focus-within/checkbox:border-selectors-colors-checkbox-selected-stroke-hover
        `,
    disabled:
      'disabled cursor-not-allowed opacity-40 group-hover/checkbox:bg-selectors-colors-checkbox-selected-resting'
  },
  sizes: {
    small:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
    medium:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
    large:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-lg) rounded-(--selectors-details-corner-radius-checkbox-lg)'
  },
  boxVariants: {
    hover: {
      stroke: '',
      fill: '',
      strokeWidth: 1
    },
    pressed: {
      scale: 0.95
    },
    checked: {
      stroke: '',
      fill: ''
    },
    unchecked: {
      stroke: '',
      fill: ''
    }
  }
};
