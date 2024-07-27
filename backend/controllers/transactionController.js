const transactionModel = require("../models/transactionModel")
// const moment = require('moment')

const getAllTransaction =async(req, res)=>{
        try {
        const transactions = await transactionModel.find({});
            res.status(200).json(transactions)
            
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
}

const addTransaction = async(req, res)=>{
        try {
            const { newTransaction} = req.body;
            const {description, type, amount, date} = newTransaction
            console.log(newTransaction)
            const formattedDate = new Date(date)

            if (isNaN(formattedDate.getTime())) {
                // Handle invalid date format
                return res.status(400).json({ error: "Invalid date format" });
            }

            const Transaction = new transactionModel({ amount, type, description, date: formattedDate });
            await Transaction.save()
            res.status(201).send( addedTransaction:Transaction,  message:"Transaction Added Successfully")

        } catch (error) {
            res.status(500).json(error)
        }
}


module.exports = {getAllTransaction, addTransaction}