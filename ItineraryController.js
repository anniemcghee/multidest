multidestApp.controller('Itinerary', ['$scope', '$http', '$compile', '$uibModal', function ($scope, $http, $compile, $uibModal) {
  console.log("itinerary controller loading");

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

  //first load map and bind markers to scope for selection
  L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uaWVtY2JsZWUiLCJhIjoiV1VYZ09NRSJ9.STqM6FSiQ4WKq_I-hJS1QQ';

  var latlngList = [];

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
        if(itinerary[0 + counter] === $scope.selectedAirport){
        alert("pick another airport!");
        } else {
          itinerary.push($scope.selectedAirport);
          latlngList.push($scope.latlng)
          calculateLegTotal(itinerary[0 + counter], itinerary[1 + counter])
          drawRoute(latlngList[0 + counter],latlngList[1 + counter]);
        }
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
        counter++;
      });
    }
  };

  var drawRoute = function(depLatLng, arrLatLng) {
    if (arrLatLng === undefined) {
      return;
    }
    else {
      var polyline = L.polyline([depLatLng, arrLatLng], {color: 'blue'}).addTo(map);
    }
  };

}]);
