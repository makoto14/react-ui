const react = require("@vitejs/plugin-react");

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storycap',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );
    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/],
        jsxImportSource: '@emotion/react',
        babel: {
          presets: ['@emotion/babel-preset-css-prop'],
        },
      })
    );
    return config;
  },
  docs: {
    autodocs: true,
  },
};
