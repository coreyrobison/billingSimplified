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
            templateUrl: 'components/newPatient/patientView.html',
            controller: 'patientCtrl'
        })
        
        .state('patientProfile', {
            url: '/patientProfile',
            templateUrl: 'components/patientProfile/patientProfileView.html',
            controller: 'patientProfileCtrl'
        })

    $urlRouterProvider.otherwise('/login');
});