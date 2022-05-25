import mongoose from 'mongoose';

const coneSchema = mongoose.Schema({
    coneName: String,
    conePrice: Number,
});

var cone = mongoose.model('cone', coneSchema);

export default cone;