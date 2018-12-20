var express = require('express');
var app = express();
var bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var unirest = require('unirest');

app.get('/sample',function(req,res)
{
console.log("Hello ITG !!!");
res.send("2+3")
});
app.get('/itg',function(req,res)
{
console.log("Hello ITG Folks!!!");
res.send("Hello ITG Folks!!!")
});
app.post('/login',function(req,res)
{
	var user = req.body.username;
	var pass = req.body.password;
	var data = {"Message":"Your user name is " +user+" Your password is "+pass};
	console.log("Your user name is " +user+" Your password is "+pass);
	res.json(data)
});

app.get('/endpoint',function(req,response)
{
		unirest.get('https://itgfunctionappdemo.azurewebsites.net/api/HelloWorld?name='+req.query.name+'&code=Mq9fzFAsgdTBsWqho2NJw9qaxFxS//mfd78pp5kECT5Gq7EQ3yHuZw==').end(function(res){
		response.send(res.body);
		});
})

app.listen(process.env.port||process.env.PORT||3000,function()
{
console.log("Server is Running")
});

