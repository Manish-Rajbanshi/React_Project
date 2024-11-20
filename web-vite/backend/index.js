const express = require('express')
const { chats } = require('./data/data')
const app = express()
const port=5000

// repond with "hello world" when a get request is made to the homepage
app.get('/' , (req, res) => {
    res.send("hello manish ")
})
app.get('/api/chats',(req, res)=>{
    res.send(chats)  
})

app.get('/api/chats/:id',(req, res)=>{
    // console.log(req.params.id);
    const singleData= chats.find((c)=> c._id=== req.params.id)
    res.send(singleData)
    
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);

    
})