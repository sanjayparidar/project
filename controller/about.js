var express=require("express");
var router=express.Router();
router.get("/", function(req,res){

var pagedata={title:"about",pagename:"about/index"};
	res.render("layout",pagedata);

	});

module.exports=router;