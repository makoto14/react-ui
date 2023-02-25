import { css, SerializedStyles, useTheme } from '@emotion/react';
import { forwardRef, HTMLAttributes, ReactNode, useMemo } from 'react';

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  css?: SerializedStyles;
  direction?: 'column' | 'row';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  spacing?: number;
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    children,
    css: _css,
    direction = 'column',
    alignItems,
    justifyContent,
    spacing = 0,
    ...props
  },
  ref
) {
  const theme = useTheme();
  const spacingCss = useMemo(() => {
    const space = spacing * theme.spacing.base;

    switch (direction) {
      case 'row':
        return css`
          display: flex;
          > :nth-of-type(even) {
            margin-left: ${space}px;
          }
          > :not(:first-of-type) {
            margin-left: ${space}px;
          }
        `;
      case 'column':
      default:
        return css`
          display: block;
          > :nth-of-type(even) {
            margin-top: ${space}px;
          }
          > :not(:first-of-type) {
            margin-top: ${space}px;
          }
        `;
    }
  }, [direction, spacing, theme]);

  return (
    <div
      ref={ref}
      css={css`
        ${spacingCss}
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        ${_css}
      `}
      {...props}
    >
      {children}
    </div>
  );
});
