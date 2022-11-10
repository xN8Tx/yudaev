'use strict';

const { src, dest, watch, parallel, series } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');

const   scss         = require('gulp-sass')(require('sass')),
        concat       = require('gulp-concat'),
        browserSync  = require('browser-sync').create(),
        uglify       = require('gulp-uglify-es').default,
        autoprefixer = require('gulp-autoprefixer'),
        imagemin     = require('gulp-imagemin'),
        del          = require('del');

function browser() {
    browserSync.init({
        server: {
            baseDir: 'src/',
        },
        port: 80
    });
};

function cleanDist() {
    return del('dist');
}

function image() {
    return src('src/app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/images'));
}

function scripts() {
    return src('src/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('src/js'))
        .pipe(browserSync.stream());
};

function styles() {
    return src('src/scss/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: [ 'last 10 version' ], grid: true }))
        .pipe(dest('src/style/'))
        .pipe(browserSync.stream());
};

function build() {
    return src([
        'src/style/style.min.css',
        'src/fonts/**/*',
        'src/js/main.min.js',
        'src/*.html',
    ], { base: 'src' })
    .pipe(dest('dist'));
};

function watching() {
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/js/main.js','!src/js/main.min.js'], scripts);
    watch(['src/*.html']).on('change', browserSync.reload);

};

exports.styles   = styles;
exports.watching = watching;
exports.browser = browser;
exports.scripts = scripts;
exports.image =  image;
exports.cleanDist = cleanDist;

exports.default = parallel(styles, browser, watching, scripts);
exports.build =  series(cleanDist, image, build);