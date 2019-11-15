/**
 * Created by Liudq on 2019/11/11
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
});