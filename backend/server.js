const express = require("express")
const cors = require("cors")
// const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDb = require("./config/connectDB")

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//config dotenv
dotenv.config()

//call database
connectDb()


// transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

//port
const PORT =  process.env.PORT || 5000

//listen server

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})