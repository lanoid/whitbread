'use strict';

angular.
    module('foursquareSearch').
    component('foursquareSearch', {
        templateUrl : 'foursquare-search/foursquare-search.template.html',
        controller : ['$http', function foursquareSearchController($http) {
            var self = this;
            self.place = '';
            self.venues = {};

            self.search = function search(place) {
                $http.get('http://api.foursquare.com/v2/venues/search', {
                    params : {
                        client_id : 'K44KPZIQF0R52SZMNSJD3DS2ZDF5O1UKOQ5LKG4KY1NFC4OB',
                        client_secret : 'UXEB1N1HQERJRQBZ0MYL3WEE1NDHGJTK0YLBIAK5ZXUF44KP',
                        v : '20160101',
                        near : place

                    }
                }).then(function(response) {
                    self.venues = response.data.response.venues;
                }, function(response) {
                    self.venues.error = {
                        name : 'No venues found for that location'
                    };
                });
            };
        }]
    })
