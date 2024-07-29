const mongoose = require('mongoose')
const colors = require('colors')
mongoose.set('debug', true);
const username = encodeURIComponent("Harish");
const password = encodeURIComponent("abcd1234");

const URL = `mongodb+srv://${username}:${password}@artists.tgfc6jz.mongodb.net/?retryWrites=true&w=majority&appName=Artists`

const connectDb = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(URL, {
            
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDb