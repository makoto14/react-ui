import { css } from '@emotion/react';
import { ComponentMeta, Story } from '@storybook/react';
import { Fragment } from 'react';
import { Box } from './Box';

export default {
  title: 'components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

export const Base: Story = () => {
  return (
    <Fragment>
      <Box
        css={css`
          background-color: red;
          width: 30px;
        `}
      >
        Box
      </Box>
    </Fragment>
  );
};
