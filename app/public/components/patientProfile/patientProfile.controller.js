angular.module("app").controller('patientProfileCtrl', function ($scope, patientService) {
    (function () {
        patientService.getPatient().then(function (response) {
            $scope.patients = response;
            console.log(response);
        });
    } ());

    var getPatients = function () {
        patientService.getPatient().then(function (response) {
            $scope.patients = response;
        })
    }
    getPatients();

    $scope.patientProfile = function (patient) {
        console.log(patient._id);
        $scope.patientId = patient._id;
    };

    $scope.deletePatient = function (patient) {
        console.log('delete patientprofile controller hit', patient)
        patientService.deletePatient(patient).then(function (response) {
            getPatients();
        })
    }

    getPatients();

});