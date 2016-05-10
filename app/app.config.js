angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginView.html',
            // controller: 'loginCtrl'
        })

        .state('doctorHomepage', {
            url: '/doctor-homepage',
            templateUrl: 'components/doctor/doctorView.html',
            // controller: 'doctorHomepageCtrl'
        })

        .state('billingHomepage', {
            url: '/billing-homepage',
            templateUrl: 'components/billing/billingView.html',
            // controller: 'billingHomepageCtrl'
        })

    $urlRouterProvider.otherwise('/login');
});