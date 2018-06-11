var express = require('express');
var router = express.Router();
var product = require('../model/product');
var Mongodb=require("mongodb");

router.get("/", function(req, res){

	product.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/viewproduct", data : result};
		res.render("adminlayout", pagedata);
	});


});

router.get("/delete",function(req,res){
	console.log(req.query);
	product.remove({_id:Mongodb.ObjectId(req.query.id)},

		function(err,result){
		console.log(result);
		res.redirect("/admin/viewproduct");
		

	});
});


module.exports=router;