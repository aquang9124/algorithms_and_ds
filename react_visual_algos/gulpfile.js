// import gulp and plugins
let gulp = require('gulp');
let sass = require('gulp-sass');
let webpack = require('webpack-stream');
let webpackConfig = require('./webpack.config.js');

// paths object containing paths to src files and directories
let paths = {
	scss: './public/assets/sass/*.scss',
	cssOutput: './public/assets/css',
	jsx: './src/components/*.jsx'
};

// set up sass compilation task
gulp.task('sass', function() {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(paths.cssOutput));
});

// set up webpack task
gulp.task('webpack', function() {
	return gulp.src([webpackConfig.entry[0], paths.jsx])
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch', function() {
	gulp.watch(paths.scss, ['sass']);
	gulp.watch([webpackConfig.entry[0], paths.jsx], ['webpack']);
});

gulp.task('default', ['sass', 'webpack', 'watch']);