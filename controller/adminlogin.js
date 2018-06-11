var express=require("express");
var router=express.Router();

var MongoClient=require("mongodb").MongoClient;

var url="mongodb://localhost:27017";

router.get("/", function(req,res){

var pagedata={title:"admin",pagename:"admin/index",message:req.flash("msg")};
	res.render("adminlayout",pagedata);

	});

router.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});

router.post("/", function(req, res){
	// console.log(req.body);
	var u = req.body.username;
	var p = req.body.password;
	MongoClient.connect(url, function(err, client){
		var db =  client.db("promohit");
		db.collection('admin').find({ username : u}).toArray(function(err, result){
			if(result.length==0)
			{
				req.flash("msg", "invalid Username and Password");
				res.redirect("/admin");
			}
			else
			{
				if(result[0].password==p)
				{
					req.session.adminid=result[0]._id;
					req.session.admin_name=result[0].name;
					req.session.is_admin_logged_in=true;
					res.redirect("/admin/dashboard");
				}
				else
				{
					req.flash("msg","invalid Password");
					res.redirect("/admin");
				}
			}
		});
	});




});



module.exports=router;