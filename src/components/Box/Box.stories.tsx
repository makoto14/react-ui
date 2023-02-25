import { css, useTheme } from '@emotion/react';
import { ComponentMeta, Story } from '@storybook/react';
import { Box } from './Box';

export default {
  title: 'components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Base: Story = () => {
  const theme = useTheme();

  return (
    <Box
      css={css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.grey[0]};
        width: 30px;
      `}
    >
      Box
    </Box>
  );
};
