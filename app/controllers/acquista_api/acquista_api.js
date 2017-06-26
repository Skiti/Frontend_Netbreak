'use strict';

angular.module('APIM.acquista_api')

.controller('acquista_api_ctrl', function($scope, $http, $routeParams, $location, ServicesHost) {
	
	if( localStorage.getItem("Session") != 'true' ) {
			$location.path("/");
	}
	else {
		// funzione che recupera tutti i dati dell'API
		$http.post(ServicesHost.microservices()+"retrieve_ms_info?Id="+$routeParams.api_id).then(function(response) {
			$scope.IdMS = $routeParams.api_id;
			$scope.Name = response.data.Name;
		});
		
		$http.post(ServicesHost.transactions()+"retrieve_apikey_from_msidandclient?IdMS="+$routeParams.api_id+"&IdClient="+localStorage.getItem("IdClient")).then(function(response) {
			$scope.APIKey = response.data.$;
		});
	}
	
});