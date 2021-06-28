const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/profile/:name',function(req,res){
      // res.sendFile(__dirname+'/demo.html') 
      data = {Email:'test@gmail.com',id:5210,skills:['node','angualr','mongoDB']}
      res.render('profile',{name:req.params.name,getData:data});
})

app.listen(5000);