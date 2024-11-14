const express = require('express')
const app = express()
const port=5000

// repond with "hello world" when a get request is made to the homepage
app.get('/' , (req, res) => {
    res.send("hello world ")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);

    
})