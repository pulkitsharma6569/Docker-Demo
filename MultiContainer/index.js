const app = require('express')();
const axios = require('axios').default;

app.get('/movies',async(req,res)=>{
    const {data} = await axios.get('http://backend:8000/movies');
    res.status(200).json({result:data});
}); 


app.listen(8000);