angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/defaultLoginView.html',
            // controller: 'loginCtrl'
        })
        .state('login.billing', {
            url: '/billing-login',
            templateUrl: 'components/login/billingLoginView.html'
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