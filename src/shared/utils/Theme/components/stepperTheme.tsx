import type { StepperTheme } from 'reablocks';

export const stepperTheme: StepperTheme = {
  base: 'grid grid-cols-[min-content_1fr] gap-x-3',
  step: {
    base: 'border-l border-solid border-stroke-neutral-2 translate-x-1/2 mt-4 relative',
    marker: {
      base: 'rounded-full w-2.5 h-2.5 bg-content-assets-neutral-3',
      container:
        'text-content-text-on-color-light-dark w-max bg-background-neutral-canvas-base/90 rounded-full relative -translate-x-[calc(50%+0.5px)] -top-3',
      active: 'border border-stroke-brand-1 bg-background-brand-base',
      label: {
        base: 'flex flex-row items-center gap-1 border border-content-assets-neutral-3 px-3 py-1 rounded-[20px]',
        active: 'border-stroke-brand-1 bg-background-brand-5'
      }
    },
    active: 'border-stroke-brand-1',
    content: 'pb-6'
  }
};
