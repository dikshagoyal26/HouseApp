const app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "views/login.html"
    })
    .when("/houses", {
      templateUrl: "views/data.html"
    })
    .otherwise({ redirectTo: "/" });
});
