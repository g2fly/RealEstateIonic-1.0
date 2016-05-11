(function() {
	'use strict';

	angular
		.module('realestate.properties', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.properties', {
					url: '/properties',
					abstract: true,
					views: {
						'menuContent': {
							templateUrl: 'scripts/properties/properties.html'
						}
					},
					resolve: {
						filterModal: function($ionicModal, $rootScope) {
							return $ionicModal.fromTemplateUrl('scripts/properties/properties-filter.html', {
								scope: $rootScope,
								animation: 'slide-in-up'
							});
						}
					}
				})
				.state('app.properties.rent', {
					url: '/rent',
					views: {
						'tab-rent': {
							templateUrl: 'scripts/properties/properties-list.html',
							controller: 'PropertiesListController as vm'
						}
					}
				})
				.state('app.properties.sale', {
					url: '/sale',
					views: {
						'tab-sale': {
							templateUrl: 'scripts/properties/properties-list.html',
							controller: 'PropertiesListController as vm'
						}
					}
				})
				.state('app.property', {
					url: '/properties/:propertyId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/properties/property.html',
							controller: 'PropertyController as vm',
							resolve: {
								property: function($stateParams, propertiesService) {
									return propertiesService.getProperty($stateParams.propertyId);
								}
							}
						}
					}
				});
		});
})();