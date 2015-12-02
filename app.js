var multidestApp = angular.module('MultidestApp', ['ui.bootstrap']);

multidestApp.run(function(){
  console.log("The app has started.");
});

multidestApp.factory('SelectedAirport', function () {
  var data = {
        Airport: ''
  };
  return {
    getAirport: function () {
        return data.Airport;
    },
    setAirport: function (airport) {
        data.Airport = airport;
    }
  };
});
