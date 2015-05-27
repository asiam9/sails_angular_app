var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

var paths = {
  temp: 'temp',
  tempVendor: 'temp/vendor',
  index: 'app/index.html',
  app: 'app/**/*.js',
  bower: 'bower_components'
}

gulp.task('default', ['scripts', 'serve', 'watch']);

gulp.task('scripts', function() {
  var tempIndex = gulp.src(paths.index).pipe(gulp.dest(paths.temp));
  var scripts = gulp.src(paths.app).pipe(gulp.dest(paths.temp));
  var tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));

  // supply a relative directory to remove /'temp'/vendor
  tempIndex.pipe(inject(scripts, {
    relative: true
  })).pipe(inject(tempVendors, {
    relative: true,
    name: 'vendorInject'
  })).pipe(gulp.dest(paths.temp));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['scripts']);
  gulp.watch(paths.bower, ['scripts']);
});

gulp.task('serve', function() {
  gulp.src(paths.temp)
    .pipe(webserver({
      livereload: true
    }));
});