const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2978b5',
              '@error-color': '#f21170',
              '@warning-color': '#e48900',
              '@table-row-hover-bg':'unset'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};