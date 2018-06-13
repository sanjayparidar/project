var express = require('express');
var router = express.Router();
var product = require('../model/product');
var Mongodb=require("mongodb");
var category=require("../model/category");

router.get("/", function(req, res){

	product.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/viewproduct", data : result};
		res.render("adminlayout", pagedata);
	});


});

router.get("/delete/:id",function(req,res){
	console.log(req.params);
	product.remove({_id:Mongodb.ObjectId(req.params.id)},

		function(err,result){
		console.log(result);
		res.redirect("/admin/viewproduct");
		

	});
});

router.get("/update/:id",function(req,res){
	product.findWhere({_id:Mongodb.ObjectId(req.params.id)},
		function(err,result){

		var prodata=result[0];
		category.find(function(err,result){
			var pagedata={title:"updateproduct",pagename:"admin/updateproduct",prodata:prodata,catedata:result};
			res.render("adminlayout",pagedata);

		});
	});
});


module.exports=router;