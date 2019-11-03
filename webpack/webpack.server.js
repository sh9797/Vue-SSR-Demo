const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './entry/server-entry.js',
    target: 'node',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
