angular.
  module('myapp').controller('chartController', function ($scope,  $http) {

    $scope.value = [];
    $scope.labels = [];

    $http.get("../data/lancamento-conta-legado.json")
    .then(function successCallback(response) {

        $scope.data = response;
        $scope.data.data.listaControleLancamento.forEach(element => {
            console.log('elemen', element);
            $scope.value.push(element.quantidadeLancamentoRemessa);
            $scope.labels.push(element.dataEfetivaLancamento);
        });

    }, function errorCallback(response) {});
        
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: $scope.labels,
            datasets: [{
                data: $scope.value,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
);