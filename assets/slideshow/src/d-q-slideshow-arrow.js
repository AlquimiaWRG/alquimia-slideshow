module.exports = [() => {
  return {
    restrict: 'C',
    require: '^qSlideshow',
    link: (scope, element, attrs) => {
      let method = element.hasClass('arrow-left') ? 'prev' : 'next';

      element.on('click', () => {
        scope.slideshow[method](true);
      });
    }
  };
}];
