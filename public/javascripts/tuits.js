var tuitsmodulo = angular.module('tuitsmodulo', []);

tuitsmodulo.controller("tuitscontroller", function ($scope, $http) {

    var socket = io.connect('/');
    socket.on('announcements', function (data) {
        console.log('Got announcement:', data.message);
    });

    $scope.pedirStreaming = function () {
        socket.emit('query', { palabra: $scope.name, count: "10" });
        socket.on('tuits', function (data) {
            console.log(data.tuits);
        });
    }

    $scope.buscar_tuits = function () {
        var q = 'http://localhost:5000/tuitsearch/all/' + $scope.name + '/' + $scope.count;
        $http.get(q).success(function (data) {
            $scope.tuits = data;
        });
    };

    $scope.deleteO = function(tuit_delete){
        delete $scope.tuits[tuit_delete];
    };

    $scope.guardarTuit = function (tuit_save) {
        console.log(tuit_save);
        var q = 'http://localhost:5000/tuitsearch/all/';
        $http({
            method: 'POST',
            url: 'http://localhost:5000/mongodb/tuit',
            data: JSON.stringify(tuit_save),
            headers: {
                'Content-type': 'application/json'
            }
        });
    };
});