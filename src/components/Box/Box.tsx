import { css, SerializedStyles } from '@emotion/react';
import { ComponentProps, forwardRef, ReactNode } from 'react';

export type BoxProps = Omit<ComponentProps<'div'>, keyof Props> & Props;

type Props = {
  children?: ReactNode;
  sx?: SerializedStyles;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, sx, ...props },
  ref
) {
  return (
    <div
      css={css`
        ${sx}
      `}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
