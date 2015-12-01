multidestApp.controller('Itinerary', function ($scope) {
  console.log("itinerary controller loading");
  $scope.isCollapsed = false;

  $scope.userDate = userDate;

  $scope.itinerary = [];

  $scope.legTotal = legTotal;

  var calculateLegTotal = function(dep, arr) {
    if (){
      //http://terminal2.expedia.com/x/flights/v3/search/1/' + dep + '/' + arr + '/' + userDate + '?apikey=MRBvyDdb9ZiIFaDnTRFQw1x6RnReYR0l'
      // on success, return price and pass into leg total
      //two airports are in the itinerary, make API call and return price)
    } else {
      legTotal = '---'
  }
});
