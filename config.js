const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://darkking9197:179324865%40%40%24%23QPal@darkcluter9197.mr3j0ar.mongodb.net/BookNest');

connect.then(()=>{
    console.log("Connected successfully to database - 1");
})
.catch(()=>{
    console.log("Database cannot be connected")
})

const RegisterSchema = new mongoose.Schema({
    fname: {
        type:String,

    },
    lname: {
        type: String,

    },
    clgName: {
        type:String,

    },
    clgCode: {
        type: String,

    },
    email: {
        type:String,

    },
    phno: {
        type: String,

    },
    password:{
        type: String,
 
    }
});

const collection = new mongoose.model("users", RegisterSchema);

module.exports = collection;
