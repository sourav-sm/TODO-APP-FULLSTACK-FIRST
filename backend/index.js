//write express js boiler plate code

const express = require('express')
const app = express()
const { createtodo, updatetodo }=require('./types')

app.use(express.json());
// const port = 3000

app.post('/todo', (req, res) => {
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you send the young inputs",
        })
        return
    }
    //put it into mongodb
  })

app.get('/todos', (req, res) => {
  
})

app.put("/completed", (req, res) => {
    const updatepayload=req.body;
    const parsepayload=updatetodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong message",
        })
        return;
    }
})