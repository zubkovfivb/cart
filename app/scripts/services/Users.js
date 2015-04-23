'use strict';

angular.module('angularPassportApp')
    .factory('Users', function ($resource) {
        return $resource('/api/users/', {},
            {
                'get': {
                    method:'GET'
                }
            });
    });