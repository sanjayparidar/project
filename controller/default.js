var express=require("express");
var router=express.Router();

router.use("/",require("./home"));

router.use("/about",require("./about"));

router.use("/about",require("./about"));

router.use("/contact",require("./contact"));

router.use("/login",require("./login"));

router.use("/signup",require("./signup"));

router.use("/admin",require("./adminlogin"));

router.use("/logout",require("./logout"));

// router.use("/user",backdoor,require("./user"));

/*  admin panel coading ------------*/

router.use('/admin', require('./adminlogin'))
router.use("/admin/dashboard", backdoor_admin, require("./admindash"));
router.use("/admin/addproduct", backdoor_admin, require("./adminaddproduct"));
router.use("/admin/addcategory", backdoor_admin, require("./adminaddcategory"));
router.use("/admin/viewcategory", backdoor_admin, require("./adminviewcategory"));
router.use("/admin/viewproduct", backdoor_admin, require("./adminviewproduct"));

function backdoor(req,res,next){
        
        if(!req.session.is_user_logged_in)
        {
        	res.redirect("/login");
        }

        next();

}

function backdoor_admin(req, res, next)
{
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/");
	}
	next();
}


module.exports=router;
