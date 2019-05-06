angular.
  module('myapp').controller('chartController', function ($scope,  $http, releases) {

    $scope.value = [];
    $scope.labels = [];
    $scope.colors = [];

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    var promise = releases.getReleases();
    promise.then(function(payload) {
        $scope.data = payload;
    },
    function(errorPayload) {
        $log.error('failure loading movie', errorPayload);
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: $scope.labels,
            datasets: [{
                label: 'Número de lançamentos',
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