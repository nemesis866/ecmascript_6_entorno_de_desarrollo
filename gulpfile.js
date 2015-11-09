var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream');

gulp.task('build', function (){
	return browserify({
    	entries: ['./app/es6/es6.js'],
    	transform: [babelify]
    }).bundle()
	.pipe(source('es5.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./app/es5/'));
});

gulp.task('watch', function (){
	gulp.watch(['./app/es6/es6.js'], ['build']);
});

gulp.task('default', ['build', 'watch']);