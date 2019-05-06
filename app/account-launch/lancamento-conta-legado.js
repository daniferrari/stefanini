
angular.
  module('myapp').controller('lancamentoContaController', function ($scope,  $http) {

    $http.get("../data/lancamento-conta-legado.json")
    .then(function successCallback(response) {
        $scope.data = response;
        console.log('chamada deu certo 888', $scope.data);

    }, function errorCallback(response) {
        console.log('chamada deu errado', response);
    });

});