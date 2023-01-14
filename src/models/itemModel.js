const  mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    productName : {
       type : String,
       unique : true
    },
    quantity : String,
    stockPrice : String,
    sellPrice : Number,
    isDeleated :{
        type : Boolean,
        default :false
    }
},
{ timestamps : true }
)

module.exports = mongoose.model("item" ,itemSchema )