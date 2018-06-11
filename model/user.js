var connection = require("../config/connect");
var config = require("../config/db");

// console.log(db.db);
module.exports.insert=function(obj, cb){
	connection.init(function(err,client){
		var db = client.db(config.db);
		db.collection("user").insert(obj,cb)
	});
}


module.exports.find=function(obj, cb){
	connection.init(function(err,client){
		var db = client.db(config.db);
		db.collection("user").find(obj).toArray(cb);
	});
}
