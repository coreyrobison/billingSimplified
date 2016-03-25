var billingSimlified = angular.module('billingSimlified', ['ui.router'])

.config(function($stateprovider, $urlRouterProvider) {
    
    $stateprovider
        .state('auth', {
            url: 'auth',
            templateUrl: 'auth/authTmpl.html'
        })
    
});