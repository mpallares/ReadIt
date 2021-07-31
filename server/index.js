require('dotenv').config();

const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./Router')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})