const path = require('path');

module.exports = {
  // Your other Webpack configuration options go here
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
