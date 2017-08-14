var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	// browserSync, refresh the website whenever we make a change
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app/public"
		}
	});

	// changes in our html
	watch('./app/public/**/**/*.html', function() {
		// gulp.start('html');
		browserSync.reload();
	});

	// changes in ANY css file
	watch('./app/public/assets/styles/**/*.css', function() {
		// gulp.start('styles');
		gulp.start('cssInject');
	});

	// changes in any JS files
	watch('./app/public/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});



// css inject using browsersync
gulp.task('cssInject', ['styles'], function() {
	return gulp.src("./app/public/temp/styles/styles.css")
	.pipe(browserSync.stream());
});

// we want browserSync to refresh after a JS change
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});