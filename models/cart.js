module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      author_name: DataTypes.STRING,
      title: DataTypes.STRING,
      quantity: DataTypes.STRING,
      book_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    })
    return Cart;
  }
  