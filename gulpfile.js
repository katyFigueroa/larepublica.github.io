var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpJade = require('gulp-jade');

gulp.task('sass', function(){
	return gulp.src('./assets/sass/main.scss') /*con q archivo va a trabajar*/
	.pipe(gulpSass())
	.pipe(gulp.dest('./assets/css')); /*ubicacion de destino*/
});

gulp.task('jade', function(){
 	return gulp.src('./assets/jade/*.jade') /*con q archivo va a trabajar*/
 	.pipe(gulpJade())
	.pipe(gulp.dest('./assets/public'));/*ubicacion de destino*/
}); 

gulp.task('watch-sass',function(){
 return gulp.watch('./assets/sass/main.scss', ['sass'])});

gulp.task('watch-jade',function(){
 return gulp.watch('./assets/jade/home.jade', ['jade'])});

gulp.task('default',['watch-sass','watch-jade']);