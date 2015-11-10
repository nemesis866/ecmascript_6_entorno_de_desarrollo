// Importamos las dependencias
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

// Tarea para compilar de ES6 a ES5
gulp.task('build', () => {
	return browserify({
    	entries: ['./app/es6/es6.js'],
    	transform: [babelify]
    }).bundle()
    .on('error', (err) => console.log(err);)
	.pipe(source('es5.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./app/es5/'));
});

// Tarea para estar a la escucha de cambios
gulp.task('watch', () => {
	gulp.watch(['./app/es6/es6.js'], ['build']);
});

// Tarea por defecto
gulp.task('default', ['build', 'watch']);