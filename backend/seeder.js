const mongoose = require("mongoose");
const dotenv = require('dotenv')
const colors = require("colors");
const transactions = require('./data/transactions.js');
const transactionModel = require("./models/transactionModel.js");
const connectDB = require("./config/connectDB.js");

dotenv.config()

connectDB()

const importData = async()=>{
    try {
        // await transactionModel.deleteMany()

        const createdTransactions = await transactionModel.insertMany(transactions)

        console.log('Data Imported'.green.inverse)
        process.exit(0)

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async()=>{
    try {
        await transactionModel.deleteMany()        
        console.log('Data Destroyed! '.red.inverse)
        process.exit(1)

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}