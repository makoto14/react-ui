import { css } from '@emotion/react';
import { FC, Fragment } from 'react';

export type ButtonProps = {
  children: string;
};
export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Fragment>
      <button
        css={css`
          background-color: blue;
          padding: 8px;
          color: white;
        `}
      >
        {children}
      </button>
    </Fragment>
  );
};
