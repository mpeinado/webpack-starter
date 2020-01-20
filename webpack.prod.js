const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/**
 * mode: 'production'
 */
module.exports = merge(common, {
    mode: 'production',
});