
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