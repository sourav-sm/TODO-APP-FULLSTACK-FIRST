/*
todos{
    title:string,
    description:string,
    completed:boolen
}
*/ 
const mongoose=require('mongoose');
// const { string, boolean } = require('zod');
//mongodb url->mongodb+srv://developersourav135:44281219@cluster0.cim5m44.mongodb.net/todos
mongoose.connect("mongodb+srv://developersourav135:44281219@cluster0.cim5m44.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
modeule.exports= {
    todo
}
