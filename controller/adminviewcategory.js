var express = require('express');
var router = express.Router();
var category = require('../model/category');

router.get("/", function(req, res){

	category.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/viewcategory", data : result};
		res.render("adminlayout", pagedata);
	});


	
});



module.exports=router;