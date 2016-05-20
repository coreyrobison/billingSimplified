angular.module("app").service("doctorService", function ($http) {

    //Adds new payment
    this.addPayment = function (newPayment) {
        return $http({
            method: 'POST',
            url: 'api/payments',
            data: {
                payment_amount: newPayment.payment_amount,
                patient: newPayment.patient,
                date_charged: new Date(),
                due_by: newPayment.due_by,
                patient_notes: newPayment.patient_notes,
                payment_method: newPayment.payment_method,
                paid: false
            }
        })
        .then(function(response) {
            console.log(response);
        })
    }
    
    this.getPayment = function() {
        return $http({
            method: 'GET',
            url: 'api/payments'
        }) .then(function(response) {
            console.log(response);
            return response.data;
        }) 
    } 



});