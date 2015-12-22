module.exports = [() => {
  return {
    restrict: 'C',
    require: '^qSlideshow',
    scope: { index: '=*' },
    link: (scope, element, attrs) => {
      element.on('click', () => {
        if (scope.index) {
          scope.$parent.slideshow.goto(scope.index);
        }
      });

      scope.setCurrent = current => {
        element[current ? 'addClass' : 'removeClass']('current');
      };
    }
  };
}];
