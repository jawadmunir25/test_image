let express = require('express');
let app = express();
let autoLoader = require('auto-loader');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let compression = require('compression');
let cors = require('cors');
let https = require('https');
let fs = require('fs');
let helmet = require('helmet');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());


let App = autoLoader.load(__dirname +'/App');
global.Controller = App.Controllers;
global.Model = App.Models;
global.Mongoose = mongoose;
global.Schema = mongoose.Schema;
global.Config = autoLoader.load(__dirname+'/Config');

mongoose.connect(Config.DB.url + Config.DB.name, (err)=>{
	if(err)
		console.log('Unable to connect to '+ Config.DB.name + ' database.');
	else
		console.log('Successfully connected to '+ Config.DB.name + ' database.')
});

global.Route = express.Router();
if(Config.Api.prefix == ""){
	app.use('/', require(__dirname+'/Routes/'+Config.Api.version+'/routes'));
}else{
	app.use('/'+Config.Api.prefix+'/', require(__dirname+'/Routes/'+Config.Api.version+'/routes'));
}

	server = app;



server.listen(Config.App.port, ()=>{
	console.log('Server Successfully Started.');
});
