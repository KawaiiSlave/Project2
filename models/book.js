module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    author_name: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    published_year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  })
  return Book;
}


