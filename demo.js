function Complx(add){
    console.log(add(200,310));
}
//call back function.
Complx(function(a,b){
     return a+b;
})
//importing from other Js file.
var imp = require('./functions');
console.log(imp(10));


var http = require('http');
var data = [
   {name:"surendra",id:1920},
   {name:"anonyuous",id:1835}
]
http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'application\json'})
   res.write(JSON.stringify(data));
   res.end();
}).listen(5000);


var  page = `
  <h1>New to this</h1>
  <input type="text"/> <br></br>
  <input type="text"/> 
`
http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'application\html'})
   res.write(page);
   res.end();
}).listen(4200);

//npm package upper case(to install: npm i upper-case)
var uc  = require('upper-case');    
http.createServer(function(req,res){
   res.write(uc.upperCase('Node web page changes using nodemon'));
   res.end();
}).listen(3000);

//Read file
var fs = require('fs');
http.createServer(function(req,res){
fs.readFile('demo.html',function(err,data){
   res.writeHead(200,{'content-type':'text/html'});
   res.write(data);
   res.end();
 })
}).listen(3200);

//events(Ex:here it is "open" event)
var rs = fs.createReadStream('./demo.html');
rs.on('open',function(){
    console.log('File is open');
})

//create custom event
var events = require('events');
var eventEmitter = new events.EventEmitter();
//make custum event speak
eventEmitter.on("speak",function(name){
     console.log(name,'is speaking');
})

eventEmitter.emit("speak","surendra");