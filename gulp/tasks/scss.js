const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const DefaultRegistry = require('undertaker-registry');
const config = require('../config.js');
class MyRegistry extends DefaultRegistry {
    init() {
        gulp.task('scss', (done) => {
            gulp.src([
                `${config.paths.src.scss}/**/*.scss`,
                `!${config.paths.src.scss}/**/_*.scss`
            ])
                .pipe(plumber({
                    errorHandler: notify.onError(
                        "Error: <%= error.message %>")
                }))
                .pipe(sourcemaps.init())
                .pipe(sassGlob())
                .pipe(sass({ outputStyle: 'expanded' }))
                .pipe(postcss())
                .pipe(rename('app.bundle.css'))
                .pipe(sourcemaps.write('../maps'))
                .pipe(gulp.dest(config.paths.dist.css));
            done();
        });
    }
}

module.exports = new MyRegistry();