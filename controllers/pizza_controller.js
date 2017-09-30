var db = require("../models");
module.exports = function(app) {

  app.get('/', function(req, res) {
    db.Pizzatable.findAll({})
      .then(function(data) {
        var pizzaObject = {
          pizza: data
        }
        res.render("index", pizzaObject);
      })
  });

  app.post('/', function(req, res) {
    // console.log(req.body);
    db.Pizzatable.create({
      pizza_name: req.body.pizza,
      toppings: req.body.toppings
    }).then(function() {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.Pizzatable.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function() {
        res.redirect("/");
      })
  });
  app.delete("/:id", function(req, res) {
    // console.log(req.body);
    db.Pizzatable.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function() {
        res.redirect("/");
      })
  });

  app.get('*', function(req, res) {
    res.render("index");
  })
}