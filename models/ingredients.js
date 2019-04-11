const orm = require("../config/orm.js");

const ingredient = {
  all: function(cb) {
    orm.all("ingredients", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("ingredients", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("ingredients", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("ingredients", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = ingredient;