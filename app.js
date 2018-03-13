var myapp = angular.module('myapp',[]);

myapp.controller('MyCtrl', ['$scope', function($scope){
    
    $scope.dogList = [
        {
            url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
            title: 'Dog1'
        },
        {
            url: 'http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_220/cw_1255/ch_1255/APL/uploads/2014/11/dog-breed-selector-australian-shepherd.jpg',
            title: 'Dog2'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0TQw6Qep2ylWoorPeZ31soMXpem6T6MkpjHIn2cJ-S_dsCJRfw',
            title: 'Dog3'
        },
        {
            url: 'http://i.dailymail.co.uk/i/pix/2017/11/24/10/46A6257800000578-5113677-image-a-71_1511518797404.jpg',
            title: 'Dog4'
        }
    ];

    $scope.catData = [
        {
            url: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg',
            title: 'Cat1'
        },
        {
            url: 'http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg',
            title: 'Cat2'
        },
        {
            url: 'https://fthmb.tqn.com/akai7DgNZ3amKMV-v1uQ_ipd04E=/960x0/filters:no_upscale()/ginger-kitten-cuddle-with-adult-tabby-cat--459759125-599342aa054ad90011f480a9.jpg',
            title: 'Cat3'
        },
        {
            url: 'http://www.meteoweb.eu/wp-content/uploads/2016/02/gatti-640x297.jpg',
            title: 'Cat4'
        },
        {
            url: 'https://albawabacdn-albawabamiddleea.netdna-ssl.com/sites/default/files/imagecache/article_headline_node_big//sites/default/files/im/cat_birth2017.jpg',
            title: 'Cat5'
        }
    ];


}]);
