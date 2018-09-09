const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rate_cakes');
const RateSchema = new mongoose.Schema({
	comment: {type: String, required: [true, "Please provide a comment about this cake"]},
	rating: {type: Number, required: [true, "Cakes must needs be rated"], min: 1, max: 5},
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({ // rename schema, figure out what is needed for the schema
	baker: {type: String, required: [true, "A baker must be named"], minlength: 2}, 
	img: {type: String, required: [true, "We need a cake picture"]},
	
	rating: [RateSchema],
	// rating: {type: Number, required: [true, "Cakes must needs be rated"]},
	completed: {type: Boolean, default: false} //this line is used for when updating
}, {timestamps: true});

module.exports = mongoose.model('cakes', CakeSchema) //change the collection for the schema and use the rename from above