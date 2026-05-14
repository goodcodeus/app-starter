import type { SelectTheme } from 'reablocks';

export const selectTheme: SelectTheme = {
  selectInput: {
    base: 'flex flex-nowrap items-center box-border border rounded-md border-inputs-colors-normal-stroke-resting bg-inputs-colors-normal-background-resting hover:border-inputs-colors-normal-stroke-hover focus-within:border-inputs-colors-normal-stroke-selected focus-within:bg-inputs-colors-normal-background-selected',
    container: 'relative',
    inputContainer:
      'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden [&_.invisible]:invisible',
    input:
      'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-content-text-neutral-5 text-inputs-colors-normal-text-input-text-resting',
    placeholder:
      'placeholder:text-inputs-colors-normal-text-input-text-resting focus:placeholder:text-inputs-colors-normal-text-input-text-selected',
    selectedValue:
      'overflow-hidden whitespace-nowrap text-ellipsis flex flex-wrap',
    adornment: {
      start:
        'flex items-center mr-(--inputs-details-space-between-horizontal-md)',
      end: 'flex items-center ml-(--inputs-details-space-between-horizontal-md)'
    },
    actions: {
      container: 'flex items-center justify-center',
      button:
        'disabled:cursor-not-allowed focus-visible:outline-none [&_svg]:text-buttons-colors-core-icon-ghost-assets-resting focus-visible:[&_svg]:text-buttons-colors-core-icon-ghost-assets-selected',
      refresh:
        'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting',
      loader: 'mr-2.5',
      close:
        'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting',
      expand:
        '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting'
    },
    disabled:
      'cursor-not-allowed text-content-text-neutral-5 hover:after:content-none opacity-40',
    unfilterable: 'caret-transparent',
    error: `
      border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting [&>input]:text-inputs-colors-error-text-input-filled [&>input]:placeholder:text-inputs-colors-error-text-input-text-resting
      hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
      focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
    `,
    open: 'rounded-sm',
    single: {
      selectedValue:
        'overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
      inputContainer: 'flex-nowrap',
      input: 'max-w-full'
    },
    multiple: {
      selectedValue: 'contents',
      inputContainer: 'flex-wrap'
    },
    chip: {
      base: 'cursor-pointer flex text-xs leading-none box-border mr-(--spacing-space-between-2xs) px-(--spacing-padding-3xs) py-(--spacing-padding-3xs) rounded-sm border-solid border-transparent',
      hover: '',
      focused: 'focused:border-transparent focused:outline-none',
      disabled: 'disabled:cursor-not-allowed',
      removeButton:
        'cursor-pointer leading-0 ml-(--spacing-space-between-2xs) p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
    },
    size: {
      small:
        'text-xs [&_input]:leading-4 [&_svg]:size-4 px-(--inputs-details-horizontal-padding-left-sm) min-h-(--inputs-details-height-input-sm) gap-(--inputs-details-space-between-horizontal-sm)',
      medium:
        'text-sm [&_input]:leading-4 [&_svg]:size-4 px-(--inputs-details-horizontal-padding-left-md) min-h-(--inputs-details-height-input-md) gap-(--inputs-details-space-between-horizontal-md)',
      large:
        'text-base [&_svg]:size-4.5 px-(--inputs-details-horizontal-padding-left-lg) min-h-(--inputs-details-height-input-lg) gap-(--inputs-details-space-between-horizontal-lg)'
    }
  },
  selectMenu: {
    base: 'border border-select-menu-items-color-item-stroke-container-resting rounded-md mt-(--spacing-space-between-xs) bg-select-menu-items-color-item-background-container-base backdrop-blur-md min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border [&>div]:gap-0.5',
    groupItem: {
      base: 'p-0',
      title:
        'px-(--select-menu-items-details-horizontal-padding-header) py-(--select-menu-items-details-vertical-padding-base) border rounded-md border-select-menu-items-color-item-stroke-header-resting text-select-menu-items-color-item-text-header-resting bg-select-menu-items-color-item-background-header-resting text-xxs font-semibold',
      size: { small: '', medium: '', large: '' }
    },
    option: {
      base: 'flex-1 whitespace-break-spaces break-words border border-select-menu-items-color-item-stroke-row-resting rounded-md text-select-menu-items-color-item-text-row-resting',
      hover:
        'hover:border-select-menu-items-color-item-stroke-row-hover hover:bg-select-menu-items-color-item-background-row-hover hover:text-select-menu-items-color-item-text-row-selected',
      selected:
        'border-select-menu-items-color-item-stroke-row-selected bg-select-menu-items-color-item-background-row-selected hover:border-select-menu-items-color-item-stroke-row-selected hover:bg-select-menu-items-color-item-background-row-selected',
      active:
        'border-select-menu-items-color-item-stroke-row-hover bg-select-menu-items-color-item-background-row-hover',
      disabled:
        'hover:border-select-menu-items-color-item-stroke-row-resting hover:bg-select-menu-items-color-item-stroke-row-resting',
      checkIcon: 'ml-1',
      content: 'flex flex-row justify-between'
    },
    size: {
      small:
        'text-xs px-(--spacing-padding-xs) py-(--select-menu-items-details-vertical-padding-base)',
      medium:
        'text-xs px-(--select-menu-items-details-horizontal-padding-row) py-(--select-menu-items-details-vertical-padding-base)',
      large:
        'text-sm px-(--select-menu-items-details-horizontal-padding-row) py-(--select-menu-items-details-vertical-padding-base)'
    }
  }
};
