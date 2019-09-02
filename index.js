const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')

app.get("/cars", (req, res) => {
  let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'))

  res.json(carData)
})

app.get('/drivers', (req, res) => {
  let driverData = JSON.parse(fs.readFileSync('drivers.json', 'utf-8'))

  res.json(driverData)
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})