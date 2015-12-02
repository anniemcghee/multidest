multidestApp.controller('Itinerary', ['$scope', '$http', '$compile', '$uibModal', function ($scope, $http, $compile, $uibModal) {
  console.log("Itinerary controller loading");

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
  $scope.stops = [];
  $scope.tripTotal = 0;
  // $scope.counterArray = new Array($scope.stops.length);
  legCounter = 0;
  drawCounter = 0;
  itinerary = [];

  //first load map and bind markers to scope for selection
  L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

  latlngList = [];

  var map = L.mapbox.map('map')
    .setView([40.50, -100.38], 5)
    .addLayer(L.mapbox.tileLayer('mapbox.streets'));

  var loadMarkers = function (airport) {
    for (var i = 0; i < airport.length; i++) {
      var html = '<button class="btn btn-warning" id="' + airport[i].airportCode + '" ng-click="selectedAirport(' + airport[i].airportCode + ')">Add to Trip</button>'
      var marker = L.marker([airport[i].lat, airport[i].long], {title: airport[i].airportCode}).addTo(map).bindPopup(html);

      marker.on('click', function(e) {
        $scope.selectedAirport = e.target.options.title;
        $scope.latlng = e.latlng;
        if($scope.stops[0 + legCounter] === $scope.selectedAirport){
        alert("pick another airport!");
        } else {
          $scope.stops.push($scope.selectedAirport);
          console.log("ITIN: ", $scope.stops);
          latlngList.push($scope.latlng)
          console.log("latlngList: ", latlngList);
          calculateLegTotal($scope.stops[0 + legCounter], $scope.stops[1 + legCounter]);
          drawRoute(latlngList[0 + drawCounter],latlngList[1 + drawCounter]);

        }
      });
    }
  };

  loadMarkers(airports);

  var getTripTotal = function(arr) {
    var tripTotal = 0;
    for (var i = 1; i < arr.length; i++) {
       tripTotal += parseInt(arr[i]);
    }
    $scope.tripTotal = tripTotal;
  }

  var zipArrays = function(array1, array2) {
    var itinerary = array1.map(function(e, i){
      return [array1[i], array2[i]];
    })
    console.log(itinerary);
  }

  var calculateLegTotal = function(dep, arr) {
    if (arr === undefined) {
      $scope.legTotals.push('---');
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
        getTripTotal($scope.legTotals);
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
