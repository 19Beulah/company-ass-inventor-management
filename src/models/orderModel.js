const  mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    invoiceNumber : {
        type:Number,
        required:true,
        unique:true
    },
    customerName  : {
       type : String,
       required : true
    },
    customerFullAddress : {
        type : mongoose.Schema.Types.Mixed,
        required : true
    },
    orderLineItems :{
        ref : "orderLIneItem",
        type : ObjectId
    },   
     isDeleated :{
        type : Boolean,
        default :false
    },

},{timestamps:true}
)
module.exports=mongoose.model("Order",orderSchema)