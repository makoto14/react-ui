import { css, useTheme } from '@emotion/react';
import { Meta, StoryFn } from '@storybook/react';
import { Box, BoxProps } from './Box';

export default {
  title: 'components/Box',
  component: Box,
} as Meta<typeof Box>;

export const Base: StoryFn<BoxProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.grey[0]};
        width: 30px;
      `}
    >
      Box
    </Box>
  );
};
