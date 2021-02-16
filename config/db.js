const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://merncapstoneuser:merncapstone123@cluster0.trsto.mongodb.net/merndb?retryWrites=true&w=majority";


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;