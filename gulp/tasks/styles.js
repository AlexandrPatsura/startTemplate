// style scss
module.exports = function () {
  $.gulp.task('styles', function () {
    return $.gulp.src($.paths.styles.src)
    .pipe($.glp.plumber({
      errorHandler: $.glp.notify.onError(function (error) {
        return {
          title: 'Styles',
          message: error.message
        };
      })
    }))
    // .pipe($.glp.sass({
    //   includePaths: require('node-normalize-scss').includePaths
    // }))
    .pipe($.glp.sourcemaps.init())
    // .pipe($.glp.gcmq())
    .pipe($.glp.sass())
    // .pipe($.glp.autoprefixer({
    //   browsers: ['last 2 versions'],
    //   cascade: false
    // }))
    .pipe($.glp.csso())
    .pipe($.glp.sourcemaps.write())
    .pipe($.glp.rename({ suffix: '.min' }))
    .pipe($.gulp.dest($.paths.styles.dest));
  });
}