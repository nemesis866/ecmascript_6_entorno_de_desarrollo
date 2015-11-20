// Importamos las dependencias
import gulp from 'gulp';
import connect from 'gulp-connect';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

// Tarea para correr servidor web
gulp.task('server', () => {
    return connect.server({
        root: './app',
        port: 3000,
        livereload: true
    });
});

// Tarea para recargar el navegador (.html)
gulp.task('html', () => {
    return gulp.src('./app/index.html')
    .pipe(connect.reload());
});

// Tarea para recargar el navegador (.js)
gulp.task('scripts', () => {
    return gulp.src('./app/es6/*.js')
    .pipe(connect.reload());
});

// Tarea para compilar de ES6 a ES5
gulp.task('build', () => {
	const b = browserify({
    	entries: ['./app/es6/es6.js'],
    	transform: [babelify.configure({
            presets: ['es2015']
        })]
    })

    return b.bundle()
    .on('error', (err) => {
    	console.log(err.message);
    	this.emit('end');
    })
	.pipe(source('es5.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./app/es5/'));
});

// Tarea para estar a la escucha de cambios
gulp.task('watch', () => {
    gulp.watch(['./app/index.html'], ['html']);
    gulp.watch(['./app/es6/*.js'], ['scripts']);
	gulp.watch(['./app/es6/es6.js'], ['build']);
});

// Tarea por defecto
gulp.task('default', ['server', 'build', 'watch']);