//write express js boiler plate code

const express = require('express')
const app = express()
const { createtodo, updatetodo }=require('./types')
const {todo}=require("./db");

app.use(express.json());
// const port = 3000

app.post('/todo', async function(req, res) {
    const createpayload=req.body;
    const parsepayload=createtodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you send the young inputs",
        })
        return
    }
    //put it into mongodb
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
  })

app.get('/todos', async function(req, res){
  const todos=await todo.find({});
  console.log(todos)//promise
  res.json({
    todos
  })
})

app.put("/completed", async function(req, res){
    const updatepayload=req.body;
    const parsepayload=updatetodo.safeParse(updatepayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong message",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000);