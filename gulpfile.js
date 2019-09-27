/**
 * Gulp file for using  gulp.js to automate our tests
 * 
 * @author Jared Martinez
 * @version 09/26/2019
 */

// Dependencies
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');

// Task for testing
gulp.task('test', () => {
    return gulp.src('test/*.js', { read: false } )
           .pipe(mocha( { reporter: 'spec' } ));
});

// Task for watching
gulp.task('watch', () => {
    console.log('watching files....')
    gulp.watch(['./**/*.js'], gulp.series('test'));
});

// Task for starting it all up
gulp.task('dev', () => {
    nodemon({
        script: 'src/calc.js',
        ext: 'js',
        tasks: ['test']
    });
});