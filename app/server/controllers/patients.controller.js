var Patient = require('../models/patients');

module.exports = {
    find: function (req, res) {
        Patient.find(req.query)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    findById: function (req, res) {
        Patient.findById(req.params.id)
            .populate('payments')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    update: function (req, res) {
        Patient.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(answer);
            }
        })
    },
    save: function (req, res) {
        var newPatient = new Patient(req.body);
        newPatient.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    }
    // destroy: function (req, res) {
    //     var 
    // }
};