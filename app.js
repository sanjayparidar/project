var express=require("express");
var app=express();

var bodyparser=require("body-parser");

var session = require("express-session");

var cookieparser = require("cookie-parser");

var flash = require("express-flash");

var cache=require("nocache");

var upload=require("express-fileupload");




app.set("view engine","ejs");
app.set("views","view");




app.use(express.static(__dirname+"/public/"));

app.use(bodyparser());

app.use(cookieparser());

app.use(session({secret:"secret"}));

app.use(cache());

app.use(flash());

app.use(upload());








app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});

app.use(require("./controller/default"));






app.listen(process.env.PORT||1994,function(){

	console.log("server start");
	console.log("hello")
});






