"use strict";

module.exports = function(defaults) {
  defaults.getElement('angular').push('angular-animate', './slideshow');
  defaults.getElement('sass').push('components/slideshow');
  return defaults;
};
