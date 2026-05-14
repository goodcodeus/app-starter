import type { DotsLoaderProps } from 'reablocks';
import { DotsLoader } from 'reablocks';
import type { FC } from 'react';

export const PageLoader: FC<DotsLoaderProps> = props => (
  <div className="size-full flex flex-1 items-center justify-center">
    <DotsLoader {...props} />
  </div>
);
