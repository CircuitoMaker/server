const express = require('express');
const app = express();

app.get('/user',(req,res)=>{

    res.send("Server")
})




app.listen(3000, ()=>{
    console.log("Primeiro Servidor");
});