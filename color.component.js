var myapp = angular.module('myapp');

myapp.component('myColor', {
    templateUrl: 'color.component.html',
    bindings: {
        content: '@',
        color: '@'
    },
    controller: ['$element', function($element){
        this.$onInit = function(){
            $element.find('div').css('background-color', this.color);
        };
        

    }]
});