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
"coordinates": [
  47.4502, -122.3438
]}, {
"name": "Portland International Aiport",
"city": "Portland",
"airportCode": "PDX",
"coordinates": [
  45.5897, -122.5972
]}, {
"name": "San Francisco International Aiport",
"city": "San Francisco",
"airportCode": "SFO",
"coordinates": [
  37.6213, -122.3811
]}, {
"name": "Los Angeles International Aiport",
"city": "Los Angeles",
"airportCode": "LAX",
"coordinates": [
  33.9415, -118.4107
]}, {
"name": "San Jose Aiport",
"city": "San Jose",
"airportCode": "SJC",
"coordinates": [
  37.3639, -121.9311
]}, {
"name": "San Diego International Aiport",
"city": "San Diego",
"airportCode": "SAN",
"coordinates": [
  32.7338, -117.1954
]}, {
"name": "JFK International Aiport",
"city": "New York City",
"airportCode": "JFK",
"coordinates": [
  40.6413, -73.7803
]}, {
"name": "La Guardia International Aiport",
"city": "New York City",
"airportCode": "LGA",
"coordinates": [
  40.7769, -73.8761
]}, {
"name": "Logan International Aiport",
"city": "Boston",
"airportCode": "BOS",
"coordinates": [
  42.3656, -71.0117
]}, {
"name": "Dulles International Aiport",
"city": "Washington, D.C.",
"airportCode": "IAD",
"coordinates": [
  38.9531, -77.4587
]}, {
"name": "Ronald Reagan Washington National Aiport",
"city": "Washington, D.C.",
"airportCode": "DCA",
"coordinates": [
  38.8512, -77.0424
]}, {
"name": "Miami International Aiport",
"city": "Miami",
"airportCode": "MIA",
"coordinates": [
  25.7958, -80.2892
]}];

var loadmarkers = function (airport) {
  for (var i = 0; i < airport.length; i++) {
    L.marker([airport[i].coordinates[0]],[airport[i].coordinates[1]]).addTo(map);
  }
};

loadmarkers(airports);
