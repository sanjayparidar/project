var express=require("express");
var router=express.Router();

var MongoClient=require("mongodb").MongoClient;

var url="mongodb://localhost:27017";

router.get("/", function(req,res){

var pagedata={title:"login",pagename:"login/index"};
	res.render("layout",pagedata);

	res.render("layout",pagedata);

	});

router.post("/", function(req,res){
	// console.log(req.body);
    var u=req.body.username
    var p=req.body.password

    MongoClient.connect(url,function(err,client){

    	var db = client.db("promohit")
    	db.collection("user").find({fullname:u}).toArray(function(err,result){
           console.log(result);
           if(result.length==0)

           {
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

           		res.redirect("/user");}

           		else 
           		{
           			res.redirect("/login");
           		}
           	}
           

    	});
    });

});

module.exports=router;