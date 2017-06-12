const { resolve } = require('path');

module.exports = {
    entry: [
        resolve(__dirname, 'src', 'index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules', 'postcss-loader']
            }
        ]
    }
};
