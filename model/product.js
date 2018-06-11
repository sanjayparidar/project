var connection=require("../config/connect");

var config=require("../config/db");

module.exports.insert=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.db);
		db.collection('product').insert(obj, cb);
	});
}

module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.db);
		db.collection('product').find().toArray(cb);
	});
}


module.exports.remove=function(obj,cb){

	connection.init(function(err,client){
		var db=client.db(config.db);
		db.collection("product").remove(obj,cb);
	});
}