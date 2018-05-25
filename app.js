var express=require("express");
var app=express();

app.use(require("./controller/default"));

var bodyparser=require("body-parser");
app.use(bodyparser());


app.listen(process.env.PORT||1994,function(){

	console.log("server start");
})

app.set("view engine","ejs");
app.set("views","view");





