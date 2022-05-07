const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    orders: {
        type: []
    },
}, {
    collection: 'Customer'
})
module.exports = mongoose.model('Customer', customerSchema)