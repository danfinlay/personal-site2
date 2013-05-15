'use strict';


// Declare app level module which depends on filters, and services
angular.module('DanApp', ['DanApp.filters', 'DanApp.services', 'DanApp.directives', 'DanApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MenuCtrl'});
    $routeProvider.when('/doings', {templateUrl: 'partials/doings.html', controller: 'Doings'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]).directive('navTabs', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            var $ul = $(element);
            $ul.addClass("nav nav-tabs");

            var $tabs = $ul.children();
            var tabMap = {};
            $tabs.each(function() {
              var $li = $(this);
              //Substring 1 to remove the # at the beginning (because location.path() below does not return the #)
              tabMap[$li.find('a').attr('href').substring(1)] = $li;
            });

            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                $tabs.removeClass("active");
                tabMap[newPath].addClass("active");
            });
        }

    };

 }]);