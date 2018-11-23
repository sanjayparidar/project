var fs = require("fs");
fs.readFile('demo.text',function(err,result){
console.log(result.toString());
});


console.log("Program Ended");