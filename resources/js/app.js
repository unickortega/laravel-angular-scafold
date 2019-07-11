/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('angular-route')

import angular from 'angular';

var app = angular.module('myApp', ['ngRoute'])
    
var route = require('./route')
route.default(app)