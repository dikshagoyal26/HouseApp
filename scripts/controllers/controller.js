app.controller("loginCtrl", ($scope, fetchfactory, $rootScope, $location) => {
  console.log("login controller called");
  $scope.submitform = (valid) => {
    console.log("form called");
    if (valid) {
      if ($scope.username != "harry") alert("Incorrect username");
      else {
        console.log("valid");
        let promise = fetchfactory.getData();
        promise.then(
          (data) => {
            console.log("Controller Then Call ", data);
            $rootScope.houses = data.data;
            $location.path("/houses");
          },
          (err) => {
            console.log(err);
          }
        );
      }
    } else alert("Kindly enter username");
  };
});
app.controller("houseCtrl", ($scope, $rootScope) => {
  $scope.occupied = [];
  console.log("house controller called");
  $scope.occupy = (index, house) => {
    // console.log(house);
    $scope.occupied.push(house);
    $rootScope.houses.splice(index, 1);
    // console.log($rootScope.houses);
  };
  $scope.unoccupy = (index, house) => {
    $rootScope.houses.push(house);
    $scope.occupied.splice(index, 1);
  };
  $scope.sortBy = (propertyName) => {
    $scope.reverse =
      $scope.propertyName === propertyName ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  $scope.sortOccupy = (occupypropertyName) => {
    $scope.rev =
      $scope.occupypropertyName === occupypropertyName ? !$scope.rev : false;
    $scope.occupypropertyName = occupypropertyName;
  };
});
