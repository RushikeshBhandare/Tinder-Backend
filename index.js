const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('server is running ok ')
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server running on ", PORT);
})