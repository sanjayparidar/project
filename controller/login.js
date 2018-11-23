var express=require("express");
var router=express.Router();
var user =require("../model/user");


router.get("/", function(req,res){

  var pagedata={title:"login",pagename:"login/index",massage:req.flash("msg")};
	 res.render("layout",pagedata);

	 

	 });

router.post("/", function(req,res){
	// console.log(req.body);
    var u=req.body.username
    console.log(u)
    var p=req.body.password

   

    	
    	user.find({email:u}, function(err, result){
           console.log(result);
           if(result.length==0)

           {
            req.flash("msg","invalid username and password");
           	res.redirect("/login");
           }

           else
           {
           	var data=result[0];

           	if (data.password==p)
           	{
           		req.session.userid=data._id;

           		req.session.fullname=data.fullname;

           		req.session.is_user_logged_in=true;

           		res.redirect("/");}

           		else 
           		{
                req.flash("msg","invalid password")
           			res.redirect("/login");
           		}
           	}
           

    	});
    });



module.exports=router;