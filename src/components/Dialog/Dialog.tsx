import { css, useTheme } from '@emotion/react';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';
import { rgba } from 'polished';
import { FC, ReactNode } from 'react';

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
};

export const Dialog: FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  children,
  action,
}) => {
  const theme = useTheme();
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay
          css={css`
            background-color: ${rgba(theme.colors.grey[400], 0.2)};
            backdrop-filter: blur(4px);
            position: fixed;
            inset: 0;
          `}
        />
        <Content
          css={css`
            background-color: ${theme.colors.grey[0]};
            border-radius: ${theme.radius.base}px;
            box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
              hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90vw;
            max-width: 450px;
            max-height: 85vh;
            padding: 24px;
          `}
        >
          <Title
            css={css`
              margin: 0;
              font-weight: 500;
              font-size: 18px;
            `}
          >
            {title}
          </Title>
          <Description
            css={css`
              margin: 10px 0 20px;
              font-size: 14px;
            `}
          >
            {children}
          </Description>
          {action}
        </Content>
      </Portal>
    </Root>
  );
};
