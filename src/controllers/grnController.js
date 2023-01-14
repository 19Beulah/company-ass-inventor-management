// models adress
const grnLineItemModel =require("../models/grnLineItemModel")
const grnModel = require("../models/grnModel")


//post api function for GrnLineItem
const createGrnLineItem= async function(req,res){
    try{
   const data = req.body;
   if(Object.keys(data).length==0) return res.status(400).send({status: false , msg: "please provide details"})
   
    const name=await grnLineItemModel.findOne({productName:data.productName})
    if(name) return res.status(400).send({status: false , msg: "name should be unique"})
     
   const creGrnLineItem = await grnLineItemModel.create(data).populate
     res.status(201).send({status:"GENERATED" , data :creGrnLineItem})
 }catch(err){
     res.status(500).send({status:false, msg: err.message})
 }
 }

//post api function for Grn
const createGrn= async function(req,res){
   try{
  const data = req.body;
  const checkdata =data.grnLineItems
  if(!Object.keys(data)) return res.status(400).send({status: false , msg: "please provide details"})
   const grnLineItems=await grnLineItemModel.findOne({grnLineItems:checkdata._id}).select({productName:1,quantity:1,stockPrice:1})
   let num=data.invoiceNumber 
   if(!num)return res.status(400).send({status:false, msg:"invoiceNumber is required"})
   let nam=data.vendorName
   if(!vendorName)return res.status(400).send({status:false, msg:"vendorName is required"})
   let qua=data.quantity 
   if(!quantity)return res.status(400).send({status:false, msg:"quantity is required"})
   let ven=data.vendorFullAddress
   if(!vendorFullAddress)return res.status(400).send({status:false, msg:"vendorFullAddress is required"})

   let all ={invoiceNumber :num,vendorName:nam,quantity:qua,vendorFullAddress:ven,grnLineItems:grnLineItems,createdAt:new Date(),isDeleated:false}
   
   const creGrn =await grnModel.create(all)
  return res.status(201).send({status:"GENERATED" , data : creGrn})
}catch(err){
    res.status(500).send({status:false, msg: err.message})
}
}

// get api
const getGrn = async function(req,res){
    try{
   let _id = req.params._id
   if(Object.keys(_id).length == 0) return res.status(400).send({Status:false , msg : "enter your details"})

   const checkDetails = await grnModel.findOne({_id:_id})
   if(!checkDetails ) return res.status(404).send({Status:false , msg : "details not found"})

    const getData=await grnModel.find({_id:_id})
    res.status(200).send({status:true, data:getData})
    }catch(err){
      res.status(500).send({status:false,msg : err.message })
    }
}
//put api
const putgrn =async function (req,res){
  try{
  const grnId = req.param.grnId
  const data=req.body
  const check =await grnModel.findOne(grnId)
 const update = await grnModel.findOneAndUpdate(
    {grnId,isDeleated:false},
    {
      invoiceNumber:data.invoiceNumber,
      vendorName : data.vendorName,
      quantity : data.quantity,
      vendorFullAddress : data.vendorFullAddress
      
    },
    {new:true}
   )
  console.log(update)
   if(!update) return res.status(404).send({status:false , msg :"not such grn"})
   res.status(200).send({status:"COMPLETED" , data:update})
  }catch(err){
    res.atatus(500).send({status:false,msg:err.message})
  }
}

//delete api
const deletegrn = async function(req,res){
  try{
   let grnId = req.param.grnId
   const deleted=await grnModel.findOneAndUpdate(
    { grnId, isDeleated: false},
    {$set:{isDeleated:true,deletedAt: Date.now()}},
    {new:true}
   )
   if(!deleted) return res.status(404).send({status:false , msg:"not found"})
   res.status(200).send({status:true,data:deleted})
  }catch(err){
    res.status(500).send({status:false,msg:err.message})
  }
}
module.exports = {createGrn,createGrnLineItem,getGrn,putgrn,deletegrn}

