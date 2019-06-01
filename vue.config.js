/* eslint-disable linebreak-style */
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('resolve-url-loader')
      .loader('resolve-url-loader')
      .options({
        keepQuery: true,
      })
      .before('sass-loader');
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('sass-loader')
      .loader('sass-loader')
      .tap(options => ({
        ...options,
        sourceMap: true,
        sourceMapContents: false,
      }));
  },
};
