var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create:function(tableInput,BurgerName,cb){
    var queryString="Insert into ??(name,eaten)values(?,0)";
    connection.query(queryString,[tableInput,BurgerName],function(err,result){
      if(err){  throw(err)}
      cb(result);
    });
  },

  update:function(tableInput,id,cb){
    var queryString="update  ?? set eaten=1 where id=?";
    connection.query(queryString,[tableInput,id],function(err,result){
      if(err){  throw(err)}
      cb(result);
    });
  },
  delete:function(tableInput,id,cb){
    console.log("id ti delete: "+id);
    var queryString="delete from  ?? where id=?";
    connection.query(queryString,[tableInput,id],function(err,result){
      if(err){  throw(err)}
      cb(result);
    });
  }
}
  module.exports = orm;