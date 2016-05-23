angular.module("app").controller('patientProfileCtrl', function ($scope, patientService) {
    (function () {
        patientService.getPatient().then(function (response) {
            $scope.patients = response;
            console.log(response);
        });
    } ());
    
    var getPatients = function() {
        patientService.getPatient();
    } 
    getPatients();

    $scope.patientProfile = function (patient) {
        console.log(patient._id);
        $scope.patientId = patient._id;
    };
});