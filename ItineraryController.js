multidestApp.controller('Itinerary', ['$scope', '$http', '$compile', '$uibModal', function ($scope, $http, $compile, $uibModal) {
  console.log("itinerary controller loading");

// onclick="window.open('http://www.expedia.com//Flights-Search?trip=multi&leg1=from:Seattle,%20WA,%20United%20States%20(SEA-Seattle%20-%20Tacoma%20Intl.),to:SFO,departure:12/15/2015TANYT&leg2=from:SFO,to:Los%20Angeles,%20CA%20(LAX-Los%20Angeles%20Intl.),departure:12/22/2015TANYT&leg3=from:Los%20Angeles,%20CA%20(LAX-Los%20Angeles%20Intl.),to:San%20Diego,%20CA%20(SAN-All%20Airports),departure:12/29/2015TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&mode=search','Multi-Destination Trip Planning')"

//   //first load datepicker modal and collect userDate
//   $scope.today = function() {
//     $scope.dt = new Date();
//   };
//
//   $scope.today();
//
//   $scope.clear = function () {
//     $scope.dt = null;
//   };
//
//   $scope.toggleMin = function() {
//     $scope.minDate = $scope.minDate ? null : new Date();
//   };
//   $scope.toggleMin();
//
//   $scope.open = function($event) {
//     $event.preventDefault();
//     $event.stopPropagation();
//
//     $scope.opened = true;
//   };
//
//   $scope.dateOptions = {
//     formatYear: 'yy',
//     startingDay: 1
//   };
//
//   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//   $scope.format = $scope.formats[0];
// //END OF DATE PICKER

//variables
var legCounter,
    drawCounter,
    itinerary,
    latlngList;

  $scope.isCollapsed = false;
  $scope.userDate = '2016-01-16';
  $scope.legTotals = [];
  legCounter = 0;
  drawCounter = 0;
  itinerary = [];

  //first load map and bind markers to scope for selection
  L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

  latlngList = [];

  var map = L.mapbox.map('map')
    .setView([40.50, -100.38], 5)
    .addLayer(L.mapbox.tileLayer('mapbox.streets'));
    map.scrollWheelZoom.disable();

  var loadMarkers = function (airport) {
    for (var i = 0; i < airport.length; i++) {
      var html = '<h4 id=' + airport[i].airportCode + '>You Added ' + airport[i].city + ' to Your Trip!</h4><h4>' + airport[i].name + '</h4><h6>Things to do in ' + airport[i].city + ':</h6><i id="marker" class="fa fa-anchor"></i><i id="marker" class="fa fa-car"></i><i id="marker" class="fa fa-rocket"></i><br>'
      var marker = L.marker([airport[i].lat, airport[i].long], {title: airport[i].airportCode}).addTo(map).bindPopup(html);

      marker.on('click', function(e) {
        $scope.selectedAirport = e.target.options.title;
        $scope.latlng = e.latlng;
        if(itinerary[0 + legCounter] === $scope.selectedAirport){
        alert("pick another airport!");
        } else {
          itinerary.push($scope.selectedAirport);
          console.log("ITIN: ", itinerary);
          latlngList.push($scope.latlng)
          console.log("latlngList: ", latlngList);
          calculateLegTotal(itinerary[0 + legCounter], itinerary[1 + legCounter]);
          drawRoute(latlngList[0 + drawCounter],latlngList[1 + drawCounter]);
        }
      });
    }
  };

  loadMarkers(airports);

  var calculateLegTotal = function(dep, arr) {
    if (arr === undefined) {
      $scope.legTotal = '---';
      $scope.legTotals.push($scope.legTotal);
      console.log($scope.legTotals);
    } else {
      var req = {
          url: 'http://terminal2.expedia.com/x/mflights/search?departureAirport=' + dep + '&arrivalAirport=' + arr + '&departureDate='+ $scope.userDate + '&apikey=aW7SABU9XHqRcWiG6xE0v60xllK0Tqg7'
      }
      $http(req).success(function(data) {
        $scope.legTotal = data.offers[0].totalFare;
        $scope.legTotals.push($scope.legTotal);
        console.log($scope.legTotals);
        legCounter++;
      });
    }
  };

  var drawRoute = function(depLatLng, arrLatLng) {
    if (arrLatLng === undefined) {
      console.log("ERROR in draw route");
      return;
    }
    else {
      console.log("drawing route: ", depLatLng, arrLatLng);
      var polyline = L.polyline([depLatLng, arrLatLng], {color: 'blue'}).addTo(map);
      drawCounter++;
    }
  };
}]);
