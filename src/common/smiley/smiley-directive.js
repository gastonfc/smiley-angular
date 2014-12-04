angular.module('smiley', [])
  .directive('smiley', function () {
    return {
      restrict: 'AE',
      replace: false,
      template: 'Smile! {{color}} {{size}}', // 'templates/smiley.html',
      controller: function ($scope, $element, $attrs) {
        $scope.color = $attrs.color || '#f6eb13';
        $scope.size = $attrs.size || '50';
      },
      scope: {}
    };
  });

