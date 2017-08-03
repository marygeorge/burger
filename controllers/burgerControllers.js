var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/addNewBurger", function(req, res) {
  var b=req.body.bName;
  burger.create(b,function(data){
    var newB={
      burger:data
    }
    res.redirect("/");
  })
});

router.put("/:id", function(req, res) {
  var id = req.params.id;
  burger.update(id, function() {
    res.redirect("/");
  });
});

router.put("/delete/:id", function(req, res) {
  var id = req.params.id;
  burger.delete(id, function() {
    res.redirect("/");
  });
});


module.exports=router;