import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storycap',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  babel: async (options) => ({
    ...options,
    presets: options.presets
      ? [...options.presets, '@emotion/babel-preset-css-prop']
      : ['@emotion/babel-preset-css-prop'],
  }),
  docs: {
    autodocs: true,
  },
};

export default config;
