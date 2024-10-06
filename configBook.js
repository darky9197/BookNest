const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://darkking9197:179324865%40%40%24%23QPal@darkcluter9197.mr3j0ar.mongodb.net/BookNest');

connect.then(()=>{
    console.log("Connected successfully to database - 1");
})
.catch(()=>{
    console.log("Database cannot be connected")
})

const BooklistingSchema = new mongoose.Schema({
    bookName: {
        type:String
    },
    author: {
        type: String
    },
    regulation: {
        type:String
    },
    bookAge:{
        type:String
    },
    price: {
        type: String
    },
    description: {
        type:String
    }
});

const collectionBook = new mongoose.model("Book_details", BooklistingSchema);
module.exports = collectionBook;