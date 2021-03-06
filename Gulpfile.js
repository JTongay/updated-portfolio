const gulp = require('gulp');
const sass = require('gulp-sass');
const input = './sass/**/*.scss';

gulp.task('default', ()=>{
  gulp.watch('sass/**/*.scss', ['styles'])
})

gulp.task('watch', ()=>{
  return gulp
        .watch(input, ['sass'])
        .on('change', (event)=>{
          console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
        })
})

gulp.task('sass', ()=>{
  gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
})
