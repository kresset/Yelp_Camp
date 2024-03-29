var express = require("express");
var router = express.Router();
var passport = require("passport")
var User = require("../models/user")

// Root route
router.get("/", function(req,res){
	res.render("landing");
});

// Show Register route
router.get("/register", function(req,res){
	res.redirect("register");
});

// Signup Logic
router.post("/register", function(req,res){
	var newUser = new User({username: req.body.username})
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			req.flash("error", err.message);
			return res.render('register');
		}
		passport.authenticate("local")(req,res,function(){
			req.flash("success", "Welcome to YelpCamp" + user.username)
			res.redirect("/campgrounds");
		});
	});
				  
});

// Login Route
router.get("/login", function(req,res){
	res.render("login");
});

// Login Logic
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
	}), function(req,res){
	res.send("loginlogic happening here");
});

// Logout route
router.get("/logout", function(req,res){
	req.logout();
	req.flash("success", "You have successfully logged out");
	res.redirect("/campgrounds");
})


module.exports = router;