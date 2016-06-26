'use strict';

describe('foursquareSearch', function () {
    beforeEach(module('foursquareSearch'));
    describe('foursquareSearchController', function () {
        var $httpBackend, ctrl, response = {
            data : {
                response : {
                    venues : [
                        {
                            name : 'Trafalgar Square',
                            categories : [
                                {
                                    name : 'Outdoors'
                                }
                            ]
                        }
                    ]
                }
            }
        };

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api.foursquare.com/v2/venues/search?client_id=K44KPZIQF0R52SZMNSJD3DS2ZDF5O1UKOQ5LKG4KY1NFC4OB&client_secret=UXEB1N1HQERJRQBZ0MYL3WEE1NDHGJTK0YLBIAK5ZXUF44KP&near=london&v=20160101').respond(response);

            ctrl = $componentController('foursquareSearch');
        }));

        it('should return a list of venues near London', function () {
            ctrl.search('London');
            expect(ctrl.venues.data.response.venues[0].name).toBe('Trafalgar Square');
        });
        it('should set place to the search term entered', function () {
            expect(ctrl.keywords).toBe('London');
        });
    });
});
