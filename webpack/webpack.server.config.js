const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './entry/server-entry.js',
    target: "node", // node环境
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: "commonjs" // 定义模块化规范
    },
    module: {
        rules: [
            {
                test: /\.vue$/g,
                use: ['vue-loader']
            },
            {
                test: /\.css$/g,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
