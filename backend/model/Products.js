const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Products = new Schema({
    website_name: {
        type: String
    },
    product_id: {
        type: String
    },
    description: {
        type: String
    },
    title: {
        type: Array
    },
    price: {
        type: Number
    }
})
module.exports = mongoose.model('pula', Products)
