const { timeStamp } = require("console");
const  mongoose = require("mongoose");

const  orderLIneItemSchema = new mongoose .Schema({
    productName :{ 
        type: String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    sellPrice : {
        type : String,
        required : true
    },
    isDeleated :{
        type : Boolean,
        default :false
    }

}, {timestamps : true}
);

module.exports=mongoose.model("orderLIneItem",orderLIneItemSchema)