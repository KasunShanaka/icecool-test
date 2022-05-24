import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name: String,
    description: String,
    telNo: Number,
    job: String,
    fitOnType: String,
    note: String,
    items: [String],
    measurement1: String,
    measurement2: String,
    measurement3: String,
});

var customer = mongoose.model('customer', customerSchema);

export default customer;