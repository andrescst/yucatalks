const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    entry: {
        index:['./src/scripts/index.js', './src/styles/application.scss']
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'styles.css'
                },
              },
              { loader: 'extract-loader' },
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                options: {
                   plugins: () => [autoprefixer()]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: ['./node_modules']
                  }
                }
              },
            ]
          }
        ]
      },
   
    mode: 'development'
};