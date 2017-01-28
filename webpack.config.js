module.exports = {
    context: __dirname,
    entry: "./source/js/App.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
};
