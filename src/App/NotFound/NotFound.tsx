import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import css from './NotFound.module.css';

export const NotFound: FC = () => (
  <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div className={css.container}>
      <h1>404</h1>
    </div>
  </>
);
