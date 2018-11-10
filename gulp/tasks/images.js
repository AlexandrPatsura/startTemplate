// images
module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src($.paths.images.src) // {since: $.glp.gulp.lastRun('images')})
    .pipe($.glp.imagemin([
      $.glp.imagemin.gifsicle({ interlaced: true }),
      $.glp.imagemin.jpegtran({ progressive: true }),
      $.glp.imagemin.optipng({ optimizationLevel: 5 }),
      $.glp.imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe($.gulp.dest($.paths.images.dest));
  });
}