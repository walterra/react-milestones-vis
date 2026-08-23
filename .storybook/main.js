const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    });
    config.module.rules.push({
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: false } },
        {
          loader: 'less-loader',
          options: { lessOptions: { javascriptEnabled: true } },
        },
      ],
    });
    config.optimization.minimize = false;
    return config;
  },

  docs: {},
};

export default config;
