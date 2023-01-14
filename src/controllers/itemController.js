//model address
const itemModel=require("../models/itemModel")

const createItem=async function(req,res){
    try{
        const data = req.body;
        if(Object.keys(data).length==0) return res.status(400).send({status: false , msg: "please provide details"})
        
         const name=await itemModel.findOne({productName:data.productName})
         if(name) return res.status(400).send({status: false , msg: "name should be unique"})
          
        const creitem = await itemModel.create(data)
          res.status(201).send({status:"GENERATED" , data :creitem})
      }catch(err){
          res.status(500).send({status:false, msg: err.message})
      }
} 
module.exports={createItem}

