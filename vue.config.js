const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  // Add this part to configure Webpack's DefinePlugin
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
        // Add other flags as needed
        '__VUE_OPTIONS_API__': JSON.stringify(true), // If you're using the Options API
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false) // If you don't need devtools in production
      })
    ]
  }
});
