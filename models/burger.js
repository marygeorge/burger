var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(bName, cb) {
    orm.create("burgers", bName, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete("burgers", id, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
