var app=angular.module('services',[]);
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
