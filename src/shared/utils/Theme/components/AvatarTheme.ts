import type { AvatarTheme } from 'reablocks';

export const avatarTheme: AvatarTheme = {
  base: `
    relative flex justify-center items-center bg-cover bg-center font-bold transition-colors
    after:absolute after:inset-0 after:border
    bg-avatar-colors-background-container-resting 
    after:border-avatar-colors-stroke-container-resting
  `,
  rounded: 'rounded-full after:rounded-full',
};
