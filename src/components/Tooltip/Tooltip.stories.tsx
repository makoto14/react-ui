import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip, TooltipProps } from './Tooltip';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Default: StoryObj<TooltipProps> = {
  args: {
    children: <Button>button</Button>,
    title: 'tooltip',
  },
};
