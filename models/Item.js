const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating the Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    colour: {
        type: String,
        default: 'White'
    }
});


module.exports = Item = mongoose.model('item', ItemSchema);