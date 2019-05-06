angular.
  module('myapp').controller('chartController', function ($scope,  $http) {

    $scope.value = [];
    $scope.labels = [];
    $scope.colors = [];

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    $http.get("../data/lancamento-conta-legado.json")
    .then(function successCallback(response) {

        $scope.data = response;
        $scope.data.data.listaControleLancamento.forEach(element => {
            $scope.value.push(element.quantidadeLancamentoRemessa);
            $scope.labels.push(element.dataEfetivaLancamento);
            $scope.colors.push(dynamicColors());
        });

    }, function errorCallback(response) {
        alert("Desculpe, ocorreu um erro para obter os dados, tente novamente mais tarde");
    });
        
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: $scope.labels,
            datasets: [{
                label: 'Lançamentos/Mês',
                data: $scope.value,
                borderColor: $scope.colors,
                borderWidth: 1,
                backgroundColor: $scope.colors
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