const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

function css(done) {
  //identificar el archivo sass
  const archivo = src('src/scss/**/*.scss').pipe(plumber())
  //compilarlo
  archivo.pipe(sass())
  //almacenarla en el disco duro
  archivo.pipe(dest('build/css'))
  //finaliza la tarea
  done()
}

function dev(done) {
  watch('src/scss/**/*.scss', css)
  done()
}

exports.css = css
exports.dev = dev