const orm = require("../config/orm.js");

const comments = {
  all: function(cb) {
    orm.all("comments", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("comments", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("comments", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("comments", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = comments;