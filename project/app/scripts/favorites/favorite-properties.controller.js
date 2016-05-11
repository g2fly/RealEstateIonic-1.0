(function() {
	'use strict';

	angular
		.module('realestate.favorite-properties')
		.controller('FavoritePropertiesController', FavoritePropertiesController);

	FavoritePropertiesController.$inject = ['$state', 'favoritePropertiesService', '_'];

	/* @ngInject */
	function FavoritePropertiesController($state, favoritePropertiesService, _) {
		var vm = angular.extend(this, {
			properties: [],
			navigate: navigate,
			deleteFromFavorites: deleteFromFavorites
		});

		(function activate() {
			getProperties();
		})();

		// ********************************************************************

		function deleteFromFavorites(property) {
			favoritePropertiesService.removeFromFavorites(property.guid);
			var t = _.remove(vm.properties, function(item) {
				return item.guid === property.guid;
			});
			
			console.log(t);
		}

		function getProperties() {
			favoritePropertiesService.getFavoriteProperties()
				.then(function(properties) {
					vm.properties = properties;
				});
		}

		function navigate(propertyId) {
			$state.go('app.property', { propertyId: propertyId });
		}
	}
})();