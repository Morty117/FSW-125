const express= require('express')
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.text())
app.post('/',(req,res)=>{ //POST request submitted at root page
    console.log("request received at URL of root")
    console.log(req.body)
    res.send("data received")
})
app.post('/hussain', (req,res)=>{ //
    console.log("request received at URL of hussain")
    console.log(req.body);
    res.send("Data received")
})
app.listen(3000)