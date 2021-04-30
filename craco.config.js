const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(57,98,246)',
              '@error-color': '#f78888',
              '@warning-color': 'rgb(254,154,52)',
              '@table-row-hover-bg':'unset'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};