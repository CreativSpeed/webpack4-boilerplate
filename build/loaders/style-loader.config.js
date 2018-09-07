module.exports = (cssProcessor) => ({
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.less$/,
            use: [ 'style-loader', 'less-loader' ]
        },
        {
            test: /\.s[ac]ss$/,
            use: [ 'style-loader', 'sass-loader' ]
        }
        ]
    }
})
