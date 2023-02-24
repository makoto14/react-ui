import { css } from '@emotion/react';
import { FC, useMemo } from 'react';

export type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = {
  children: string;
  color?: 'primary' | 'default';
};

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  ...props
}) => {
  const colorCss = useMemo(() => {
    switch (color) {
      case 'primary':
        return css`
          background-color: #4285f4;
          color: #fff;
        `;
      case 'default':
      default:
        return css`
          background-color: lightgrey;
          color: #333;
        `;
    }
  }, [color]);

  return (
    <button
      css={css`
        ${colorCss}
        padding: 8px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        &:hover {
          box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
            rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};
