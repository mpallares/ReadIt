const Book = require('../models/Schema');

async function getLikedBooks(req, res) {
  try {
    const likedBooks = await Book.findAll({
      where: {
        liked: true,
      },
    });
    res.status(400);
    res.send(likedBooks);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error);
  }
}

module.exports = getLikedBooks;
