import mongoose from 'mongoose';

const flavorSchema = mongoose.Schema({
    flavorName: String,
    flavorPrice: Number,
});

var flavor = mongoose.model('flavor', flavorSchema);

export default flavor;