'use strict';

describe('foursquareSearch', function () {
    beforeEach(module('foursquareSearch'));
    describe('foursquareSearchController', function () {
        var $httpBackend,
            ctrl,
            searchTerm = 'London',
            searchURL = 'https://api.foursquare.com/v2/venues/search?client_id=K44KPZIQF0R52SZMNSJD3DS2ZDF5O1UKOQ5LKG4KY1NFC4OB&client_secret=UXEB1N1HQERJRQBZ0MYL3WEE1NDHGJTK0YLBIAK5ZXUF44KP&near=London&v=20160101',
            response = {
                response : {
                    venues : [
                        {
                            name : 'Trafalgar Square',
                            categories : [
                                {
                                    name : 'Outdoors'
                                }
                            ]
                        },
                        {
                            name : 'Hyde Park',
                            categories : [
                                {
                                    name : 'Outdoors'
                                }
                            ]
                        },
                    ]
                }
            };

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET(searchURL).respond(response);

            ctrl = $componentController('foursquareSearch');
        }));

        it('should have an empty string for place', function () {
            expect(ctrl.place.length).toBe(0);
        });

        it('should return a list of venues near ' + searchTerm, function () {
            ctrl.search(searchTerm);
            $httpBackend.flush();
            expect(ctrl.venues[0].name).toBe('Trafalgar Square');
        });
    });
});
