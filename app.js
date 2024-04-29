const express = require("express");
const bodyParser = require("body-parser");
const notifier = require('node-notifier');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");
const collectionBook = require("./configBook")


const app = express();
const PORT = 7000;

app.use(bodyParser.json());
app.use(express.static(`public`));
app.use(bodyParser.urlencoded({
    extended:true
}))



app.post('/userRegister',async (req,res)=>{
    var data = {
        fname:req.body.fname,
        lname:req.body.lname,
        clgname:req.body.clgName,
        clgcode:req.body.clgCode,
        email:req.body.email,
        phno:req.body.phno,
        password:req.body.password
    }
    const exitingUser = await collection.findOne({email: data.email})
    if(exitingUser){
        notifier.notify({
            title: 'Oopsie!',
            message: 'User Alreay Exist',
            sound: true,
            wait: true
          })
    }
    else{
        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
        const userdata = await collection.insertMany(data)
        console.log(userdata)
        return res.redirect('index_al.html')
    }
})

app.post('/userLogin',async (req,res)=>{
    try{
        const check = await collection.findOne({email: req.body.Email});
        if(!check){
            notifier.notify({
                title: 'Oopsie!',
                message: 'Account Not Found',
                sound: true,
                wait: true
              })
        }
        const isPasswordMatch = await bcrypt.compare(req.body.pwd, check.password);
        if (!isPasswordMatch) {
            notifier.notify({
                title: 'Oopsie!',
                message: 'Wrong Password',
                sound: true,
                wait: true
              })
        }
        else{
            notifier.notify({
                title: 'Welcome!',
                message: 'Login Successful',
                sound: true,
                wait: true
              })
            res.redirect('index_al.html')
        }
    }
    catch{
        res.redirect('login_1.html')
        notifier.notify({
            title: 'Oopsie!',
            message: 'Something Went Wrong',
            sound: true,
            wait: true
          })
    }
})

app.post('/publishBookG',async (req,res)=>{
    var data = {
        bookName:req.body.bname,
        author:req.body.regulation,
        regulation:req.body.bookAge,
        bookAge:req.body.price,
        price:req.body.price,
        description:req.body.description
    }

    const bookdata =  await collectionBook.insertMany(data)
    console.log(bookdata)
    notifier.notify({
        title: 'Success!',
        message: 'Book succesfully Published',
        icon: path.join(__dirname, 'checked.jpg'),
        sound: true,
        wait: true
      })
    return res.redirect('index_al.html')
})

app.get('/',(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })

    return res.redirect('index.html');
}).listen(PORT);


console.log(`successfully running on server at ${PORT}`);