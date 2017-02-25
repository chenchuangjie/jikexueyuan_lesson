var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less = require('gulp-less');


gulp.task('default', function() {
    var processors = [autoprefixer({
            browsers: ['last 4 version']  /*显示四个版本*/
        }),
        mqpacker,
        csswring
    ];

    return gulp.src('./src/*.less')
    	   .pipe(less())  /*less转换*/
    	   .pipe(postcss(processors))
    	   .pipe(gulp.dest('./dest'));
});
