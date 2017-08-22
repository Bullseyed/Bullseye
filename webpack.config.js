module.exports = {
  entry: ['babel-polyfill', './app/main.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'es2015',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                  node: 'current'
                },
                debug: false, // `true` outputs which plugins are used and why
                //useBuiltIns: true // reduces `babel-polyfill` in `main.jsx` to a subset of polyfills
              }
            ],
            'stage-2'
          ]
        }
      }
    ]
  }
};
