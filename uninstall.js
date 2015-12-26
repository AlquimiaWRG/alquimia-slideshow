"use strict";

module.exports = function(done) {
  alquimia.del(alquimia.getPath('appDir') + '/' + alquimia.getPath('scriptsDir') + '/slideshow');
  alquimia.del(alquimia.getPath('appDir') + '/' + alquimia.getPath('stylesDir') + '/components/_slideshow.scss');
  done();
};
