var express=require("express");
var router=express.Router();

var cate=require("../model/category");

var product=require("../model/product");






router.get("/", function(req,res){

// console.log("-------------",cate);
// console.log("-------------",product);
	var pagedata={title:"home",pagename:"home/index", category: cate.getAll, product: product.getAll};
	res.render("layout",pagedata);
	// console.log(pagedata);


	});



module.exports=router;