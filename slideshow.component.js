var myapp = angular.module('myapp');

myapp.controller('MySlideShowCtrl', ['$element', 
function($element){
    console.log($element);
    $element.find('h2').css('color', 'blue');
    this.currentIndex = 0;

    this.onPrev = function(){
        this.currentIndex = this.currentIndex - 1;
    };

    this.onNext = function(){
        this.currentIndex = this.currentIndex + 1;
    }; 

}]);

myapp.component('mySlideShow', {
    templateUrl: 'slideshow.component.html',
    bindings: {
        slideTitle: '@',
        list: '<'
    },
    controller: 'MySlideShowCtrl'
});