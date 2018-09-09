
const bodyParser = require('body-parser');
var Handlers = require('./controllers');

module.exports = {
	'router': Routify
}


function Routify(app){ //change '/tasks' on all of these
	app.use(bodyParser.json()); //this is telling that we want the routes set up to make our app like an API 
	app.post('/api/cakes', function(req, res){
		Handlers.create(req, res);
	});

	app.get('/api/cakes', function(req, res){
		Handlers.findAll(req, res);
	});

	app.get('/api/cakes/:id', function(req, res){
		Handlers.findOne(req, res);
	});

	app.put('/api/cakes/:id', function(req, res){
		console.log(req.body);
		Handlers.updateOne(req, res);
	});

	

	return app;
}