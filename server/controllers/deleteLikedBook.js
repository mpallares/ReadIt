const Book = require('../models/Schema');

async function deleteLikedBook(req, res) {
  try {
    if (req.body.liked === true) {
      const deletedBook = await Book.update({
        liked: false,
      });
      res.status(401)
      res.send(deletedBook)
    }
  } catch (err) {
    res.status(400);
    res.send(err);
  }
}

module.exports = deleteLikedBook
