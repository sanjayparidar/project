var express=require("express");
var router=express.Router();

router.use("/",require("./home"));

router.use("/about",require("./about"));

router.use("/about",require("./about"));

router.use("/contact",require("./contact"));

router.use("/login",require("./login"));

router.use("/signup",require("./signup"));


router.use("/admin",require("./admin"));

router.use("/user",function(req,res,next){
        
        if(!req.session.is_user_logged_in)
        {
        	res.redirect("/login");
        }

        next();

}, require("./user"));

module.exports=router;
