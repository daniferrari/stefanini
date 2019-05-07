
angular.
  module('myapp').service('releases', function($http) {

    this.getReleases = function (x) {
        return $http.get(url)
        .then(
            function successCallback(response) {
                return response;
            },
        function errorCallback(response) {
            alert("Desculpe, ocorreu um erro para obter os dados, tente novamente mais tarde");
        });
    }
});
