// Importamos las dependencias
var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream');

// Tarea para compilar de ES6 a ES5
gulp.task('build', function (){
	var b = browserify({
    	entries: ['./app/es6/es6.js'],
    	transform: [babelify.configure({
    		presets: ['es2015']
    	})]
    });

    return b.bundle()
    .on('error', function (err) {
    	console.log(err.message);
    	
    	this.emit('end');
    })
	.pipe(source('es5.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./app/es5/'));
});

// Tarea para estar a la escucha de cambios
gulp.task('watch', function (){
	gulp.watch(['./app/es6/es6.js'], ['build']);
});

// Tarea por defecto
gulp.task('default', ['build', 'watch']);