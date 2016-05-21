angular.module("app").controller('doctorCtrl', function ($scope, $state, doctorService, patientService) {

    $scope.amount1 = 0;
    $scope.amount2 = 0;
    $scope.amount3 = 0;

    $scope.getPatients = function () {
        patientService.getPatient().then(function (response) {
            $scope.patients = response;
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
        $scope.patient = !$scope.patient;
    };

    //User can cancel adding a new patient
    $scope.cancel = function () {
        $scope.patient = !$scope.patient;
    };

    //Totals payment function
    $scope.total = function () {
        $scope.result = $scope.amount1 + $scope.amount2 + $scope.amount3;
        return $scope.result;
    }
    
    $scope.test = function() {
    console.log($scope.result)
    };
    
    $scope.newPayment = {};

    //When user clicks submit will add new payment to collection
    $scope.addPayment = function (newPayment) {
        newPayment.payment_amount = $scope.result;
        doctorService.addPayment(newPayment).then(function (response) {
            console.log(response);
            // console.log(result);
            $scope.getPayments();
        });
        $state.reload('patient');
    };

    $scope.getPayments = function () {
        doctorService.getPayment().then(function (response) {
            console.log(response);
            $scope.payments = response;
        })
    }
    
    $scope.getPayments();

});



