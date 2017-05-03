var tuitsmodulo = angular.module('tuitsmodulo',[]);

tuitsmodulo.controller("tuitscontroller", function($scope, $http){

    $scope.buscar_tuits = function(){
        var q = 'http://localhost:5000/tuitsearch/all/'+$scope.name+'/'+$scope.count;
        $http.get(q).success(function(data){
            $scope.tuits = data;
        });
    };
    
    $scope.aux = "<h1>Hola<h1>";
});