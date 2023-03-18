import { css, useTheme } from '@emotion/react';
import { lighten, rgba } from 'polished';
import { ButtonHTMLAttributes, ReactNode, forwardRef, useMemo } from 'react';
import { Size } from '../../types';

export type ButtonProps = Props &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>;

type Props = {
  children: ReactNode;
  color?: 'primary' | 'neutral' | 'danger' | 'warning' | 'success';
  variant?: 'solid' | 'soft' | 'outlined' | 'text';
  disabled?: boolean;
  size?: Extract<Size, 'lg' | 'md' | 'sm'>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      color = 'primary',
      variant = 'solid',
      disabled = false,
      size = 'md',
      ...props
    },
    ref
  ) {
    const theme = useTheme();

    const lightness = useMemo(() => (disabled ? 0.3 : 0), [disabled]);

    const colorStyle = useMemo(() => {
      switch (color) {
        case 'neutral':
          return {
            dark: theme.colors.neutral.dark,
            main: theme.colors.neutral.main,
            light: theme.colors.neutral.light,
            softHover: theme.colors.grey[200],
            activeShadow: theme.colors.grey[500],
          };
        case 'danger':
          return {
            dark: theme.colors.danger.dark,
            main: theme.colors.danger.main,
            light: theme.colors.danger.light,
            softHover: theme.colors.red[200],
            activeShadow: theme.colors.red[500],
          };
        case 'warning':
          return {
            dark: theme.colors.warning.dark,
            main: theme.colors.warning.main,
            light: theme.colors.warning.light,
            softHover: theme.colors.orange[200],
            activeShadow: theme.colors.orange[500],
          };
        case 'primary':
        default:
          return {
            dark: theme.colors.primary.dark,
            main: theme.colors.primary.main,
            light: theme.colors.primary.light,
            softHover: theme.colors.blue[200],
            activeShadow: theme.colors.blue[500],
          };
      }
    }, [color, theme]);

    const variantCss = useMemo(() => {
      switch (variant) {
        case 'outlined':
          return css`
            background-color: transparent;
            color: ${lighten(lightness, colorStyle.main)};
            border: 1px solid ${lighten(lightness, colorStyle.main)};
            &:hover {
              background-color: ${!disabled && colorStyle.light};
            }
          `;
        case 'soft':
          return css`
            background-color: ${lighten(lightness, colorStyle.light)};
            color: ${lighten(lightness, colorStyle.main)};
            &:hover {
              background-color: ${!disabled && colorStyle.softHover};
            }
          `;
        case 'text':
          return css`
            background-color: transparent;
            color: ${lighten(lightness, colorStyle.main)};
            &:hover {
              background-color: ${!disabled && colorStyle.light};
            }
          `;
        case 'solid':
        default:
          return css`
            background-color: ${lighten(lightness, colorStyle.main)};
            color: ${lighten(lightness, theme.colors.grey[0])};
            &:hover {
              background-color: ${!disabled && colorStyle.dark};
            }
          `;
      }
    }, [colorStyle, theme, lightness, variant, disabled]);

    const CommonDisabledStyle = useMemo(() => {
      if (disabled) {
        return css`
          cursor: not-allowed;
        `;
      }
      return css`
        &:active,
        &:focus-visible {
          box-shadow: 0 0 0 0.25rem ${rgba(colorStyle.activeShadow, 0.5)};
        }
      `;
    }, [disabled, colorStyle]);

    const sizeStyle = useMemo(() => {
      switch (size) {
        case 'sm':
          return css`
            padding: 6px;
            font-size: 12px;
          `;
        case 'lg':
          return css`
            padding: 12px;
            font-size: 16px;
          `;
        case 'md':
        default:
          return css`
            padding: 8px;
            font-size: 14px;
          `;
      }
    }, [size]);

    return (
      <button
        css={css`
          border: none;
          cursor: pointer;
          display: flex;
          border-radius: ${theme.radius.base}px;
          ${variantCss}
          ${CommonDisabledStyle}
          ${sizeStyle}
        `}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
