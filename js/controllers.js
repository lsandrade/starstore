angular.module("starstore")

.controller("HomeCtrl",function($scope){
	$scope.message = "Home";
})

.controller("NovoPedidoCtrl",function($scope, Produtos){
	$scope.produtos = Produtos.all();
})

.controller("PedidosCtrl",function($scope){
})

;