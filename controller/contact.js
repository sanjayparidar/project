var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
   
   var pagedata={title:"contact",pagename:"contact/index"};
	res.render("layout",pagedata);
  
});


module.exports=router;