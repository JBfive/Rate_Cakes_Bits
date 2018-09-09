const express = require('express');
const path = require ('path');

const routes = require('./router');

const app = express();



app.use(express.static(path.join(__dirname, 'client/dist/client')))

routes.router(app);

app.listen(8000, function(){
	console.log('2nd time is the charm!');
})