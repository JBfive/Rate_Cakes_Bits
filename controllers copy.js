const Cakes = require('./mongoose'); //name the variable for below

module.exports = {
	create: create,
	findAll: findAll,
	findOne: findOne,
	
	updateOne: updateOne
}


function create(req, res){ //add the variable name in front of the callback functions.
	Cakes.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function findAll(req, res){
	Cakes.find({})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));

}
function findOne(req, res){
	Cakes.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
// function updateOne(req, res){
// 	Cakes.findByIdAndUpdate(req.params.id, {$set: {rating:req.body.rating, comment:req.body.comment}}, {new: true})
// 		.then(data=>{
// 			console.log('req.body is '+req.body);
// 			res.json(data)})
	
// 		.catch(errs=>{
// 			console.log('mongoose error');
// 			res.json(errs)});
// }

function updateOne(req, res){
	Cakes.findById(req.params.id)
		.then(cake=>{
			 //assumes that 
			cake.rating.push(req.body);
			return cake.save();
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
