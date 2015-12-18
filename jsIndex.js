"use strict";

module.exports = function(defaultJs) {
  defaultJs.getElement('angular').push('angular-animate', './slideshow');
  return defaultJs;
};
