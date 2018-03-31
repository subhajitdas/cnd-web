import path from 'path';

export default {
    target: 'web',
    mode: 'development',
    context: path.join(__dirname, '../src'),
    entry: {
        index: './app/index.jsx'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/scripts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};