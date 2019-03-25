const express = require('express')

const router = express.Router()

const order = require('../models/orders.js')

router.get('/', function(req,res){
    order.all(function(data){
        const handlebars = {
            orders : data
        }
        res.render("index", handlebars)
    })
})

router.post("/api/orders", function(req, res) {
    order.create(["dish", "delivered"], [req.body.name, req.body.delivered], function(result) {
    
        res.json(result);
    });
})

router.put("/api/orders/:id", function(req,res){
    const identifier = "id=" + req.params.id

    order.update({delivered: req.body.delivered}, identifier, function(result) {
        if (result.changedRows == 0) {
            console.log(result)

        } else {
            res.status(200).end();
        }
    })
})

router.put("/api/multiple/:id", function(req,res){
    const identifier = "id=" + req.params.id

    order.update({dish: req.body.dish}, identifier, function(result) {
        if (result.changedRows == 0) {
            console.log(result)

        } else {
            res.status(200).end();
        }
    })
})

router.delete("/api/orders/:id", function(req, res) {
    const identifier = "id=" + req.params.id
  
    order.delete(identifier, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router