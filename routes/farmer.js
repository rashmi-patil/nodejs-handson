
/*
 * GET users listing.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'root',
database: 'testdb'
});

exports.login_action = 
  function (req, res) {
        //console.log(req.body);
	//res.render('login',{title:'farmer login action '+req.body.username+' AND Password='+req.body.password})
   connection.connect();
	var query = 'SELECT * FROM tblusers WHERE UserName="'+req.body.username+'" AND Password="'+req.body.password+'"';
  console.log(query);
   connection.query(query, function (error, rows, fields) { 
	 if(!error){
		res.writeHead(200,{'Content-Type':'text/plain'});
		 for(var i=0;i<rows.length;i++){
			res.write("row"+i+":"+rows[i].UserName);
		 }	
		res.end();
	
	 }
	 else{
	 console.log("error");
	 console.log(error);
	 }
	});
	//res.render('login',{title:'farmer login '});

    
  };

exports.login = function(req,res){
	res.render('login',{title:'farmer login '})
};
