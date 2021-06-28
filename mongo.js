const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Users = require('./users.js');
var bodyParser = require('body-parser')
var jsonParser= bodyParser.json();

mongoose.connect('mongodb+srv://badman:mNVBFMySxHh8UYc@cluster0.b2eyd.mongodb.net/Details?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})/*.then(()=>{
    console.warn('Db is connected');
});*/

/*
//getting data from data base.
Users.find({},function(err,users){
    if(err) console.warn(err);
    console.warn(users);
})
*/

/*
//Add data in database.
const data = new Users({

    _id: new mongoose.Types.ObjectId(),
    name: "Panda",
    email: "panda@panda.com",
    id: 52319 
});

data.save().then((result)=>{
      console.warn(result)
})
.catch(err=>console.warn(err))
*/


//GET Api
app.get('/users',function(req,res){
       Users.find().select('name').then((data)=>{   
     /*Users.find().then((data)=>{  [to get all fields]*/
             res.json(data);
      })
})


//POST Api
app.post('/user',jsonParser,function(req,res){
    const data =  new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        id: req.body.id
    })

    data.save().then((result)=>{
        res.staus(200).json(result);
  })
  
    //res.end(req.body.name);
})

//delete post Api
app.delete('/user/:id',(req,res)=>{
    Users.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result);
    }).catch((error)=>console.warn(error))
})
app.listen(8080)