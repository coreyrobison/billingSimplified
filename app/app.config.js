angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login/loginView.html',
            controller: 'loginCtrl'
        })

        .state('doctorHomepage', {
            url: '/doctorHomepage',
            templateUrl: 'doctor/doctorView.html',
            controller: 'doctorHomepageCtrl'
        })

        .state('billingHomepage', {
            url: '/billingHomepage',
            templateUrl: 'billing/billingView.html',
            controller: 'billingHomepageCtrl'
        })

    $urlRouterProvider.otherwise('/homepage');
})