const DefaultRegistry = require('undertaker-registry');
const browserSync = require('browser-sync');
const bs = browserSync.create();
const gulp = require("gulp");

class MyRegistry extends DefaultRegistry {
    init() {
        gulp.task('reload', (done) => {
            bs.reload();
            done();
        });

        gulp.task('serve', (done) => {
            bs.init({
                port: 3013,
                open: false,
                server: {
                    baseDir: 'dist',
                },
                startPath: '/',
                ghostMode: false,
            });
            done();
        });
    }
}


module.exports = new MyRegistry();
