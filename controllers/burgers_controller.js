const express = require('express')

const router = express.Router()

const burger = require('../models/burger.js')

router.get('/', function(req,res){
    burger.all(function(data){
        const handlebars = {
            burgers : data
        }
        res.render("index", handlebars)
    })
})

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    
        res.json(result);
    });
})

router.put("/api/burgers/:id", function(req,res){
    const identifier = "id=" + req.params.id

    burger.update({devoured: req.body.devoured}, identifier, function(result) {
        if (result.changedRows == 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

router.delete("/api/burgers/:id", function(req, res) {
    const identifier = "id=" + req.params.id
  
    burger.delete(identifier, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router