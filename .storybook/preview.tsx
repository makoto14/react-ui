import { ThemeProvider } from '@emotion/react';
import { Preview } from '@storybook/react';
import React from 'react';
import { withScreenshot } from 'storycap';
import { theme } from '../src/theme';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
} satisfies Preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
  withScreenshot,
];

export default preview;
