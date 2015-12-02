multidestApp.controller('Itinerary', function ($scope, $http, SelectedAirport) {
  console.log("itinerary controller loading");
  var legTotal;
  var counter = 0;

  $scope.isCollapsed = false;

  $scope.userDate = '2016-01-16';

  var itinerary = [];

  $scope.legTotals = [];

  // $scope.legTotal = legTotal;

  var selectedAirport = function(airport) {
    itinerary.push(airport);
    $scope.itinerary = itinerary;
    console.log("ITIN", itinerary);
    if($scope.itinerary.length > 1) {
      calculateLegTotal($scope.itinerary[0 + counter], $scope.itinerary[1 + counter]);
    }
  }

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
