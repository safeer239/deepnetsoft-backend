const mongoose = require('mongoose')

const itemScehma = new mongoose.Schema({
    itemName : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    category: {
        type : String,
        required : true,
    }
})

const item = mongoose.model('Product', itemScehma)

module.exports = item