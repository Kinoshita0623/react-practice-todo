var isDebug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./js/index.js",
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [
                {
                    loader: 'babel-loader',

                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                },
                
            ]
        }]
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'index.min.js'
    },
    plugins: isDebug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: false }),
    ],
};

