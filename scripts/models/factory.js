app.factory("fetchfactory", ($http, $q, $window) => {
  console.log("login factory called");

  return {
    getData() {
      let defer = $q.defer(); //-->promise
      $http({
        method: "GET",
        url:
          "https://customserverlessfunctions.intelliticks.now.sh/api/interview-data?username=harry"
      })
        .then((data) => {
          defer.resolve(data);
        })
        .catch((err) => {
          defer.reject(err);
        });
      return defer.promise;
    }
  };
});
