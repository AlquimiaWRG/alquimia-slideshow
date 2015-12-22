"use strict";

module.exports = function(done) {
  var fs = require('fs');

  fs.mkdirSync('app/src/slideshow');
  alquimia.copy(__dirname + '/assets/slideshow/src', 'app/src/slideshow');

  alquimia.copy(__dirname + '/assets/slideshow/scss', 'app/scss/components');

  done();
};
