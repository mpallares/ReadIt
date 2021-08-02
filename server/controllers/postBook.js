const Book = require('../models/Schema')

async function postBook (req, res) {
  
  const likedBooks = await Book.findAll({})

}

module.exports = postBook