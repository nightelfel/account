/**
 * Created by David on 2016-01-16.
 */
var gulp = require('gulp');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src('templates/*.html')
        .pipe(template({
            name : function (file) {
                var name = file.relative;
                name = name.substring(name.indexOf('/')+1, name.length);
                name = name.substring(0, name.length-5);
                return(name);
            },
            namespace : 'template'
        }))
        .pipe(concat('template.js'))
        .pipe(gulp.dest('js/'));
});
