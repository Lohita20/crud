const mongoose = require('mongoose');


const foodstoreSchema = mongoose.Schema({
	item:{
		type: String,
		required: true
	},
	cuisine:{
		type: String,
		required: true
	},
	
	
	type:{
		type: String,
        required: true
	},
	cost:{
		type: String,
        required: true
	},
	pic:{
		type: String
	},
	url:{
		type: String    
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const foodstore = module.exports = mongoose.model('foodstore', foodstoreSchema);


module.exports.getFoodStore = (callback, limit) => {
	foodstore.find(callback).limit(limit);
}


module.exports.getFoodStoreById = (id, callback) => {
	foodstore.findById(id, callback);
}


module.exports.addFoodStore = (food, callback) => {
	foodstore.create(food, callback);
}


module.exports.updateFoodStore = (id, food, options, callback) => {
	var query = {_id: id};
	var update = {
		item: food.item,
		cuisine: food.cuisine,
		
		type: food.type,
		cost: food.cost,
		pic: food.pic,
		url: food.url
	}
	foodstore.findOneAndUpdate(query, update, options, callback);
}


module.exports.removeFoodStore = (id, callback) => {
	var query = {_id: id};
	foodstore.remove(query, callback);
}
