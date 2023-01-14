const express = require("express")
const router = express.Router()
//controllers adress//
const grnController =require("../controllers/grnController")
const itemController =require("../controllers/itemController")
const orderController = require("../controllers/orderController")
//routers-post api 
router.post("/creategrnLineItem",grnController.createGrnLineItem)
router. post("/creategrn" ,grnController.createGrn)

router.post("/createOrderLineItem",orderController.createOrderLineItem)
router.post("/createOrder",orderController.createOrder)

router.post("/createItem",itemController.createItem)

//routers-get api
router. get("/getgrn/:_id" ,grnController.getGrn)

//router-put api
router. put("/putgrn/:grnId" ,grnController.putgrn)
module.exports = router;

//router-delete api
router.delete("/deletegrn/:grnId",grnController.deletegrn)