const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('<h1>Helo Docker</h1>');
});

console.log('hello');
app.listen(8000 , () => {
    console.log('listening to port 80 ....');
});