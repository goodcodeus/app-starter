import type { CalloutTheme } from 'reablocks';

export const calloutTheme: CalloutTheme = {
  base: {
    common: 'px-(--spacing-padding-base) py-(--spacing-padding-sm) border-b',
    variant: {
      default:
        'bg-notifications-colors-background-neutral-resting border-notifications-colors-stroke-neutral-resting',
      success:
        'bg-notifications-colors-background-success-resting border-notifications-colors-stroke-success-resting',
      error:
        'bg-notifications-colors-background-error-resting border-notifications-colors-stroke-error-resting',
      warning:
        'bg-notifications-colors-background-warning-resting border-notifications-colors-stroke-warning-resting',
      info: 'bg-notifications-colors-background-info-resting border-notifications-colors-stroke-info-resting'
    }
  },
  icon: {
    common: '',
    variant: {
      default: 'text-notifications-colors-assets-neutral-resting',
      success: 'text-notifications-colors-assets-success-resting',
      error: 'text-notifications-colors-assets-destructive-resting',
      warning: 'text-notifications-colors-assets-warning-static',
      info: 'text-notifications-colors-assets-info-resting'
    }
  },
  text: 'text-notifications-colors-text-title-resting'
};
