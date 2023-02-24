import { css, SerializedStyles } from '@emotion/react';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  css?: SerializedStyles;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, css: _css, ...props },
  ref
) {
  return (
    <div
      css={css`
        ${_css}
      `}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
