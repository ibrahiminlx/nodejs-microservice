const express = require("express")
const app = express()
const router=express.Router()
const {dbToConnect}=require("./db/db")
const Product = require("./Model/ProductModel")

const NRP=require("node-redis-pubsub")
const nrp = new NRP({port:6379,scope:"user"})

const createProduct = (user)=>{
    const product = new Product({
        name:Math.random().toString(36),
        user:user

    })
    product.save().then((r)=>{
        console.log("r",r)
    })
}
nrp.on("created_new_user",(data)=>{
    console.log("data",data)
    createProduct(data)
})


router.get("/product",(req,res)=>{
    Product.find().then((r)=>{
        res.json(r)
    })
})




app.use(express.json())
app.use(express.urlencoded())
app.use(router)

dbToConnect().then(()=>{
    const server=app.listen("3333",()=>{
        console.log("3333 port online Product")
    })

})

