import { css, useTheme } from '@emotion/react';
import {
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
  useCallback,
  useMemo,
} from 'react';

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof Props
> &
  Props;

type Props = {
  onClick?: (e: MouseEvent) => void;
};

export const Link: FC<LinkProps> = ({ onClick, href, children, ...props }) => {
  const theme = useTheme();

  const _href = useMemo(() => {
    if (href !== undefined) {
      return href;
    }

    if (onClick !== undefined) {
      return '';
    }

    return undefined;
  }, [href, onClick]);

  const _onClick = useCallback(
    (e: MouseEvent) => {
      if (onClick === undefined) {
        return;
      }

      if (href === undefined) {
        e.preventDefault();
      }
      onClick(e);
    },
    [href, onClick],
  );

  return (
    <a
      css={css`
        text-underline-offset: 2px;
        color: ${theme.colors.primary.main};
        :hover {
          color: ${theme.colors.primary.dark};
        }
      `}
      href={_href}
      onClick={_onClick}
      {...props}
    >
      {children}
    </a>
  );
};
