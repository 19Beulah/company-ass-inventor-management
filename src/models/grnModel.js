const  mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const grnSchema=new mongoose.Schema({
    invoiceNumber : Number,
    vendorName : String,
    vendorFullAddress : {
        type :mongoose.Schema.Types.Mixed
    },
    grnLineItems : {
        ref  : "grnLineItem",
        type : ObjectId
    },
    isDeleated :{
        type : Boolean,
        default :false
    },

}, {timestamps:true}
)
module.exports=mongoose.model("grn",grnSchema)