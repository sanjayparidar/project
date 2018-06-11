var mongoclient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";

module.exports.init=function(cb){
	mongoclient.connect(url,cb);
};