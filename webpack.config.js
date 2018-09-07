const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const modeConfig = env => require(`./build/webpack.${env}`)(env);
const presetConfig = require("./build/loadPresets");
const styleLoader = settings => require("./build/loaders/style-loader.config")(settings);

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return webpackMerge(
    {
        mode,
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    include: [resolve('src')],
                }
            ]
        },
        plugins: [ new HtmlWebpackPlugin({ template: resolve('src/index.html') }) ]
    },
    modeConfig(mode),
    styleLoader({ sass: "extract", postCss: "embed" }),
    presetConfig({ mode, presets })
    ) 
};
