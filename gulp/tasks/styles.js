var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins');

// postCSS filter
gulp.task('styles', function() {
	return gulp.src('./app/public/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit("end")
	})
	.pipe(gulp.dest('./app/public/temp/styles'));
});