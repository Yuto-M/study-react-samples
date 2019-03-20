const DefaultRegistry = require('undertaker-registry');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");
const gulp = require('gulp');

class MyRegistry extends DefaultRegistry {
    init() {
        gulp.task('script', (done) => {
            webpackStream(webpackConfig, webpack)
                .on('error', function (e) {
                    this.emit('end');
                })
                .pipe(gulp.dest("dist"));
            done();
        });
    }
}

module.exports = new MyRegistry();
