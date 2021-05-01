const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(54,119,255)',
              '@error-color': 'rgb(232,93,117)',
              '@warning-color': 'rgb(247,192,99)',
              '@table-row-hover-bg':'unset'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};