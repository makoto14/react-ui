import { Meta, StoryFn } from '@storybook/react';
import { Panda } from './Panda';

export default {
  title: 'components/Panda',
  component: Panda,
} satisfies Meta<typeof Panda>;

export const Base: StoryFn = () => {
  return <Panda />;
};
