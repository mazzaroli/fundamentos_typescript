"use strict";

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filname: 'bundle.js'
  }
};