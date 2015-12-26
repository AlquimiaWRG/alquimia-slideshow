"use strict";

module.exports = function(done) {
  var fs = require('fs');
  var appDir = alquimia.getPath('appDir');
  var scriptsDir = alquimia.getPath('scriptsDir');
  var stylesDir = alquimia.getPath('stylesDir');

  fs.mkdirSync(appDir + '/' + scriptsDir + '/slideshow');
  alquimia.copy(__dirname + '/assets/slideshow/src', appDir + '/' + scriptsDir + '/slideshow');
  alquimia.copy(__dirname + '/assets/slideshow/scss', appDir + '/' + stylesDir + '/components');

  done();
};
