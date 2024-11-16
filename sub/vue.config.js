const { name } = require('./package');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
    publicPath: "./",
    devServer: {
        port: 3738,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    chainWebpack: (config) => {
        config.module.rule('fonts').type('asset/inline').set('generator', {});
        // config.module.rule('images').type('asset/inline').set('generator', {});
    },
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : false,
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            chunkLoadingGlobal: `webpackJsonp_${name}`,
        },
        plugins: []
    },
};
module.exports = config;