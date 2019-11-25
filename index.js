const express = require("express", "4.17.1");
const app= express()

app.get("/",function(req,res){
res.send("HelLo world")
})
//app.listen(host="0.0.0.0",port="3000");
app.listen("3000","0.0.0.0")
