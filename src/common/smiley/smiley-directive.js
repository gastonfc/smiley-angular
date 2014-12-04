angular.module('smiley', [])
  .directive('smiley', function ($rootScope) {
    var templateBaseFolder = $rootScope.smileyBaseFolder || 'bower_components/smiley/src/common/smiley/templates';

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: templateBaseFolder + '/smiley.html',
      controller: function ($scope, $element, $attrs) {
        $scope.color = $attrs.color || '#f6eb13';
        $scope.size = $attrs.size || '50';
      },
      scope: {}
    };
  });

