const webpackConfig = require('./../others/webpack.config');

module.exports = function (grunt) {

  grunt.config.set('webpack', {
    options: {
      stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    },
    prod: webpackConfig,
    dev: Object.assign({watch: true}, webpackConfig)
  });

  grunt.loadNpmTasks('grunt-webpack');
};
