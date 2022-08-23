const express = require("express")
const app = express()
const router=express.Router()
const mysql = require("mysql2")
const db = require("./db");
const User = require("./Model/UserModel")
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"userDb"
// })

const NRP=require("node-redis-pubsub")
const nrp = new NRP({port:6379,scope:"user"})

router.post("/user/createUser",async (req,res)=>{
    const {email,name,age}= req.body
    try{
        const data = await User.create({
            email,
            name,
            age
        },{logging:true,validate:true})
        res.status(200).json(data)
        nrp.emit("created_new_user",data)

    }catch (error){
        res.status(500).json({msg:"hata gerçekleşti"})
        console.log("error",error)
    }
})

router.get("/user",(req,res)=>{
    res.send("user service")
})




app.use(express.json())
app.use(express.urlencoded())
app.use(router)



const server=app.listen("3334",async ()=>{
    console.log("3334 port online User")
    // await db.createTables()
    await db.connect()
})