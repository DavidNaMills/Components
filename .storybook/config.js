const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      },
      
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use:[
            "file-loader?name=[name].[ext]&outputPath=img/",
            "image-webpack-loader"
        ],
    }      
    ]
  }
}