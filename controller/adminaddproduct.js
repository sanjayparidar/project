var express=require("express");
var router=express.Router();
var product=require("../model/product");
var category=require("../model/category");
var changename = require("../helper/changefilename");
var path=require("path");
var Mongo=require("mongodb");
var fs=require("fs");

router.get("/",function(req,res){

		category.find(function(err,result){
			var pagedata={title:"Add Product",pagename:"admin/addproduct",message:req.flash("msg"),catedata:result};

			res.render("adminlayout",pagedata);
		});
});


router.post("/",function(req,res){

	var file = req.files.image;
	var newname = changename(file.name);
	var filepath = path.resolve("public/productimage/"+newname);
		file.mv(filepath, function(err){
		if(err){
			console.log(err);
			return;
		}
		req.body.image=newname;

	product.insert(req.body,function(err,result){

		req.flash("msg","new product added");

		res.redirect("/admin/addproduct");
	 });
  }); 

});


router.post("/update", function(req, res){
	
	var id = req.body.id;
	var image = req.body.image;
	delete req.body.id;
	delete req.body.image;

	if(req.files)
	{
		var file = req.files.image;
		var newname = changename(file.name);
		var filepath = path.resolve("public/productimage/"+newname);
		file.mv(filepath);
		req.body.image = newname;
		var oldfilepath = path.resolve("public/productimage/"+image);
		fs.unlinkSync(oldfilepath);

	}
	product.update({_id : Mongo.ObjectId(id)}, req.body, function(err, result){
		res.redirect("/admin/viewproduct")
	});
});


module.exports=router;