path = require('path');

paths = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

module.exports = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    ]
  }
};
