var express=require("express");
var app=express();

app.use(require("./controller/default"));

app.use(express.static(__dirname+"/public/"));

var bodyparser=require("body-parser");
app.use(bodyparser());

app.set("view engine","ejs");
app.set("views","view");



app.listen(process.env.PORT||1994,function(){

	console.log("server start");
});






