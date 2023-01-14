//model adress
const orderLineitemModel=require("../models/orderLineItemModel")
const orderModel = require("../models/orderModel")

const createOrderLineItem=async function(req,res){
    try{
        const data = req.body;
        if(Object.keys(data).length==0) return res.status(400).send({status: false , msg: "please provide details"})
        
         const productName=await orderLineitemModel.findOne({productName:data.productName})
         if(productName) return res.status(400).send({status: false , msg: "productName should be unique"})
          
        const creOrderLineItem = await orderLineitemModel.create(data)
          res.status(201).send({status:"GENERATED" , data :creOrderLineItem })
      }catch(err){
          res.status(500).send({status:false, msg: err.message})
      }

}
const createOrder=async function(req,res){
    try{
        const data = req.body;
        const checkdata =data.orderLineItems
        if(!Object.keys(data)) return res.status(400).send({status: false , msg: "please provide details"})
         const orderLineItems=await orderLineitemModel.findOne({orderLineItems:checkdata._id})
         let num=data.invoiceNumber 
         let cusNam=data.customerName 
         let cus=data.customerFullAddress
         let all ={invoiceNumber:num,customerName:cusNam,customerFullAddress:cus,orderLineItems:orderLineItems,createdAt:new Date(),isDeleated:false}
         
         const creGrn =await orderModel.create(all)
        res.status(201).send({status:"GENERATED" , data :creGrn  })
      }catch(err){
          res.status(500).send({status:false, msg: err.message})
      }
}
module.exports={createOrderLineItem,createOrder}