angular.module("app").service('patientService', function ($http) {

    this.addPatient = function (newPatient) {
        return $http({
            method: 'POST',
            url: 'api/patients',
            data: {
                name: newPatient.name,
                address: newPatient.address,
                street: newPatient.street,
                city: newPatient.city,
                state: newPatient.state,
                zip: newPatient.zip,
                date_of_birth: newPatient.date_of_birth,
                social_security: newPatient.social_security,
                phone: newPatient.phone,
                payments: newPatient.payments
            }
        })
            .then(function (response) {
                console.log(response);
            })
    };

    this.getPatient = function () {
        return $http({
            method: 'GET',
            url: 'api/patients'
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getPatientById = function (id) {
        return $http({
            method: 'GET',
            url: 'api/patients/' + id
        })
            .then(function (response) {
                return response.data;
            });
    };
    
    // this.deletePatient = function() {
    //     return $http({
    //         method: 'DELETE',
    //         url: 'api/patients/' + id
    //     })
    //     .then(function(response) {
            
    //     })
    // }
    
    
    // this.updatePatient = function (id, data) {
    //     return $http({
    //         method: 'PUT',
    //         url: 'api/patients/' + id,
    //         data: data
    //     }).then(function (response) {
    //         return response;
    //     });
    // };
});