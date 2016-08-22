var gulp = require('gulp');

// Include plugins
var less = require('gulp-less'),
	concat = require('gulp-concat');

// object containing src directory paths
var paths = {
    less: './dist/assets/less/*.less',
    modules: './src/modules/*.js',
    scripts: './src/*/*.js'
};

// Compile less
gulp.task('less', function() {
	return gulp.src(paths.less)
		.pipe(less())
		.pipe(gulp.dest('./dist/assets/css'));
});

// Concatenate JS Files
gulp.task('scripts', function() {
	return gulp.src([paths.modules, paths.scripts])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch([paths.modules, paths.scripts], ['scripts']);
	gulp.watch(paths.less, ['less']);
});

// Default Task
gulp.task('default', ['less', 'scripts', 'watch']);