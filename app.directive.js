var myapp = angular.module('myapp');

myapp.directive('appHighlight', [function(){


    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.css('color', 'red');
        }
    };

}]);