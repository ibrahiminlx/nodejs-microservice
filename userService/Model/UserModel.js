
const db = require("../db/index")
const {DataTypes}=require("sequelize")
const User=db.sequelize.define("User",{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    email:{
        type:DataTypes.STRING({length:50}),
        unique: true,
    },
    name:{
        type:DataTypes.STRING,
        default:"Ali"
    },
    age:{
        type:DataTypes.INTEGER,
        default: "20"
    }
},{
    createdAt:true,
    updatedAt:true,

})

module.exports = User