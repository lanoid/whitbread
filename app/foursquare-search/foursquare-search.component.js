'use strict';

angular.
    module('foursquareSearch').
    component('foursquareSearch', {
        templateUrl : 'foursquare-search/foursquare-search.template.html',
        controller : ['$http', function foursquareSearch($http) {
            var self = this;
            self.place = '';
            self.restaurants = {};

            self.search = function search(place) {
                console.log(place);
                $http.get('http://api.foursquare.com/v2/venues/search', {
                    params : {
                        client_id : 'K44KPZIQF0R52SZMNSJD3DS2ZDF5O1UKOQ5LKG4KY1NFC4OB',
                        client_secret : 'UXEB1N1HQERJRQBZ0MYL3WEE1NDHGJTK0YLBIAK5ZXUF44KP',
                        v : '20160101',
                        near : place

                    }
                }).then(function(response){
                    console.info(response);
                });
            };
        }]
    })
