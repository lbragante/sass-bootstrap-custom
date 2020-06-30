const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create(); // criando uma instância

function compileScss() {
    // onde está meu arquivo scss
    return gulp.src('./src/scss/styles.scss')
    // passar esse arquivo através do compilador sass
    .pipe(sass())
    // onde eu salvo o css compilado
    .pipe(gulp.dest('./dist/css'))

    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./src/scss/*.scss', compileScss);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
}

exports.compileScss = compileScss;
exports.watch = watch;