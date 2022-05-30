const { src, dest, watch, parallel } = require('gulp')
//CSS
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
//Imagenes
const avif = require('gulp-avif')
const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
//JavaScript
const terser = require('gulp-terser-js')

function css(done) {
  //identificar el archivo sass
  const archivo = src('src/scss/**/*.scss').pipe(plumber())
  //compilarlo
  archivo.pipe(sass())
  .pipe(postcss([ autoprefixer(), cssnano() ]))
  //almacenarla en el disco duro
  archivo.pipe(dest('build/css'))
  //finaliza la tarea
  done()
}

function imagenes(done){
  const opciones = {
    optiizationLevel: 3
  }
  src('src/img/**/*.{png,jpg}')
  .pipe(cache(imagemin(opciones)))
  .pipe(dest('build/img'))
  done()
}

function versionWebp(done){
  const opciones = {
    quality: 50
  };
  //identifica los archivos de imagen
  src('src/img/**/*.{png,jpg}')
  //convierte
  .pipe( webp(opciones))
  //guarda
  .pipe( dest('build/img'))
  done()
}

function versionAvif(done){
  const opciones = {
    quality: 50
  };
  //identifica los archivos de imagen
  src('src/img/**/*.{png,jpg}')
  //convierte
  .pipe( avif(opciones))
  //guarda
  .pipe( dest('build/img'))
  done()
}

function javascript(done) {
  src('src/js/**/*.js').
    pipe(terser()).
    pipe(dest('build/js'))
  done()
}

function dev(done) {
  watch('src/scss/**/*.scss', css)
  watch('src/js/**/*.js', javascript)
  done()
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);