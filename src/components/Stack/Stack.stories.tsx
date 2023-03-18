import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory, StoryFn } from '@storybook/react';
import { Fragment } from 'react';
import { Box } from '../Box';
import { Stack } from './Stack';

export default {
  title: 'components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const controls = Template.bind({});
controls.args = {
  spacing: 1,
  children: [1, 2, 3, 4, 5, 6].map((elm) => (
    <Box
      key={elm}
      css={css`
        background-color: red;
      `}
    >
      {elm}
    </Box>
  )),
};

export const Base: StoryFn = () => {
  return (
    <Fragment>
      <Stack spacing={1} direction="row">
        {[1, 2, 3, 4, 5, 6].map((elm) => (
          <Box
            key={elm}
            css={css`
              background-color: red;
            `}
          >
            {elm}
          </Box>
        ))}
      </Stack>
    </Fragment>
  );
};
