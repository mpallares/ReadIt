const express = require('express'); 
const router = express.Router()
const getLikedBooks = require('./controllers/getLikedBooks')
const  deleteLikedBook = require ('./controllers/deleteLikedBook')
const postBook = require('./controllers/postBook')


router.get('/books', getLikedBooks)

router.post('/books', postBook)

router.put('/books', deleteLikedBook)

module.exports = router