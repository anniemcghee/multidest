multidestApp.controller('Modal', function ($scope, $uibModal, $log) {
  console.log("Modal controller loaded");

  // $scope.items = ['item1', 'item2', 'item3'];

  // $scope.animationsEnabled = true;

  // $scope.open = function (size) {

  //   var modalInstance = $uibModal.open({
  //     animation: $scope.animationsEnabled,
  //     templateUrl: 'myModalContent.html',
  //     controller: 'ModalInstanceCtrl',
  //     size: size,
  //     resolve: {
  //       items: function () {
  //         return $scope.items;
  //       }
  //     }
  //   });

  //   modalInstance.result.then(function (selectedItem) {
  //     $scope.selected = selectedItem;
  //   }, function () {
  //     $log.info('Modal dismissed at: ' + new Date());
  //   });
  // };

  // $scope.toggleAnimation = function () {
  //   $scope.animationsEnabled = !$scope.animationsEnabled;
  // };

});


multidestApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

console.log("Modal instance ctrl loaded!")
  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  // $scope.ok = function () {
  //   $uibModalInstance.close($scope.selected.item);
  // };

  // $scope.cancel = function () {
  //   $uibModalInstance.dismiss('cancel');
  // };
});