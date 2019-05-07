angular.
  module('myapp').controller('chartController', function ($scope,  $http, releases) {

    $scope.valueChart1 = [];
    $scope.valueChart2 = [];
    $scope.valueChart3 = [];
    $scope.labelChart1 = [];
    $scope.labelChart2 = [];
    $scope.labelChart3 = [];
    $scope.colors = [];

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    var promise = releases.getReleases();
    promise.then(function(data) {

        $scope.data = data;

        $scope.data.data.listaControleLancamento.forEach(element => {
            $scope.valueChart1.push(element.quantidadeLancamentoRemessa);
            $scope.valueChart2.push(element.valorLancamentoRemessa.toFixed(2));
            $scope.valueChart3.push(((element.valorLancamentoRemessa)/(element.quantidadeLancamentoRemessa)).toFixed(2));
            $scope.labelChart1.push(element.dataEfetivaLancamento);
            $scope.labelChart2.push(element.dataLancamentoContaCorrenteCliente);
            $scope.labelChart3.push(element.numeroEvento);
            $scope.colors.push(dynamicColors());
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: $scope.labelChart1,
                datasets: [{
                    label: 'Número de lançamentos',
                    data: $scope.valueChart1,
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

        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: $scope.labelChart2,
                datasets: [{
                    label: 'Número de lançamentos',
                    data: $scope.valueChart2,
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

        var ctx = document.getElementById('myChart3').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: $scope.labelChart3,
                datasets: [{
                    label: 'Número de lançamentos',
                    data: $scope.valueChart3,
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

    });

    }
);