var express = require('express');
var router = express.Router();
var category = require("../model/category");


router.get("/", function(req, res){
	var pagedata = {title : "Add Category", pagename : "admin/addcategory", message : req.flash('msg')};
	res.render("adminlayout", pagedata);
});
router.post("/", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		req.flash("msg", "Successful added");
		res.redirect("/admin/addcategory");
	});

});

module.exports=router;