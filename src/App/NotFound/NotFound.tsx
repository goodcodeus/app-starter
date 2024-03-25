import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

export const NotFound: FC = () => (
  <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>404</h1>
    </div>
  </>
);
