import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx',
    '../stories/tokens/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    '../stories/components/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    '../stories/patterns/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
    '../stories/templates/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
