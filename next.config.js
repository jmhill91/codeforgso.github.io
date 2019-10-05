const withSass = require('@zeit/next-sass')

module.exports = withSass( {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    };
    return config
  }
})
