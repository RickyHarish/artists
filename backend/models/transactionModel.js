const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
        amount:{
            type:Number,
            required:[true, 'Amount is required']
        },
        type:{
            type:String,
            required:[true, 'type is required']
        },
        description:{
            type:String,
            required:[true, "description is required"]

        },
        date:{
            type: Date,
            required:[true, "date is required"]
        }
}, {timestamps:true})

const transactionModel = mongoose.model('transactions', transactionSchema)
module.exports = transactionModel