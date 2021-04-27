/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const PALETTE = {};

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: PALETTE,
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {},
      },
    ],
  ],
  {
    webpack: (config, { defaultLoaders }) => {
      // for case sensitive import of windows os bug
      config.plugins.push(new CaseSensitivePathsPlugin());

      // add style of antd components after import of component
      if (defaultLoaders.babel.options.plugins === undefined) {
        defaultLoaders.babel.options.plugins = [];
      }
      defaultLoaders.babel.options.plugins.push([
        'import',
        {
          libraryName: 'antd',
          style: true,
        },
      ]);

      return config;
    },
  },
);
