import { css, useTheme } from '@emotion/react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { AiOutlineClose } from 'react-icons/ai';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Button, ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<typeof Button>;

export const controls: StoryObj = {
  args: {
    children: 'button',
    onClick: action('click'),
    variant: 'solid',
  },
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

export const Color: StoryFn = () => {
  return (
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
};

export const DisabledButton: StoryFn = () => {
  return (
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
};

export const Size: StoryFn = () => {
  const theme = useTheme();
  return (
    <Box
      sx={css`
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
export const IconButton: StoryObj = {
  args: {
    children: <AiOutlineClose />,
  },
};
