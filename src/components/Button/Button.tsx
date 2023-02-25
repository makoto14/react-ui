import { css, useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { ButtonHTMLAttributes, forwardRef, useMemo } from 'react';

export type ButtonProps = Props &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>;

type Props = {
  children: string;
  color?: 'primary' | 'neutral' | 'danger' | 'warning' | 'success';
  variant?: 'solid' | 'soft' | 'outlined' | 'text';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, color = 'primary', variant = 'solid', ...props },
    ref
  ) {
    const theme = useTheme();

    const colorStyle = useMemo(() => {
      switch (color) {
        case 'neutral':
          return {
            main: theme.colors.neutral.main,
            sub: theme.colors.neutral.sub,
          };
        case 'danger':
          return {
            main: theme.colors.danger.main,
            sub: theme.colors.danger.sub,
          };
        case 'warning':
          return {
            main: theme.colors.warning.main,
            sub: theme.colors.warning.sub,
          };
        case 'primary':
        default:
          return {
            main: theme.colors.primary.main,
            sub: theme.colors.primary.sub,
          };
      }
    }, [color, theme]);

    const variantCss = useMemo(() => {
      switch (variant) {
        case 'outlined':
          return css`
            background-color: transparent;
            color: ${colorStyle.main};
            border: 1px solid ${colorStyle.main};
          `;
        case 'soft':
          return css`
            background-color: ${colorStyle.sub};
            color: ${colorStyle.main};
          `;
        case 'text':
          return css`
            background-color: transparent;
            color: ${colorStyle.main};
          `;
        case 'solid':
        default:
          return css`
            background-color: ${colorStyle.main};
            color: ${theme.colors.grey[0]};
          `;
      }
    }, [colorStyle, theme, variant]);

    return (
      <button
        css={css`
          border: none;
          padding: 8px;
          cursor: pointer;
          border-radius: ${theme.radius.base}px;
          ${variantCss}
          &:active {
            box-shadow: 0 0 0 0.25rem ${rgba(theme.colors.blue[500], 0.5)};
          }
        `}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
