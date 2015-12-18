angular.module('qSlideshow', ['ngAnimate'])
.constant('SLIDESHOW_INTERVAL', 5000)
.directive('qSlideshow', require('./d-q-slideshow'))
.directive('qSlide', require('./d-q-slide'))
.directive('qSlideshowArrow', require('./d-q-slideshow-arrow'))
.directive('qSlideshowIndex', require('./d-q-slideshow-index'));

/*
.q-slideshow {
  position: relative;
  height: 0;
  overflow: hidden;

  .q-slide {
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;

    &.center {
      z-index: 1;
    }
  }
}

******************* USAGE EXAMPLE *******************
.q-slideshow {
  .q-slide {
    visibility: hidden;

    p::after { content: 'No class'; }

    &.left, &.right, &.center { visibility: visible; }

    &.left { transform: translate3d( -100%, 0, 0 ); }
    &.right { transform: translate3d( 100%, 0, 0 ); }
    &.center { transform: translate3d( 0, 0, 0 ); }

    &.ng-animate {
      transition: transform 1s ease-out;
    }

    &.left-add.left-add-active {
      p::after { content: 'Center to left'; }
    }

    &.right-add.right-add-active {
      p::after { content: 'Center to right'; }
    }

    &.center-add.center-add-active {
      p::after { content: 'Going center'; }
    }

    &.left.center-add.center-add-active {
      p::after { content: 'Left to center'; }
    }

    &.right.center-add.center-add-active {
      p::after { content: 'Right to center'; }
    }

    &.center {
      p::after { content: 'Center'; }
    }
  }
}
****************************************************
 */
