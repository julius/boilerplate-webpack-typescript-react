var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var _ = require('lodash');

var config = module.exports = _.assign(_.cloneDeep(config), {
    output: _.assign(config.output, {
        path: path.resolve(__dirname + '/../dist'),
        filename: 'client.bundle.min.js',
    }),
    plugins: (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
    ]),
});