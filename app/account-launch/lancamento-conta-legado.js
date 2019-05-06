
angular.
  module('myapp').controller('lancamentoContaController', function ($scope,  $http) {

    $http.get("../data/lancamento-conta-legado.json")
    .then(function successCallback(response) {
        $scope.data = response;
    }, function errorCallback(response) {
        alert("Desculpe, ocorreu um erro para obter os dados, tente novamente mais tarde");
    });

});