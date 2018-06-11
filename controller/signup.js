var express=require("express");
var router=express.Router();

var user =require("../model/user");

router.get("/",function(req,res){
   
  var pagedata={title:"signup",pagename:"signup/index"};
   res.render("layout",pagedata);
  
});



router.post("/", function(req, res){
  user.insert(req.body, function(err, result){
    console.log(result);
    res.redirect('/login');
  });
});




module.exports=router;

