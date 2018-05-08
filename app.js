const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb= require('mongodb');
const mongoose= require('mongoose');
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

FoodStore=require('./models/foodstore');

// Connect to Mongoose
//mongodb.connect('mongodb://localhost:3000/foodstore');
mongoose.connect('mongodb://am1:am1@ds016098.mlab.com:16098/foodstore');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})
//var db = mongodb.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/foodstore');
});

//get
app.get('/api/foodstore', (req, res) => {
	FoodStore.getFoodStore((err, foods) => {
		if(err){
			throw err;
		}
		res.json(foods);
	});
});


//get by id
app.get('/api/foodstore/:_id', (req, res) => {
	FoodStore.getFoodStoreById(req.params._id, (err, food) => {
		if(err){
			throw err;
		}
		res.json(food);
	});
});

//add by id
app.post('/api/foodstore', (req, res) => {
	var food = req.body;
	FoodStore.addFoodStore(food, (err, food) => {
		if(err){
			throw err;
		}
		res.json(food);
	});
});

//update by id
app.put('/api/foodstore/:_id', (req, res) => {
	var id = req.params._id;
	var food = req.body;
	FoodStore.updateFoodStore(id, food, {}, (err, food) => {
		if(err){
			throw err;
		}
		res.json(food);
	});
});


//remove by id
app.delete('/api/foodstore/:_id', (req, res) => {
	var id = req.params._id;
	FoodStore.removeFoodStore(id, (err, food) => {
		if(err){
			throw err;
		}
		res.json(food);
	});
});

app.listen(process.env.PORT||3000);
console.log('Running on port 3000...');
