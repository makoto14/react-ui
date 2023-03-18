import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { Box } from '../Box';
import { Button } from '../Button';
import { Alert, AlertProps } from './Alert';

export default {
  title: 'components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

export const Playground: StoryObj<AlertProps> = {
  args: {
    children: (
      <Fragment>
        <Box>Hello alert</Box>
        <Box>Hello alert</Box>
      </Fragment>
    ),
    startDecorator: <AiOutlineInfoCircle />,
    endDecorator: (
      <Button variant="solid">
        <AiOutlineClose />
      </Button>
    ),
  },
};
