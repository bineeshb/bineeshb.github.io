const { src, dest, series, parallel, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const srcPath = './src';
const destPath = './docs';
const scssPath = `${srcPath}/scss`;
const jsPath = `${srcPath}/js`;
const jsLibs = [
  `${jsPath}/libs/jquery*.js`,
  `${jsPath}/libs/handlebars*.js`
];
const jsScripts = [
  `${jsPath}/details.js`,
  `${jsPath}/logic.js`
];

function styles() {
  return src(`${scssPath}/styles.scss`, { sourcemaps: true })
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest(destPath, { sourcemaps: true }));
}

function scripts() {
  const outputFile = 'scripts.js';

  return src([ ...jsLibs, ...jsScripts ], { sourcemaps: true })
        .pipe(concat(outputFile))
        .pipe(dest(destPath, { sourcemaps: true }));
}

function pages() {
  return src(`${srcPath}/index.html`)
        .pipe(htmlmin({
          collapseWhitespace: true,
          removeComments: true
        }))
        .pipe(dest(destPath));
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: destPath,
      index: '/index.html'
    }
  });

  watch(`${scssPath}/**/*.scss`, styles).on('change', browserSync.reload);
  watch(`${jsPath}/**/*.js`, scripts).on('change', browserSync.reload);
  watch(`${srcPath}/index.html`, pages).on('change', browserSync.reload);
}

exports.build = parallel(pages, styles, scripts);
exports.default = series(
  parallel(pages, styles, scripts),
  watchFiles
);
