const mongoose = require("mongoose")


const dbUrl = "mongodb+srv://ibrahim:asd123@nodeblog.nhgj3tt.mongodb.net/?retryWrites=true&w=majority"

exports.dbToConnect=async ()=>{
    try {
        await mongoose.connect(dbUrl, {useUnifiedTopology: true , useNewUrlParser:true })
        console.log("veri tabanına bağlanildi")

    }catch (e) {
        console.log("HATA : veri tabanına bağlanılamadi")
    }


}

