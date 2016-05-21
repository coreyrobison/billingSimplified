angular.module('app').filter('patientFilter', function($scope){
  var filtered = []
  return function(selectedOption){
    if(selectedOption === $scope.patients.name && $scope.payments.patient === $scope.patient._id){
      filtered.push($scope.patient.payments)
    }
    return filtered
  }
});