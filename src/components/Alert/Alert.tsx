import { css, SerializedStyles, useTheme } from '@emotion/react';
import { forwardRef, HTMLAttributes, ReactNode, useMemo } from 'react';
import { Box } from '../Box';
import { Stack } from '../Stack';

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  children?: ReactNode;
  css?: SerializedStyles;
  variant?: 'solid' | 'soft' | 'outlined' | 'plain';
  color?: 'primary' | 'neutral' | 'danger' | 'warning' | 'success';
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    children,
    css: _css,
    variant = 'solid',
    color = 'primary',
    startDecorator,
    endDecorator,
    ...props
  },
  ref
) {
  const theme = useTheme();

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
          color: ${colorStyle.main};
          border: 1px solid ${colorStyle.main};
        `;
      case 'soft':
        return css`
          background-color: ${colorStyle.light};
          color: ${colorStyle.main};
        `;
      case 'plain':
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
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={1}
      css={css`
        border-radius: ${theme.radius.base}px;
        padding: 16px;
        ${variantCss}
        ${_css}
      `}
      ref={ref}
      {...props}
    >
      <Stack direction="row" alignItems="flex-start" spacing={1}>
        {startDecorator !== undefined && <Box>{startDecorator}</Box>}
        <Box>{children}</Box>
      </Stack>
      {endDecorator !== undefined && <Box>{endDecorator}</Box>}
    </Stack>
  );
});
