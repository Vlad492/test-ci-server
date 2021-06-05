const express = require('express')
const app = express()
app.listen(80,()=>console.log("Server has been started"))

app.get('/',(req,res)=>{
    res.send(new Date())
})
app.get('/hello',(req,res)=>{
    res.send('hello-world')
})