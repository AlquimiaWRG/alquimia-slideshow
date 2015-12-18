module.exports = ['$q', '$timeout', ($q, $timeout) => {
  return {
    restrict: 'C',
    require: '^qSlideshow',
    link: (scope, element, attrs, slideshow) => {
      scope.measure = () => {
        return $q((resolve, reject) => {
          let images = element.find('img');
          let loadedImagesCount = 0;

          if (!images.length) {
            resolve(element[0].offsetHeight);
          } else {
            var finish = () => {
              loadedImagesCount++;

              if (loadedImagesCount === images.length) {
                resolve(element[0].offsetHeight, element[0].offsetWidth);
              }
            };

            angular.forEach(images, image => {
              if (image.complete || image.naturalWidth) {
                finish();
              } else {
                image.onload = finish;
              }
            });
          }
        });
      };
    }
  };
}];
