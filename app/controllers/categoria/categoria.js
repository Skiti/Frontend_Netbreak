'use strict';

angular.module('APIM.categoria')

.controller('categoria_ctrl', function($scope, $http, $routeParams, ServicesHost) {

	// recupera la lista di categorie api
	$http.post(ServicesHost.microservices()+"retrieve_category_info?Id="+$routeParams.cat_id).then(function(response) {
		$scope.Name = response.data.Name;
		$scope.Image = response.data.Image;
		$scope.Description = response.data.Description;
	});

});