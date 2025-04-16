const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const useModel = require('./models/schema')
require('dotenv').config();

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.get('/',(req,res)=>{
    useModel.find({})
    .then((result)=> res.json(result))
    .catch((err)=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    useModel.create(req.body)
    .then((result)=>{res.json(result)})
    .catch((err)=>{res.json(err)})
})

app.get('/getusers/:id',(req,res)=>{
    const id=req.params.id
    useModel.findById({_id:id})
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    useModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.delete('/deleteuser/:id',(req,res)=>{
    const id = req.params.id;
    useModel.findByIdAndDelete({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.listen(5050,()=>{
    console.log('server runnig')
})




// mongodb://localhost:27017