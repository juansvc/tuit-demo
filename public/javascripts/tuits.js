var tuitsmodulo = angular.module('tuitsmodulo',[]);

tuitsmodulo.controller("tuitscontroller", function($scope, $http){

    var socket = io.connect('/');
    socket.on('announcements', function(data) {
        console.log('Got announcement:', data.message);
    });

    $scope.pedirStreaming = function(){
        socket.emit('query',{palabra:$scope.name,count:"10"});
        socket.on('tuits', function(data){
           console.log(data)
        });
    }

    $scope.buscar_tuits = function(){
        var q = 'http://localhost:5000/tuitsearch/all/'+$scope.name+'/'+$scope.count;
        $http.get(q).success(function(data){
            $scope.tuits = data;
        });
    };            
});