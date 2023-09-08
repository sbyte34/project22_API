const express = require('express')
const bodyParser = require('body-parser')
const emproute= require('./routes/router')

const connectdb = require('./db')

const app =express()


app.use(bodyParser.json())
app.use('/routes',emproute)


connectdb()
.then(()=>{
    console.log("db connect succesfull")
    app.listen(4001,()=> console.log('server is running on 4001 port'))
})
.catch(err => console.log(err))

