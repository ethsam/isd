angular.module("dsi",[ "ngSanitize" ])



.controller("dsiCtrl", function($scope, $location){


  $scope.versPost = function(dossier) {
		console.log('test post');
	}

  $scope.versCategorie = function(dossier) {
    console.log('test categorie');
  }


});
