import path from 'path';

export default {
    target: 'web',
    mode: 'production',
    context: path.join(__dirname, '../src'),
    entry: {
        index: './app/index.jsx'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'scripts/[name].js'
    },
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