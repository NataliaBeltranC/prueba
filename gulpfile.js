var gulp         = require('gulp'),
    path         = require('path'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    postcss      = require('gulp-postcss'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename');



var displayError = function(error) {

    var errorString = '[' + error.plugin + ']';
    if(error.fileName)
        errorString += ' in ' + error.fileName;
    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;
    console.error(errorString);
};






var app = {
        sass     : ['app/assets/sass/caracol.sass', 'app/**/*.sass'],
        js       : [
                    'app/assets/libs/jquery-1.11.0.min.js',
                    'app/assets/libs/slick.min.js',
                    'app/assets/libs/angular.min.js',
                    'app/assets/libs/angular-ui-router.min.js',
                    'app/core.js',
                    'app/router.js',
                    'app/home/home.js',
                    'app/detail/details.js'
                    ]
    },
    dist = {
        cssProd  : 'dist/assets/css/',
        css      : 'app/assets/css/',
        js       : 'dist/js/'
    };



gulp.task('sass', function () {
    gulp.src(app.sass[0])
        .pipe(sass({
            indentedSyntax: true
        }).on('error', sass.logError))
        .on('error', function(err){displayError(err); })
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
        .pipe(concat("caracol.css"))
        .pipe(gulp.dest(dist.css))
});

gulp.task('sassProd', function () {
    gulp.src(app.sass[0])
        .pipe(sass({
            indentedSyntax: true,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .on('error', function(err){displayError(err); })
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
        .pipe(concat("caracol.min.css"))
        .pipe(gulp.dest(dist.cssProd))
});



gulp.task('js', function() {
  return gulp.src(app.js)
    .pipe(concat("caracol.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(dist.js))
});


gulp.task('prod',['sassProd', 'js']);

gulp.task('watch', function() {
    gulp.watch(app.sass, ['sass']);
});

gulp.task('default',['sass', 'watch']);

