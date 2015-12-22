angular.module('qSlideshow', ['ngAnimate'])
.constant('SLIDESHOW_INTERVAL', 5000)
.directive('qSlideshow', require('./d-q-slideshow'))
.directive('qSlide', require('./d-q-slide'))
.directive('qSlideshowArrow', require('./d-q-slideshow-arrow'))
.directive('qSlideshowIndex', require('./d-q-slideshow-index'));
