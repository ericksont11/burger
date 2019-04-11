const orm = require("../config/orm.js");

const order = {
  all: function(cb) {
    orm.all("orders", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("orders", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("orders", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("orders", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = order;