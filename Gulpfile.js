var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass',function(){
	return sass ('*.sass')
	.pipe(gulp.dest('css'));
})

gulp.task('default', function(){

})