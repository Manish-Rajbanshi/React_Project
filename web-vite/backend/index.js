// const express = require('express')
// const { chats } = require('./data/data')
// const dbConnect = require ('./db')
// const app = express()
// const port=5000
// dbConnect()
// // repond with "hello world" when a get request is made to the homepage
// app.get('/' , (req, res) => {
//     res.send("hello manish ")
// })
// app.get('/api/chats',(req, res)=>{
//     res.send(chats)  
// })

// app.get('/api/chats/:id',(req, res)=>{
//     // console.log(req.params.id);
//     const singleData= chats.find((c)=> c._id=== req.params.id)
//     res.send(singleData)
    
// })

// app.use('auth/api, rquired')
// app.listen(port,()=>{
//     console.log(`server is running on http://localhost:${port}`);

    
// })


const express = require('express')

const dbConnect = require('./db')
const app = express()
const port=5000
dbConnect()
app.use(express.json())

app.use('/api/auth', require('./routes/Auth'))
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);})