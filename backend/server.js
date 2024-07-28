// const express = require("express")
// const cors = require("cors")
// // const morgan = require("morgan")
// const dotenv = require("dotenv")
// const connectDb = require("./config/connectDB")

// //rest object
// const app = express()

// //middlewares
// app.use(express.json())
// app.use(cors())

// //config dotenv
// dotenv.config()

// //call database
// connectDb()


// // transaction routes
// app.use('/api/v1/transactions', require('./routes/transactionRoutes'))

// //port
// const PORT =  process.env.PORT || 5000

// //listen server

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`)
// })


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDB');

// Config dotenv
dotenv.config();
console.log('Environment Variables:');
console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('PORT:', process.env.PORT);

// Rest object
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Call database
connectDb();

// Transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

// Port
const PORT = process.env.PORT || 5000;

// Listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
