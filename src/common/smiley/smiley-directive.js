angular.module('smiley', ['templates-common'])
  .directive('smiley', function ($rootScope) {

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'smiley/templates/smiley.tpl.html',
      controller: function ($scope, $element, $attrs) {
        $scope.color = $attrs.color || '#f6eb13';
        $scope.size = $attrs.size || '50';
      },
      scope: {}
    };
  });

