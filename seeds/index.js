const mongoose = require('mongoose');
const cities = require('./cities')
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Campground.deleteMany({});
     await c.save();
}

seedDB();
