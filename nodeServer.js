var express = require('express');
var db = require('./mysql.js');
var bodyParser = require('body-parser');
var app = express();

var sql = 'SELECT * FROM user_info';
var sqlParam = [12,32,4];
var resdata = {error: 0, errno: '', data: null};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/userInfoQue', function (req, res) {
	
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	})
	
	sql = 'SELECT * FROM user_info';
	
	db.que(sql, function(err, results, fields){
		if (err) {
			console.log(err);
			return;
		}
		console.log('用户数量 : ', results);
		resdata.error = 1;
		resdata.errno = 'ok';
		var obj = [];
		for (var index = 0; index < results.length; index++) {
			obj[index] = results[index];
		}
		resdata.data = obj
		
		res.send(resdata);
	});
	
})

app.post('/userInfoAdd', function (req, res) {
	
	console.log(req.body);
	console.log('req:', req.body);
	
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	})
	
	sql = 'INSERT INTO user_info(userName,age,phone) VALUES(?,?,?)';
	var addSqlParams = ['GG',24,1234509];
	
	addSqlParams[0] = req.body.name;
	addSqlParams[1] = req.body.age;
	addSqlParams[2] = req.body.phone;
	db.add(sql, addSqlParams, function(err, results, fields){
		if (err) {
			console.log(err);
			return;
		}
		console.log('用户post: ', results);
		resdata.error = 0;
		resdata.errno = 'ok';
		
		res.send(resdata);
	});
	
})

app.put('/userInfoMod', function (req, res) {
	
	console.log(req.body);
	console.log('req:', req.body);
	
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	})
	
	sql = 'UPDATE user_info SET userName = ?,age = ?,phone = ? WHERE id = ?';
	var modSqlParams = ['GG',24,1234509,3];
	
	modSqlParams[0] = req.body.name;
	modSqlParams[1] = req.body.age;
	modSqlParams[2] = req.body.phone;
	modSqlParams[3] = req.body.id;
	
	db.mod(sql, modSqlParams, function(err, results, fields){
		if (err) {
			console.log(err);
			return;
		}
		console.log('用户post: ', results);
		resdata.error = 0;
		resdata.errno = 'ok';
		
		res.send(resdata);
	});
	
})

app.delete('/userInfoDel', function (req, res) {
	
	console.log(req.body);
	console.log('req:', req.body);
	
	res.set({
	  'Content-Type': 'text/plain',
	  'Content-Length': '123',
	})
	
	sql = 'DELETE FROM user_info where id=?';
	
	var delSqlParams = [3];
	delSqlParams[0] = req.body.id;
	
	db.del(sql, delSqlParams, function(err, results, fields){
		if (err) {
			console.log(err);
			return;
		}
		console.log('用户post: ', results);
		resdata.error = 0;
		resdata.errno = 'ok';
		
		res.send(resdata);
	});
	
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
