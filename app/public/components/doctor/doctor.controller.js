angular.module("app").controller('doctorCtrl', function ($scope, $state, doctorService, patientService) {

    $scope.getPatients = function() {
        patientService.getPatient().then(function(response) {
            $scope.patients = response;
            console.log(response);
        })
    }
    $scope.getPatients();
    
    //When user clicks submit will add new patient to collection
    $scope.addPatient = function (newPatient) {
        patientService.addPatient(newPatient).then(function (response) {
            console.log(response);
            $scope.getPatients();
        });
        $state.reload('patient');
        $modalInstance.close();
    };
    
    //User can cancel adding a new patient
    $scope.cancel = function () {
        $scope.patient = !$scope.patient;
        $modalInstance.dismiss('cancel');
    };

});