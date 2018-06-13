var express = require('express');
var router = express.Router();
var category = require("../model/category");
var Mongo=require("mongodb");


router.get("/", function(req, res){
	var pagedata = {title : "Add Category", pagename : "admin/addcategory", message : req.flash('msg')};
	res.render("adminlayout", pagedata);
});

router.post("/", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		req.flash("msg", "Successful added");
		res.redirect("/admin/addcategory");
	});

});

router.post("/update",function(req,res){

	var id=req.body.id;
	delete req.body.id;
	category.updateWhere({_id:Mongo.ObjectId(id)},req.body,function(err,result){
		res.redirect("/admin/viewcategory");
	});
});

module.exports=router;