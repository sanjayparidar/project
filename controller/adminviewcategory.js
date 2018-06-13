var express = require('express');
var router = express.Router();
var category = require('../model/category');
var Mongodb=require("mongodb");

router.get("/", function(req, res){

	category.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/viewcategory", data : result};
		res.render("adminlayout", pagedata);
	});


	
});


router.get('/edit/:id', function(req, res){
	
	category.findWhere({ _id:Mongodb.ObjectId(req.params.id)}, function(err, result){
		var pagedata = { title : "Update Category", pagename : "admin/updatecategory", data : result[0]};
		res.render("adminlayout", pagedata);
	});
	
});

router.get("/delete/:id",function(req,res){
	console.log(req.params);
	category.remove({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
		console.log(result);
		res.redirect("/admin/viewcategory");
	});
});



module.exports=router;