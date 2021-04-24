const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#017CEF', '@table-row-hover-bg': 'unset' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};