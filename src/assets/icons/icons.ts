import React from 'react';

const iconPaths = import.meta.glob('./*.svg');

export const icons = Object.keys(iconPaths).map(key => ({
  name: key.replace('.svg', '').replace('./', ''),
  component: React.lazy(async () => {
    const lazy: any = await iconPaths[key]();
    return { default: lazy.ReactComponent };
  })
}));
