module.exports = function(sequelize, DataTypes) {
  var Books = sequelize.define("Books", {
    author_name: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    published_year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  })
  return Books;
}


