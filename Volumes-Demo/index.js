const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',(req,res)=>{
   try{
   fs.appendFileSync(__dirname+'/Data/Data.txt',' Hello this is the data File !!!');
console.log('file updated...');
   }
   catch(err){}
   res.sendFile(__dirname+'/Data/Data.txt');
});

app.listen(3000,()=>{
    console.log('listening to port 3000....');
});