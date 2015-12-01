multidestApp.controller('Map', function ($scope) {
  console.log("Map controller loaded");


//API for pricing
//http://terminal2.expedia.com/x/flights/v3/search/1/SEA/PDX/2015-12-30?apikey=MRBvyDdb9ZiIFaDnTRFQw1x6RnReYR0l

//Selection populates airports array, itinerary scope updates
//itinerary fires trend search between every other call to populate total - otherwise "--"

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
    L.marker([airport[i].lat, airport[i].long]).addTo(map);
  }
};

loadmarkers(airports);
