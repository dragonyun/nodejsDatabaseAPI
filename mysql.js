var db = {}
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 15,
  host     : 'localhost',
  user     : 'root',
  password : '87654321',
  database : 'node_test'
});

// 查询数据
db.que = function(sql, callback){
 
	if (!sql) {
		callback();
		return;
	}
	pool.query(sql, function(err, results, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, results, fields);
	});
}

// 插入数据
db.add = function(sql, addSqlParams, callback){
 
	if (!sql) {
		callback();
		return;
	}
	pool.query(sql, addSqlParams, function(err, results, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, results, fields);
	});
}

// 修改数据
db.mod = function(sql, modSqlParams, callback){
 
	if (!sql) {
		callback();
		return;
	}
	pool.query(sql, modSqlParams, function(err, results, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, results, fields);
	});
}

// 删除数据
db.del = function(sql, delSqlParams, callback){
 
	if (!sql) {
		callback();
		return;
	}
	pool.query(sql, delSqlParams, function(err, results, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, results, fields);
	});
}

module.exports = db;