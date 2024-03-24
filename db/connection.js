const mongoose  = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const url =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jcvixee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(url).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))