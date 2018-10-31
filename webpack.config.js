const path = require('path');

module.exports = {
  entry: './src/amplify.js',
  output: {
    filename: 'amplify.js',
    path: path.resolve(__dirname, 'dist')
  }
};