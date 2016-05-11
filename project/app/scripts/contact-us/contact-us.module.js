(function() {
	'use strict';

	angular
		.module('realestate.contact-us', [
			'ionic',
			'ngCordova',
			'realestate.common'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.contact-us', {
					url: '/contact-us/:propertyId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/contact-us/contact-us.html',
							controller: 'ContactUsController as vm'
						}
					},
					resolve: {
						property: function($stateParams, propertiesService) {
							return propertiesService.getProperty($stateParams.propertyId);
						}
					}
				});
		});
})();
