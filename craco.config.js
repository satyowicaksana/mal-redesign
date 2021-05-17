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
              '@error-color': 'rgb(234,57,67)',
              '@warning-color': 'rgb(234, 160, 57)',
              '@success-color': 'rgb(27,200,133)',
              '@table-row-hover-bg': 'unset'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};