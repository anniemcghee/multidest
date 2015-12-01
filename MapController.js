multidestApp.controller('Map', function ($scope) {
  console.log("Map controller loaded");
});

L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

var map = L.mapbox.map('map')
  .setView([40.50, -100.38], 5)
  .addLayer(L.mapbox.tileLayer('mapbox.streets'));

var airports = [{
"name": "Sea Tac International Aiport",
"city": "Seattle",
"airportCode": "SEA",
"lat": 47.4502,
"long": -122.3438
}, {
"name": "Portland International Aiport",
"city": "Portland",
"airportCode": "PDX",
"lat": 45.5897,
"long": -122.5972
}, {
"name": "San Francisco International Aiport",
"city": "San Francisco",
"airportCode": "SFO",
"lat": 37.6213,
"long": -122.3811
}, {
"name": "Los Angeles International Aiport",
"city": "Los Angeles",
"airportCode": "LAX",
"lat": 33.9415,
"long": -118.4107
}, {
"name": "San Jose Aiport",
"city": "San Jose",
"airportCode": "SJC",
"lat": 37.3639,
"long": -121.9311
}, {
"name": "San Diego International Aiport",
"city": "San Diego",
"airportCode": "SAN",
"lat": 32.7338,
"long": -117.1954
}, {
"name": "Denver International Aiport",
"city": "Denver",
"airportCode": "DEN",
"lat": 39.8560,
"long": -104.6759
}, {
"name": "O'Hare International Aiport",
"city": "Chicago",
"airportCode": "CHI",
"lat": 41.9741,
"long": -87.9095
}, {
"name": "Salt Lake City International Aiport",
"city": "Salt Lake City",
"airportCode": "SLC",
"lat": 40.7899,
"long": -111.9812
}, {
"name": "Atlanta International Aiport",
"city": "Atlanta",
"airportCode": "ATL",
"lat": 33.6407,
"long": -84.4298
}, {
"name": "Dallas Fort Worth International Aiport",
"city": "Dallas",
"airportCode": "DFW",
"lat": 32.8998,
"long": -97.0425
}, {
"name": "JFK International Aiport",
"city": "New York City",
"airportCode": "JFK",
"lat": 40.6413,
"long": -73.7803
}, {
"name": "La Guardia International Aiport",
"city": "New York City",
"airportCode": "LGA",
"lat": 40.7769,
"long": -73.8761
}, {
"name": "Logan International Aiport",
"city": "Boston",
"airportCode": "BOS",
"lat": 42.3656,
"long": -71.0117
}, {
"name": "Dulles International Aiport",
"city": "Washington, D.C.",
"airportCode": "IAD",
"lat": 38.9531,
"long": -77.4587
}, {
"name": "Ronald Reagan Washington National Aiport",
"city": "Washington, D.C.",
"airportCode": "DCA",
"lat": 38.8512,
"long": -77.0424
}, {
"name": "Miami International Aiport",
"city": "Miami",
"airportCode": "MIA",
"lat": 25.7958,
"long":-80.2892
}];

var loadmarkers = function (airport) {
  for (var i = 0; i < airport.length; i++) {
    L.marker([airport[i].lat, airport[i].long]).bindPopup('<h2>' + 'Visit '+ airport[i].city + '</h2>' + '<h3>' + airport[i].name + '</h3>').addTo(map);
  }
};

loadmarkers(airports);
