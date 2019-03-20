const del = require('del');
const DefaultRegistry = require('undertaker-registry');
const config = require('../config.js');
const gulp = require("gulp");

class MyRegistry extends DefaultRegistry {
    init() {
        gulp.task('clean', (done) => {
            del(config.paths.dist.root).then((paths) => {
                console.log(paths);
                done();
            }).catch((error) => {
                console.log(error);
            });
        });
    }
}

module.exports = new MyRegistry();
