var gulp = require('gulp');

// gulp plugins
var watch = require('gulp-watch');
var less = require('gulp-less');
var concat = require('gulp-concat');
var gtb = require('gulp-typescript-babel');

// paths object to make my life easier
var paths = {
    tsRoot: "./src/*.ts",
    tsCompRoot: "./src/*.component.ts",
    tsSrc: "./src/**/**/*.*.ts",
    gtbOutput: "./src/scripts",
    gtbSrc: "./src/scripts/*.js",
    dist: "./dist/scripts",
    lessSrc: "./dist/less/*.less",
    cssOutput: "./dist/css"
};

// Less into CSS
gulp.task('less', function () {
    return gulp.src( paths.lessSrc )
        .pipe( less() )
        .pipe( gulp.dest( paths.cssOutput ) );
});

// ts -> es6 -> babel -> es5
gulp.task('compile', function () {
    return gulp.src( [paths.tsRoot, paths.tsCompRoot, paths.tsSrc], { base: "./" } )
        .pipe(
            gtb(
                { incremental: true, configFile: 'tsconfig.json' },
                { presets: ['es2015'] }
            )
        )
        .pipe( gulp.dest( paths.gtbOutput ) );
});

// concatenate the outputted js files
gulp.task('scripts', function () {
    return gulp.src( paths.gtbSrc, { base: "./" } )
        .pipe( concat('bundle.js') )
        .pipe( gulp.dest( paths.dist ) );
});

// watch
gulp.task('watch', function () {
    gulp.watch( paths.lessSrc, ['less'] );
    gulp.watch( [paths.tsRoot, paths.tsCompRoot, paths.tsSrc], ['compile'] );
    gulp.watch( paths.gtbSrc, ['scripts'] );
});

// default task
gulp.task( 'default', ['less', 'compile', 'scripts', 'watch'] );