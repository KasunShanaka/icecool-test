import mongoose from 'mongoose';

const toppingsSchema = mongoose.Schema({
    toppingName: String,
    toppingPrice: Number,
});

var topping = mongoose.model('topping', toppingsSchema);

export default topping;