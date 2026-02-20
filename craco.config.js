// craco.config.js
const pluginName = "MiniCssExtractPlugin";
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const plugin = webpackConfig.plugins.find((p) => p.constructor && p.constructor.name === pluginName);
      if (plugin) plugin.options = { ...plugin.options, ignoreOrder: true };
      return webpackConfig;
    },
  },
};
