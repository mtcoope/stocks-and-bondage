const path = require('path')
const nodeExternals = require('webpack-node-externals')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const { NODE_ENV = 'development'} = process.env

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    devtool: 'source-map',
    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        projectReferences: true
                    },
                },
                exclude: /node_modules/
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.ts', '.js']
    },

    plugins: [new ForkTsCheckerWebpackPlugin()]
}