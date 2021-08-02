const { DataTypes} = require('sequelize');
const sequelize = require ('../index')

const Book = sequelize.define('book', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  id: DataTypes.STRING,
  liked: DataTypes.BOOLEAN,
  publishedDate: DataTypes.STRING
});

module.exports = Book;
