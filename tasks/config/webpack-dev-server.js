const webpackConfig = require('../others/webpack.config');
console.log("xxxxxxxx");
console.log(webpackConfig);
console.log("xxxxxxxx");
module.exports = function (grunt) {

  grunt.config.set('webpack-dev-server', {
    options: {
      stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    },
    prod: webpackConfig,
    dev: Object.assign({watch: true}, webpackConfig)
  });

  grunt.loadNpmTasks('grunt-webpack');
};
