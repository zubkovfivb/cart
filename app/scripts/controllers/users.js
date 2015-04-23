'use strict';

angular.module('angularPassportApp')
    .controller('UsersCtrl', function ($scope, Users) {
        $scope.find = function() {
            Users.query(function(users) {
                $scope.users = users;
            });
        };
    });
