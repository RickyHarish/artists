const express = require("express")
const { addTransaction, getAllTransaction } = require("../controllers/transactionController")
//router object
const router = express.Router()

//routes
//Add Transaction Method
router.post('/add-transaction', addTransaction)

//get transactions
router.get('/get-transaction', getAllTransaction)

module.exports = router