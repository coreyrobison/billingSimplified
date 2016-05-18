var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var newBillSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'patients', required: true },
    date_charged: { type: Date, required: true, default: Date.now},
    due_by: { type: Date, required: true },
    patient_notes: { type: String, maxlength: 300 },
    payment_method: { type: String, required: true},
    paid: {type: Boolean, required: true}
});

module.exports = mongoose.model('Payments', newBillSchema);

//For testing with Postman
/*
{
    "patient": "55d4d20a47e4171e6949e37f",
    "date_charged": "01/01/2000",
    "due_by": "02/01/2000",
    "invoice_number": 5,
    "patient_notes": "Test",
    "typed_by": "Ryan",
    "payment_method": "check"
}
*/