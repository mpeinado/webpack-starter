const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/**
 * mode: 'development'
 * devtool | strong source mapping
 */
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    }
});
