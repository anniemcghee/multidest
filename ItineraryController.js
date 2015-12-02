multidestApp.controller('Itinerary', function ($scope, $http, $compile, SelectedAirport) {
  console.log("itinerary controller loading");

  //first load map and bind markers to scope for selection
  L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

  var map = L.mapbox.map('map')
    .setView([40.50, -100.38], 5)
    .addLayer(L.mapbox.tileLayer('mapbox.streets'));

  var loadMarkers = function (airport) {
    for (var i = 0; i < airport.length; i++) {

      var html = '<button class="btn btn-warning" id="' + airport[i].airportCode + '" ng-click="selectedAirport(' + airport[i].airportCode + ')">Add to Trip</button>'

      var marker = L.marker([airport[i].lat, airport[i].long], {title: airport[i].airportCode}).addTo(map).bindPopup(html);


      marker.on('click', function(e) {
        $scope.selectedAirport = e.target.options.title;
        itinerary.push($scope.selectedAirport);
        console.log(itinerary);
        calculateLegTotal(itinerary[0 + counter], itinerary[1 + counter]);
      });
    }
  };

  loadMarkers(airports);

  //then itinerary logic and route creation
  var legTotal;
  var counter = 0;

  $scope.isCollapsed = false;

  $scope.userDate = '2016-01-16';

  var itinerary = [];

  $scope.legTotals = [];

  // $scope.legTotal = legTotal;

  var calculateLegTotal = function(dep, arr) {
    console.log("CALLING CALC FUNCTION");
    if (arr === undefined) {
      $scope.legTotal = '---';
      $scope.legTotals.push($scope.legTotal);
      console.log($scope.legTotals);
    } else {
      var req = {
          url: 'http://terminal2.expedia.com/x/mflights/search?departureAirport=' + dep + '&arrivalAirport=' + arr + '&departureDate='+ $scope.userDate + '&apikey=aW7SABU9XHqRcWiG6xE0v60xllK0Tqg7'
        }

      $http(req).success(function(data) {
        console.log("HTTP SUCCESS ARRIVALLLLLL");
        $scope.legTotal = data.offers[0].totalFare;
        $scope.legTotals.push($scope.legTotal);
        console.log($scope.legTotals);
        counter++;
      });
    }
  };

});
