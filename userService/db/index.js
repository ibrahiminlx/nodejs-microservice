const {Sequelize, DataTypes} = require("sequelize")
const db={}
const sequelize = new Sequelize("userDb","root","",{
    host:"localhost",
    dialect:"mysql",
    pool:40,
    logging:true,
    retry:3
})
db.Sequelize=Sequelize
db.sequelize=sequelize

db.connect= async ()=>{
    return new Promise(async(resolve, reject)=>{
        try{
            await db.sequelize.authenticate({logging:true})
            console.log("bağlantı başarılı")
            // db.createTables()
            resolve(db)

        }catch (err){
            console.log(err)
            reject(err)
        }
    })
}
db.createTables= async()=> {
    const User = require("../Model/UserModel")

    await User.sync({force:true})
    sequelize.sync({force:true})
}
module.exports = db
