'use strict';

var pasaaApp = angular.module('pasaaApp', ['ngRoute']);

pasaaApp.config (['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when ('/about', {
                templateUrl: 'partials/about.html'
            }).
            when ('/', {
                templateUrl: 'partials/items.html'
            }).
            otherwise ({
                redirectTo: '/'
            })}
    ]);