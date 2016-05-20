var Payment = require('../models/payments');
var Patient = require('../models/patients');

module.exports = {
    find: function (req, res) {
        Payment.find(req.query)
            .populate('Patients')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    findById: function (req, res) {
        Payment.findById(req.params.id)
            .populate('Patients')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    findByPatientId: function (req, res) {
        Payment.find({ patient: { $eq: req.params.patientId } })
            .populate('Patients')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    update: function (req, res) {
        Payment.findByIdAndUpdate(req.params.id, req.body)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },

    save: function (req, res) {
        console.log(req.body)
        var newPayment = new Payment(req.body);
        newPayment.save(req.body, function (err, answer) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                console.log("payment made", answer)
                Patient.findByIdAndUpdate(req.body.patient, {
                    $push: {
                        'payments': answer._id
                    }
                },
                    function (err, patient) {
                        console.log("done", patient);
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.status(200).send(patient);
                        }
                    }
                )
            }
        });
    }
};