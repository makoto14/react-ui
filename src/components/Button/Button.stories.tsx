import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Stack } from '../Stack';
import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const controls = Template.bind({});
controls.args = {
  children: 'button',
  onClick: action('click'),
};

export const Color: Story = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="default">button</Button>
      <Button color="primary">button</Button>
    </Stack>
  );
};
