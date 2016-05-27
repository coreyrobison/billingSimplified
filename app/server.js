//DEPENDENCIES
var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

//CONTROLLERS
var paymentsCtrl = require('./server/controllers/payments.controller.js');
var patientsCtrl = require('./server/controllers/patients.controller.js');

//EXPRESS
var app = express();

//CONNECTION
var mongoUri = 'mongodb://localhost:27017/billingsimplified';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Billing Simplified is connected to MongoDB!!');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Payments Endpoints
app.get('/api/payments', paymentsCtrl.find);
app.get('/api/payments/:id', paymentsCtrl.findById);
app.get('/api/payments/bypatient/:patientId', paymentsCtrl.findByPatientId);
app.post('/api/payments', paymentsCtrl.save);
app.put('/api/payments/:id', paymentsCtrl.update);


//Patients Endpoints
app.get('/api/patients', patientsCtrl.find);
app.get('/api/patients/:id', patientsCtrl.findById);
app.post('/api/patients', patientsCtrl.save);
app.put('/api/patients/:id', patientsCtrl.update);
app.delete('/api/patients/:id', patientsCtrl.delete);

//Listen
app.listen(8000, function(){
    console.log("working on port 8000")
});