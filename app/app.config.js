angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginView.html',
            // controller: 'loginCtrl'
        })

        .state('doctorHomepage', {
            url: '/doctorHomepage',
            templateUrl: 'components/doctor/doctorView.html',
            // controller: 'doctorHomepageCtrl'
        })

        .state('billingHomepage', {
            url: '/billingHomepage',
            templateUrl: 'components/billing/billingView.html',
            // controller: 'billingHomepageCtrl'
        })

    $urlRouterProvider.otherwise('/login');
});