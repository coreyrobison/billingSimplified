var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPatientSchema = new Schema({
    name: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: {type: Number }
    },
    date_of_birth: { type: Date },
    social_security: { type: String },
    phone: { type: String },
    // insurance: {
    //     plan_name: { type: String },
    //     plan_phone: { type: String },
    //     member_id: { type: String },
    //     relationship: { type: String },
    //     group: { type: String },
    //     bin: { type: Number },
    //     pcn: { type: String }
    // },
    // comments: { type: String },
    payments: [
        { type: Schema.Types.ObjectId, ref: 'payments' }
    ]
});

module.exports = mongoose.model('patients', newPatientSchema);




















/*FOR TESTING WITH POSTMAN
{
    "name": "Test",
    "address": {
        "street": "Test",
        "city": "Test",
        "state": "Test",
        "zip": 12345
    },
    "date_of_birth": "Test",
    "social_security": 123456789,
    "phone": 1234567,
    "insurance": {
        "plan_name": "Test",
        "plan_phone": 1234567,
        "member_id": "Test",
        "relationship": "Test",
        "group": "Test",
        "bin": 123456,
        "pcn": "Test"
    },
    "comments": "Test",
    "patient_warnings": "Test"
}
*/