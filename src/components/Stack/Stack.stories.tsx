import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';
import { Stack } from './Stack';

export default {
  title: 'components/Stack',
  component: Stack,
} as Meta<typeof Stack>;

export const controls: StoryObj = {
  args: {
    spacing: 1,
    children: [1, 2, 3, 4, 5, 6].map((elm) => (
      <Box
        key={elm}
        sx={css`
          background-color: red;
        `}
      >
        {elm}
      </Box>
    )),
  },
};

export const Base: StoryObj = {
  args: {
    spacing: 1,
    direction: 'row',
    children: [1, 2, 3, 4, 5, 6].map((elm) => (
      <Box
        key={elm}
        sx={css`
          background-color: red;
        `}
      >
        {elm}
      </Box>
    )),
  },
};
