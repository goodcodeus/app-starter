import type { ChipTheme } from 'reablocks';

export const chipTheme: ChipTheme = {
  base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-(--badges-details-corner-radius-corner-radius) transition-colors outline-none',
  label: 'flex items-center gap-1',
  focus:
    'focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-2',
  variants: {
    filled: '',
    outline: '',
    subtle: '',
    'tag-filled': 'rounded-none cursor-pointer tag font-semibold',
    'tag-outline':
      'bg-transparent rounded-none cursor-pointer tag font-semibold'
  },
  colors: {
    default: {
      variants: {
        filled: `
          bg-badges-colors-solid-neutral-background-standard
          border-badges-colors-solid-neutral-stroke-default
          text-badges-colors-solid-neutral-text-default
          [&>svg]:fill-badges-colors-solid-neutral-assets-default
        `,
        outline: `
          bg-badges-colors-outline-neutral-background-standard
          border-badges-colors-outline-neutral-stroke-default
          text-badges-colors-outline-neutral-text-default
          [&>svg]:fill-badges-colors-outline-neutral-assets-default
          hover:bg-badges-colors-outline-neutral-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-neutral-background-standard
          border-badges-colors-subtle-neutral-stroke-default
          text-badges-colors-subtle-neutral-text-default
          [&>svg]:fill-badges-colors-subtle-neutral-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-neutral-background-resting
          border-tags-colors-neutral-stroke-resting
          text-tags-colors-neutral-text-label-base
          [&>svg]:text-tags-colors-neutral-assets-lead-icon-base
          hover:bg-tags-colors-neutral-background-hover
          hover:border-tags-colors-neutral-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-neutral-stroke-resting
          text-tags-colors-neutral-text-label-base
          [&>svg]:text-tags-colors-neutral-assets-lead-icon-base
          hover:border-tags-colors-neutral-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-brand-stroke-resting bg-tags-colors-brand-background-resting
              hover:border-tags-colors-brand-stroke-hover hover:bg-tags-colors-brand-background-hover
              focus-visible:border-tags-colors-brand-stroke-hover focus-visible:bg-tags-colors-brand-background-hover
              [&>svg]:text-tags-colors-brand-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-neutral-stroke-selected bg-tags-colors-neutral-background-selected
              hover:border-tags-colors-neutral-stroke-selected hover:bg-tags-colors-neutral-background-selected
            `
          }
        }
      }
    },
    primary: {
      variants: {
        filled: `
          bg-badges-colors-solid-brand-background-standard
          border-badges-colors-solid-brand-stroke-default
          text-badges-colors-solid-brand-text-default
          [&>svg]:fill-badges-colors-solid-brand-assets-default
        `,
        outline: `
          bg-badges-colors-outline-brand-background-standard
          border-badges-colors-outline-brand-stroke-default
          text-badges-colors-outline-brand-text-default
          [&>svg]:fill-badges-colors-outline-brand-assets-default
          hover:bg-badges-colors-outline-brand-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-brand-background-standard
          border-badges-colors-subtle-brand-stroke-default
          text-badges-colors-subtle-brand-text-default
          [&>svg]:fill-badges-colors-subtle-brand-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-brand-background-resting
          border-tags-colors-brand-stroke-resting
          text-tags-colors-brand-text-label-base
          [&>svg]:text-tags-colors-brand-assets-lead-icon-base
          hover:bg-tags-colors-brand-background-hover
          hover:border-tags-colors-brand-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-brand-stroke-resting
          text-tags-colors-brand-text-label-base
          [&>svg]:text-tags-colors-brand-assets-lead-icon-base
          hover:border-tags-colors-brand-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-brand-stroke-resting bg-tags-colors-brand-background-resting
              focus-visible:border-tags-colors-brand-stroke-hover
              [&>svg]:text-tags-colors-brand-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-brand-stroke-selected bg-tags-colors-brand-background-selected
              hover:border-tags-colors-brand-stroke-selected hover:bg-tags-colors-brand-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected: 'bg-tags-colors-brand-background-selected'
          }
        }
      }
    },
    secondary: {
      variants: {
        filled: `
          bg-badges-colors-solid-accent-background-standard
          border-badges-colors-solid-accent-stroke-default
          text-badges-colors-solid-accent-text-default
          [&>svg]:fill-badges-colors-solid-accent-assets-default
        `,
        outline: `
          bg-badges-colors-outline-accent-background-standard
          border-badges-colors-outline-accent-stroke-default
          text-badges-colors-outline-accent-text-default
          [&>svg]:fill-badges-colors-outline-accent-assets-default
          hover:bg-badges-colors-outline-accent-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-accent-background-standard
          border-badges-colors-subtle-accent-stroke-default
          text-badges-colors-subtle-accent-text-default
          [&>svg]:fill-badges-colors-subtle-accent-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-neutral-background-resting
          border-tags-colors-neutral-stroke-resting
          text-tags-colors-neutral-text-label-base
          [&>svg]:text-tags-colors-neutral-assets-lead-icon-base
          hover:bg-tags-colors-neutral-background-hover
          hover:border-tags-colors-neutral-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-neutral-stroke-resting
          text-tags-colors-neutral-text-label-base
          [&>svg]:text-tags-colors-neutral-assets-lead-icon-base
          hover:border-tags-colors-neutral-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-accent-stroke-resting bg-tags-colors-accent-background-resting
              focus-visible:bg-transparent bg-transparent hover:bg-transparent
              border-tags-colors-neutral-stroke-resting hover:border-tags-colors-neutral-stroke-hover
              focus-visible:border-tags-colors-accent-stroke-hover focus-visible:bg-tags-colors-accent-background-hover
              [&>svg]:text-tags-colors-accent-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-accent-stroke-selected bg-tags-colors-accent-background-selected
              hover:border-tags-colors-accent-stroke-selected hover:bg-tags-colors-accent-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected: 'bg-tags-colors-neutral-background-selected'
          }
        }
      }
    },
    success: {
      variants: {
        filled: `
          bg-badges-colors-solid-success-background-standard
          border-badges-colors-solid-success-stroke-default
          text-badges-colors-solid-success-text-default
          [&>svg]:fill-badges-colors-solid-success-assets-default
        `,
        outline: `
          bg-badges-colors-outline-success-background-standard
          border-badges-colors-outline-success-stroke-default
          text-badges-colors-outline-success-text-default
          [&>svg]:fill-badges-colors-outline-success-assets-default
          hover:bg-badges-colors-outline-success-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-success-background-standard
          border-badges-colors-subtle-success-stroke-default
          text-badges-colors-subtle-success-text-default
          [&>svg]:fill-badges-colors-subtle-success-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-success-background-resting
          border-tags-colors-success-stroke-resting
          text-tags-colors-success-text-label-base
          [&>svg]:text-tags-colors-success-assets-lead-icon-base
          hover:bg-tags-colors-success-background-hover
          hover:border-tags-colors-success-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-success-stroke-resting
          text-tags-colors-success-text-label-base
          [&>svg]:text-tags-colors-success-assets-lead-icon-base
          hover:border-tags-colors-success-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-success-stroke-resting bg-tags-colors-success-background-resting
              focus-visible:border-tags-colors-success-stroke-hover
              [&>svg]:text-tags-colors-success-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-success-stroke-selected bg-tags-colors-success-background-selected
              hover:border-tags-colors-success-stroke-selected hover:bg-tags-colors-success-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected:
              'bg-tags-colors-success-background-selected border-tags-colors-success-stroke-selected'
          }
        }
      }
    },
    warning: {
      variants: {
        filled: `
          bg-badges-colors-solid-warning-background-standard
          border-badges-colors-solid-warning-stroke-default
          text-badges-colors-solid-warning-text-default
          [&>svg]:fill-badges-colors-solid-warning-assets-default
        `,
        outline: `
          bg-badges-colors-outline-warning-background-standard
          border-badges-colors-outline-warning-stroke-default
          text-badges-colors-outline-warning-text-default
          [&>svg]:fill-badges-colors-outline-warning-assets-default
          hover:bg-badges-colors-outline-warning-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-warning-background-standard
          border-badges-colors-subtle-warning-stroke-default
          text-badges-colors-subtle-warning-text-default
          [&>svg]:fill-badges-colors-subtle-warning-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-warning-background-resting
          border-tags-colors-warning-stroke-resting
          text-tags-colors-warning-text-label-base
          [&>svg]:text-tags-colors-warning-assets-lead-icon-base
          hover:bg-tags-colors-warning-background-hover
          hover:border-tags-colors-warning-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-warning-stroke-resting
          text-tags-colors-warning-text-label-base
          [&>svg]:text-tags-colors-warning-assets-lead-icon-base
          hover:border-tags-colors-warning-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-warning-stroke-resting bg-tags-colors-warning-background-resting
              focus-visible:border-tags-colors-warning-stroke-hover
              [&>svg]:text-tags-colors-warning-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-warning-stroke-selected bg-tags-colors-warning-background-selected
              hover:border-tags-colors-warning-stroke-selected hover:bg-tags-colors-warning-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected:
              'bg-tags-colors-warning-background-selected border-tags-colors-warning-stroke-selected'
          }
        }
      }
    },
    error: {
      variants: {
        filled: `
          bg-badges-colors-solid-error-background-standard
          border-badges-colors-solid-error-stroke-default
          text-badges-colors-solid-error-text-default
          [&>svg]:fill-badges-colors-solid-error-assets-default
        `,
        outline: `
          bg-badges-colors-outline-error-background-standard
          border-badges-colors-outline-error-stroke-default
          text-badges-colors-outline-error-text-default
          [&>svg]:fill-badges-colors-outline-error-assets-default
          hover:bg-badges-colors-outline-error-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-error-background-standard
          border-badges-colors-subtle-error-stroke-default
          text-badges-colors-subtle-error-text-default
          [&>svg]:fill-badges-colors-subtle-error-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-error-background-resting
          border-tags-colors-error-stroke-resting
          text-tags-colors-error-text-label-base
          [&>svg]:text-tags-colors-error-assets-lead-icon-base
          hover:bg-tags-colors-error-background-hover
          hover:border-tags-colors-error-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-error-stroke-resting
          text-tags-colors-error-text-label-base
          [&>svg]:text-tags-colors-error-assets-lead-icon-base
          hover:border-tags-colors-error-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-error-stroke-resting bg-tags-colors-error-background-resting
              focus-visible:border-tags-colors-error-stroke-hover
              [&>svg]:text-tags-colors-error-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-error-stroke-selected bg-tags-colors-error-background-selected
              hover:border-tags-colors-error-stroke-selected hover:bg-tags-colors-error-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected:
              'bg-tags-colors-error-background-selected border-tags-colors-error-stroke-selected'
          }
        }
      }
    },
    info: {
      variants: {
        filled: `
          bg-badges-colors-solid-info-background-standard
          border-badges-colors-solid-info-stroke-default
          text-badges-colors-solid-info-text-default
          [&>svg]:fill-badges-colors-solid-info-assets-default
        `,
        outline: `
          bg-badges-colors-outline-info-background-standard
          border-badges-colors-outline-info-stroke-default
          text-badges-colors-outline-info-text-default
          [&>svg]:fill-badges-colors-outline-info-assets-default
          hover:bg-badges-colors-outline-info-background-standard
        `,
        subtle: `
          bg-badges-colors-subtle-info-background-standard
          border-badges-colors-subtle-info-stroke-default
          text-badges-colors-subtle-info-text-default
          [&>svg]:fill-badges-colors-subtle-info-assets-default
        `,
        'tag-filled': `
          bg-tags-colors-info-background-resting
          border-tags-colors-info-stroke-resting
          text-tags-colors-info-text-label-base
          [&>svg]:text-tags-colors-info-assets-lead-icon-base
          hover:bg-tags-colors-info-background-hover
          hover:border-tags-colors-info-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-info-stroke-resting
          text-tags-colors-info-text-label-base
          [&>svg]:text-tags-colors-info-assets-lead-icon-base
          hover:border-tags-colors-info-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-outline': {
            base: `
              border-tags-colors-info-stroke-resting bg-tags-colors-info-background-resting
              focus-visible:border-tags-colors-info-stroke-hover
              [&>svg]:text-tags-colors-info-assets-lead-icon-base
            `,
            selected: `
              border-tags-colors-info-stroke-selected bg-tags-colors-info-background-selected
              hover:border-tags-colors-info-stroke-selected hover:bg-tags-colors-info-background-selected
            `
          },
          'tag-filled': {
            base: '',
            selected:
              'bg-tags-colors-info-background-selected border-tags-colors-info-stroke-selected'
          }
        }
      }
    },
    accent: {
      variants: {
        filled: `
          border-black
          text-black
          [&>svg]:fill-black
        `,
        outline: `
          border-black
          text-black
          [&>svg]:fill-black
        `,
        subtle: `
          border-black
          text-black
          [&>svg]:fill-black
        `,
        'tag-filled': `
          bg-tags-colors-accent-background-resting
          border-tags-colors-accent-stroke-resting
          text-tags-colors-accent-text-label-base
          [&>svg]:text-tags-colors-accent-assets-lead-icon-base
          hover:bg-tags-colors-accent-background-hover
          hover:border-tags-colors-accent-stroke-hover
        `,
        'tag-outline': `
          border-tags-colors-accent-stroke-resting
          text-tags-colors-accent-text-label-base
          [&>svg]:text-tags-colors-accent-assets-lead-icon-base
          hover:border-tags-colors-accent-stroke-hover
        `
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-filled': {
            base: '',
            selected: 'bg-tags-colors-accent-background-selected'
          }
        }
      }
    },
    minimal: {
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          'tag-filled': {
            base: '',
            selected: 'bg-tags-colors-minimal-background-selected'
          }
        }
      }
    }
  },
  adornment: {
    base: 'flex items-center justify-center',
    start: '',
    end: '',
    sizes: {
      small:
        '[&>svg]:size-(--badges-details-asset-size-sm) [.tag>&>svg]:size-(--tags-details-asset-size-icon)',
      medium:
        '[&>svg]:size-(--badges-details-asset-size-md) [.tag>&>svg]:size-(--tags-details-asset-size-icon)',
      large:
        '[&>svg]:size-(--badges-details-asset-size-lg) [.tag>&>svg]:size-(--tags-details-asset-size-icon)'
    }
  },
  sizes: {
    small:
      'h-(--badges-details-height-sm) text-xs gap-(--badges-details-space-between-sm) px-(--badges-details-horizontal-padding-sm) [&.tag]:text-[10px] [&.tag]:px-2! [&.tag]:gap-(--tags-details-space-between-base)',
    medium:
      'h-(--badges-details-height-md) text-xs gap-(--badges-details-space-between-md) px-(--badges-details-horizontal-padding-md) [&.tag]:h-7 [&.tag]:px-2! [&.tag]:gap-(--tags-details-space-between-base)',
    large:
      'h-(--badges-details-height-lg) text-md gap-(--badges-details-space-between-lg) px-(--badges-details-horizontal-padding-lg) text-sm [&.tag]:h-8 [&.tag]:px-2! [&.tag]:gap-(--tags-details-space-between-base)'
  },
  deleteButton: {
    base: 'transition-colors ml-1 outline-none text-inherit hover:text-inherit',
    sizes: {
      small: 'size-2 [*>svg]:size-(--tags-details-asset-size-close)',
      medium: 'size-3 [*>svg]:size-(--tags-details-asset-size-close)',
      large: 'size-3 [*>svg]:size-(--tags-details-asset-size-close)'
    }
  },
  disabled: 'cursor-not-allowed opacity-50'
};
