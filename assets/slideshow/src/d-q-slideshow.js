module.exports = ['$animate', '$timeout', '$interval', 'SLIDESHOW_INTERVAL',
  ($animate, $timeout, $interval, SLIDESHOW_INTERVAL) => {

  return {
    scope: true,
    restrict: 'C',
    controller: ['$scope', '$element', '$attrs', ($scope, $element, $attrs) => {
      let $slides = [];
      let $indexes = [];
      let currentSlide = 0;
      let animating = false;
      let currentIndex;
      let interval;

      const offset = parseInt($attrs.offset || 0);
      const manual = angular.isDefined($attrs.manual);

      $scope.slideshow = {};
      $scope.$on('$destroy', stopInterval);

      $scope.slideshow.prev = stop => {
        if (stop) stopInterval();
        slideIn(getRightIndex());
      };

      $scope.slideshow.next = next;

      $scope.slideshow.goto = index => {
        stopInterval();
        slideIn(index);
      };

      $scope.slideshow.startInterval = startInterval;
      $scope.slideshow.stopInterval = stopInterval;
      $scope.slideshow.init = init;
      $scope.slideshow.slideIn = slideIn;

      if (angular.isDefined($attrs.async)) {
        $scope.$on('q-slideshow/init', init);
      } else {
        $timeout(init);
      }

      function next(stop) {
        if (stop) stopInterval();
        slideIn(getLeftIndex());
      }

      function init() {
        $slides = [];
        $indexes = [];
        currentSlide = 0;
        animating = false;
        currentIndex;

        angular.forEach($element.children(), child => {
          var $child = angular.element(child);

          if ($child.hasClass('q-slide')) {
            $slides.push($child);
          } else if ($child.hasClass('q-slides')) {
            angular.forEach($child.children(), slide => {
              $slides.push(angular.element(slide));
            });
          } else if ($child.hasClass('q-slideshow-index')) {
            $indexes.push($child);
          } else if ($child.hasClass('q-slideshow-indexes')) {
            angular.forEach($child.children(), index => {
              $indexes.push(angular.element(index));
            });
          }
        });

        let resolvedPromisesCount = 0;
        let maxHeight = 0;

        angular.forEach($slides, $slide => {
          $slide.scope().measure().then(height => {
            maxHeight = Math.max(height, maxHeight);
            resolvedPromisesCount++;

            if (resolvedPromisesCount === $slides.length) {
              $element.css('height', `${offset + maxHeight}px`);
              slideIn(0);

              if (!manual) {
                startInterval();
              }
            }
          });
        });
      }

      function getLeftIndex(index = currentSlide) {
        return (index + 1) % $slides.length;
      }

      function getRightIndex(index = currentSlide) {
        return (index > 0 ? index : $slides.length) - 1;
      }

      function slideIn(what) {
        if (!$slides.length) return;
        if (animating) return;
        animating = true;

        if ($indexes.length) {
          angular.isDefined(currentIndex) && $indexes[currentIndex].isolateScope().setCurrent(false);
          $indexes[what].isolateScope().setCurrent(true);
          currentIndex = what;
        }

        let direction;
        let inEl;
        let outEl;
        let inAnimationDone = false;
        let outAnimationDone = false;

        if (what === currentSlide) {
          direction = 'left';
          inEl = $slides[currentSlide];
          outEl = false;
        } else {
          direction = what > currentSlide ? 'left' : 'right';
          inEl = $slides[what];
          outEl = $slides[currentSlide];
        }

        var oppositeDirection = direction === 'left' ? 'right' : 'left';

        inEl.addClass(oppositeDirection);

        $timeout(() => {
          $animate.addClass(inEl, 'center').then(() => {
            inEl.removeClass(oppositeDirection);
            currentSlide = what;
            inAnimationDone = true;

            if (outAnimationDone) {
              animating = false;
            }
          });
        });

        if (outEl) {
          $animate.setClass(outEl, direction, 'center').then(() => {
            outEl.removeClass(direction);
            outAnimationDone = true;

            if (inAnimationDone) {
              animating = false;
            }
          });
        } else {
          outAnimationDone = true;
        }
      }

      function startInterval() {
        if (!interval) {
          /*
          Cannot directly pass the function here, like $interval(next), it would
          receive a param by $interval
           */
          interval = $interval(() => {
            next();
          }, SLIDESHOW_INTERVAL);
        }
      }

      function stopInterval() {
        if (interval) {
          $interval.cancel(interval);
          interval = false;
        }
      }
    }]
  };
}];
