import type {
  CommandPaletteInputTheme,
  CommandPaletteItemTheme,
  CommandPaletteSectionTheme,
  CommandPaletteTheme
} from 'reablocks';

export const commandPaletteInputTheme: CommandPaletteInputTheme = {
  base: 'flex w-full items-center border-b-2 border-bottom border-stroke-neutral-1',
  input:
    'flex-1 border-0 box-border p-2.5 focus-within:outline-hidden focus-visible:outline-hidden',
  icon: 'w-4 h-4 ml-2.5'
};

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-background-brand-base',
  clickable: 'cursor-pointer hover:bg-background-brand-base/70'
};

export const commandPaletteSectionTheme: CommandPaletteSectionTheme = {
  base: 'bg-background-neutral-inverse-raised-1',
  first: 'pt-2.5'
};

export const commandPaletteTheme: CommandPaletteTheme = {
  base: 'w-full border border-stroke-neutral-1',
  inner: 'max-h-[80vh] overflow-y-auto border-0',
  emptyContainer: '',
  input: commandPaletteInputTheme,
  item: commandPaletteItemTheme,
  section: commandPaletteSectionTheme
};
