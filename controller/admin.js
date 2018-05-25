var express=require("express");
var router=express.Router();
router.get("/", function(req,res){

var pagedata={title:"admin",pagename:"admin/index"};
	res.render("adminlayout",pagedata);

	});

module.exports=router;