import { css, SerializedStyles, useTheme } from '@emotion/react';
import { ComponentProps, forwardRef, ReactNode, useMemo } from 'react';

export type StackProps = Omit<ComponentProps<'div'>, keyof Props> & Props;

type Props = {
  children?: ReactNode;
  sx?: SerializedStyles;
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
    sx,
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
          flex-direction: row;
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
          display: flex;
          flex-direction: column;
          > :nth-of-type(even) {
            margin-top: ${space}px;
          }
          > :not(:first-of-type) {
            margin-top: ${space}px;
          }
        `;
    }
  }, [direction, spacing, theme.spacing.base]);

  return (
    <div
      ref={ref}
      css={css`
        ${spacingCss}
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        ${sx}
      `}
      {...props}
    >
      {children}
    </div>
  );
});
