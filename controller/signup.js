var express=require("express");
var router=express.Router();



var mongodb=require("mongodb").MongoClient;

var url="mongodb://localhost:27017";



router.get("/",function(req,res){
   
  var pagedata={title:"signup",pagename:"signup/index"};
   res.render("layout",pagedata);
  
});

router.post("/", function(req,res){

      console.log("comming -------------");
      var obj=req.body;
      // console.log(obj);

      mongodb.connect(url,function(err,client){

       if (err){

          console.log("error",err);
          return;
       }
       
          var db=client.db("promohit");

          db.collection("user").insert(obj,function(err,result){

             
          if(err){

               console.log("error404", err);
               return;
          }

          console.log(result);

          res.redirect("/login");

          });

      });


});





module.exports=router;