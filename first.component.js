var myapp = angular.module('myapp');

myapp.controller('MyProfileComponentCtrl', [function(){
    this.showDetail = false;
    // this.myProfile = {
    //     name: 'Ajay',
    //     email: 'ajay@gmail.com',
    //     age: 30
    // };

    this.toggleDetailView = function(){
        this.showDetail = !this.showDetail;
    };

}]);


myapp.component('myProfile', {
    templateUrl: 'first.component.html',
    controller: 'MyProfileComponentCtrl',
    bindings: {
        user: '<',
        myTitle: '@',
        greeting: '<'
    }
});