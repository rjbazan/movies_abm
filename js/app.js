var app= angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'movielist.html',
      controller: 'moviesController'
    }).
    when('/newMovies', {
        templateUrl: 'newMovie.html',
        controller: 'addmoviesController'
    }).
    when('/:index', {
        templateUrl: 'newMovie.html',
        controller: 'editmoviesController'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

app.factory('movieService',[ function(){

  var svc={};

  var data=[
  {
    id: "BW2K0", 
    name: "To Live & Ride in L.A.", 
    averageRating: 4.6,
    releaseYear: 2010,
    url: 'http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120'
  },

  {
    id: "BVwi1",
    name: "Bag It",
    averageRating: 3.5,
    releaseYear: 2010,
    url: 'http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120'
  },
  {
    id: "BWAhv",
    name: "K-ON!: Vol. 1",
    averageRating: 2.6,
    releaseYear: 2009,
    url: 'http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120'
  },
  {
    id: "BWDSi",
    name: "Archer: Season 2: Disc 1",
    averageRating: 4.1,
    releaseYear: 2011,
    url: 'http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120'
  }
  ];
  svc.getMovies=function(){
    return data;
  };
  svc.addMovie=function(newMovie){
    data.push(newMovie);

  };
  svc.editMovie=function(index,updatedMovie){
    data[index]=updatedMovie;
  };
  

  return svc;

}]);

app.controller('moviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.movies=movieService.getMovies();

  $scope.editMovie=function(index){
    $location.path('/'+index);
  }

  $scope.delMovie=function(index){
    console.log("Deleted movie: ");
   console.log($scope.movie=movieService.getMovies()[index]);
   $scope.movies.splice(index,1);
   
  }

}]);

app.controller('addmoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.save=function(){

    movieService.addMovie({name:$scope.movie.name, averageRating:$scope.movie.averageRating, releaseYear:$scope.movie.releaseYear, url:$scope.movie.url});
    $location.path('/');

  };

  $scope.cancel=function(){
    $location.path('/');
  }

}]);

app.controller('editmoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
  
  $scope.movie=movieService.getMovies()[parseInt($routeParams.index)]  ;
  
    $scope.save=function(){

    movieService.editMovie(parseInt($routeParams.index),{name:$scope.movie.name, averageRating:$scope.movie.averageRating, releaseYear:$scope.movie.releaseYear, url:$scope.movie.url});
    $location.path('/');

  };

  $scope.cancel=function(){
    $location.path('/');
  }

}]);

app.controller('deletemoviesController', ['$scope', '$location', '$routeParams','movieService',function ($scope, $location, $routeParams, movieService) {
    
  $scope.delete=function(){

  }

}]);
