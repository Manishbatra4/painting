const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    image: {
        type: String,
        required: [true, 'Image is Required']
    },
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    artist: {
        type: String,
        required: [true, 'Artist Name is Required']
    },
    price: {
        type: Number,
        required: [true, 'Price is Required']
    }
})

const Painting = mongoose.model('painting', paintingSchema);

module.exports = Painting;