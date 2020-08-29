const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
});

mix.setPublicPath('public')
    .setResourceRoot('../')
    // .webpackConfig({
    //     plugins: [
    //         new BundleAnalyzerPlugin(),
    //     ],
    // })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/rtl.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .sourceMaps();
