multidestApp.controller('Map', function ($scope, $compile, SelectedAirport) {
  console.log("Map controller loaded");

//API for pricing
//http://terminal2.expedia.com/x/flights/v3/search/1/SEA/PDX/2015-12-30?apikey=MRBvyDdb9ZiIFaDnTRFQw1x6RnReYR0l

//Selection populates airports array, itinerary scope updates
//itinerary fires trend search between every other call to populate total - otherwise "--"

var selectedAirport = function(airportCode) {
  alert(airportCode);
}

L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

var map = L.mapbox.map('map')
  .setView([40.50, -100.38], 5)
  .addLayer(L.mapbox.tileLayer('mapbox.streets'));



var loadMarkers = function (airport) {
  for (var i = 0; i < airport.length; i++) {

    var html = '<h2> Visit '+ airport[i].city + '<button class="btn btn-warning" id="' + airport[i].airportCode + '" ng-click="selectedAirport(' + airport[i].airportCode + ')">Add to Trip</button></h2>',
        linkFunction = $compile(angular.element(html)),
        newScope = $scope.$new();

    L.marker([airport[i].lat, airport[i].long]).bindPopup(linkFunction(newScope)[0]).addTo(map);
  }
};

loadMarkers(airports);

});
