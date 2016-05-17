angular.module("app").controller('newPatientCtrl', function ($scope, $state, $modalInstance, patientService) {
    
    //When user clicks submit will add new patient to collection
    $scope.ok = function (patient) {
        patientService.addPatient(patient).then(function (response) {
            return response;
        });
        $state.reload('newpatient');
        $modalInstance.close();
    };
    
    //User can cancel adding a new patient
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});