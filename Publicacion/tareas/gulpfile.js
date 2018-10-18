var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('postcss',() => {
    gulp.src('src/style ')
    .pipe
} )
    

gulp.task('css-autoprefixer', () =>
    gulp.src('src/style')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
)