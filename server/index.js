require('dotenv').config();
const Sequelize = require('sequelize')
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./Router')

const sequelize = new Sequelize('read', 'mariapallareslara', "'", {
  host: 'localhost',
  dialect: 'postgres'
});

async function authenticate () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticate()


const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = sequelize