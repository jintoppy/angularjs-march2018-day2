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
        if(this.currentIndex === this.list.length - 1){
            this.onComplete({
                index: this.currentIndex
            });
        }
    }; 

}]);

myapp.component('mySlideShow', {
    templateUrl: 'slideshow.component.html',
    transclude: true,
    bindings: {
        slideTitle: '@',
        list: '<',
        onComplete: '&'
    },
    controller: 'MySlideShowCtrl'
});