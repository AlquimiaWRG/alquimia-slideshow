"use strict";

module.exports = function(done) {
  var fs = require('fs');

  fs.mkdirSync('app/src/slideshow');
  alquimia.copy(__dirname + '/assets/slideshow', 'app/src/slideshow');

  done();
};
