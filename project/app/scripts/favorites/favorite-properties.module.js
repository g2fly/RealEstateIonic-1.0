(function() {
	'use strict';

	angular
		.module('realestate.favorite-properties', [
			'ionic',
			'ngCordova',
			'LocalStorageModule',
			'realestate.common',
			'ionic-toast'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.favorite-properties', {
					url: '/favorite-properties/:random',
					views: {
						'menuContent': {
							templateUrl: 'scripts/favorites/favorite-properties.html',
							controller: 'FavoritePropertiesController as vm'
						}
					}
				});
		});
})();
