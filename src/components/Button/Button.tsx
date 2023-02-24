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
          background-color: blue;
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

        &:active {
          box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};
