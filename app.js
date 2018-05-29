var express=require("express");
var app=express();

var bodyparser=require("body-parser");

var session = require("express-session");

var cookieparser = require("cookie-parser");


app.set("view engine","ejs");
app.set("views","view");




app.use(express.static(__dirname+"/public/"));

app.use(bodyparser());

app.use(session({secret:"secret"}));

app.use(cookieparser());

app.use(require("./controller/default"));






app.listen(process.env.PORT||1994,function(){

	console.log("server start");
});






