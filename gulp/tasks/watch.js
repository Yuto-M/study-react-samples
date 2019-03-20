const DefaultRegistry = require('undertaker-registry');
const gulp = require('gulp');

class MyRegistry extends DefaultRegistry {
    init() {
        gulp.task('watch', (done) => {
            gulp.watch('src', gulp.parallel(
                'script',
                'ejs',
                'scss',
            ));
            gulp.watch('dist', gulp.series('reload'));
            done();
        });
    }
}

module.exports = new MyRegistry();
