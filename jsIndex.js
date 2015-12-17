"use strict";

module.exports = function(defaultJs) {
  defaultJs.getElement('angular').push('angular-animate');
  defaultJs.getElement('alquimia').slideshow = true;
  return defaultJs;
};
