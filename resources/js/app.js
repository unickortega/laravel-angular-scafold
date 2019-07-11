/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('angular-route')

import angular from 'angular';

var app = angular.module('myApp', ['ngRoute'])

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from FirstController';
});

app.controller('SecondController', function($scope) {
    $scope.message = 'Hello from Second';
});
    
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    
    .when('/', {
    template : require('./pages/first.html'),
    controller : 'FirstController'
    })
    .when('/about', {
    template : require('./pages/first.html'),
    controller : 'SecondController'
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});