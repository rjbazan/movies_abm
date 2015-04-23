var app= angular.module('app', ['ngRoute','controllers', 'services']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'views/movielist.html',
      controller: 'moviesController'
    }).
    when('/newMovies', {
        templateUrl: 'views/newMovie.html',
        controller: 'addmoviesController'
    }).
    when('/:index', {
        templateUrl: 'views/newMovie.html',
        controller: 'editmoviesController'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
