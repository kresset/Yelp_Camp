var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{name: "salmon creek", 
	 image: "https://live.staticflickr.com/2110/2507719361_ef69a3710c_b.jpg",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}, 
 	{name: "Granite hill", 
	 image: "https://live.staticflickr.com/3173/2355044436_a4a8d605b5_b.jpg",
	description: "Tough climb but worth the view!"}, 
 	{name: "Mountain goats rest", 
	 image: "https://api.creativecommons.engineering/v1/thumbs/79b30574-0b48-4174-8f3b-e7fe80be769b",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
	{name: "salmon creek", 
	 image: "https://live.staticflickr.com/2110/2507719361_ef69a3710c_b.jpg",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}, 
 	{name: "Granite hill", 
	 image: "https://live.staticflickr.com/3173/2355044436_a4a8d605b5_b.jpg",
	description: "Let me tell you!"}, 
 	{name: "Mountain goats rest",
	 image: "https://api.creativecommons.engineering/v1/thumbs/79b30574-0b48-4174-8f3b-e7fe80be769b",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
]

function seedDB(){
// 	Remove Campgrounds
	Campground.remove({}, function(err){
		if (err){
			console.log(err);
		} 
		console.log("Removed all campgrounds");
		
		data.forEach(function(seed){
			// Add campgrounds
			Campground.create(seed, function(err,campground){
				if(err){
					console.log(err)
				}
				else {
					console.log("Created campground")
					// Create a comment
					Comment.create({
						text: "This place is great but wish there was no wifi",
						author: "Homer"
					}, function(err, comment){
						if(err){
							console.log(err);
						}
						else{
								campground.comments.push(comment);
								campground.save();
							console.log("created new comment")
						}
					})	
				}
			})
		})
	});

};

module.exports = seedDB;

// Create campgrounds
