import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: [
   path.join(__dirname, '/app/client.js')
  ],
  output: {
      path: '/',
      publicPath: '/',
      filename: 'bundle.js',
  },
  module: {
    rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: path.join(__dirname, 'app'),
              query:
              {
                "presets": ["es2015", "react"]
              }
          }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }

}
