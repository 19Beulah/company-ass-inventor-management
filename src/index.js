const express =require("express");
const mongoose =require("mongoose");
const router=require("./routers/router.js");
const app=express();
app.use(express.json());

mongoose.connect("mongodb+srv://bebooks:Pbeulah8977@bbook.gbzwer2.mongodb.net/test", {useNewUrlParser:true}, mongoose.set('strictQuery', false))

.then(()=> console.log("mongoDb is connected"))
.catch(err => console.log(err))

app.use('/',router)
app.listen(3000,function(){
    console.log('app is running on', + 3000);
})