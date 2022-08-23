const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ProductSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:String,
        get:function (data){
            try {
                return JSON.parse(data)
            }catch (e) {
                return data
            }
        },
        set:function (data){
            return JSON.stringify(data)
        }
    }

},{
    timestamps:true
})

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product