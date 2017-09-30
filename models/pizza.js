module.exports = function(sequelize, DataTypes) {
  var Pizzatable = sequelize.define("pizzaCreation", {
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1-50]
      }
    },
    toppings: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1-100]
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      
    }
  });
  return Pizzatable;
};