const mongoose=require("mongoose");

const grnLineItemSchema = new mongoose.Schema({
    productName : String,
    quantity : String,
    stockPrice : String,
    isDeleated :{
      type : Boolean,
      default :false
    }

},  {timestamps:true}
);
module.exports= mongoose.model("grnLineItem" ,grnLineItemSchema )