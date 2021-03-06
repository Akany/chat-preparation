const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin()
    ]
};
