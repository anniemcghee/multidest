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


function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  // If so, then bind the popup to the layer
  //if(feature.properties && feature.properties.popupContent) {
  //layer.bindPopup(feature.properties.popupContent);
  // does this feature have a property named popupContent?
  // If so, then bind the popup to the layer
  if(feature.properties && feature.geometry) {
    console.log('adding point to map.');
  }
};

var airports = [{
  'type': 'Feature',
  'properties':{
    'name': 'Sea Tac International Aiport',
    'city': 'Seattle',
    'airportCode': 'SEA'
  },
  'geometry': {
    'type':'Point',
    'coordinates':[15.87646484375, 44.1748046875]
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
    'coordinates':[45.5897694, -122.5972829]
  }
}];

L.geoJson(airports, {
       onEachFeature: onEachFeature
}).addTo(map);
