multidestApp.controller('Map', function ($scope) {
  console.log("Map controller loaded");
});


L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

var map = L.mapbox.map('map')
  .setView([40.50, -100.38], 5)
  .addLayer(L.mapbox.tileLayer('mapbox.streets'));


var airports = [{
  'type': 'Feature',
  'properties':{
    'name': 'Sea Tac International Aiport',
    'city': 'Seattle',
    'airportCode': 'SEA'
  },
  'geometry': {
    'type':'Point',
    'coordinates':[15.87, 44.17]
  }
}, {
  'type': 'Feature',
  'properties':{
    'name': 'Portland International Aiport',
    'city': 'Portland',
    'airportCode': 'PDX'
  },
  'geometry': {
    'type':'Point',
    'coordinates':[45.58, -122.59]
  }
}];

L.mapbox.geoJson(airports, {
       onEachFeature: function (feature, layer) {
         if(feature.properties && feature.geometry) {
           console.log('adding point to map.');
         }
       }
}).addTo(map);
