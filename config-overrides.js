
module.exports = {
  webpack: function override(config, _){
    return{
      ...config,
      devServer: {
        ...config.plugins,
        historyApiFallback: true,
     }
    }
  }
}

// module.exports = function override(config, env) {
//   if (!config.plugins) {
//    config.plugins = [];
//  }
//  config.plugins.Push(
//    new CopyWebpackPlugin(
//    [
//      {
//        from: 'src/images',
//        to: 'public/images'
//      }
//    ])
//  );
//  return config;
// };