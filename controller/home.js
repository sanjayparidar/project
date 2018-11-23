var express=require("express");
var router=express.Router();

var category=require("../model/category");

var product=require("../model/product");



router.get("/", function(req,res){

	console.log("first");
setImmediate(function(){
    console.log("second");
});
console.log("third");



	
product.find(function(err, result){
		var productresult = result;
		category.find(function(err, result){
			var cateresult = result;
			var pagedata = {title : "Home Page", pagename : "home/index", catedata : cateresult, prodata : productresult};
			res.render("layout", pagedata);
		});
	});

});


module.exports=router;