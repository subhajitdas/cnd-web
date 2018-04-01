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
    resolve: {
        alias: {
            'configureStore': './store/configureStore.dev'
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};