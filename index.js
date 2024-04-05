// 1. importing the express 
const express=require("express")
const employeeModel = require("./model")
const cors = require('cors')

// 2. intialization
const app=new express()
// middleware parsing the parameter
app.use (express.urlencoded({extended:true}))
app. use(express. json())
app.use(cors());

// 3.api create 
app.get('/',(req,res)=>{
    res.send("This message is send from Alyyy..")
})
app.get('/aly',(req,res)=>{
    res.send("Nannayittund....")
})
app.get('/data',(req,res)=>{
    res.send({
        "name":"Aly",
        "age":18
    }
    )
})
// api for adding data 
app. post ('/create', async(req,res)=>{
    var result = await new employeeModel (req.body)
    result.save()
    res. send("Data Adder")
})
// api for viewing data 
app.get('/view', async (req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log  (data)

})
// api for deleting data
app. delete ('/remove/:id',async(req,res)=>{
    console. log (req.params)
    let id =req.params . id
    await employeeModel . findByIdAndDelete(id)
    res. send("Deleted")
})
// api for updating data
app. put('/edit/:id',async(req , res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")
})
// 4.port
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})

