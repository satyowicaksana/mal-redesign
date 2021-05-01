const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(46,81,162)',
              '@error-color': 'rgb(232,93,117)',
              '@warning-color': 'rgb(235,97,1)',
              '@table-row-hover-bg':'unset'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};