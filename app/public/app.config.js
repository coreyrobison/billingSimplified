angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginView.html',
            // controller: 'loginCtrl'
        })

        .state('doctor', {
            url: '/doctor',
            templateUrl: 'components/doctor/doctorView.html',
            controller: 'doctorCtrl'
        })

        .state('billing', {
            url: '/billing',
            templateUrl: 'components/billing/billingView.html',
            // controller: 'billingHomepageCtrl'
        })
        
        .state('patient', {
            url: '/patient',
            templateUrl: 'components/patient/patientView.html',
            controller: 'patientCtrl'
        })

    $urlRouterProvider.otherwise('/login');
});