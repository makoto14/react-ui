import { css, useTheme } from '@emotion/react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Button, ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const controls = Template.bind({});
controls.args = {
  children: 'button',
  onClick: action('click'),
  variant: 'solid',
};

const variants: ButtonProps['variant'][] = [
  'outlined',
  'soft',
  'solid',
  'text',
];

const colors: ButtonProps['color'][] = [
  'neutral',
  'primary',
  'danger',
  'warning',
];

export const Color: Story = () => (
  <Stack direction="column" spacing={2}>
    {colors.map((color) => (
      <Stack key={color} direction="row" spacing={2}>
        {variants.map((variant) => (
          <Button key={variant} color={color} variant={variant}>
            {`${color}-${variant}`}
          </Button>
        ))}
      </Stack>
    ))}
  </Stack>
);

export const DisabledButton: Story = () => (
  <Stack direction="column" spacing={2}>
    {colors.map((color) => (
      <Stack key={color} direction="row" spacing={2}>
        {variants.map((variant) => (
          <Button key={variant} color={color} variant={variant} disabled>
            {`${color}-${variant}`}
          </Button>
        ))}
      </Stack>
    ))}
  </Stack>
);

export const Size: Story = () => {
  const theme = useTheme();
  return (
    <Box
      css={css`
        & button {
          margin: ${theme.spacing.base}px;
        }
      `}
    >
      <Button size="lg">lg</Button>
      <Button size="md">md</Button>
      <Button size="sm">sm</Button>
    </Box>
  );
};
