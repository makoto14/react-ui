import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { css, useTheme } from '@emotion/react';
import { FC, ReactNode } from 'react';

export type TooltipProps = {
  title: ReactNode;
  children: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <ArkTooltip.Root closeDelay={0} openDelay={0}>
      <ArkTooltip.Trigger asChild>{children}</ArkTooltip.Trigger>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          css={css`
            background-color: ${theme.colors.grey[900]};
            color: ${theme.colors.grey[0]};
            padding: 4px;
            border-radius: 4px;
            transition: 0.3s ease-in;
          `}
        >
          {title}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  );
};
